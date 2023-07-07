import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Radio Button",
  // tags: ['autodocs'],

  args: {
    error: false,
    disabled: false,
    value: false,
    size: 's',
    label: 'Text'
  },
  argTypes: {
    onIfxChange: {
      description: 'Custom event',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },

      action: 'ifxChange'
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = (args) => {
  // Create the radio button element
  const element = document.createElement('ifx-radio-button');

  // Set the attributes
  element.setAttribute('error', args.error);
  element.setAttribute('disabled', args.disabled);
  element.setAttribute('value', args.value);
  element.setAttribute('size', args.size);

  // Add the label as a text node
  element.appendChild(document.createTextNode(args.label));

  // Add the event listener
  element.addEventListener('ifxChange', action('ifxChange'));

  // Return the element
  return element;
}

export const Default = DefaultTemplate.bind({});
