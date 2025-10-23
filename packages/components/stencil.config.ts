import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  globalStyle: 'src/styles/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      // TODO: Copy fonts?
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      // TODO: copy fonts?
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
  plugins: [
    sass()
  ]
};
