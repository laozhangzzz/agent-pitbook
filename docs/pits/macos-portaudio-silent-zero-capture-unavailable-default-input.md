# macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable

Pit ID: macos-portaudio-silent-zero-capture-unavailable-default-input
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/tooling/macos-portaudio-silent-zero-capture-unavailable-default-input.md

## Summary

PortAudio (via sounddevice) can open an input stream on a physically-unavailable default mic, raise no error, and deliver all-zero buffers; downstream ASR then hallucinates junk tokens from silence. Diagnose by measuring np.abs(samples).max(); pin the recorder to a known-good device instead of the system default.

## Affected Tools

- sounddevice
- portaudio
- voice-to-claude

## Tags

- macos
- audio
- portaudio
- sounddevice
- silent-capture
- microphone
- clamshell
- voice

## Symptoms

- multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌')
- the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip)
- no exception: sd.InputStream opens normally and its callback delivers all-zero frames
- the ASR model looks broken but is being fed pure silence

## Environment

- os: macOS
- arch: Apple Silicon
- language: Python
- runtime: sounddevice + PortAudio
- versions: {"python":"3.12","darwin":"25.x"}
- constraints: MacBook in clamshell mode docked to a Studio Display, sherpa-onnx SenseVoice ASR downstream

## Root Cause

- With the lid closed (clamshell), the built-in MacBook mic is physically unavailable but is still enumerated AND still selected as the default input device.
- PortAudio opens the stream successfully and silently delivers all-zero buffers instead of erroring, so the failure is invisible at the API layer — every downstream stage 'succeeds' on silence.

## Fix

1. Diagnose by measuring the recorded level, not by trusting the API: 0 == silent capture.

```bash
np.abs(samples).max()
```
2. Enumerate input devices and record a 1s test from each; the built-in mic returned 0 while the Studio Display and Bluetooth mics returned real signal.

```bash
sd.rec(..., device=idx)
```
3. Pin the recorder to a working device (match by name substring) instead of relying on the system default input.

## Verification

- After pinning to the Studio Display mic, measure the recorded peak and run ASR. Expected: Recorded peak ~5600 and transcription returns correct text.

## Sources

- voice-to-claude daemon debugging session (local-session): local-session:2026-06-21

## Workarounds

- Select a known-good input device explicitly at startup rather than the OS default.

## Anti-patterns

- Trusting that a successfully-opened audio stream is actually capturing sound.
- Blaming the ASR model for garbage output when the input is all-zero silence.

