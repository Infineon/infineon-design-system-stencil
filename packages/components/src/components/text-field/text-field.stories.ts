import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Text Field',
  // tags: ['autodocs'],

  args: {
    disabled: false,
    size: 'm',
    success: false,
    label: 'Label',
    placeholder: 'Placeholder',
    error: false,
    caption: 'Caption',
    required: true,
    optional: false,
    icon: 'c-info-16',
    name: 'text-field'
  },

  argTypes: {
    size: {
      description: 'Size options: s (36px) and m (40px) - default: m',
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.'
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

const DefaultTemplate = ({ error, disabled, success, size, placeholder, label, caption, icon, required, optional, name }) => {
  const element = document.createElement('ifx-text-field');
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('size', size);
  element.setAttribute('icon', icon);
  element.setAttribute('success', success);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('caption', caption);
  element.setAttribute('required', required);
  element.setAttribute('optional', optional);
  element.setAttribute('name', name);
  element.addEventListener('ifxInput', action('ifxInput'));

  const slotContent = document.createTextNode(label);
  element.appendChild(slotContent);

  return element;
};

export const Default = DefaultTemplate.bind({});
