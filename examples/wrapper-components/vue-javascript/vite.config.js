import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevtools from 'vite-plugin-vue-devtools';


// Get dynamic base URL from environment variables
const getPrNumber = () => process.env.PR_NUMBER || '';
const getBaseUrl = () => {
  const prNumber = getPrNumber();
  if (prNumber) {
    return `/infineon-design-system-stencil/pr-preview-vue-example/pr-${prNumber}/`;
  }
  return './'; // Local development fallback
};

export default defineConfig({
  base: getBaseUrl(),
  exclude: [
    '@ionic/core/loader' //fix weird Vite error "outdated optimize dep"
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/file-[hash][extname]', // Avoid underscores, cause Github Pages Jekyll processor does not serve them correctly
        chunkFileNames: 'js/chunk-[hash].js',
        entryFileNames: 'js/entry-[hash].js'
      }
    }
  },
  plugins: [
    vue(),
    vueDevtools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});