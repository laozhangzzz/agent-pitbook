# claude-code UV_CACHE_DIR fix

Known fix landing page for an exact problem query.

Pit ID: uv-cache-outside-workspace-sandbox
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/claude-code-uv-cache-dir-fix.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/38

## Fast Answer

- Problem: uv run or uv sync fails with permission or sandbox filesystem errors
- Root cause: uv defaults to cache or interpreter directories outside the agent's writable roots.
- Fix first: Set UV_CACHE_DIR to a workspace-local directory.
- Verify: Run a small uv command with local paths.

## Queries This Answers

- uv fails in a managed workspace because cache or Python install paths are outside writable roots
- uv fails in a managed workspace because cache or Python install paths are outside writable roots fix
- uv fails in a managed workspace because cache or Python install paths are outside writable roots root cause
- how to fix uv fails in a managed workspace because cache or Python install paths are outside writable roots
- UV_CACHE_DIR
- UV_CACHE_DIR fix
- codex UV_CACHE_DIR
- codex UV_CACHE_DIR fix
- claude-code UV_CACHE_DIR
- claude-code UV_CACHE_DIR fix
- gemini UV_CACHE_DIR
- gemini UV_CACHE_DIR fix
- qwen-code UV_CACHE_DIR
- qwen-code UV_CACHE_DIR fix
- UV_PYTHON_INSTALL_DIR
- UV_PYTHON_INSTALL_DIR fix
- codex UV_PYTHON_INSTALL_DIR
- codex UV_PYTHON_INSTALL_DIR fix
- claude-code UV_PYTHON_INSTALL_DIR
- claude-code UV_PYTHON_INSTALL_DIR fix
- gemini UV_PYTHON_INSTALL_DIR
- gemini UV_PYTHON_INSTALL_DIR fix
- qwen-code UV_PYTHON_INSTALL_DIR
- qwen-code UV_PYTHON_INSTALL_DIR fix

