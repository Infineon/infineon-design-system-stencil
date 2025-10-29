import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
    // Configure Vite to resolve node_modules from the project root
    resolve: {
        alias: {
            '/node_modules': resolve(__dirname, 'node_modules'),
        }
    },
});
