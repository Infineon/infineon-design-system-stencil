import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: "./", // This is important for the github pages deployment
  plugins: [
    react(),

  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "node_modules/@stencil/"),
    }
  },
});
