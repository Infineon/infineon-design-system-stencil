import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Search Field',
  tags: ['autodocs'],
  args: {
    showDeleteIcon: true,
    disabled: false,
    size: "m",

  },
  argTypes: {
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    onIfxInput: { action: 'ifxInput' },
  },
};


const DefaultTemplate = ({ disabled, size, showDeleteIcon }) => {
  const element = document.createElement('ifx-search-field');
  element.setAttribute('size', size);
  element.setAttribute('disabled', disabled);
  element.setAttribute('show-delete-icon', showDeleteIcon);
  element.addEventListener('ifxInput', action('ifxInput'));

  return element;
};



export const Default = DefaultTemplate.bind({});