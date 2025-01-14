import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],

  args: {
    checked: false,
    label: 'Switch',
    name: 'switch',
    value: 'switch',
  },
  argTypes: {
    name: {
      description: 'Name of the element, that is used as reference when a form is submitted.'
    },
    value: {
      description: 'The value that gets submitted, when the radio button is checked'
    },
    ifxChange: {
      description: 'Custom event emitted on change',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
      action: 'ifxChange',
    },
  },
};

const DefaultTemplate = args => {
  const element = document.createElement('ifx-switch') as HTMLIfxSwitchElement;

  // Set the attributes
  element.setAttribute('checked', args.checked);
  element.setAttribute('name', args.name);
  element.setAttribute('value', args.value);

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
