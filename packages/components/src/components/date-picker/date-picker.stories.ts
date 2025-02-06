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
    caption: "Caption text, description, error notification.",
    AriaLabel: 'Date Picker',
    required: false,
  },
  argTypes: {
    label: {
      description: 'Label of Date Picker.',
      table: {
        category: 'ifx-date-picker props',
      }
    },
    caption: {
      description: 'Caption text, description, error notification.',
      table: {
        category: 'ifx-date-picker props',
      }
    },
    min: {
      description: 'Minimum date that can be selected. The parsed value is always formatted as yyyy-mm-dd.',
      table: {
        category: 'ifx-date-picker props',
      }
    },
    max: {
      description: 'The latest date that can be selected. The parsed value is always formatted as yyyy-mm-dd.',
      table: {
        category: 'ifx-date-picker props',
      }
    },
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
      description: 'Sets the size of the date picker. Options: Height small  (36px) and Height large (40px).S',
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
      control: 'text',
      table: {
        category: 'ifx-date-picker props'
      }
    },
    value: {
      description: 'Displayed date is formatted based on the locale of the user`s browser, but the parsed value is always formatted as yyyy-mm-dd.',
      table: {
        category: 'ifx-date-picker props'
      }
    },
    AriaLabel: {
      control: { type: 'text' },
      description: 'Set the aria label of the date picker. Enhances accessibility.',
      table: {
        category: 'ifx-date-picker props'
      }
    },
    required: {
      description: 'Set the required attribute to true to make the date picker mandatory.',
      control: 'boolean',
      table: {
        category: 'ifx-date-picker props',
        defaultValue: {
          summary: false
        }
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

const DefaultTemplate = ({ error, disabled, success, size, value, max, min, caption, label, AriaLabel, required, name }) => {
  const element = document.createElement('ifx-date-picker');
  element.setAttribute('name', name);
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('size', size);
  element.setAttribute('success', success);
  element.setAttribute('value', value);
  element.setAttribute('max', max);
  element.setAttribute('min', min);
  element.setAttribute('label', label);
  element.setAttribute('caption', caption);
  element.setAttribute('AriaLabel', AriaLabel);
  element.setAttribute('required', required);
  element.addEventListener('ifxDate', action('ifxDate'));
  return element;
};

export const Default = DefaultTemplate.bind({});