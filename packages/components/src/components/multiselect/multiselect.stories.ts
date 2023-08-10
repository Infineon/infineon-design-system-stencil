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
    size: "medium (40px)",
    max: 5,
    error: false,
    errorMessage: 'Some error',
    label: '',
    disabled: false,
    options: jsonOptions,


  },
  argTypes: {
    size: {
      options: ['small (36px)', 'medium (40px)'],
      control: { type: 'radio' },
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum selectable items',

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
    options: {
      description: 'Takes an array of objects in the following format',
    }

  }
};

const DefaultTemplate = ({ options, size, error, errorMessage, label, disabled, max }) => {
  const element = document.createElement('ifx-multiselect');
  element.setAttribute('options', options);
  element.setAttribute('size', size);
  element.setAttribute('error', error);
  element.setAttribute('error-message', errorMessage);
  element.setAttribute('label', label);
  element.setAttribute('disabled', disabled);
  element.setAttribute('max-item-count', max);
  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}


export const Default = DefaultTemplate.bind({});







