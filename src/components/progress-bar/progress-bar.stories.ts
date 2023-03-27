export default {
  title: 'Components/Progress Bar',
  args: {
    size: "m",
    percentage: 50,
    showLabel: false,

  },
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100 },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = (args) =>
  `<ifx-progress-bar percentage="${args.percentage}" size="${args.size}" show-label="${args.showLabel}" label="${args.percentage}%"></ifx-progress-bar>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
};

export const Small = DefaultTemplate.bind({});
Small.args = {
  percentage: 75,
  size: 's',

};

export const WithLabel = DefaultTemplate.bind({});
WithLabel.args = {
  percentage: 25,
  showLabel: true,

};