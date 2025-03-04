import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { frameworkTargets } from './framework-output-targets';
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';

dotenv.config();

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  globalStyle: 'src/global/global.scss',
  plugins: [
    sass(),
    replace({
      'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
      'process.env.SCOPE': JSON.stringify(process.env.SCOPE),
      'process.env.STATE': JSON.stringify(process.env.STATE),
      'preventAssignment': true
    }),
  ],
  extras: {
    cloneNodeFix: true,
    enableImportInjection: true,
  },

  outputTargets: [
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../../../node_modules/@infineon/design-system-tokens/dist/fonts', dest: './', warn: true },
      ]
    },
    ...frameworkTargets,
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
       copy: [
        { src: '../../../node_modules/@infineon/design-system-tokens/dist/fonts', dest: './build/fonts', warn: true },
      ]
    }
  ],

};