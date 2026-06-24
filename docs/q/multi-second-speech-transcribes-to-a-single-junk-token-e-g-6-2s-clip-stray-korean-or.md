# multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌

Known fix landing page for an exact problem query.

Pit ID: macos-portaudio-silent-zero-capture-unavailable-default-input
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/multi-second-speech-transcribes-to-a-single-junk-token-e-g-6-2s-clip-stray-korean-or.html
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
- multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- how to fix multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') root cause
- sounddevice multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- sounddevice multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') fix
- portaudio multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- portaudio multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') fix
- voice-to-claude multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- voice-to-claude multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') fix
- the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- how to fix the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip) root cause
- sounddevice the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- sounddevice the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip) fix
- portaudio the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- portaudio the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip) fix
- voice-to-claude the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- voice-to-claude the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip) fix
- no exception: sd.InputStream opens normally and its callback delivers all-zero frames
- how to fix no exception: sd.InputStream opens normally and its callback delivers all-zero frames

