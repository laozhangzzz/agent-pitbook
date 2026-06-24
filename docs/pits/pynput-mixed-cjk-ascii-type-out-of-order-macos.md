# pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste

Pit ID: pynput-mixed-cjk-ascii-type-out-of-order-macos
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/tooling/pynput-mixed-cjk-ascii-type-out-of-order-macos.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/41

## Summary

pynput.keyboard.Controller.type() on macOS scrambles mixed Chinese+English strings (reordered, English fragments shoved to the end, some CJK dropped) because CJK goes via synthesized Unicode events and ASCII via key events, and the two paths race. Inject via clipboard (pbcopy + Cmd+V) for an atomic insert.

## Fast Answer

- Problem: injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- Root cause: On macOS pynput types CJK characters via synthesized Unicode events and ASCII via key events.
- Fix first: Switch text injection from per-character keyboard.type() to clipboard paste: copy the full string via pbcopy, then simulate Cmd+V.
- Verify: Inject the same mixed Chinese+English sentence after the change.

## Queries This Answers

- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste fix
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste root cause
- how to fix pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput mixed chinese english text macos clipboard paste
- pynput mixed chinese english text macos clipboard paste fix
- macos clipboard paste type scrambles mixed chinese english text pynput
- macos clipboard paste type scrambles mixed chinese english text pynput fix
- controller type scrambles mixed macos clipboard paste
- controller type scrambles mixed macos clipboard paste fix
- controller type scrambles mixed pynput
- controller type scrambles mixed pynput fix
- pynput english fragments shoved end some cjk dropped
- pynput english fragments shoved end some cjk dropped fix
- some cjk dropped odecomit reordered english fragments shoved end pynput
- some cjk dropped odecomit reordered english fragments shoved end pynput fix
- injecting claude code commit some cjk dropped
- injecting claude code commit some cjk dropped fix
- injecting claude code commit pynput
- injecting claude code commit pynput fix
- ASCII fix
- pynput ASCII
- pynput ASCII fix
- voice-to-claude ASCII

## Common Search Queries

- pynput-mixed-cjk-ascii-type-out-of-order-macos
- pynput mixed cjk ascii type out of order macos
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste fix
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste root cause
- macos
- pynput
- text-injection
- unicode
- race-condition
- clipboard
- voice
- voice-to-claude
- injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- pure-English and pure-Chinese strings inject fine
- only mixed CJK+ASCII text scrambles
- On macOS pynput types CJK characters via synthesized Unicode events and ASCII via key events
- The two dispatch paths have different timing and race each other, so a fast mixed-script string arrives interleaved / reordered
- Using pynput Controller.type() for mixed CJK+ASCII text on macOS
- Adding per-character sleeps to 'fix' ordering instead of switching to an atomic paste
- Restore the previous clipboard contents after pasting if clobbering it is a concern
- voice-to-claude daemon debugging session
- how to fix pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput mixed chinese english text macos clipboard paste

## Affected Tools

- pynput
- voice-to-claude

## Tags

- macos
- pynput
- text-injection
- unicode
- cjk
- race-condition
- clipboard
- voice

## Symptoms

- injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- pure-English and pure-Chinese strings inject fine
- only mixed CJK+ASCII text scrambles

## Environment

- os: macOS
- arch: Apple Silicon
- language: Python
- runtime: pynput.keyboard.Controller.type()
- versions: {"python":"3.12"}
- constraints: text injection into a focused input box

## Root Cause

- On macOS pynput types CJK characters via synthesized Unicode events and ASCII via key events.
- The two dispatch paths have different timing and race each other, so a fast mixed-script string arrives interleaved / reordered.

## Fix

1. Switch text injection from per-character keyboard.type() to clipboard paste: copy the full string via pbcopy, then simulate Cmd+V.

```bash
pbcopy <<< "$text"; then synthesize Cmd+V
```
2. Rely on the atomic clipboard insert so there is no per-character race.

## Verification

- Inject the same mixed Chinese+English sentence after the change. Expected: It appears intact and in correct order.

## Sources

- voice-to-claude daemon debugging session (local-session): local-session:2026-06-21

## Workarounds

- Restore the previous clipboard contents after pasting if clobbering it is a concern.

## Anti-patterns

- Using pynput Controller.type() for mixed CJK+ASCII text on macOS.
- Adding per-character sleeps to 'fix' ordering instead of switching to an atomic paste.

