import { icons } from '@infineon/infineon-icons';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Icon',
  tags: ['autodocs'],

  args: {
    icon: "c-check-16"
  },
  argTypes: {
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' }
    },
    consoleError: {
      action: 'consoleError',
      description: 'Custom event emitted when icon is invalid',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onConsoleError={handleChange}\nVue:@consoleError="handleChange"\nAngular:(consoleError)="handleChange()"\nVanillaJs:.addEventListener("consoleError", (event) => {//handle change});',
        },
      },
    }
  },
}

  const DefaultTemplate = ({ icon }) => {
    const ifxIcon = document.createElement('ifx-icon');
    ifxIcon.setAttribute('icon', icon);
    ifxIcon.addEventListener('consoleError', action('consoleError'));
    return ifxIcon;
  };

export const Default = DefaultTemplate.bind({});

