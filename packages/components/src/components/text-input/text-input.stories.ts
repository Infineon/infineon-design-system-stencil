import { action } from '@storybook/addon-actions';

export default {
  title: "Components/TextInput",
  tags: ['autodocs'],

  args: {
    error: false,
    disabled: false,
    success: false,
    placeholder: 'Placeholder',
    errorMessage: "",
    readonly: false
  },
  argTypes: {
    onIfxInput: { action: 'ifxInput' },
  }
};


const DefaultTemplate = ({ error, disabled, success, placeholder, errorMessage, readonly }) => {
  const element = document.createElement('ifx-text-input');
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('success', success);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('error-message', errorMessage);
  element.setAttribute('readonly', readonly);
  element.addEventListener('ifxInput', action('ifxInput'));

  const slotContent = document.createTextNode('Text field');
  element.appendChild(slotContent);

  return element;
}




export const Default = DefaultTemplate.bind({});


