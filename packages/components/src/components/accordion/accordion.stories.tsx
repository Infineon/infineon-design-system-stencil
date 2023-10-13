import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Accordion',
  component: 'ifx-accordion',
  tags: ['autodocs'],

  args: { 
    autoCollapse: false
  },

  argTypes: {
    amountOfItems: { control: 'number' },
    ifxItemOpen: {
      action: 'ifxItemOpen',
      description: 'Custom event emitted when accordion-item is opened',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onifxItemOpen={handleChange}\nVue:@ifxItemOpen="handleChange"\nAngular:(ifxItemOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxItemOpen", (event) => {//handle change});',
        },
      },
    },
    ifxItemClose: {
      action: 'ifxItemClose',
      description: 'Custom event emitted when accordion-item is closed',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onifxItemClose={handleChange}\nVue:@ifxItemClose="handleChange"\nAngular:(ifxItemClose)="handleChange()"\nVanillaJs:.addEventListener("ifxItemClose", (event) => {//handle change});',
        },
      },
    }
  },
};

const Template = (args) => {
  const accordionElement = document.createElement('ifx-accordion');
  accordionElement.setAttribute('auto-collapse', args.autoCollapse)
  for (let i = 0; i < args.amountOfItems; i++) {
    const item = document.createElement('ifx-accordion-item');
    item.setAttribute('caption', `Label`);
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
  amountOfItems: 3
};