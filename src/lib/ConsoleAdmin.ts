export class ConsoleAdmin {
  constructor() {}

  printStats() {
    console.log("📊 MCP Registry Stats");
    console.table([
      { name: "binance.mcp", score: 94, uptime: "99.9%" },
      { name: "walletkit.mcp", score: 89, uptime: "99.5%" }
    ]);
  }

  checkProposals() {
    const proposals = this.loadProposals();

    proposals.forEach(p => {
      console.log(\`📬 Pending Proposal: "\${p.title}" by \${p.author}\`);
      if (p.type === "module_deprecate") {
        console.warn("⚠️  This proposal affects an active MCP. Review required.");
      }
    });
  }

  loadProposals() {
    return [
      { title: "Add staking rewards", author: "0xabc...", type: "governance" },
      { title: "Deprecate old DEX MCP", author: "0xdef...", type: "module_deprecate" }
    ];
  }
}