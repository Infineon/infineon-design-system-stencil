import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { frameworkTargets } from './framework-output-targets';


export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  plugins: [
    sass()
  ],
  extras: {
    cloneNodeFix: true,
    enableImportInjection: true,
    experimentalImportInjection: true,
  },

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    ...frameworkTargets,
    {
      type: 'dist-custom-elements',
      // generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
};
