import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Text Field',
  // tags: ['autodocs'],

  args: {
    label: 'Label',
    error: false,
    disabled: false,
    size: 'm',
    icon: 'c-info-16',
    success: false,
    placeholder: 'Placeholder',
    caption: 'Caption',
    required: true,
    optional: false,
    name: 'text-field',
    showDeleteIcon: false,
    maxlength: '',
    value: '',
  },

  argTypes: {
    label: {
      name: 'Label of Text Field',
      description: 'The text label displayed above the *<ifx-text-field>*.',
      table: {
        category: 'story controls',
      }
    },
    error: {
      description: 'Indicates an error state for the text field.',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      description: 'Disables the text field.',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: false
        }
      }
    },
    size: {
      description: 'Size options: s (36px) and m (40px) - default: m',
      options: ['s', 'm'],
      control: 'radio',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: 'm'
        }
      }
    },
    icon: {
      description: 'Specifies an icon to display within the text field.',
      options: Object.values(icons).map(i => i['name']),
      control: 'select',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: 'c-info-16'
        }
      }
    },
    success: {
      description: 'Indicates a successful state for the text field.',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: false
        }
      }
    },
    placeholder: {
      description: 'Displays a placeholder text inside the text field when it is empty.',
      table: {
        category: 'ifx-text-field props',
      }
    },
    caption: {
      description: 'Text displayed below the text field to provide additional information.',
      table: {
        category: 'ifx-text-field props',
      }
    },
    required: {
      description: 'Marks the text field as required for form submission. Displays an asterisk next to the label when set to **true**.',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: true
        }
      }
    },
    optional: {
      description: 'Indicates that the field is optional.',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: false
        }
      }
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.',
      table: {
        category: 'ifx-text-field props',
      }
    },
    showDeleteIcon: {
      description: 'Displays a delete icon inside the text field when set to **true**, allowing user to clear the input content.',
      table: {
        category: 'ifx-text-field props',
        defaultValue: {
          summary: false
        }
      }
    },
    maxlength: {
      description: 'Specifies the maximum number of characters that can be entered into the text field.',
      control: 'number',
      table: {
        category: 'ifx-text-field props',
      }
    },
    value: {
      description: 'The value of the text field. It is used for the form submission.',
      control: 'text',
      table: {
        category: 'ifx-text-field props',
        type: {
          summary: 'string'
        }
      }
    },
    ifxInput: {
      action: 'ifxInput',
      description: 'Custom event emitted on input change.',
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

const DefaultTemplate = ({ error, disabled, success, size, placeholder, label, caption, icon, required, optional, name, maxlength, showDeleteIcon, value }) => {
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
  element.setAttribute('show-delete-icon', showDeleteIcon);
  element.setAttribute('value', value);
  if (maxlength) element.setAttribute('maxlength', maxlength);

  element.addEventListener('ifxInput', action('ifxInput'));


  const slotContent = document.createTextNode(label);
  element.appendChild(slotContent);

  return element;
};

export const Default = DefaultTemplate.bind({});
