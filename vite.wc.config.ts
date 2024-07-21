import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'Components',
            fileName: 'components',
            formats: ['es'],
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: false,
                manualChunks: {
                    svelte: ['svelte'],
                },
            },
        },
        outDir: 'dist-wc'
    },
    plugins: [svelte()]
});
