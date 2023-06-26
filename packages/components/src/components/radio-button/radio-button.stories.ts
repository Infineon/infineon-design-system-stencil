import { action } from '@storybook/addon-actions';


export default {
  title: "Components/Radio Button",
  args: {
    error: false,
    disabled: false,
    value: false,
    label: 'Text'
  },

};


const DefaultTemplate = (args) => {
  // Create the radio button element
  const element = document.createElement('ifx-radio-button');

  // Set the attributes
  element.setAttribute('error', args.error);
  element.setAttribute('disabled', args.disabled);
  element.setAttribute('value', args.value);

  // Add the label as a text node
  element.appendChild(document.createTextNode(args.label));

  // Add the event listener
  element.addEventListener('ifxChange', action('ifxChange'));

  // Return the element
  return element;
}


export const Default = DefaultTemplate.bind({});

