import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],

  component: 'ifx-tabs',
  args: {
    amountOfTabs: 3,
    orientation: 'horizontal',
    icon: '',
    header: 'Tab',
    disabled: false,
  },
  argTypes: {
    amountOfTabs: {
      name: 'Amount of Tabs', control: 'number',
      description: 'Set the number of tabs.',
      table: {
        category: 'story controls',
        type: {
          summary: 'number'
        }
      }
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      description: 'Set the orientation of the tabs.',
      table: {
        category:
          'ifx-tabs props',
        defaultValue: {
          summary: 'horizontal',
        },
        type: {
          summary: 'horizontal | vertical'
        }
      }
    },
    icon: {
      name: 'icon',
      control: { type: 'select' },
      options: ['none', ...Object.values(icons).map(i => i['name'])],
      description: 'Set the icon of the tab. Choose "none" to display no icon.',
      table: {
        category: 'ifx-tab props',
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: 'Set the position of the icon.',
      table: {
        category: 'ifx-tab props',
        defaultValue: {
          summary: 'left'
        },
        type: {
          summary: 'left | right'
        },
      },
    },
    activeTabIndex: {
      description: 'Set the tab as active by providing the index (tab can not be disabled).',
      table: {
        category: 'ifx-tabs props',
        defaultValue: { summary: '0' },
        type: {
          summary: 'number'
        }
      }
    },
    header: {
      control: 'text',
      description: 'Set the header of the tab.',
      table: {
        defaultValue: { summary: 'Tab' },
        category: 'ifx-tab props',
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Set the tab to disabled. In the storybook, the second tab will be disabled.',
      table: {
        category: 'ifx-tab props',
        defaultValue: { summary: 'false' },
      }
    },
    ifxTabChange: {
      action: 'ifxTabChange',
      description: 'Custom event emitted on tab index change, containing the current (currentTab) and the previous tab (previousTab).',
      table: {
        category: 'custom events',
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
  tabsElement.setAttribute('active-tab-index', args.activeTabIndex);
  tabsElement.addEventListener('ifxTabChange', action(`ifxTabChange`));

  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('ifx-tab');
    tabContent.setAttribute('header', `${args.header} ${i + 1}`);
    if (i == 1) {
      tabContent.setAttribute('disabled', args.disabled);
    }
    var icon = args.icon === 'none' ? '' : args.icon;
    tabContent.setAttribute('icon', icon);
    tabContent.setAttribute('icon-position', args.iconPosition);
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
  icon: '',
  iconPosition: 'left',
  header: 'Tab',
  disabled: false,
};