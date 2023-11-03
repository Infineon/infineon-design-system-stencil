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
      description: 'Custom event emitted on input',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
        },
      },
    },
    ifxSearchBarIsOpen: {
      action: 'ifxSearchBarIsOpen',
      description: 'Custom event emitted when search bar is opened',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxSearchBarIsOpen={handleInput}\nVue:@ifxSearchBarIsOpen="handleInput"\nAngular:(ifxSearchBarIsOpen)="handleInput()"\nVanillaJs:.addEventListener("ifxSearchBarIsOpen", (event) => {//handle input});',
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