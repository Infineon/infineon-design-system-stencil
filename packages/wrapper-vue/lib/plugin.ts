import { Plugin } from 'vue';
import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';

export const InfineonDesignSystem: Plugin = {
  async install() {
      defineCustomElements();
  },
};