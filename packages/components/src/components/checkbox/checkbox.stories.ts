import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  args: {
    label: 'Text',
    error: false,
    disabled: false,
    checked: false,
    size: 's',
    indeterminate: false,
    name: 'checkbox'
  },

  argTypes: {
    label: {
      name: 'Label of Checkbox',
      description: 'Sets the label of *<ifx-checkbox>*.',
      table: {
        category: 'story controls',
        type: {
          summary: '<ifx-checkbox> `label` </ifx-checkbox>'
        }
      }
    },
    error: {
      description: 'Toggles the error state for the checkbox.',
      control: 'boolean',
      table: {
        category: 'ifx-checkbox props',
        defaultValue: {
          summary: false,
        }
      }
    },
    disabled: {
      description: 'Disables the checkbox when set to true.',
      control: 'boolean',
      table: {
        category: 'ifx-checkbox props',
        defaultValue: {
          summary: false,
        }
      }
    },
    checked: {
      description: 'Controls whether the checkbox is checked.',
      control: 'boolean',
      table: {
        category: 'ifx-checkbox props',
        defaultValue: {
          summary: false,
        }
      }
    },
    indeterminate: {
      description: 'Activates the indeterminate state for the checkbox when set to true.',
      control: 'boolean',
      table: {
        category: 'ifx-checkbox props',
        defaultValue: {
          summary: false,
        }
      }
    },
    size: {
      description: 'Sets the size of the checkbox. Options: s (21px) and m (25px).',
      control: 'radio',
      options: ['s', 'm'],
      table: {
        category: 'ifx-checkbox props',
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
        category: 'ifx-checkbox props'
      }
    },
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event emitted when accordion-item is closed',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    },
  },
};

const Template = ({ error, disabled, checked, indeterminate, size, label, name }) => {
  const checkbox = document.createElement('ifx-checkbox');
  checkbox.setAttribute('error', error);
  checkbox.setAttribute('disabled', disabled);
  checkbox.setAttribute('checked', checked);
  checkbox.setAttribute('size', size);
  checkbox.setAttribute('indeterminate', indeterminate);
  checkbox.setAttribute('name', name);

  checkbox.addEventListener('ifxChange', action('ifxChange'));

  checkbox.innerHTML = `
    ${label}
  `;

  return checkbox;
};

export const Default = Template.bind({});