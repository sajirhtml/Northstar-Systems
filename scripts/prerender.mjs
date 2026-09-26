import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const serverModule = await import(pathToFileURL(resolve(projectRoot, "dist/server/server.js")));
const handler = serverModule.default;

if (!handler || typeof handler.fetch !== "function") {
  throw new Error("The production server handler could not be loaded.");
}

const response = await handler.fetch(new Request("https://northstar.local/"), {}, {});
if (!response.ok) {
  throw new Error(`Prerendering / failed with status ${response.status}.`);
}

const outputPath = resolve(projectRoot, "dist/client/index.html");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, await response.text(), "utf8");
console.log(`Prerendered / to ${outputPath}`);
