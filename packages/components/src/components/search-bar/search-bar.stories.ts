import { action } from "@storybook/addon-actions";


export default {
  title: 'Components/Search Bar',
  tags: ['autodocs'],

  args: {
    showCloseButton: true,
    disabled: false,

  },
  argTypes: {
    onIfxInput: {
      action: 'ifxInput',
      description: 'Custom event',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
        },
      },
    }, showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};



const DefaultTemplate = ({ isOpen, showCloseButton, disabled }) => {
  const element = document.createElement('ifx-search-bar');
  element.setAttribute('is-open', isOpen);
  element.setAttribute('disabled', disabled);
  element.setAttribute('show-close-button', showCloseButton);
  element.addEventListener('ifxInput', action('ifxInput'));

  return element;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
};