import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Icon',
  tags: ['autodocs'],

  args: {
    icon: "c-check-16"
  },
  argTypes: {
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' }
    }
  },


}

const DefaultTemplate = (args) =>
  `<ifx-icon icon="${args.icon}"></ifx-icon>`;

export const Default = DefaultTemplate.bind({});

