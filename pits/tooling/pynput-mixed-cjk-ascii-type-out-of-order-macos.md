---
id: pynput-mixed-cjk-ascii-type-out-of-order-macos
title: pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [macos, pynput, text-injection, unicode, cjk, race-condition, clipboard, voice]
affected_tools: [pynput, voice-to-claude]
---

# pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste

## Summary

Injecting a mixed Chinese+English string with `pynput.keyboard.Controller.type()` on macOS produces reordered, interleaved output (English fragments shoved to the end, some CJK dropped). Pure-English and pure-Chinese strings work; only mixed CJK+ASCII scrambles. Inject via the clipboard (`pbcopy` + Cmd+V) instead, for an atomic insert.

## Symptoms

- Injecting `打开Claude Code，然后commit一下。` yields `打开ClaudeC，然后一下。odecomit` — characters reordered, English fragments (`ode`, `comit`) shoved to the end, some CJK chars dropped.
- Pure-English and pure-Chinese strings inject fine.
- Only mixed CJK+ASCII text scrambles.

## Root Cause

On macOS, pynput types CJK characters via synthesized Unicode events and ASCII via key events. The two dispatch paths have different timing and race each other, so a fast mixed-script string arrives interleaved / reordered.

## Fix

1. Switch text injection from per-character `keyboard.type()` to clipboard paste: copy the full string via `pbcopy`, then simulate Cmd+V.
2. This is an atomic insert with no per-character race.

## Verification

The same mixed Chinese+English sentence then injected intact and in correct order.

## Anti-Patterns

- Using `pynput` `Controller.type()` for mixed CJK+ASCII text on macOS.
- Adding per-character sleeps to "fix" ordering instead of switching to an atomic paste.

<!-- pit-record
{
  "id": "pynput-mixed-cjk-ascii-type-out-of-order-macos",
  "title": "pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste",
  "summary": "pynput.keyboard.Controller.type() on macOS scrambles mixed Chinese+English strings (reordered, English fragments shoved to the end, some CJK dropped) because CJK goes via synthesized Unicode events and ASCII via key events, and the two paths race. Inject via clipboard (pbcopy + Cmd+V) for an atomic insert.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["macos", "pynput", "text-injection", "unicode", "cjk", "race-condition", "clipboard", "voice"],
  "affected_tools": ["pynput", "voice-to-claude"],
  "symptoms": [
    "injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped",
    "pure-English and pure-Chinese strings inject fine",
    "only mixed CJK+ASCII text scrambles"
  ],
  "environment": {
    "os": "macOS",
    "arch": "Apple Silicon",
    "language": "Python",
    "runtime": "pynput.keyboard.Controller.type()",
    "versions": {"python": "3.12"},
    "constraints": ["text injection into a focused input box"]
  },
  "root_cause": [
    "On macOS pynput types CJK characters via synthesized Unicode events and ASCII via key events.",
    "The two dispatch paths have different timing and race each other, so a fast mixed-script string arrives interleaved / reordered."
  ],
  "fix": [
    {
      "step": "Switch text injection from per-character keyboard.type() to clipboard paste: copy the full string via pbcopy, then simulate Cmd+V.",
      "command": "pbcopy <<< \"$text\"; then synthesize Cmd+V"
    },
    {
      "step": "Rely on the atomic clipboard insert so there is no per-character race."
    }
  ],
  "verification": [
    {
      "method": "Inject the same mixed Chinese+English sentence after the change.",
      "expected": "It appears intact and in correct order."
    }
  ],
  "workarounds": [
    "Restore the previous clipboard contents after pasting if clobbering it is a concern."
  ],
  "anti_patterns": [
    "Using pynput Controller.type() for mixed CJK+ASCII text on macOS.",
    "Adding per-character sleeps to 'fix' ordering instead of switching to an atomic paste."
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
    "notes": ["Clipboard paste overwrites the clipboard; restore it if needed."]
  }
}
-->
