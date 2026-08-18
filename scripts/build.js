const { spawnSync } = require("node:child_process");

const existing = process.env.NODE_OPTIONS || "";
const heapOption = "--max-old-space-size=4096";
const nodeOptions = existing.includes("--max-old-space-size")
  ? existing
  : `${existing} ${heapOption}`.trim();

const command = process.platform === "win32" ? "next.cmd" : "next";

const result = spawnSync(command, ["build"], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    NODE_OPTIONS: nodeOptions,
  },
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
