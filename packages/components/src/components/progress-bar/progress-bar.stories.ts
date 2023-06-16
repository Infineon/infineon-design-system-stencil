import { action } from '@storybook/addon-actions';

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


const Template = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <ifx-progress-bar
      value="${args.percentage}"
      size="${args.size}"
      show-label="${args.showLabel}"
    ></ifx-progress-bar>
  `;

  const progressBar = wrapper.querySelector('ifx-progress-bar');
  progressBar.addEventListener('ifxChange', (event: CustomEvent<Event>) => {
    console.log('Percentage:', event);
    action('Percentage:')(event);
  });


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