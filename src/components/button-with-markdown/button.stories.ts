import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
  title: "Components/ButtonWithMarkdown",
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    disabled: false,
    icon: false,
    href: "",
    iconPosition: 'left'
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
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  },
};


const DefaultTemplate = (args) =>
  `<test-button  variant="${args.variant}" href="${args.href}" target="_blank" color="${args.color}" size="${args.size}" disabled="${args.disabled}">
  ${args.label}
  </test-button>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {
  icon: {
    table: {
      disable: true,
    }
  },
  iconPosition: {
    table: {
      disable: true,
    },
  }
};
