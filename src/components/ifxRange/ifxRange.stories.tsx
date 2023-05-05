import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons'

export default {
  title: 'Components/Range',
  component: 'ifx-range',
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    showPercentage: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
    rightIcon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
    leftText: { control: 'text' },
    rightText: { control: 'text' },
  },
};

const Template = (args) => {
  const rangeElement = document.createElement('ifx-range');
  rangeElement.setAttribute('value', args.value);
  rangeElement.setAttribute('min', args.min);
  rangeElement.setAttribute('max', args.max);
  if (args.showPercentage) {
    rangeElement.setAttribute('show-percentage', 'true');
  }
  if (args.disabled) {
    rangeElement.setAttribute('disabled', 'true'); // Set disabled attribute
  }

  if (args.leftIcon) {
    rangeElement.setAttribute('left-icon', args.leftIcon);
  }
  if (args.rightIcon) {
    rangeElement.setAttribute('right-icon', args.rightIcon);
  }
  if (args.leftText) {
    rangeElement.setAttribute('left-text', args.leftText);
  }
  if (args.rightText) {
    rangeElement.setAttribute('right-text', args.rightText);
  }
  rangeElement.addEventListener('valueChanged', action('valueChanged'));

  return rangeElement;
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
  leftIcon: 'arrowright16',
  rightIcon: 'arrowleft16',
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

