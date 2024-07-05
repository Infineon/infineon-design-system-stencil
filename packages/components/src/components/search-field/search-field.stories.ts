import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Field',
  // tags: ['autodocs'],

  args: {
    showDeleteIcon: true,
    disabled: false,
    size: 'm',
  },
  argTypes: {
    size: {
      description: 'Size options: s (36px) and m (40px) - default: m',
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    placeholder: {
      description: 'Place holder text - default value: "Search..."',
      control: { type: 'text'}
    },
    ifxInput: {
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

const DefaultTemplate = ({ disabled, size, showDeleteIcon, placeholder }) => {
  const element = document.createElement('ifx-search-field');
  element.setAttribute('size', size);
  element.setAttribute('disabled', disabled);
  element.setAttribute('show-delete-icon', showDeleteIcon);
  if(placeholder != undefined) element.setAttribute('placeholder', placeholder);
  element.addEventListener('ifxInput', action('ifxInput'));

  return element;
};

export const Default = DefaultTemplate.bind({});
