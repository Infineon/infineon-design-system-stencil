import { icons } from '@infineon/infineon-icons';

export default {
  title: "Components/Alert",
  tags: ['autodocs'],

  args: {
    label: 'Attention! This is an alert message — check it out!',
    color: "primary",
    showIcon: true,
    iconName: 'c-info-24',
  },

  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },

    iconName: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' }
    }

  }
};


const DefaultTemplate = (args) =>
  `<ifx-alert color="${args.color}" icon="${args.showIcon ? args.iconName : ""}">${args.label}</ifx-alert>`;

export const Default = DefaultTemplate.bind({});
