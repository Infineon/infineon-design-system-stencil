import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Navigation/Sidebar',
  // tags: ['autodocs'],

  args: {
    icon: 'image-16',
    applicationName: 'Application Name',
    showFooter: true,
    showHeader: true,
    initialCollapse: true,
    termsOfUse: 'https://yourwebsite.com/terms',
    imprint: 'https://yourwebsite.com/imprint',
    privacyPolicy: 'https://yourwebsite.com/privacy-policy',
    copyrightText: `© 1999 - ${new Date().getFullYear()} Infineon Technologies AG`,
    numberIndicatorOfSidebarItem: "",
    hrefOfSidebarItem: 'https://google.com',
    targetOfSidebarItem: '_self',
    activeSidebarItem: false,
    isActionItem: false,
  },

  argTypes: {
    applicationName: {
      description: 'The name of the application to display at the top of the sidebar.',
      table: {
        category: 'ifx-sidebar props'
      }
    },
    showHeader: {
      description: 'Determines whether the header is displayed in the sidebar.',
      table: {
        category: 'ifx-sidebar props',
        defaultValue: {
          summary: true
        }
      }
    },
    showFooter: {
      description: 'Determines whether the footer is displayed in the sidebar.',
      table: {
        category: 'ifx-sidebar props',
        defaultValue: {
          summary: true
        }
      }
    },
    initialCollapse: {
      description: 'Determines if the sidebar should be collapsed by default when it first loads.',
      table: {
        category: 'ifx-sidebar props',
        defaultValue: {
          summary: true
        }
      }
    },
    imprint: {
      description: 'The URL link for the "Imprint" section in the sidebar footer.',
      if: { arg: 'showFooter', eq: true },
      table: {
        category: 'ifx-sidebar props'
      }
    },
    termsOfUse: {
      description: 'The URL link for the "Terms of Use" section in the sidebar footer.',
      if: { arg: 'showFooter', eq: true },
      table: {
        category: 'ifx-sidebar props'
      }
    },
    privacyPolicy: {
      description: 'The URL link for the "Privacy Policy" section in the sidebar footer.',
      if: { arg: 'showFooter', eq: true },
      table: {
        category: 'ifx-sidebar props'
      }
    },
    copyrightText: {
      description: 'The copyright text to display at the bottom of the sidebar.',
      table: {
        category: 'ifx-sidebar props'
      }
    },
    icon: {
      description: 'The icon to display for the sidebar items. Choose ***none*** to display no icon.',
      options: ['none', ...Object.values(icons).map(i => i['name'])],
      control: 'select',
      table: {
        category: 'ifx-sidebar-item props',
        defaultValue: {
          summary: 'image-16'
        }
      }
    },
    hrefOfSidebarItem: {
      name: 'href',
      description: 'The URL of the sidebar item link.',
      control: 'text',
      table: {
        category: 'ifx-sidebar-item props',
        type: {
          summary: 'string'
        },
      }
    },
    targetOfSidebarItem: {
      name: 'target',
      description: 'The target attribute of the sidebar item link.',
      control: { type: 'radio' },
      options: ['_self'],
      table: {
        category: 'ifx-sidebar-item props',
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: '_self'
        }
      }
    },
    numberIndicatorOfSidebarItem: {
      name: 'numberIndicator',
      description: 'The number indicator to display on the sidebar item.',
      control: 'text',
      table: {
        category: 'ifx-sidebar-item props',
        type: {
          summary: 'string'
        }
      }
    },
    activeSidebarItem: {
      name: 'active',
      description: 'Set to true manually or by clicking on a navigation item.',
      control: 'boolean',
      table: {
        category: 'ifx-sidebar-item props',
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    isActionItem: {
      description: 'If an item is an action item, it can not become active.',
      control: 'boolean',
      table: {
        category: 'ifx-sidebar-item props',
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        },
      }
    },
    ifxSidebarNavigationItem: {
      action: 'ifxSidebarNavigationItem',
      description: 'Custom event emitted by ifx-sidebar-item when a navigation item becomes active on selection.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
React: onIfxSidebarNavigationItem={handleChange}
Vue: @ifxSidebarNavigationItem="handleChange"
Angular: (ifxSidebarNavigationItem)="handleChange()"
VanillaJs: .addEventListener("ifxSidebarNavigationItem", (event) => {/*handle change*/});`
        }
      }
    },
    ifxSidebarActionItem: {
      action: 'ifxSidebarActionItem',
      description: 'Custom event emitted by ifx-sidebar-item when an action item is selected.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
React: onIfxSidebarActionItem={handleAction}
Vue: @ifxSidebarActionItem="handleAction"
Angular: (ifxSidebarActionItem)="handleAction()"
VanillaJs: .addEventListener("ifxSidebarActionItem", (event) => {/*handle action*/});`
        },
      }
    },
    ifxSidebarMenu: {
      action: 'ifxSidebarMenu',
      description: 'Custom event emitted by ifx-sidebar-item when a menu is expanded or closed.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
React: onIfxSidebarMenu={handleMenu}
Vue: @ifxSidebarMenu="handleMenu"
Angular: (ifxSidebarMenu)="handleMenu()"
VanillaJs: .addEventListener("ifxSidebarMenu", (event) => {/*handle menu*/});`
        },
      },
    },
  },
};

const DefaultTemplate = args => {
  // Create the sidebar element and attach event listener
  const sidebarElement = document.createElement('ifx-sidebar') as HTMLIfxSidebarElement;
  sidebarElement.setAttribute('application-name', args.applicationName);
  sidebarElement.addEventListener('ifxSidebarNavigationItem', action(`ifxSidebarNavigationItem`));
  sidebarElement.addEventListener('ifxSidebarActionItem', action(`ifxSidebarActionItem`));
  sidebarElement.addEventListener('ifxSidebarMenu', action(`ifxSidebarMenu`));

  sidebarElement.setAttribute('show-header', args.showHeader);
  sidebarElement.setAttribute('show-footer', args.showFooter);
  sidebarElement.setAttribute('initial-collapse', args.initialCollapse);
  sidebarElement.setAttribute('terms-of-use', args.termsOfUse);
  sidebarElement.setAttribute('imprint', args.imprint);
  sidebarElement.setAttribute('privacy-policy', args.privacyPolicy);
  sidebarElement.setAttribute('copyright-text', args.copyrightText);

  sidebarElement.innerHTML = `
    <ifx-sidebar-title>Menu Items</ifx-sidebar-title>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === 'none' ? '' : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === 'none' ? '' : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === 'none' ? '' : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === 'none' ? '' : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item>
    Section
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === 'none' ? '' : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item icon='image-16'>
    Menu Item
    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
    <ifx-sidebar-item active=true>Sub menu item</ifx-sidebar-item>
    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-title>Items group</ifx-sidebar-title>
    <ifx-sidebar-item href="${args.hrefOfSidebarItem}" target="${args.targetOfSidebarItem}" icon="${args.icon === 'none' ? '' : args.icon}" number-indicator="${args.numberIndicatorOfSidebarItem === "" ? '' : args.numberIndicatorOfSidebarItem}" isActionItem="${args.isActionItem}" active="${args.activeSidebarItem}">Item 1</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === 'none' ? '' : args.icon}">Item 2</ifx-sidebar-item>
  `
  return sidebarElement;
};

export const Default = DefaultTemplate.bind({});

const SubmenuTemplate = args => {
  // Create the sidebar element and attach event listener
  const sidebarElement = document.createElement('ifx-sidebar') as HTMLIfxSidebarElement;
  sidebarElement.setAttribute('application-name', args.applicationName);
  sidebarElement.addEventListener('ifxSidebarNavigationItem', action('ifxSidebarNavigationItem'));
  sidebarElement.addEventListener('ifxSidebarActionItem', action('ifxSidebarActionItem'));
  sidebarElement.addEventListener('ifxSidebarMenu', action('ifxSidebarMenu'));
  sidebarElement.setAttribute('initial-collapse', args.initialCollapse);

  // Create 3 sections
  for (let i = 0; i < 3; i++) {
    const sectionElement = document.createElement('ifx-sidebar-item');
    sectionElement.textContent = `Header Section ${i + 1}`;

    // In each section, create 3 menu items
    for (let j = 0; j < 3; j++) {
      const menuItemElement = document.createElement('ifx-sidebar-item');
      menuItemElement.setAttribute('icon', args.icon ? 'image-16' : '');
      menuItemElement.textContent = `Menu Item ${j + 1}`;

      // In the first menu item of each section, create 3 submenu items
      if (j === 0) {
        for (let k = 0; k < 3; k++) {
          const subMenuItemElement = document.createElement('ifx-sidebar-item');
          subMenuItemElement.textContent = `Sub Menu Item ${k + 1}`;
          menuItemElement.appendChild(subMenuItemElement);
        }
      }

      sectionElement.appendChild(menuItemElement);
    }
    sidebarElement.appendChild(sectionElement);
  }
  const firstSection = sidebarElement.querySelectorAll('ifx-sidebar-item')[0];
  const firstMenuItem = firstSection.querySelectorAll('ifx-sidebar-item')[0];

  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('active', 'true'); //first submenu item
  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('is-action-item', 'false');

  firstMenuItem.querySelectorAll('ifx-sidebar-item')[1].setAttribute('is-action-item', 'true'); //2nd submenu item
  firstMenuItem.querySelectorAll('ifx-sidebar-item')[2].setAttribute('is-action-item', 'true'); //3rd sub menu item

  return sidebarElement;
};

export const WithSubmenu = SubmenuTemplate.bind({});

const NumberIndicatorTemplate = () =>
  `<ifx-sidebar application-name="Application name">
  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item active="false">
    Header Section
    <ifx-sidebar-item icon="image-16" active="false" >
      Second layer
      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      3rd layer Menu Item
      </ifx-sidebar-item>

      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      This Page
      </ifx-sidebar-item>

      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      3rd layer Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item icon="image-16" active="false">
      Second layer
      <ifx-sidebar-item target="_blank" icon="image-16" active="false">
      Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item icon="image-16" active="false">
      Second layer
      <ifx-sidebar-item target="_blank" icon="image-16" active="false">
      Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  

  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item active="false" is-action-item="false" target="_blank" icon="image-16">
    Sub Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item is-action-item="true" icon="image-16">
    This one too
    </ifx-sidebar-item>
    <ifx-sidebar-item is-action-item="false" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>


  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>
</ifx-sidebar>`;

export const WithNumberIndicator = NumberIndicatorTemplate.bind({});
