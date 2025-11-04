import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['./src/react-compiler.ts'],
    // target: 'node20',  // https://nodejs.org/en/about/previous-releases
    platform: 'node',
    format: ['esm'],
    exports: true,
    dts: true,
})
