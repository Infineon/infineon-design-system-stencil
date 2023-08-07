import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Multiselect',
  tags: ['autodocs'],
  args: {
    options: 'Choice 1, Choice 2, Choice 3, Choice 4, Choice 5, Choice 6, Choice 7, Choice 8, Choice 9, Choice 10',
    size: "medium (40px)",
    max: 5,
    error: false,
    errorMessage: 'Some error',
    disabled: false,

  },
  argTypes: {
    size: {
      options: ['small (36px)', 'medium (40px)'],
      control: { type: 'radio' },
    },
    max: {
      control: { type: 'number' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    error: {
      options: [true, false],
      control: { type: 'radio' },
    },
    errorMessage: { control: 'text' },
  }
};

const DefaultTemplate = ({ options, size, error, errorMessage, disabled }) => {
  const element = document.createElement('ifx-multiselect');
  element.setAttribute('options', options);
  element.setAttribute('size', size);
  element.setAttribute('error', error);
  element.setAttribute('error-message', errorMessage);
  element.setAttribute('disabled', disabled);
  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}


export const Default = DefaultTemplate.bind({});







