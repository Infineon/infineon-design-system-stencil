import { fileURLToPath, URL } from 'node:url';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

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
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});