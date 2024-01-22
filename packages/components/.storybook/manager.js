import { addons } from '@storybook/manager-api';
import ifxTheme from './ifxTheme';

addons.setConfig({
  theme: ifxTheme,
});