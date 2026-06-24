# pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste

Known fix landing page for an exact problem query.

Pit ID: pynput-mixed-cjk-ascii-type-out-of-order-macos
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/pynput-controller-type-scrambles-mixed-chinese-english-text-on-macos-use-clipboard-paste.html
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
- ASCII fix
- pynput ASCII
- pynput ASCII fix
- voice-to-claude ASCII
- voice-to-claude ASCII fix
- injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- how to fix injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped root cause
- pynput injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- pynput injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped fix
- voice-to-claude injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- voice-to-claude injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped fix
- pure-English and pure-Chinese strings inject fine
- how to fix pure-English and pure-Chinese strings inject fine
- pure-English and pure-Chinese strings inject fine root cause
- pynput pure-English and pure-Chinese strings inject fine
- pynput pure-English and pure-Chinese strings inject fine fix
- voice-to-claude pure-English and pure-Chinese strings inject fine
- voice-to-claude pure-English and pure-Chinese strings inject fine fix
- only mixed CJK+ASCII text scrambles

