import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Switch',
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
  const pillToggle = document.createElement('ifx-toggle') as HTMLIfxSwitchElement;
  pillToggle.value = args.value;
  pillToggle.addEventListener('ifxChange', action('ifxChange'));

  return pillToggle;
};

export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}
