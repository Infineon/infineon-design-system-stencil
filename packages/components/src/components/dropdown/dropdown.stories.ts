import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  args: {
    Label: 'Dropdown',
    variant: 'primary',
    disabled: false,
    icon: 'c-check-16',
    size: 'm',
    Search: false,
    Header: false,
    href: '',
    target: '_self',
    Separator: false,
    DropDownMenuItemIcon: false,
    defaultOpen: false,
    noCloseOnOutsideClick: false,
    noCloseOnMenuClick: false,
    noAppendToBody: false,
    placement: 'bottom-start',
  },
  argTypes: {
    placement: {
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
      control: { type: 'select' },
    },
    Label: { 
      description: 'The visible name or label for the dropdown button',
      // if: { arg: 'Type', eq: 'Default' }
    },
    size: {
      description: 'Font Size options for menu items: s (14px) and m (16px) - default: m',
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    disabled: { description: 'Determines if the dropdown button should be disabled' },
    variant: {
      description: 'The visual style of the dropdown button. Accepted values are "primary", "secondary", "tertiary"',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      // if: { arg: 'Type', eq: 'Default' }
    },

    target: {
      options: ['_self', '_blank'],
      control: { type: 'radio' },
    },
    href: {
      description: 'href link to menu item'
    },
    icon: {
      description: 'The icon to be displayed on the dropdown button',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
      // if: { arg: 'Type', eq: 'Label Trigger' }
    },
    Search :{
      description: 'Show Search Bar'
    },
    Header: {
      description: 'Add Header Text'
    },
    Separator:{
      description: 'Use seperator in dropdown'
    },
    DropDownMenuItemIcon: {
      description: 'Show menu item icon in dropdown'
    },
    defaultOpen: { description: 'Determines if the dropdown should be open by default' },
    noCloseOnOutsideClick: { description: 'Determines if the dropdown should not close when a click outside the dropdown happens' },
    noCloseOnMenuClick: { description: 'Determines if the dropdown should not close when a click inside the dropdown menu happens' },
    noAppendToBody: { description: 'Determines if the dropdown should not be appended to the body' },
    ifxOpen: {
      action: 'ifxOpen',
      description: 'Custom event that is emitted when the dropdown opens',
      table: {
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
      ${args.Label}
    </ifx-dropdown-trigger-button>

  <ifx-dropdown-menu size="${args.size}">
    ${args.Header ? `<ifx-dropdown-header>Header Text</ifx-dropdown-header>` : ''}
    ${args.Search ? `<ifx-search-field show-delete-icon="false"></ifx-search-field>` : ''}
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    ${args.Separator ? `<ifx-dropdown-separator></ifx-dropdown-separator>` : ''}
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
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
Default.argTypes = {
  icon: {
    table: {
      disable: true
    }
  }
}



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
      <ifx-icon icon="${args.icon}"></ifx-icon>
    </ifx-dropdown-trigger>
    Some more text
  <ifx-dropdown-menu size="${args.size}">
    ${args.Header ? `<ifx-dropdown-header>Header Text</ifx-dropdown-header>` : ''}
    ${args.Search ? `<ifx-search-field show-delete-icon="false"></ifx-search-field>` : ''}
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
    ${args.Separator ? `<ifx-dropdown-separator></ifx-dropdown-separator>` : ''}
    <ifx-dropdown-item icon="${args.DropDownMenuItemIcon ? 'c-info-16' : ''}" target="${args.target}" href="${args.href !== '' ? args.href : ''}">Menu Item</ifx-dropdown-item>
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
  Label: {
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
