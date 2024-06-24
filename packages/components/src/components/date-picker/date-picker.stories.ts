import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Date Picker',
  tags: ['autodocs'],

  args: {
    disabled: false,
    size: 's',
    success: false,
    error: false,
    name: 'date-picker'
  },
  argTypes: {
    size: {
      description: 'Size options: small (173px) and large (400px) - default: small',
      options: ['s', 'l'],
      control: { type: 'radio' },
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.'
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

const DefaultTemplate = ({ error, disabled, success, size }) => {
  const element = document.createElement('ifx-date-picker');
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('size', size);
  element.setAttribute('success', success);
  element.addEventListener('ifxDate', action('ifxDate'));
  return element;
};

export const Default = DefaultTemplate.bind({});