import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],

  args: {
    checked: true,
  },
  argTypes: {

    value: {
      control: 'boolean',
    },
  },
}


const DefaultTemplate = (args) => {
  const toggleSwitch = document.createElement('ifx-switch') as HTMLIfxSwitchElement;
  toggleSwitch.value = args.value;
  toggleSwitch.addEventListener('ifxChange', action('ifxChange'));

  return toggleSwitch;
};

export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}
