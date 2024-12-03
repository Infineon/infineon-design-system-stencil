import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  args: {
    disabled: false,
    defaultOpen: false,
    noCloseOnOutsideClick: false,
    noCloseOnMenuClick: false,
    noAppendToBody: false,
    label: 'Dropdown',
    variant: 'primary',
    placement: 'bottom-start',
    size: 'm',
    searchField: false,
    header: false,
    separator: false,
    href: '',
    target: '_self',
    showIcon: false,
    icon: 'c-info-16',
  },
  argTypes: {
    placement: {
      description: 'Specifies the position of the dropdown relative to its trigger element.',
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end',
      ],
      control: 'select',
      table: {
        category: 'ifx-dropdown props',
        defaultValue: {
          summary: 'bottom-start'
        }
      }
    },
    label: { 
      description: 'The visible name or label for the dropdown button',
      table: {
        category: 'ifx-dropdown-trigger-button props',
        defaultValue: {
          summary: 'Dropdown'
        }
      }
      // if: { arg: 'Type', eq: 'Default' }
    },
    size: {
      description: 'Font Size options for menu items: s (14px) and m (16px) - default: m',
      options: ['s', 'm'],
      control: 'radio',
      table: {
        category: 'ifx-dropdown-menu props',
        defaultValue: {
          summary: 'm'
        }
      }
    },
    disabled: { 
      description: 'Determines if the dropdown button should be disabled',
      control: 'boolean',
      table: {
        category: 'ifx-dropdown props',
        defaultValue: {
          summary: false
        }
      }
    },
    variant: {
      description: 'The visual style of the dropdown button. Accepted values are "primary", "secondary", "tertiary"',
      options: ['primary', 'secondary', 'tertiary'],
      control: 'radio',
      table: {
        category: 'ifx-dropdown-trigger-button props',
        defaultValue: {
          summary: 'primary'
        }
      }
      // if: { arg: 'Type', eq: 'Default' }
    },

    target: {
      description: 'Determines where to open the linked document when the dropdown item is clicked.',
      options: ['_self', '_blank'],
      control: 'radio',
      table: {
        category: 'ifx-dropdown-item props',
        defaultValue: {
          summary: '_self'
        }
      }
    },
    href: {
      description: 'href link to menu item',
      table: {
        category: 'ifx-dropdown-item props'
      }
    },
    icon: {
      description: 'The icon to be displayed on the dropdown button',
      options: Object.values(icons).map(i => i['name']),
      control: 'select',
      if: { arg: 'showIcon', eq: true },
      table: {
        category: 'ifx-dropdown-item props',
        defaultValue: {
          summary: 'c-info-16'
        }
      }
      // if: { arg: 'Type', eq: 'Label Trigger' }
    },
    searchField :{
      description: 'Show Search Bar',
      table: {
        category: 'ifx-dropdown-menu props',
        defaultValue: {
          summary: false
        }
      }
    },
    header: {
      description: 'Add Header Text',
      table: {
        category: 'ifx-dropdown-menu props',
        defaultValue: {
          summary: false
        }
      }
    },
    separator:{
      description: 'Use separator in dropdown',
      table: {
        category: 'ifx-dropdown-menu props',
        defaultValue: {
          summary: false
        }
      }
    },
    showIcon: {
      description: 'Show menu item icon in dropdown',
      control: 'boolean',
      table: {
        category: 'ifx-dropdown-item props',
        defaultValue: {
          summary: false
        }
      }
    },
    defaultOpen: { 
      description: 'Determines if the dropdown should be open by default',
      control: 'boolean',
      table: {
        category: 'ifx-dropdown props',
        defaultValue: {
          summary: false
        }
      }
    },
    noCloseOnOutsideClick: { 
      description: 'Determines if the dropdown should not close when a click outside the dropdown happens',
      control: 'boolean',
      table: {
        category: 'ifx-dropdown props',
        defaultValue: {
          summary: false
        }
      }
    },
    noCloseOnMenuClick: { 
      description: 'Determines if the dropdown should not close when a click inside the dropdown menu happens',
      control: 'boolean',
      table: {
        category: 'ifx-dropdown props',
        defaultValue: {
          summary: false
        }
      }
    },
    noAppendToBody: { 
      description: 'Determines if the dropdown should not be appended to the body',
      control: 'boolean',
      table: {
        category: 'ifx-dropdown props',
        defaultValue: {
          summary: false
        }
      }
    },
    ifxOpen: {
      action: 'ifxOpen',
      description: 'Custom event that is emitted when the dropdown opens',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});',
        },
      },
    },
    ifxClose: {
      action: 'ifxClose',
      description: 'Custom event emitted when dropdown closes',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});',
        },
      },
    },
    ifxDropdownMenuItem: {
      action: 'ifxDropdownMenuItem',
      description: 'Custom event emitted when an item is selected',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxDropdownMenuItem={handleChange}\nVue:@ifxDropdownMenuItem="handleChange"\nAngular:(ifxDropdownMenuItem)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});',
        },
      },
    },
  },
};

