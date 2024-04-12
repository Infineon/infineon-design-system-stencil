export default {
  title: 'Components/Progress Bar',
  tags: ['autodocs'],

  args: {
    size: 'm',
    percentage: 50,
    showLabel: false,
  },
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100 },
    },
    size: {
      description: 'Size options: s (36px) and m (40px) - default: m',
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <ifx-progress-bar
      value="${args.percentage}"
      size="${args.size}"
      show-label="${args.showLabel}"
    ></ifx-progress-bar>
  `;

  return wrapper.innerHTML;
};

export const Default = Template.bind({});
Default.args = {
  size: 'm',
  percentage: 50,
  showLabel: false,
};

export const Small = Template.bind({});
Small.args = {
  percentage: 75,
  size: 's',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  percentage: 25,
  showLabel: true,
};
