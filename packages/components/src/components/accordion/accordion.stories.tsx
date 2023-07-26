import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Accordion',
  component: 'ifx-accordion',
  tags: ['autodocs'],

  argTypes: {
    amountOfItems: { control: 'number' },
  },
};

const Template = (args) => {
  const accordionElement = document.createElement('ifx-accordion');

  for (let i = 0; i < args.amountOfItems; i++) {
    const item = document.createElement('ifx-accordion-item');
    item.setAttribute('caption', `Item Title #${i + 1}`);
    item.innerHTML = `
      <p>
        Content for Item #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </p>
    `;
    item.addEventListener('ifxItemOpen', action('ifxItemOpen'));
    item.addEventListener('ifxItemClose', action('ifxItemClose'));

    accordionElement.append(item);
  }

  return accordionElement;
};

export const Default = Template.bind({});
Default.args = {
  amountOfItems: 3
};