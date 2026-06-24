# stream stop close hotkey freeze global listener fix

Known fix landing page for an exact problem query.

Pit ID: portaudio-stream-close-blocks-hotkey-callback-thread
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/stream-stop-close-hotkey-freeze-global-listener-fix.html
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
- portaudio close hotkey callback thread freeze global listener
- portaudio close hotkey callback thread freeze global listener fix
- freeze global listener stream stop close hotkey callback thread portaudio
- freeze global listener stream stop close hotkey callback thread portaudio fix
- stream stop close hotkey freeze global listener
- stream stop close hotkey freeze global listener fix
- stream stop close hotkey portaudio
- stream stop close hotkey portaudio fix
- portaudio intermittently goes unresponsive after switching windows dictating
- portaudio intermittently goes unresponsive after switching windows dictating fix
- switching windows dictating dictation daemon intermittently goes unresponsive after portaudio
- switching windows dictating dictation daemon intermittently goes unresponsive after portaudio fix
- push talk dictation daemon switching windows dictating
- push talk dictation daemon switching windows dictating fix
- push talk dictation daemon portaudio
- push talk dictation daemon portaudio fix
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- how to fix a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating root cause
- portaudio a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
