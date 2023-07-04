export default {
  title: 'Components/Icon',
  tags: ['autodocs'],

  args: {
    icon: "c-check-16"
  },
  argTypes: {
    icon: { control: 'text' }
  },


}

const DefaultTemplate = (args) =>
  `<ifx-icon icon="${args.icon}"></ifx-icon>`;

export const Default = DefaultTemplate.bind({});

