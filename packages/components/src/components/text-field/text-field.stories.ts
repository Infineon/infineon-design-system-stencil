import { action } from '@storybook/addon-actions';

export default {
  title: "Components/TextField",
  tags: ['autodocs'],

  args: {
    disabled: false,
    size: "m",
    success: false,
    label: "Label",
    placeholder: 'Placeholder',
    error: false,
    caption: "Caption",
    readonly: false
  },
  argTypes: {
    size: {
      description: "Size options: s (36px) and m (40px) - default: m",
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    onIfxInput: { action: 'ifxInput' },
  }
};


const DefaultTemplate = ({ error, disabled, success, size, placeholder, label, caption, readonly }) => {
  const element = document.createElement('ifx-text-field');
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('size', size);
  element.setAttribute('success', success);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('caption', caption);
  element.setAttribute('readonly', readonly);
  element.addEventListener('ifxInput', action('ifxInput'));

  const slotContent = document.createTextNode(label);
  element.appendChild(slotContent);

  return element;
}




export const Default = DefaultTemplate.bind({});


