# voice-to-claude a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix

Known fix landing page for an exact problem query.

Pit ID: portaudio-stream-close-blocks-hotkey-callback-thread
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/voice-to-claude-a-push-to-talk-dictation-daemon-intermittently-goes-unresponsive-after-switching-windows-and-dictating-f.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/40

## Fast Answer

- Problem: a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- Root cause: stop()/close() of a PortAudio stream on a flaky/display-connected device can block for a long time.
- Fix first: Move recorder.stop() (the PortAudio stream.stop()/close() calls) AND all downstream processing off the pynput key-release callback thread into a background thread.
- Verify: Use the daemon heavily across multiple windows after the change.

## Queries This Answers

- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener fix
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener root cause
- how to fix PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- how to fix a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating root cause
- portaudio a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- portaudio a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix
- pynput a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- pynput a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix
- voice-to-claude a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- voice-to-claude a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix
- the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- how to fix the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line root cause
- portaudio the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- portaudio the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line fix
- pynput the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- pynput the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line fix
- voice-to-claude the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- voice-to-claude the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line fix
- daemon status still reports Running but pressing the hotkey does nothing
- how to fix daemon status still reports Running but pressing the hotkey does nothing

