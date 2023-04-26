import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  globalScript: 'src/index.ts',
  globalStyle: 'src/global/global.scss',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    vueOutputTarget({
      componentCorePackage: '@infineon/infineon-design-system-stencil',
      proxiesFile: '../components-vue/lib/components.ts',
    }),
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],



  plugins: [
    sass()
  ],



  // rollupPlugins: {
  //   after: [
  //     nodePolyfills(),
  //   ]
  // },
  extras: {
    cloneNodeFix: true,
    experimentalImportInjection: true,
  },
};
