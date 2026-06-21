# PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener

Pit ID: portaudio-stream-close-blocks-hotkey-callback-thread
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/tooling/portaudio-stream-close-blocks-hotkey-callback-thread.md

## Summary

A push-to-talk daemon can look hung (process alive, hotkey dead) because PortAudio stop()/close() was called inline in the pynput key-release callback; on a flaky device that blocks and wedges the single listener thread. Move audio teardown and processing to a background thread and keep the callback non-blocking.

## Affected Tools

- portaudio
- pynput
- voice-to-claude

## Tags

- macos
- audio
- portaudio
- pynput
- threading
- hotkey
- deadlock
- voice

## Symptoms

- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- daemon status still reports Running but pressing the hotkey does nothing
- only a daemon restart recovers it

## Environment

- os: macOS
- arch: Apple Silicon
- language: Python
- runtime: sounddevice + PortAudio, pynput global hotkey Listener
- versions: {"python":"3.12"}
- constraints: display-connected (Studio Display) mic, single pynput listener thread

## Root Cause

- stop()/close() of a PortAudio stream on a flaky/display-connected device can block for a long time.
- It was being called inline inside the pynput key-release callback, which runs on the single listener thread.
- The blocking call wedged that thread, so the global hotkey stopped firing and the whole daemon appeared hung even though the process stayed alive.

## Fix

1. Move recorder.stop() (the PortAudio stream.stop()/close() calls) AND all downstream processing off the pynput key-release callback thread into a background thread.
2. Make the callback only spawn the worker and return immediately, so the listener thread is never blocked.

## Verification

- Use the daemon heavily across multiple windows after the change. Expected: Audio-device stalls no longer freeze the hotkey.

## Sources

- voice-to-claude daemon debugging session (local-session): local-session:2026-06-21

## Workarounds

- Add a watchdog that restarts the listener if the hotkey stops responding.

## Anti-patterns

- Doing blocking audio teardown or processing inline in a global-hotkey callback.
- Trusting 'process is Running' as proof the hotkey listener is still alive.

