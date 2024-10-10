import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Content Switcher',
  tags: ['autodocs'],

  args: {
    amountOfItems: 4,

  },
  argTypes: {
    amountOfItems: {
      control: { type: 'number' },
    },    
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event emitted when a different content-switcher-item gets selected. Contains the value of the previous and the new selected item.', 
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    }
  },
};

const DefaultTemplate = ({ amountOfItems }) => {
  const element = document.createElement('ifx-content-switcher');

  for (let i = 0; i < amountOfItems; i++) {
    const item = document.createElement('ifx-content-switcher-item');
    item.setAttribute('value', `item-${i + 1}`);
    item.innerHTML = `
      <ifx-icon icon="applications-16"></ifx-icon>Item ${i + 1}
    `;

    element.appendChild(item);
  }

  element.addEventListener('ifxChange', action('ifxChange'));

  return element;
};

export const Default = DefaultTemplate.bind({});