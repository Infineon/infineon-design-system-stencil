import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Select',
  tags: ['autodocs'],
  args: {
    searchEnabled: true,
    searchPlaceholderValue: 'Search...',
    placeholder: true,
    placeholderValue: 'Placeholder',
    error: false,
    errorMessage: 'Some error',
    disabled: false,
    choices: 'Choice 1, Choice 2, Choice 3',
  },

  argTypes: {
    type: { control: { type: 'select', options: ['single', 'multiple', 'text'] } },
    value: { control: 'text' },
    error: {
      options: [true, false],
      control: { type: 'radio' },
    },
    errorMessage: { control: 'text' },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchEnabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchPlaceholderValue: { control: { type: 'text' } },

    choices: { control: 'text', options: ['Choice 1', 'Choice 2', 'Choice 3'] },
    onChange: { action: 'change' },
  },
};

const DefaultTemplate = ({ type, value, name, disabled, error, errorMessage, placeholder, placeholderValue, removeItemButton, searchEnabled, searchPlaceholderValue, choices }) => {
  const element = document.createElement('ifx-choices');
  element.setAttribute('type', type);
  element.setAttribute('value', value);
  element.setAttribute('name', name);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('remove-item-button', removeItemButton);
  element.setAttribute('search-enabled', searchEnabled)
  element.setAttribute('search-placeholder-value', searchPlaceholderValue)
  element.setAttribute('ifx-disabled', disabled);
  element.setAttribute('ifx-error', error);
  element.setAttribute('ifx-error-message', errorMessage);
  element.setAttribute('ifx-placeholder-value', placeholderValue);
  element.setAttribute('ifx-choices', choices);
  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}


// export const Default = DefaultTemplate.bind({});
// Default.args = {
//   type: 'text',
//   name: 'text',
//   choices: 'Choice 1, Choice 2, Choice 3',
// };


export const Single = DefaultTemplate.bind({});
Single.args = {
  type: 'single',

};

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






