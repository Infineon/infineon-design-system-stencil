import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Radio Button',
  // tags: ['autodocs'],

  args: {
    label: 'Text',
    error: false,
    disabled: false,
    checked: false,
    size: 's',
    name: 'radio-button',
    value: 'radio',
  },
  argTypes: {
    error: {
      description: 'Indicates whether the radio button is in an error state.',
      control: 'boolean',
      table: {
        category: 'ifx-radio-button props',
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      description: 'Disables the radio button.',
      control: 'boolean',
      table: {
        category: 'ifx-radio-button props',
        defaultValue: {
          summary: false
        }
      }
    },
    checked: {
      description: 'Determines whether the radio button is selected by default.',
      control: 'boolean',
      table: {
        category: 'ifx-radio-button props',
        defaultValue: {
          summary: false
        }
      }
    },
    label: {
      name: 'Label of Radio Button',
      description: 'Set the label displayed next to *<ifx-radio-button>*.',
      table: {
        category: 'story controls',
      }
    },
    size: {
      description: 'Specifies the size of the radio button. Options: s (20px) and m (24px).',
      control: 'radio',
      options: ['s', 'm'],
      table: {
        category: 'ifx-radio-button props',
        defaultValue: {
          summary: 's'
        },
        type: {
          summary: 's | m'
        }
      }
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.',
      table: {
        category: 'ifx-radio-button props'
      }
    },
    value: {
      description: 'The value that gets submitted, when the radio button is checked.',
      table: {
        category: 'ifx-radio-button props'
      }
    },
    ifxChange: {
      description: 'Custom event emitted when radio button checked and unchecked.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },

      action: 'ifxChange',
    }
  },
};

const DefaultTemplate = args => {
  // Create the radio button element
  const element = document.createElement('ifx-radio-button');

  // Set the attributes
  element.setAttribute('error', args.error);
  element.setAttribute('disabled', args.disabled);
  element.setAttribute('checked', args.checked);
  element.setAttribute('size', args.size);
  element.setAttribute('name', args.name);
  element.setAttribute('value', args.value);

  // Add the label as a text node
  element.appendChild(document.createTextNode(args.label));

  // Add the event listener
  element.addEventListener('ifxChange', action('ifxChange'));

  // Return the element
  return element;
};

export const Default = DefaultTemplate.bind({});
