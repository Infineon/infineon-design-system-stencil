import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  sourceMap: true,
  globalStyle: 'src/global/styles/index.scss',
  globalScript: 'src/global/setup.ts',
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
    /**
     * This output target creates a www-build that can be used for demoing the components or for documentation sites.
     * It is also required for Storybook integration.
     */
    {
      type: 'www'
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
    sass({
      includePaths: ['src/global/styles', 'src/shared/styles', 'node_modules/'],
      injectGlobalPaths: ['src/shared/styles/index.scss'],
    })
  ],
  extras: {
    cloneNodeFix: true,
    enableImportInjection: true,
  },
};
