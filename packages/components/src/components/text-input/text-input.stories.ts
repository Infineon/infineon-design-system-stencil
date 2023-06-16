import { action } from '@storybook/addon-actions';

export default {
  title: "Components/TextInput",
  args: {
    error: false,
    disabled: false,
    success: false,
    placeholder: 'Placeholder',
    errorMessage: "",

  },


};


const DefaultTemplate = ({ error, disabled, success, placeholder, errorMessage }) => {
  const element = document.createElement('ifx-text-input');
  element.setAttribute('error', error);
  element.setAttribute('disabled', disabled);
  element.setAttribute('success', success);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('errorMessage', errorMessage);
  element.addEventListener('ifxChange', action('ifxChange'));

  const slotContent = document.createTextNode('Text field');
  element.appendChild(slotContent);

  return element;
}




export const Default = DefaultTemplate.bind({});


