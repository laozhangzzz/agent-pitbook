---
id: portaudio-stream-close-blocks-hotkey-callback-thread
title: PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [macos, audio, portaudio, pynput, threading, hotkey, deadlock, voice]
affected_tools: [portaudio, pynput, voice-to-claude]
---

# PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener

## Summary

A push-to-talk daemon can appear hung — process alive, hotkey dead — because PortAudio `stop()`/`close()` was called inline inside the `pynput` key-release callback. On a flaky audio device that call can block for a long time, wedging the single listener thread so no further hotkeys fire. Do audio teardown and processing on a background thread; keep the callback non-blocking.

## Symptoms

- A push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating.
- The log is stuck at `Recording stopped, processing...` with no following `Audio duration` line.
- `daemon status` still reports Running, but pressing the hotkey does nothing.
- Only a daemon restart recovers it.

## Root Cause

`stop()`/`close()` of a PortAudio stream on a flaky/display-connected device can block for a long time. It was being called inline inside the `pynput` key-release callback, which runs on the single listener thread. The blocking call wedged that thread, so the global hotkey stopped firing and the whole daemon appeared hung even though the process stayed alive.

## Fix

1. Move `recorder.stop()` (the PortAudio `stream.stop()`/`close()` calls) AND all downstream processing off the `pynput` key-release callback thread into a background thread.
2. The callback now only spawns the worker and returns immediately, so the listener thread is never blocked.

## Verification

After the change, audio-device stalls no longer freeze the hotkey across heavy multi-window use.

## Anti-Patterns

- Doing blocking audio teardown or processing inline in a global-hotkey callback.
- Trusting "process is Running" as proof the hotkey listener is still alive.

<!-- pit-record
{
  "id": "portaudio-stream-close-blocks-hotkey-callback-thread",
  "title": "PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener",
  "summary": "A push-to-talk daemon can look hung (process alive, hotkey dead) because PortAudio stop()/close() was called inline in the pynput key-release callback; on a flaky device that blocks and wedges the single listener thread. Move audio teardown and processing to a background thread and keep the callback non-blocking.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["macos", "audio", "portaudio", "pynput", "threading", "hotkey", "deadlock", "voice"],
  "affected_tools": ["portaudio", "pynput", "voice-to-claude"],
  "symptoms": [
    "a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating",
    "the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line",
    "daemon status still reports Running but pressing the hotkey does nothing",
    "only a daemon restart recovers it"
  ],
  "environment": {
    "os": "macOS",
    "arch": "Apple Silicon",
    "language": "Python",
    "runtime": "sounddevice + PortAudio, pynput global hotkey Listener",
    "versions": {"python": "3.12"},
    "constraints": ["display-connected (Studio Display) mic", "single pynput listener thread"]
  },
  "root_cause": [
    "stop()/close() of a PortAudio stream on a flaky/display-connected device can block for a long time.",
    "It was being called inline inside the pynput key-release callback, which runs on the single listener thread.",
    "The blocking call wedged that thread, so the global hotkey stopped firing and the whole daemon appeared hung even though the process stayed alive."
  ],
  "fix": [
    {
      "step": "Move recorder.stop() (the PortAudio stream.stop()/close() calls) AND all downstream processing off the pynput key-release callback thread into a background thread."
    },
    {
      "step": "Make the callback only spawn the worker and return immediately, so the listener thread is never blocked."
    }
  ],
  "verification": [
    {
      "method": "Use the daemon heavily across multiple windows after the change.",
      "expected": "Audio-device stalls no longer freeze the hotkey."
    }
  ],
  "workarounds": [
    "Add a watchdog that restarts the listener if the hotkey stops responding."
  ],
  "anti_patterns": [
    "Doing blocking audio teardown or processing inline in a global-hotkey callback.",
    "Trusting 'process is Running' as proof the hotkey listener is still alive."
  ],
  "source_links": [
    {
      "title": "voice-to-claude daemon debugging session",
      "type": "local-session",
      "locator": "local-session:2026-06-21"
    }
  ],
  "related": ["macos-portaudio-silent-zero-capture-unavailable-default-input", "pynput-mixed-cjk-ascii-type-out-of-order-macos"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Single local-session observation."]
  }
}
-->
