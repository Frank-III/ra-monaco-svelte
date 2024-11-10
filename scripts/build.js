import { cpSync, mkdirSync } from "fs";
import { join } from "path";

mkdirSync(join("wasm_demo"), { recursive: true });

cpSync(join("ra-wasm", "pkg"), join("wasm_demo"), {
  recursive: true
})