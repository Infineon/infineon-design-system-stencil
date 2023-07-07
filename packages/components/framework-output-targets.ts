import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';


const vueComponentModels: ComponentModelConfig[] = [
    // {
    //     elements: ['ifx-search-bar', 'ifx-search-input'],
    //     event: 'ifxChange',
    //     targetAttr: 'value',
    // },
    {
        elements: ['ifx-text-input', 'ifx-search-input', 'ifx-search-bar',],
        event: 'ifxInput',
        targetAttr: 'value',
    },
];

const excludeComponents = [
];

export const frameworkTargets = [
    vueOutputTarget({
        componentCorePackage: '@infineon/infineon-design-system-stencil',
        proxiesFile: '../components-vue/lib/components.ts',
        componentModels: vueComponentModels,
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