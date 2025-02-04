import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  args: {
    error: false,
    checked: false,
    label: 'Text',
    size: 's',
    indeterminate: false,
    name: 'checkbox',
    value: 'checkbox',
  },

  argTypes: {
    size: {
      description: 'Size options: s (21px) and m (25px) - default: m',
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event emitted when accordion-item is closed',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    },
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.'
    },
    value: {
      description: 'The value that gets submitted, when the checkbox is seleted'
    }
  },
};

const DefaultTemplate = ({ error, checked, indeterminate, size, label, name }) => {
  const checkbox = document.createElement('ifx-checkbox');
  checkbox.setAttribute('error', error);
  checkbox.setAttribute('checked', checked);
  checkbox.setAttribute('size', size);
  checkbox.setAttribute('indeterminate', indeterminate);
  checkbox.setAttribute('name', name);
  checkbox.addEventListener('ifxChange', action('ifxChange'));
  checkbox.innerHTML = `${label}`;

  return checkbox;
};

export const Default = DefaultTemplate.bind({});
