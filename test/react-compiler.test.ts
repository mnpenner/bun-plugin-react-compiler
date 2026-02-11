import { describe, expect, it } from "bun:test";
import { $ } from "bun";
import path from "node:path";
import { reactCompiler } from "../src/react-compiler";

const entrypoint = path.join(import.meta.dir, "fixtures", "index.tsx");
const external = ["react", "react/jsx-runtime", "react/jsx-dev-runtime", "react/compiler-runtime"];

async function build(withPlugin: boolean) {
  const result = await Bun.build({
    entrypoints: [entrypoint],
    format: "esm",
    target: "browser",
    minify: false,
    external,
    plugins: withPlugin ? [reactCompiler()] : [],
  });

  expect(result.success).toBe(true);
  expect(result.outputs.length).toBeGreaterThan(0);
  const firstOutput = result.outputs[0];
  if (!firstOutput) {
    throw new Error("Expected Bun.build to return at least one output artifact");
  }

  return firstOutput.text();
}

describe("reactCompiler plugin", () => {
  it("injects React compiler runtime output when enabled", async () => {
    const [withoutPlugin, withPlugin] = await Promise.all([build(false), build(true)]);

    expect(withoutPlugin).not.toContain("react/compiler-runtime");
    expect(withoutPlugin).not.toContain("_c(");

    expect(withPlugin).toContain('from "react/compiler-runtime"');
    expect(withPlugin).toContain("_c(");
  });

  it("loads as a serve.static plugin from bunfig.toml", async () => {
    const fixtureDir = path.join(import.meta.dir, "serve-static-fixture");
    const run = await $`cd ${fixtureDir} && timeout 5s bun index.html`.nothrow();
    const stderr = new TextDecoder().decode(run.stderr);

    expect(stderr).not.toContain("is not a valid bundler plugin");
    expect(stderr).not.toContain("setup() is missing");
  });
});
