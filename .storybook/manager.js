
import { addons } from '@storybook/addons';

addons.setConfig({

  previewTabs: {
    // the order of the tabs is configured by the order here
    // null means no override for the title
    'storybook/docs/panel': null,
    'usage-tab': null,
    canvas: null,
  },
});