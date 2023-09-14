import { icons } from '@infineon/infineon-icons'

export default {
  title: 'Components/Tag',
  tags: ['autodocs'],

  args: {
    label: "Tag label",
  },
  argTypes: {
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
  },

}

const DefaultTemplate = (args) =>
  `<ifx-tag icon="${args.icon}">${args.label}</ifx-tag>`;

export const Default = DefaultTemplate.bind({});


export const WithIcon = DefaultTemplate.bind({});
WithIcon.args = {
  icon: 'chevron-up-16',
}
