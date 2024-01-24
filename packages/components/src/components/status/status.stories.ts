export default {
  title: 'Components/Status',
  tags: ['autodocs'],

  args: {
    label: "text",
    color: "orange",
    hasBorder: true,
  },
  argTypes: {

    hasBorder: {
      control: 'boolean',
      attr: 'hasBorder',
    },
    color: {
      options: ['orange', 'ocean', 'grey', 'light-grey', 'red', 'green', 'berry'],
      control: { type: 'radio' },
    },
  },
}

const DefaultTemplate = (args) =>
  `<ifx-status label="${args.label}" color="${args.color}" has-border="${args.hasBorder}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}
