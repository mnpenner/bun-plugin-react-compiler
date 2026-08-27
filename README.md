# bun-plugin-react-compiler

[React Compiler](https://react.dev/learn/react-compiler) for [Bun's Bundler](https://bun.com/docs/bundler).

## Not Maintained

This is built into Bun 1.4 now: https://bun.com/blog/bun-v1.4#built-in-react-compiler

## Usage

```ts
import {build} from "bun";
import {reactCompiler} from "bun-plugin-react-compiler";

await Bun.build({
    entrypoints: ["./index.tsx"],
    outdir: "./out",
    plugins: [
        reactCompiler()
    ],
});
```

## Bunfig `serve.static` plugin usage

```toml
[serve.static]
plugins = ["bun-plugin-react-compiler"]
```
