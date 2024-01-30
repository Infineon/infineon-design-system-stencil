import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { frameworkTargets } from './framework-output-targets';

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  globalStyle: 'src/global/global.scss',
  plugins: [
    sass()
  ],
  extras: {
    cloneNodeFix: true,
    enableImportInjection: true,
  },

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      //copy task is taken over by compile-fonts-scss script during a stencil build
      // copy: [
      //   { src: '../../../node_modules/@infineon/design-system-tokens/dist/fonts', dest: '../fonts', warn: true },
      //   { src: '../../../node_modules/@infineon/design-system-tokens/dist/fonts', dest: '../../public-storybook/fonts', warn: true },
      // ]
    },
    ...frameworkTargets,
    {
      type: 'dist-custom-elements',
      dir: 'stencil-components'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      //copy task is taken over by compile-fonts-scss script during a stencil build
      // copy: [
      //   { src: '../../../node_modules/@infineon/design-system-tokens/dist/fonts', dest: 'build/fonts', warn: true },
      // ]
    }
  ],
};