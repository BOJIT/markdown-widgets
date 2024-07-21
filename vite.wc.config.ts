import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
// import { resolve } from 'path';
import glob from 'fast-glob';

const files = await glob(['src/lib/*.wc.svelte']);
console.log(files);

const vendorModules = [
    "svelte",
    // "@sveltejs/vite-plugin-svelte",
];

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                bundleA: 'src/lib/cad-viewer.wc.svelte',
                bundleB: 'src/lib/wavedrom-viewer.wc.svelte',
            },
            output: {
                inlineDynamicImports: false,
                // assetFileNames: "components/[name].[ext]",
                chunkFileNames: "[name].js",
                manualChunks: {
                    vendor: vendorModules,
                },
            },
        },
        outDir: 'dist-wc'
    },
    plugins: [svelte()]
});
