import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Bar',
  // tags: ['autodocs'],

  args: {
    disabled: false,
    isOpen: true,
  },
  argTypes: {
    ifxInput: {
      action: 'ifxInput',
      description: 'Custom event emitted on input\n\n(see below for Two Way Data Binding in different JS frameworks)',
    },
    maxlength: {
      description: 'Maximum input length',
      control: {type: 'number'}
    },
    ifxSearchBarIsOpen: {
      action: 'ifxInput',
      description: 'Custom event',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
        },
      },
    },
  },
};

const DefaultTemplate = ({ isOpen, disabled, maxlength }) => {
  const element = document.createElement('ifx-search-bar');
  element.setAttribute('is-open', isOpen);
  element.setAttribute('disabled', disabled);
  element.addEventListener('ifxInput', action('ifxInput'));
  if(maxlength != undefined) element.setAttribute('maxlength', maxlength);

  return element;
};

export const Default = DefaultTemplate.bind({});
Default.args = {};
