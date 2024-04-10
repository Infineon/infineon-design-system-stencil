import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons'

export default {
  title: 'Components/Slider',
  component: 'ifx-slider',
  tags: ['autodocs'],

  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    type: { control: 'radio', options: ['single', 'double']},
    value: { control: 'number', if: { arg: 'type', eq: 'single'} },
    minValueHandle : {control :'number', if: { arg: 'type', eq: 'double'}},
    maxValueHandle : {control :'number', if: { arg: 'type', eq: 'double'}},
    showPercentage: { control: 'boolean', if: { arg: 'type', eq: 'single'} },
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
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event emitted on input change',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    }
  },
};

const Template = (args) => {
  const sliderElement = document.createElement('ifx-slider');
  sliderElement.setAttribute('value', args.value);
  sliderElement.setAttribute('min', args.min);
  sliderElement.setAttribute('max', args.max);
  sliderElement.setAttribute('min-value-handle', args.minValueHandle);
  sliderElement.setAttribute('max-value-handle', args.maxValueHandle);
  sliderElement.setAttribute('type', args.type);
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
  min: 0,
  max: 100,
  value: 50,
  minValueHandle: 20,
  maxValueHandle: 80,
  showPercentage: false,
  disabled: false,
  type: 'single'
};

export const WithPercentageDisplay = Template.bind({});
WithPercentageDisplay.args = {
  ...Default.args,
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

