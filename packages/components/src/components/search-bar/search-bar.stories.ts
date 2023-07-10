import { action } from "@storybook/addon-actions";


export default {
  title: 'Components/Search Bar',
  tags: ['autodocs'],

  args: {
    showCloseButton: true,
  },
  argTypes: {
    onIfxInput: { action: 'ifxInput' },
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};



const DefaultTemplate = ({ isOpen, showCloseButton }) => {
  const element = document.createElement('ifx-search-bar');
  element.setAttribute('is-open', isOpen);
  element.setAttribute('show-close-button', showCloseButton);
  element.addEventListener('ifxInput', action('ifxInput'));

  return element;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
};