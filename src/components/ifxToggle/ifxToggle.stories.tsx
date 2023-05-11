import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/IfxToggle',
  args: {
    checked: true,
  },
  argTypes: {

    checked: {
       control: 'boolean',
    },
  },
}


  const DefaultTemplate = (args) => {
    const pillToggle = document.createElement('ifx-toggle') as HTMLIfxToggleElement;
    pillToggle.checked = args.checked;
    pillToggle.addEventListener('valueChanged', action('valueChanged'));
  
    return pillToggle;
  };

export const Default = DefaultTemplate.bind({});
Default.argTypes={
  
}
