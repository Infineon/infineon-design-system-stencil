import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],

  args: {
    value: false,
    disabled: false,

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
  }
};


const DefaultTemplate = (args) => {
  const element = document.createElement('ifx-switch') as HTMLIfxSwitchElement;

  // Set the attributes
  element.setAttribute('disabled', args.disabled);
  element.setAttribute('value', args.value);

  // Add the event listener
  element.addEventListener('ifxChange', action('ifxChange'));

  // Return the element
  return element;

};

export const Default = DefaultTemplate.bind({});

