import { action } from "@storybook/addon-actions";


export default {
  title: 'Components/Search Bar',
  tags: ['autodocs'],

  args: {
    disabled: false,
    isOpen: true,

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
    },
  },
};



const DefaultTemplate = ({ isOpen, disabled }) => {
  const element = document.createElement('ifx-search-bar');
  element.setAttribute('is-open', isOpen);
  element.setAttribute('disabled', disabled);
  element.addEventListener('ifxInput', action('ifxInput'));

  return element;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
};