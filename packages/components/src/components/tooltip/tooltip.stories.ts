
export default {
  title: "Components/Tooltip",
  tags: ['autodocs'],
  args: {
    title: "Hi, I'm a tooltip",
    position: 'auto'
  },
  argTypes: {
    position: {
      options: ['auto', 'bottom-start', 'top-start', 'left', 'bottom-end', 'top-end', 'right', 'bottom', 'top'],
      control: { type: 'radio' }
    },
  },
};


const DefaultTemplate = ({ title, position }) => {
  const element = document.createElement('ifx-tooltip');
  element.setAttribute('text', title);
  element.setAttribute('position', position);
  element.textContent = "I'm the tooltip reference element - Please hover me"; // Set content for the reference element

  return element;
}


export const Default = DefaultTemplate.bind({});

