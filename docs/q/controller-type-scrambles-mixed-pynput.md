# controller type scrambles mixed pynput

Known fix landing page for an exact problem query.

Pit ID: pynput-mixed-cjk-ascii-type-out-of-order-macos
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/controller-type-scrambles-mixed-pynput.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/41

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
