export default {
  title: "Components/Button",
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    disabled: false,
    icon: false,
  },
  argsSlot: {
    label: "Button",
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = (args) =>
  `<ifx-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}">
  ${args.label}
  </ifx-button>`;

const IconOnlyTemplate = (args) =>
  `<ifx-button variant="${args.variant}" color="${args.color}" size="${args.size}" icon-only>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" /></svg>
</ifx-button>`;

const IconToTheLeftTemplate = (args) =>
  `<ifx-button icon="yes" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" /></svg>
 ${args.label}
  </ifx-button>`;

const IconToTheRightTemplate = (args) =>
  `<ifx-button label="${args.label}" icon="yes" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}">
  ${args.label} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" /></svg>
  </ifx-button>`;

export const Default = DefaultTemplate.bind({});
export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
  color: "secondary",
  variant: 'solid'
}

export const IconOnly = IconOnlyTemplate.bind({});
IconOnly.args = {
  label: 'Label via slot',
};
export const IconToTheLeft = IconToTheLeftTemplate.bind({});
IconToTheLeft.args = {
  icon: true,
};
export const IconToTheRight = IconToTheRightTemplate.bind({});
IconToTheRight.args = {
  icon: true,
};