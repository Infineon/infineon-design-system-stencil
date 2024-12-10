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
    disabled: {
      description: 'Disables the date picker',
      control: 'boolean',
      table: {
        category: 'ifx-date-picker props',
        defaultValue: {
          summary: false
        }
      }
    },
    success: {
      description: 'Indicates success in the date picker.',
      control: 'boolean',
      table: {
        category: 'ifx-date-picker props',
        defaultValue: {
          summary: false
        }
      }
    },
    error: {
      description: 'Indicates error in the date picker.',
      control: 'boolean',
      table: {
        category: 'ifx-date-picker props',
        defaultValue: {
          summary: false
        }
      }
    },
    size: {
      description: 'Sets the size of the date picker. Options: Height small  (36px) and Height large (40px)',
      control: 'radio',
      options: ['s', 'l'],
      table: {
        category: 'ifx-date-picker props',
        defaultValue: {
          summary: 's'
        }
      }
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.',
      table: {
        category: 'ifx-date-picker props'
      }
    },
    value: { 
      description: 'Displayed date is formatted based on the locale of the user`s browser, but the parsed value is always formatted yyyy-mm-dd',
      table: {
        category: 'ifx-date-picker props'
      }
    },
    ifxDate: {
      action: 'ifxDate',
      description: 'A custom event emitted when a date in the calendar is being selected.',
      table: {
        category: 'custom events',
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