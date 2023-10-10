import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';


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

const excludeComponents = [
];

export const frameworkTargets = [
  angularOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    outputType: 'component',
    directivesProxyFile: '../components-angular/projects/component-library/src/lib/stencil-generated/components.ts',
    directivesArrayFile: '../components-angular/projects/component-library/src/lib/stencil-generated/index.ts',
  }),
  vueOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    proxiesFile: '../components-vue/lib/components.ts',
    componentModels: vueComponentModels,
    includeDefineCustomElements: true, // This is what tells the target to use the custom elements output
    // includePolyfills: true,
    excludeComponents,
  }),
  reactOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    proxiesFile: '../components-react/lib/components/stencil-generated/index.ts',
    includeDefineCustomElements: true, // This is what tells the target to use the custom elements output
    includePolyfills: true,
    excludeComponents,
  }),

];