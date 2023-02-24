export default {
  title: "Components/Alert",
  args: {
    label: 'Attention! This is an alert message — check it out!',
    color: "primary",
    icon: true,
    iconType: 'c-info-24',
  },

  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },

    iconType: {
      options: ['c-info-24', 'calendar-24', 'download-24', 'upload-24'],
      control: { type: 'select' }
    }

  }
};


const DefaultTemplate = (args) =>
  `<ifx-alert  color="${args.color}" icon="${args.icon ? args.iconType : ""}">${args.label}</ifx-alert>`;

export const Default = DefaultTemplate.bind({});
