// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};