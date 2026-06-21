---
id: macos-portaudio-silent-zero-capture-unavailable-default-input
title: macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [macos, audio, portaudio, sounddevice, silent-capture, microphone, clamshell, voice]
affected_tools: [sounddevice, portaudio, voice-to-claude]
---

# macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable

## Summary

A voice/audio pipeline can fail completely silently: PortAudio (via sounddevice) opens an input stream on a physically-unavailable default mic, raises no error, and delivers all-zero buffers. Downstream ASR then "hallucinates" junk tokens from pure silence. Diagnose by measuring the recorded level, and pin the recorder to a known-good device instead of the system default.

## Symptoms

- Multi-second speech transcribes to a single junk token (e.g. a 6.2s clip → `我。`, stray Korean `그.`, or `谷歌`).
- The saved WAV has peak amplitude 0 and RMS 0 — all-zero samples across the whole clip.
- No exception: `sd.InputStream` opens normally and its callback delivers all-zero frames.
- The ASR model looks broken, but it is being fed pure silence.

## Root Cause

With the lid closed (clamshell mode), the built-in MacBook mic is physically unavailable but is still enumerated AND still selected as the default input device. PortAudio opens the stream successfully and silently delivers all-zero buffers instead of erroring, so the failure is invisible at the API layer — every downstream stage "succeeds" on silence.

## Fix

1. Diagnose by measuring the recorded level, not by trusting the API: `np.abs(samples).max()` — `0` means silent capture.
2. Enumerate input devices and record a 1s test from each (`sd.rec(..., device=idx)`). The built-in mic returned 0 while the Studio Display mic and a Bluetooth mic returned real signal.
3. Pin the recorder to a working device (match by name substring) instead of relying on the system default input.

## Verification

After pinning to the `Studio Display` mic, the recorded peak was ~5600 and transcription returned correct text.

## Anti-Patterns

- Trusting that a successfully-opened audio stream is actually capturing sound.
- Blaming the ASR model for garbage output when the input is all-zero silence.

<!-- pit-record
{
  "id": "macos-portaudio-silent-zero-capture-unavailable-default-input",
  "title": "macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable",
  "summary": "PortAudio (via sounddevice) can open an input stream on a physically-unavailable default mic, raise no error, and deliver all-zero buffers; downstream ASR then hallucinates junk tokens from silence. Diagnose by measuring np.abs(samples).max(); pin the recorder to a known-good device instead of the system default.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["macos", "audio", "portaudio", "sounddevice", "silent-capture", "microphone", "clamshell", "voice"],
  "affected_tools": ["sounddevice", "portaudio", "voice-to-claude"],
  "symptoms": [
    "multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌')",
    "the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip)",
    "no exception: sd.InputStream opens normally and its callback delivers all-zero frames",
    "the ASR model looks broken but is being fed pure silence"
  ],
  "environment": {
    "os": "macOS",
    "arch": "Apple Silicon",
    "language": "Python",
    "runtime": "sounddevice + PortAudio",
    "versions": {"python": "3.12", "darwin": "25.x"},
    "constraints": ["MacBook in clamshell mode docked to a Studio Display", "sherpa-onnx SenseVoice ASR downstream"]
  },
  "root_cause": [
    "With the lid closed (clamshell), the built-in MacBook mic is physically unavailable but is still enumerated AND still selected as the default input device.",
    "PortAudio opens the stream successfully and silently delivers all-zero buffers instead of erroring, so the failure is invisible at the API layer — every downstream stage 'succeeds' on silence."
  ],
  "fix": [
    {
      "step": "Diagnose by measuring the recorded level, not by trusting the API: 0 == silent capture.",
      "command": "np.abs(samples).max()"
    },
    {
      "step": "Enumerate input devices and record a 1s test from each; the built-in mic returned 0 while the Studio Display and Bluetooth mics returned real signal.",
      "command": "sd.rec(..., device=idx)"
    },
    {
      "step": "Pin the recorder to a working device (match by name substring) instead of relying on the system default input."
    }
  ],
  "verification": [
    {
      "method": "After pinning to the Studio Display mic, measure the recorded peak and run ASR.",
      "expected": "Recorded peak ~5600 and transcription returns correct text."
    }
  ],
  "workarounds": [
    "Select a known-good input device explicitly at startup rather than the OS default."
  ],
  "anti_patterns": [
    "Trusting that a successfully-opened audio stream is actually capturing sound.",
    "Blaming the ASR model for garbage output when the input is all-zero silence."
  ],
  "source_links": [
    {
      "title": "voice-to-claude daemon debugging session",
      "type": "local-session",
      "locator": "local-session:2026-06-21"
    }
  ],
  "related": ["portaudio-stream-close-blocks-hotkey-callback-thread"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Single local-session observation; device-name matching is machine-specific."]
  }
}
-->
