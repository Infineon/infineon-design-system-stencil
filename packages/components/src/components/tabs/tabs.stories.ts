import { icons } from "@infineon/infineon-icons";
import { action } from "storybook/actions"; 
export default {
	title: "Components/Tabs",
	tags: ["autodocs"],

  component: 'ifx-tabs',
  args: {
    amountOfTabs: 3,
    orientation: 'horizontal',
    icon: '',
    header: 'Tab',
    subline: 'This could be a small text',
    disabled: false,
    fullWidth: false,
    variant: 'default',
    sticky: false,
    label: "Label",
    number: 1,
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
      options: Object.keys(icons),
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
    fullWidth: {
      control: { type: 'boolean' },
      description: "Adds flex: 1 to the ifx-tab child components, thus making them occupy the full width of their parent",
      table: {
        category: 'ifx-tabs props',
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
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
    subline: {
      control: 'text',
      description: 'Set the subline of the advanced tab.',
      table: {
        defaultValue: { summary: 'This could be a small text' },
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
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event that is emitted when the active tab changes.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    },
    variant: {
      options: ['default', 'advanced'],
      control: { type: 'radio' },
      description: 'Set the variant of the tabs.',
      table: {
        category:
          'ifx-tabs props',
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'default | advanced'
        }
      }
    },
    label: {
      control: "text",
      description: "Set Text of Label",
      table: {
        category: 'ifx-tab props',
        defaultValue: {
          summary: "Label",
        },
        type: {
          summary: "string",
        },
      },
    },
    number: {
			name: "number",
			description: "Sets the number displayed on the Indicator.",
			table: {
				category: 'ifx-tab props',
			},
		},
    sticky: {
      control: { type: 'boolean' },
      description: "Makes the tabs stick to the top of the page when scrolling.",
      table: {
        category: 'ifx-tabs props',
        defaultValue: {
          summary: 'false'
        },
      }
    },
  },
};

const Template = (args: { orientation: string; activeTabIndex: string; fullWidth: string; variant: string; sticky: string; amountOfTabs: number; header: any; disabled: string; icon: string; iconPosition: string; subline: string; label: string; number: number; }) => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLTableElement;
  tabsElement.setAttribute('orientation', args.orientation);
  tabsElement.setAttribute('active-tab-index', args.activeTabIndex);
  tabsElement.setAttribute('full-width', args.fullWidth);
  tabsElement.setAttribute('variant', args.variant);
  tabsElement.setAttribute('sticky', args.sticky);
  tabsElement.addEventListener('ifxChange', action(`ifxChange`));

  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('ifx-tab');
    tabContent.setAttribute('header', `${args.header} ${i + 1}`);
    if (i == 1) {
      tabContent.setAttribute('disabled', args.disabled);
    }
    var icon = args.icon === 'none' ? '' : args.icon;
    tabContent.setAttribute('icon', icon);
    tabContent.setAttribute('icon-position', args.iconPosition);
    tabContent.setAttribute('subline',args.subline);
    tabContent.setAttribute('label', args.label);
    tabContent.setAttribute('number', String(args.number));

    
    tabContent.innerHTML = `
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `;
		tabsElement.append(tabContent);
	}

	return tabsElement;
};

export const Default:any = Template.bind({});
Default.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  activeTabIndex: 0,
  icon: '',
  iconPosition: 'left',
  header: 'Tab',
  subline: 'This could be a small text',
  disabled: false,
  variant: 'default',
  sticky: false,
  label: 'Label',
  number: 1,
};

export const Advanced:any = Template.bind({});
Advanced.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  activeTabIndex: 0,
  icon: '',
  iconPosition: 'left',
  header: 'Tab',
  subline: 'This could be a small text',
  disabled: false,
  variant: 'advanced',
  sticky: false,
  label: 'Label',
  number: 1,
};
