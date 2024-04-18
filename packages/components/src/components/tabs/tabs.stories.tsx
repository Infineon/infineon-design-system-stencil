import { action } from '@storybook/addon-actions';

const tabHeaders = [
  {
    header: 'tab a',
    disabled: false,
  },
  {
    header: 'tab b',
    disabled: true,
  },
  {
    header: 'tab c',
    disabled: false,
  },
];

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],

  component: 'ifx-tabs',
  argTypes: {
    amountOfTabs: { name: 'Amount of Tabs', control: 'number' },
    orientation: {
      name: 'Orientation',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    icon: {
      name: 'Show icon',
      control: {type: 'boolean'}
    },
    iconPosition: {
      name: 'Icon position',
      options: ['before', 'after'],
      control: {type: 'radio'},
      if: {arg: 'icon', eq: true}
    },
    activeTabIndex: {
      name: 'Active tab index',
      description: 'Set a tab as active by providing the index (tab can not be disabled)',
    },

    ifxTabChange: {
      action: 'ifxTabChange',
      description: 'Custom event emitted on tab index change, containing the current (currentTab) and the previous tab (previousTab)',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxTabChange={handleChange}\nVue:@ifxTabChange="handleChange"\nAngular:(ifxTabChange)="handleChange()"\nVanillaJs:.addEventListener("ifxTabChange", (event) => {//handle change});',
        },
      },
    },
  },
};

const Template = args => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);
  tabsElement.setAttribute('active-tab-index', tabHeaders[args.activeTabIndex].disabled ? '' : args.activeTabIndex);
  tabsElement.addEventListener('ifxTabChange', action(`ifxTabChange`));
  
  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('ifx-tab');
    tabContent.setAttribute('header', tabHeaders[i].header);
    tabContent.setAttribute('disabled', tabHeaders[i].disabled.toString());
    if(args.icon){
      tabContent.setAttribute('icon', 'c-check-16');
      tabContent.setAttribute('icon-position', args.iconPosition);
    }
    tabContent.innerHTML = `
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `;
    tabsElement.append(tabContent);
  }

  return tabsElement;
};

export const Default = Template.bind({});
Default.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  activeTabIndex: 0,
  icon: false,
  iconPosition: 'before'
};

export const Disabled = Template.bind({});
Disabled.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  activeTabIndex: 2,
};
