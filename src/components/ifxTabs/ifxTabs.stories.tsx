export default {
  title: 'Components/Tabs',
  component: 'ifx-tabs',
  argTypes: {
    amountOfTabs: { control: 'number' },
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
    small: { control: 'boolean' }, // Add this line
  },
};

const Template = (args) => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);
  if (args.small) {
    tabsElement.setAttribute('small', ''); // Add this line
  }
  const tabsArray = Array.from({ length: args.amountOfTabs }, (_, i) => `Tab ${i + 1}`);
  tabsElement.tabs = tabsArray;
  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('div');
    tabContent.slot = `tab-content-${i}`;
    tabContent.innerHTML = `
      <p>
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </p>
    `;
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
  small: true, // Add this line
};