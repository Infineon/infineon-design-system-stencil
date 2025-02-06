import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Field',
  // tags: ['autodocs'],

  args: {
    showDeleteIcon: true,
    disabled: false,
    size: 'm',
    value: '',
    placeholder: 'Search...',
  },
  argTypes: {
    showDeleteIcon: {
      description: 'Determines whether a delete icon is shown in the search field.',
      control: 'boolean',
      table: {
        category: 'ifx-search-field props',
        defaultValue: {
          summary: true
        }
      }
    },
    disabled: {
      description: 'Disables the search field, preventing user interaction.',
      control: 'boolean',
      table: {
        category: 'ifx-search-field props',
        defaultValue: {
          summary: false
        }
      }
    },
    size: {
      description: 'Size options: s (36px) and m (40px) - default: m.',
      control: 'radio',
      options: ['s', 'm'],
      table: {
        category: 'ifx-search-field props',
        defaultValue: {
          summary: 'm'
        }
      }
    },
    placeholder: {
      description: 'Placeholder text displayed in the search field when it is empty.',
      control: 'text',
      table: {
        category: 'ifx-search-field props',
        defaultValue: {
          summary: 'Search...'
        }
      }
    },
    maxlength: {
      description: 'Specifies the maximum number of characters that can be entered into the search field.',
      control: 'number',
      table: {
        category: 'ifx-search-field props'
      }
    },
    value: {
      description: 'The value of the search field. It is used for the form submission.',
      control: 'text',
      table: {
        category: 'ifx-search-field props'
      }
    },
    ifxInput: {
      action: 'ifxInput',
      description: 'A custom event triggered whenever there is input in the search field.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
        },
      },
    },
  },
};

const DefaultTemplate = ({ disabled, size, showDeleteIcon, placeholder, maxlength, value }) => {
  const element = document.createElement('ifx-search-field');
  element.setAttribute('size', size);
  element.setAttribute('disabled', disabled);
  element.setAttribute('show-delete-icon', showDeleteIcon);
  element.setAttribute('value', value)
  if (placeholder != undefined) element.setAttribute('placeholder', placeholder);
  if (maxlength != undefined) element.setAttribute('maxlength', maxlength);
  element.addEventListener('ifxInput', action('ifxInput'));

  return element;
};

export const Default = DefaultTemplate.bind({});
