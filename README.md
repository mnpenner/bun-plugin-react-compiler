# bun-plugin-react-compiler

[React Compiler](https://react.dev/learn/react-compiler) for [Bun's Bundler](https://bun.com/docs/bundler).

## Usage

```ts
import {build} from "bun";
import reactCompiler from "bun-plugin-react-compiler";

await Bun.build({
    entrypoints: ["./index.tsx"],
    outdir: "./out",
    plugins: [
        reactCompiler()
    ],
});
```
