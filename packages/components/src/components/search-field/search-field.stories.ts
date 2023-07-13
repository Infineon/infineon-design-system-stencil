import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Search Field',
  tags: ['autodocs'],

  args: {
    showDeleteIcon: true,
    disabled: false,
    size: "l",

  },
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    onIfxInput: {
      action: 'ifxInput',
      description: 'Custom event',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
        },
      },
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