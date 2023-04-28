import { action } from '@storybook/addon-actions';
import prettier from 'prettier';

export default {
  title: 'Components/Tabs',
  component: 'ifx-tabs',
  argTypes: {
    amountOfTabs: { name: 'Amount of Tabs', control: 'number' },
    orientation: { name: 'Orientation', control: { type: 'select', options: ['horizontal', 'vertical'] } },
    small: { name: 'Small', control: 'boolean' }, // Add this line
  },
};

const Template = (args) => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);
  if (args.small) {
    tabsElement.setAttribute('small', '');
  }
  tabsElement.addEventListener('tabChange', action(`tabChange`));
  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('ifx-tab');
    tabContent.setAttribute('header', `tab header ${i + 1}`);
    tabContent.innerHTML = `
      <p>
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </p>
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
};

export const Small = Template.bind({});
Small.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  small: true,
};
