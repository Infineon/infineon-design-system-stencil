import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],

  args: {
    label: 'Switch',
    checked: false,
    name: 'switch',
    value: 'switch',
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    label: {
      name: 'Label of Switch',
      description: 'Set the label of *<ifx-switch>*.',
      table: {
        category: 'story controls',
      }
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.',
      table: {
        category: 'ifx-switch props',
        type: {
          summary: 'string'
        }
      }
    },
    checked: {
      name: 'checked',
      description: 'Set the checked state of the switch.',
      table: {
        category: 'ifx-switch props',
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    value: {
      description: 'The value that gets submitted, when the radio button is checked.',
      table: {
        category: 'ifx-switch props',
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      description: 'The value that gets submitted, when the radio button is checked.',
      table: {
        category: 'ifx-switch props',
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    readOnly: {
      description: 'Makes the switch read-only.',
      table: {
        category: 'ifx-switch props',
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    ifxChange: {
      description: 'Custom event emitted on change.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
      action: 'ifxChange',
    },
  },



}

const DefaultTemplate = args => {
  const element = document.createElement('ifx-switch') as HTMLIfxSwitchElement;

  // Set the attributes
  element.setAttribute('checked', args.checked);
  element.setAttribute('name', args.name);
  element.setAttribute('value', args.value);
  element.setAttribute('disabled', args.disabled);
  element.setAttribute('read-only', args.readOnly);
  // Add the event listener
  // element.addEventListener('ifxChange', action('ifxChange'));
  // Inside your story, add an event listener for the custom event
  element.addEventListener('ifxChange', (event: Event) => {
    const customEvent = event as CustomEvent;
    const newValue = customEvent.detail;

    action('ifxChange')(customEvent);

    args.value = newValue;
  });

  const slotContent = document.createTextNode(args.label);
  element.appendChild(slotContent);

  return element;
};

export const Default = DefaultTemplate.bind({});
