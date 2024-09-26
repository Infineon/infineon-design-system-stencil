import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

  ],
  resolve: {
    alias: {
      '@stencil/react-output-target/runtime': path.resolve(__dirname, 'node_modules/@stencil/react-output-target/runtime')
    }
  },
  build: {
    rollupOptions: {
      external: [
        '@stencil/react-output-target/runtime'  // Ensure this is treated as external
      ]
    }
  }
});
