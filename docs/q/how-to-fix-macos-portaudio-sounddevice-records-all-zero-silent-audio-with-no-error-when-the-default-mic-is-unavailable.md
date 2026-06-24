# how to fix macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable

Known fix landing page for an exact problem query.

Pit ID: macos-portaudio-silent-zero-capture-unavailable-default-input
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-macos-portaudio-sounddevice-records-all-zero-silent-audio-with-no-error-when-the-default-mic-is-unavailable.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/39

## Fast Answer

- Problem: multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌')
- Root cause: With the lid closed (clamshell), the built-in MacBook mic is physically unavailable but is still enumerated AND still selected as the default input device.
- Fix first: Diagnose by measuring the recorded level, not by trusting the API: 0 == silent capture.
- Verify: After pinning to the Studio Display mic, measure the recorded peak and run ASR.

## Queries This Answers

- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable fix
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable root cause
- how to fix macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
- sounddevice silent audio no error default mic unavailable
- sounddevice silent audio no error default mic unavailable fix
- default mic unavailable all zero silent audio no error sounddevice
- default mic unavailable all zero silent audio no error sounddevice fix
- macos all zero silent default mic unavailable
- macos all zero silent default mic unavailable fix
- macos all zero silent sounddevice
- macos all zero silent sounddevice fix
- sounddevice single junk token 2s clip stray korean
- sounddevice single junk token 2s clip stray korean fix
- clip stray korean speech transcribes single junk token 2s sounddevice
- clip stray korean speech transcribes single junk token 2s sounddevice fix
- multi second speech transcribes clip stray korean
- multi second speech transcribes clip stray korean fix
- multi second speech transcribes sounddevice
- multi second speech transcribes sounddevice fix
- multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- how to fix multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') root cause
- sounddevice multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
