import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],

  component: 'ifx-tabs',
  argTypes: {
    amountOfTabs: { name: 'Amount of Tabs', control: 'number' },
    lastTabDisabled: { name: 'Last tab disabled', control: 'boolean' },
    orientation: {
      name: 'Orientation',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    ifxTabIndex: {
      action: 'ifxTabIndex',
      description: 'Custom event emitted on tab index change',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxTabIndex={handleChange}\nVue:@ifxTabIndex="handleChange"\nAngular:(ifxTabIndex)="handleChange()"\nVanillaJs:.addEventListener("ifxTabIndex", (event) => {//handle change});',
        },
      },
    }
  },
};

const Template = (args) => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);

  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));
  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('ifx-tab');
    tabContent.setAttribute('header', `tab header ${i + 1}`);
    tabContent.setAttribute('disabled', 'false');
    if (i === args.amountOfTabs - 1) {
      tabContent.setAttribute('disabled', `${args.lastTabDisabled}`);
    }
    tabContent.innerHTML = `
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `;
    tabContent.addEventListener('tabBecameActive', action(`tabBecameActive (tab #${i})`));
    tabContent.addEventListener('tabBecameInactive', action(`tabBecameInactive (tab #${i})`));
    tabsElement.append(tabContent);
  }

  return tabsElement;
};

export const Default = Template.bind({});
Default.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  lastTabDisabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  lastTabDisabled: true
};
