import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Search Field',
  // tags: ['autodocs'],

  args: {
    showDeleteIcon: true,
    disabled: false,
    size: "m",

  },
  argTypes: {
    size: {
      description: "Size options: s (36px) and m (40px) - default: m",
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    onIfxInput: {
      action: 'ifxInput',
      description: 'Custom event emitted on input\n\n(see below for Two Way Data Binding in different JS frameworks)',

    },

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