//framework-output-targets.ts
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';


const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['ifx-text-field', 'ifx-search-field', 'ifx-search-bar',],
    event: 'ifxInput',
    targetAttr: 'value',
  },
  {
    elements: ['ifx-select, ifx-multiselect'],
    event: 'ifxSelect',
    targetAttr: 'value',
  },
];

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['ifx-text-field'],
    event: 'ifxInput',
    targetAttr: 'value',
    type: 'text',
  },
];

const excludeComponents = [
];

export const frameworkTargets = [
  angularOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    outputType: 'component',
    directivesProxyFile: '../components-angular/projects/component-library/src/lib/stencil-generated/components.ts',
    directivesArrayFile: '../components-angular/projects/component-library/src/lib/stencil-generated/index.ts',
    valueAccessorConfigs: angularValueAccessorBindings,

  }),
  vueOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    proxiesFile: '../components-vue/lib/components.ts',
    componentModels: vueComponentModels,
    includePolyfills: true,
    // includeDefineCustomElements: true, // This is what tells the target to use the custom elements output
    excludeComponents,

  }),
  reactOutputTarget({
    outDir: '../components-react/src',
     // excludeComponents,
  }),

];