import { addons } from '@storybook/addons';

addons.setConfig({
  panelPosition: 'bottom',
  selectedPanel: 'usage-tab/panel',
  previewTabs: {
    'storybook/docs/panel': 'Docs',
    'usage-tab/panel': 'Usage',
    canvas: 'Canvas',
  },
});
