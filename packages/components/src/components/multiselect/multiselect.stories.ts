import { action } from "@storybook/addon-actions";

let options = [{
  value: "a",
  label: "option a",
  selected: false
},
{
  value: "b",
  label: "option b",
  selected: false
},
{
  value: "c",
  label: "option c",
  selected: false,
  children: [
    {
      value: "c1",
      label: "option c1",
      selected: false
    },
    {
      value: "c2",
      label: "option c2",
      selected: false
    }
  ]
}];

let jsonOptions = JSON.stringify(options);

export default {
  title: 'Components/Multi Select',
  tags: ['autodocs'],
  args: {
    options: jsonOptions,
    size: "medium (40px)",
    max: 5,
    error: false,
    errorMessage: 'Some error',
    label: '',
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
    label: { control: 'text' },
  }
};

const DefaultTemplate = ({ options, size, error, errorMessage, label, disabled }) => {
  const element = document.createElement('ifx-multiselect');
  element.setAttribute('options', options);
  element.setAttribute('size', size);
  element.setAttribute('error', error);
  element.setAttribute('error-message', errorMessage);
  element.setAttribute('label', label);
  element.setAttribute('disabled', disabled);
  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}


export const Default = DefaultTemplate.bind({});







