import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons'

export default {
  title: 'Components/Slider',
  component: 'ifx-slider',
  tags: ['autodocs'],

  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    showPercentage: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    rightIcon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    leftText: { control: 'text' },
    rightText: { control: 'text' },
  },
};

const Template = (args) => {
  const sliderElement = document.createElement('ifx-slider');
  sliderElement.setAttribute('value', args.value);
  sliderElement.setAttribute('min', args.min);
  sliderElement.setAttribute('max', args.max);
  if (args.showPercentage) {
    sliderElement.setAttribute('show-percentage', 'true');
  }
  if (args.disabled) {
    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute
  }

  if (args.leftIcon) {
    sliderElement.setAttribute('left-icon', args.leftIcon);
  }
  if (args.rightIcon) {
    sliderElement.setAttribute('right-icon', args.rightIcon);
  }
  if (args.leftText) {
    sliderElement.setAttribute('left-text', args.leftText);
  }
  if (args.rightText) {
    sliderElement.setAttribute('right-text', args.rightText);
  }
  sliderElement.addEventListener('ifxChange', action('ifxChange'));

  return sliderElement;
};

export const Default = Template.bind({});
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  showPercentage: false,
  disabled: false,
};

export const WithPercentageDisplay = Template.bind({});
WithPercentageDisplay.args = {
  value: 50,
  min: 0,
  max: 100,
  showPercentage: true,
  disabled: false,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  leftIcon: 'cogwheel-16',
  rightIcon: 'cogwheel-16',
};

export const WithTexts = Template.bind({});
WithTexts.args = {
  ...Default.args,
  leftText: 'LeftText',
  rightText: 'RightText',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

