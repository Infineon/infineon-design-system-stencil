import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Multiselect',
  tags: ['autodocs'],
  args: {
    options: 'Choice 1, Choice 2, Choice 3',
  },



};

const DefaultTemplate = ({ options }) => {
  const element = document.createElement('ifx-multiselect');
  element.setAttribute('options', options);


  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}



export const Default = DefaultTemplate.bind({});







