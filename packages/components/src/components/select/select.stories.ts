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
}];

let jsonOptions = JSON.stringify(options);

export default {
  title: 'Components/Single Select',
  tags: ['autodocs'],
  args: {
    size: "medium (40px)",
    searchEnabled: true,
    searchPlaceholderValue: 'Search...',
    placeholder: true,
    placeholderValue: 'Placeholder',
    error: false,
    errorMessage: 'Some error',
    label: '',
    disabled: false,
    type: 'single',
    options: jsonOptions,
  },

  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'text']
    },
    value: { control: 'text' },
    size: {
      options: ['small (36px)', 'medium (40px)'],
      control: { type: 'radio' },
    },
    error: {
      options: [true, false],
      control: { type: 'radio' },
    },
    errorMessage: { control: 'text' },
    label: { control: 'text' },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchEnabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchPlaceholderValue: { control: { type: 'text' } },
    onChange: { action: 'change' },
  },
};

const DefaultTemplate = ({ size, type, value, disabled, error, errorMessage, label, placeholder, placeholderValue, searchEnabled, searchPlaceholderValue, options }) => {
  const element = document.createElement('ifx-choices');
  element.setAttribute('type', type);
  element.setAttribute('value', value);
  element.setAttribute('ifx-size', size);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('search-enabled', searchEnabled)
  element.setAttribute('search-placeholder-value', searchPlaceholderValue)
  element.setAttribute('ifx-disabled', disabled);
  element.setAttribute('ifx-error', error);
  element.setAttribute('ifx-error-message', errorMessage);
  element.setAttribute('ifx-label', label);
  element.setAttribute('ifx-placeholder-value', placeholderValue);
  element.setAttribute('ifx-choices', options);
  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}


export const Single = DefaultTemplate.bind({});
Single.args = {
  type: 'single',


};

export const Text = DefaultTemplate.bind({});
Text.args = {
  type: 'text',
  name: 'text',
  value: 'Placeholder',
  allowHTML: true,
  delimiter: ',',
  editItems: true,
  maxItemCount: 5,
};

// export const Text = DefaultTemplate.bind({});
// Text.args = {
//   type: 'multiple',
//   name: 'multiple',
//   choices: 'Choice 1, Choice 2, Choice 3',
// };



// export const SingleWithIcon = DefaultTemplate.bind({});
// SingleWithIcon.args = {
//   type: 'single',
//   choices: "Choice 1, Choice 2 <ifx-icon icon='check16'></ifx-icon>, Choice 3 <ifx-icon icon='check16'></ifx-icon>",
// };


// export const MultiselectCombobox = DefaultTemplate.bind({});
// MultiselectCombobox.args = {
//   type: 'multiple',
//   // removeItemButton: true,
// };






