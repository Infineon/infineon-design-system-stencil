import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      external: [
        '@stencil/react-output-target/runtime'
      ]
    }
  }
});
