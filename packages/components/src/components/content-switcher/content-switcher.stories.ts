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
  },
};

const DefaultTemplate = ({ amountOfItems }) => {
  const element = document.createElement('ifx-content-switcher');

  for (let i = 0; i < amountOfItems; i++) {
    const item = document.createElement('ifx-content-switcher-item');
    item.innerHTML = `
      <ifx-icon icon="applications-16"></ifx-icon>Item ${i + 1}
    `;

    element.appendChild(item);
  }

  return element;
};

export const Default = DefaultTemplate.bind({});