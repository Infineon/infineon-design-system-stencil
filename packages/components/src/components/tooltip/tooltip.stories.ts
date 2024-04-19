import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  args: {
    header: 'Tooltip headline',
    text: "Hi, I'm a tooltip",
    position: 'auto',
    variant: 'compact',
    icon: 'c-info-24',
  },
  argTypes: {
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    position: {
      options: ['auto', 'bottom-start', 'top-start', 'left', 'bottom-end', 'top-end', 'right', 'bottom', 'top'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['compact', 'dismissible', 'extended'],
      control: { type: 'radio' },
    },
    header: { control: 'text', if: { arg: 'variant', neq: 'compact' } },
  },
};

const DefaultTemplate = ({ header, text, variant, position, icon }) => {
  const element = document.createElement('ifx-tooltip');
  if (variant === 'dismissible' || variant === 'extended') {
    element.setAttribute('header', header);
  }
  element.setAttribute('text', text);
  element.setAttribute('variant', variant === 'extended' ? 'extended' : variant);
  element.setAttribute('position', position);
  element.setAttribute('icon', icon);

  element.textContent = "I'm the tooltip reference element - Please hover me"; // Set content for the reference element

  return element;
};

export const Default = DefaultTemplate.bind({});
