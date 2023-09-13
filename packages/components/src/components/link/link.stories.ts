export default {
  title: "Components/Link",
  tags: ['autodocs'],

  args: {
    label: 'Link',
    href: "",
    target: '_blank',
    size: 'm',
    variant: 'bold'
  },

  argTypes: {
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    },
    size: {
      options: ['s', 'm', 'l', 'xl'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['bold', 'underlined', 'title', 'menu'],
      control: { type: 'radio' }
    }
  },
};


const DefaultTemplate = (args) =>
  `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >
  ${args.label}
  </ifx-link>`;


export const Default = DefaultTemplate.bind({});

const TemplateWithIcon = (args) =>
  `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >
  ${args.label}
  <ifx-icon icon="arrow-right-16"></ifx-icon>
  </ifx-link>`;


export const WithIcon = TemplateWithIcon.bind({});


