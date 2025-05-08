# 🖥️ buy-console

**Command-line interface (CLI) and REPL**

This tool gives power users, developers, and bots an expressive terminal for managing MCPs, agents, modules, and registry data — fully offline-capable, programmable, and pixel-perfect.

---

## ✨ Features

- 📦 MCP registry browser
- 🧠 Agent interaction via CLI or prompts
- 🔄 On-chain or MCP module data fetch
- 💬 Text-mode interface (TUI) + REPL
- 🪄 Tab autocomplete + command history
- 🧱 Works with stdin/out, great for bots

---

## 🧰 Usage Modes

- **CLI** – Run single commands (ideal for automation/scripts)
- **REPL** – Start interactive shell for long sessions
- **TUI** – Optional retro interface with pixel fonts

---

## 🧪 Example Commands

```bash
buy-console registry list
buy-console mcp inspect binance
buy-console agent run agent-123
buy-console query "select * from signal.mcp where symbol = 'ETH'"
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/buyproject/buy-console.git
cd buy-console
npm install
npm run cli
```

To enter REPL:

```bash
npm run repl
```

---

## 📁 Project Structure

```
/src
  /commands     → CLI commands (agent, mcp, registry)
  /shell        → REPL + autocomplete + history
  /lib          → MCP client, parser, utils
```

---

## 📡 Supported Commands

| Command            | Description                                |
|--------------------|--------------------------------------------|
| `registry list`    | Shows all known MCP modules                |
| `mcp inspect`      | Show info and schema for an MCP module     |
| `agent run`        | Executes an agent from config              |
| `query`            | Runs low-level MCP query DSL               |

---

## 🧙 Prompt REPL

Run `npm run repl` and try:

```
> list mcp
> agent run vote-bot
> set default.chain = "optimism"
```

---

## 🔮 Future Features

- Pixel-styled terminal UI with animated glyphs
- LLM prompt wrapper (`/ask agent`)
- WASM version for in-browser emulation
