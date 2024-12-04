import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Accordion',
  component: 'ifx-accordion',
  //tags: ['autodocs'],

  args: {
    amountOfItems: 3,
    AriaLevel: 3,
    autoCollapse: false,
  },

  argTypes: {
    amountOfItems: { 
      control: 'number', 
      name: 'Amount of Items',
      description: 'Control the number of *<ifx-accordion-item>* ',
      table: {
        category: 'story controls',
        type: {
          summary: 'number'
        }
      }
    },
    AriaLevel: {
      control: 'number', 
      min: 1, 
      max: 6, 
      description: 'The aria-level attribute for the accordion item header',
      table: {
      category: 'ifx-accordion-item props',
      type: {
        summary: 'number'
      }
    }  
  },  
    mutable: {
      control: 'boolean',
      description: 'Set the mutable attribute',
      table: {
        category: 'ifx-accordion-item props',
        defaultValue: {summary: 'true'},
        type: {
          summary: 'boolean'
        }
      }
    },
    autoCollapse: {
      control: 'boolean',
      description: 'Collapse the other items when one item is opened',
      table: {
        category: 'ifx-accordion props',
        defaultValue: { 
          summary: 'false' 
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    ifxItemOpen: { 
      action: 'ifxItemOpen',
      description: 'Event emitted when an accordion item is opened',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:`React: onIfxItemOpen={handleOpen}
            Vue: @ifxItemOpen="handleOpen"
            Angular: (ifxItemOpen)="handleOpen()"
            VanillaJs: .addEventListener("ifxItemOpen", (event) => {/*handle open*/});`
            }
          },
      },
    ifxItemClose: { 
      action: 'ifxItemClose',
      description: 'Event emitted when an accordion item is closed',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: 
          `React: onIfxItemClose={handleClose}
          Vue: @ifxItemClose="handleClose"
          Angular: (ifxItemClose)="handleClose()"
          VanillaJs: .addEventListener("ifxItemClose", (event) => {/*handle close*/});`
        }
      },
    }
  },
};

const Template = args => {
  const accordionElement = document.createElement('ifx-accordion');
  const initialItem = document.createElement('ifx-accordion-item');
  initialItem.setAttribute('caption', `Label`);
  initialItem.setAttribute('open', `true`);
  initialItem.setAttribute('aria-level', args.AriaLevel);
  initialItem.setAttribute('mutable', args.mutable);
  initialItem.addEventListener('ifxItemOpen', action('ifxItemOpen'));
  initialItem.addEventListener('ifxItemClose', action('ifxItemClose'));

  initialItem.innerHTML = `
  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
`;
initialItem.setAttribute('caption', `Label`);
  initialItem.addEventListener('ifxItemOpen', action('ifxItemOpen'));
  initialItem.addEventListener('ifxItemClose', action('ifxItemClose'));

  accordionElement.append(initialItem);

  accordionElement.setAttribute('auto-collapse', args.autoCollapse);
  for (let i = 1; i < args.amountOfItems; i++) {
    const item = document.createElement('ifx-accordion-item');
    item.setAttribute('caption', `Label`);
    item.setAttribute('open', `false`);
    item.setAttribute('aria-level', args.AriaLevel);
    item.setAttribute('mutable', args.mutable);

    item.innerHTML = `
        Content for Item #${
          i + 1
        }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
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
  mutable: true,
};
