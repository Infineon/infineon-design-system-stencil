import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Checkbox",
  tags: ['autodocs'],
  args: {
    error: false,
    disabled: false,
    value: false,
    label: 'Text',
  },

  argTypes: { onIfxChange: { action: 'checked' } },

};


const DefaultTemplate = ({
  error,
  disabled,
  value,
  label
}) => {
  const checkbox = document.createElement('ifx-checkbox');
  checkbox.setAttribute('error', error);
  checkbox.setAttribute('disabled', disabled);
  checkbox.setAttribute('value', value);

  checkbox.addEventListener('ifxChange', action('ifxChange'));

  checkbox.innerHTML = `
    ${label}
  `

  return checkbox;
};

export const Default = DefaultTemplate.bind({});


