import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';


const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['ifx-progress-bar', 'ifx-search-bar', 'ifx-search-input'],
    event: 'ifxChange',
    targetAttr: 'value',
  },

];



const excludeComponents = [
];

export const frameworkTargets = [
  vueOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    proxiesFile: '../components-vue/src/components.ts',
    componentModels: vueComponentModels,
    excludeComponents,
  }),
  reactOutputTarget({
    componentCorePackage: '@infineon/infineon-design-system-stencil',
    proxiesFile: '../components-react/lib/components/stencil-generated/index.ts',
    excludeComponents,
  }),

];