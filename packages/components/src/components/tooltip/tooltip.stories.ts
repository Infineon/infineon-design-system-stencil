
export default {
  title: "Components/Tooltip",
  tags: ['autodocs'],
  args: {
    header: "Tooltip headline",
    text: "Hi, I'm a tooltip",
    position: 'auto',
    variant: 'compact'
  },
  argTypes: {
    position: {
      options: ['auto', 'bottom-start', 'top-start', 'left', 'bottom-end', 'top-end', 'right', 'bottom', 'top'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['compact', 'dismissable'],
      control: { type: 'radio' }
    },
    header: { control: 'text', if: { arg: 'variant', eq: 'dismissable' } }
  }

};


const DefaultTemplate = ({ header, text, variant, position }) => {
  const element = document.createElement('ifx-tooltip');
  if (variant === 'dismissable') {
    element.setAttribute('header', header);
  }
  element.setAttribute('text', text);
  element.setAttribute('variant', variant);
  element.setAttribute('position', position);
  element.textContent = "I'm the tooltip reference element - Please hover me"; // Set content for the reference element

  return element;
}


export const Default = DefaultTemplate.bind({});

