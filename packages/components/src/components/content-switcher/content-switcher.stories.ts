import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Content Switcher',
  tags: ['autodocs'],

  args: {
    amountOfItems: 4,
    label: 'Item',
    value: 'item',
    icon: 'applications-16'

  },
  argTypes: {
    amountOfItems: {
      name: 'Amount of Items',
      control: { type: 'number' },
      description: 'Set the number of content-switcher-items to be rendered.',
      table: {
        category: 'story controls',
        type: {
          summary: 'number'
        }
      }
    },
    label: {
      name: 'Label',
      control: { type: 'text' },
      description: 'Set the label of the content-switcher-item.',
      table: {
        category: 'story controls',
        type: {
          summary: 'string'
        }
      }
    },
    value: {
      control: { type: 'text' },
      description: 'Set the value of the content-switcher-item.',
      table: {
        category: 'content-switcher-item props',
        type: {
          summary: 'string'
        }
      }
    },
    icon: {
      description: 'The icon of the content-switcher-item.',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
      table: {
        category: 'ifx-icon props',
        type: {
          summary: 'string'
        }
      }
    },
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event emitted when a different content-switcher-item gets selected. Contains the value of the previous and the new selected item.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    }
  },
};

const DefaultTemplate = ({ amountOfItems, label, value, icon }) => {
  const element = document.createElement('ifx-content-switcher');

  for (let i = 0; i < amountOfItems; i++) {
    const item = document.createElement('ifx-content-switcher-item');
    item.setAttribute('value', `${value} ${i + 1}`);
    item.innerHTML = `
      <ifx-icon icon="${icon}"></ifx-icon> ${label} ${i + 1}
    `;

    element.appendChild(item);
  }
  element.addEventListener('ifxChange', action('ifxChange'));

  return element;
};

export const Default = DefaultTemplate.bind({});