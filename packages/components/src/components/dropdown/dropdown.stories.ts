import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons'

export default {
  title: 'Components/Dropdown',
  args: {
    label: "Dropdown",
    size: "m",
    disabled: false,
    variant: "solid",
    color: "primary",
    icon: "c-check-16",
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
    size: { description: 'The size of the dropdown. Accepted values are "s" for small and "m" for medium' },
    disabled: { description: 'Determines if the dropdown button should be disabled' },
    variant: {
      description: 'The visual style of the dropdown button. Accepted values are "solid", "outline", "outline-text"',
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      description: 'The color scheme of the dropdown button. Accepted values are "primary", "secondary", "success", "danger", "warning"',
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    icon: {
      description: 'The icon to be displayed on the dropdown button',

      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    defaultOpen: { description: 'Determines if the dropdown should be open by default' },
    position: { description: 'The position of the dropdown. Accepted values are "left" and "right"' },
    noCloseOnOutsideClick: { description: 'Determines if the dropdown should not close when a click outside the dropdown happens' },
    noCloseOnMenuClick: { description: 'Determines if the dropdown should not close when a click inside the dropdown menu happens' },
    noAppendToBody: { description: 'Determines if the dropdown should not be appended to the body' },
    ifxOpen: {
      action: 'ifxOpen',
      table: {
        type: { summary: 'Event' },
        description: 'Event that is emitted when the dropdown opens'
      }
    },
    ifxClose: {
      action: 'ifxClose',
      table: {
        type: { summary: 'Event' },
        description: 'Event that is emitted when the dropdown closes'
      }
    },
  },
}

const DefaultTemplate = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-dropdown
    placement="${args.placement}"
    ${args.defaultOpen ? 'default-open' : ''}
    ${args.noCloseOnOutsideClick ? 'no-close-on-outside-click' : ''}
    ${args.noCloseOnMenuClick ? 'no-close-on-menu-click' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.noAppendToBody ? 'no-append-to-body' : ''}
  >
    <ifx-dropdown-trigger-button
      size="${args.size}"
      variant="${args.variant}"
      color="${args.color}"
      icon="${args.icon}"
      type="${args.type}"
    >${args.label}</ifx-dropdown-trigger-button>
    <ifx-dropdown-menu>
      <ifx-dropdown-item target="_blank" href="https://www.google.de">Link Item</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item href="javascript:void(0)">Console log from click event</ifx-dropdown-item>
      <ifx-dropdown-item icon="c-check-16">Item with Icon</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-dropdown>`;

  const dropdown = wrapper.firstChild;
  dropdown.addEventListener('ifxOpen', action('ifxOpen'));
  dropdown.addEventListener('ifxClose', action('ifxClose'));

  return wrapper;
};

export const Default = DefaultTemplate.bind({});

const LabelTriggerTemplate = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-dropdown
    placement="${args.placement}"
    ${args.defaultOpen ? 'default-open' : ''}
    ${args.noCloseOnOutsideClick ? 'no-close-on-outside-click' : ''}
    ${args.noCloseOnMenuClick ? 'no-close-on-menu-click' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.noAppendToBody ? 'no-append-to-body' : ''}
  >
    Hello World! Click on the text to open the dropdown
    <ifx-dropdown-trigger>
      <ifx-icon icon="${args.icon}"></ifx-icon>
    </ifx-dropdown-trigger>
    Some more text
    <ifx-dropdown-menu>
      <ifx-dropdown-item target="_blank" href="https://www.google.de">Link Item</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item href="javascript:void(0)">Console log from click event</ifx-dropdown-item>
      <ifx-dropdown-item icon="c-check-16">Item with Icon</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-dropdown>`;

  const dropdown = wrapper.firstChild;
  dropdown.addEventListener('ifxOpen', action('ifxOpen'));
  dropdown.addEventListener('ifxClose', action('ifxClose'));

  return wrapper;
};

export const LabelTrigger = LabelTriggerTemplate.bind({});