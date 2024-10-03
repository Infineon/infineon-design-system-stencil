import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Accordion',
  component: 'ifx-accordion',
  //tags: ['autodocs'],

  args: {
    autoCollapse: false,
  },

  argTypes: {
    amountOfItems: { control: 'number' },
  },
};

const Template = args => {
  const accordionElement = document.createElement('ifx-accordion');
  const initialItem = document.createElement('ifx-accordion-item');
  initialItem.setAttribute('caption', `Label`);
  initialItem.setAttribute('open', `true`);

  initialItem.innerHTML = `
  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
`;
  initialItem.addEventListener('ifxItemOpen', action('ifxItemOpen'));
  initialItem.addEventListener('ifxItemClose', action('ifxItemClose'));

  accordionElement.append(initialItem);

  accordionElement.setAttribute('auto-collapse', args.autoCollapse);
  for (let i = 1; i < args.amountOfItems; i++) {
    const item = document.createElement('ifx-accordion-item');
    item.setAttribute('caption', `Label`);
    item.setAttribute('open', `false`);

    item.innerHTML = `
        Content for Item #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `;
    item.addEventListener('ifxItemOpen', action('ifxItemOpen'));
    item.addEventListener('ifxItemClose', action('ifxItemClose'));

    accordionElement.append(item);
  }

  return accordionElement;
};

export const Default = Template.bind({});
Default.args = {
  amountOfItems: 3,
};
