import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Date Picker',
  tags: ['autodocs'],

  args: {
    disabled: false,
    size: 's',
    success: false,
    error: false,
    name: 'date-picker',
    value: '',
    max: '',
    min: '',
    label: "Label Text",
    caption: "Caption text, description, error notification",
  },
  argTypes: {
    size: {
      description: 'Size options: Height small  (36px) and Height large (40px) - default: small',
      options: ['s', 'l'],
      control: { type: 'radio' },
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.'
    },
    value: { 
      description: 'Displayed date is formatted based on the locale of the user`s browser, but the parsed value is always formatted yyyy-mm-dd'
    },
    ifxDate: {
      action: 'ifxDate',
      description: 'Custom event',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxDate={handleInput}\nVue:@ifxDate="handleInput"\nAngular:(ifxDate)="handleInput()"\nVanillaJs:.addEventListener("ifxDate", (event) => {//handle input});',
        },
      },
    },
  },
};

const DefaultTemplate = ({ error, disabled, success, size, value, max, min, caption, label }) => {
  const element = document.createElement('ifx-date-picker');
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('size', size);
  element.setAttribute('success', success);
  element.setAttribute('value', value);
  element.setAttribute('max', max);
  element.setAttribute('min', min);
  element.setAttribute('label', label);
  element.setAttribute('caption', caption);
  element.addEventListener('ifxDate', action('ifxDate'));
  return element;
};

export const Default = DefaultTemplate.bind({});