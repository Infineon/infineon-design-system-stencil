import { fileURLToPath, URL } from 'node:url';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./",
  exclude: [
    '@ionic/core/loader' //fix weird Vite error "outdated optimize dep"
  ],
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
    // dynamicImport({
    //   filter(id) {
    //     if (id.includes('/node_modules/.vite/deps/ifx')) {
    //       return true;

    //     }
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },


});