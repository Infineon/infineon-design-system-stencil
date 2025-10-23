import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",
  plugins: [
    react(),
  ],
  rollupOptions: {
    external: ['@infineon/infineon-design-system-stencil'],
  },

});
