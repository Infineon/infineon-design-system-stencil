import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@stencil/react-output-target/runtime': new URL('@stencil/react-output-target/runtime', import.meta.url).pathname
    }
  }
});
