// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import {  defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';

export const ComponentLibrary: Plugin = {
  async install() {
  
      defineCustomElements();
  
  },
};