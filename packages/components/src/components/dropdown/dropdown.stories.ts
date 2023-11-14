import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons'

export default {
  title: 'Components/Dropdown',
  args: {
    label: "Dropdown",
    size: "m",
    disabled: false,
    search: false,
    header: false,
    separator: false,
    variant: "primary",
    url: "",
    target: "_self",
    icon: "c-check-16",
    dropdownMenuItemIcon: false,
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
        'left-end'
      ],
      control: { type: 'select' },

    },
    label: { description: 'The visible name or label for the dropdown button' },
    size: {
      description: "Font Size options: s (14px) and m (16px) - default: m",
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    disabled: { description: 'Determines if the dropdown button should be disabled' },
    variant: {
      description: 'The visual style of the dropdown button. Accepted values are "primary", "secondary", "tertiary"',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },

    target: {
      options: ['_self', '_blank'],
      control: { type: 'radio' },
    },

    icon: {
      description: 'The icon to be displayed on the dropdown button',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
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
          detail: 'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});',
        },
      },
    },
    ifxClose: {
      action: 'ifxClose',
      description: 'Custom event emitted when dropdown closes',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});',
        },
      },
    },
    ifxDropdownMenuItem: {
      action: 'ifxDropdownMenuItem',
      description: 'Custom event emitted when an item is selected',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxDropdownMenuItem={handleChange}\nVue:@ifxDropdownMenuItem="handleChange"\nAngular:(ifxDropdownMenuItem)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});',
        },
      },
    }
  },
}

const DefaultTemplate = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-dropdown placement="${args.placement}" disabled="${args.disabled}" no-close-on-menu-click="${args.noCloseOnOutsideClick}">
  <ifx-dropdown-trigger-button variant="${args.variant}">
    dropdown
  </ifx-dropdown-trigger-button>
  <ifx-dropdown-menu size="${args.size}">
    ${args.header ? `<ifx-dropdown-header>Header Text</ifx-dropdown-header>` : ""}
    ${args.search ? `<ifx-search-field show-delete-icon="false"></ifx-search-field>` : ""}
    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? 'c-info-16' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? 'c-info-16' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? 'c-info-16' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? 'c-info-16' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>
    ${args.separator ? `<ifx-dropdown-separator></ifx-dropdown-separator>` : ""}
    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? 'c-info-16' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>
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

const LabelTriggerTemplate = (args) => {
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
    <ifx-dropdown-menu>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
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