const DefaultTemplate = args => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-dropdown placement="${args.placement}" 
  disabled="${args.disabled}" 
  default-open="${args.defaultOpen}"
  no-close-on-outside-click="${args.noCloseOnOutsideClick}"
  no-close-on-menu-click="${args.noCloseOnOutsideClick}"
  no-append-to-body="${args.noAppendToBody}">

    <ifx-dropdown-trigger-button variant="${args.variant}">
      ${args.label}
    </ifx-dropdown-trigger-button>

  <ifx-dropdown-menu size="${args.size}">
    ${args.header ? `<ifx-dropdown-header>Header Text</ifx-dropdown-header>` : ''}
    ${args.searchField ? `<ifx-search-field show-delete-icon="false"></ifx-search-field>` : ''}
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    ${args.separator ? `<ifx-dropdown-separator></ifx-dropdown-separator>` : ''}
    <ifx-dropdown-item icon="${args.showIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;

  const dropdown = wrapper.querySelector('ifx-dropdown') as HTMLElement;
  const dropdownMenu = dropdown.querySelector('ifx-dropdown-menu');

  dropdown.addEventListener('ifxOpen', action('ifxOpen'));
  dropdown.addEventListener('ifxClose', action('ifxClose'));
  dropdownMenu.addEventListener('ifxDropdownMenuItem', action('ifxDropdownMenuItem'));

  return wrapper;
};

export const Default = DefaultTemplate.bind({});


const LabelTriggerTemplate = args => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-dropdown
    placement="${args.placement}"
    default-open="${args.defaultOpen}"
    no-close-on-outside-click="${args.noCloseOnOutsideClick}"
    no-close-on-menu-click="${args.noCloseOnOutsideClick}"
    disabled="${args.disabled}"
    no-append-to-body="${args.noAppendToBody}"
  >
    Hello World! Click on the text to open the dropdown
    <ifx-dropdown-trigger>
      <ifx-icon icon="${'c-check-16'}"></ifx-icon>
    </ifx-dropdown-trigger>
    Some more text
  <ifx-dropdown-menu size="${args.size}">
    ${args.header ? `<ifx-dropdown-header>Header Text</ifx-dropdown-header>` : ''}
    ${args.search ? `<ifx-search-field show-delete-icon="false"></ifx-search-field>` : ''}
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    ${args.separator ? `<ifx-dropdown-separator></ifx-dropdown-separator>` : ''}
    <ifx-dropdown-item icon="${args.showIcon ? args.icon : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;

  const dropdown = wrapper.querySelector('ifx-dropdown') as HTMLElement;
  const dropdownMenu = dropdown.querySelector('ifx-dropdown-menu');

  dropdown.addEventListener('ifxOpen', action('ifxOpen'));
  dropdown.addEventListener('ifxClose', action('ifxClose'));
  dropdownMenu.addEventListener('ifxDropdownMenuItem', action('ifxDropdownMenuItem'));

  return wrapper;
};

export const LabelTrigger = LabelTriggerTemplate.bind({});
LabelTrigger.argTypes = {
  label: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true
    }
  }
}
