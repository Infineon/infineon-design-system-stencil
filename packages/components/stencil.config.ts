import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  sourceMap: true,
  globalStyle: 'src/global/styles/index.scss',
  globalScript: 'src/global/setup.ts',
  outputTargets: [
    /**
     * This output target creates a small entry point that registers all components and lazy loads them on demand.
     * It enables users to use the components from CDN or importing them in a bootstrap script.
     * Usage:
     * ```javascript
     * import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';
      * defineCustomElements(window);
     * ```
     * or
     * ```html
     * <script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil"></script>
     * ```
     * See https://stenciljs.com/docs/distribution and https://stenciljs.com/docs/publishing#lazy-loading
     */
    {
      type: 'dist',
    },
    /**
     * This output target creates standalone custom elements that directly extend HTMLElement without any lazy loading.
     * This may be prefered for projects that already handle bundling, lazy-loading and defining the custom elements themselves.
     * However, usage requires further configuration in the consuming project.
     * See https://stenciljs.com/docs/custom-elements and https://stenciljs.com/docs/publishing#standalone
     */
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
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
    angularOutputTarget({
      componentCorePackage: '@infineon/infineon-design-system-stencil',
      outputType: 'component',
      directivesProxyFile: '../wrapper-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../wrapper-angular/src/lib/stencil-generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@infineon/infineon-design-system-stencil',
      outputType: 'standalone',
      directivesProxyFile: '../wrapper-angular/standalone/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../wrapper-angular/standalone/src/lib/stencil-generated/index.ts',
    }),
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
