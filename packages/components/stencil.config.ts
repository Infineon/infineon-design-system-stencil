import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { frameworkTargets } from './framework-output-targets';

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  globalScript: 'src/index.ts',
  globalStyle: 'src/global/global.scss',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    ...frameworkTargets,
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