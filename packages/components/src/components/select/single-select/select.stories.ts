import { action } from "@storybook/addon-actions";


//use string instead of json format here to avoid ugly formatting in the storybook code snippet
// let options = "[{'value': 'a','label': 'option a','selected': 'false'},{'value': 'b','label': 'option b','selected': 'false'},{'value': 'c','label': 'option c','selected': 'false'}]"
const options = [{
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
  selected: false
}];

export default {
  title: 'Components/Select/Single Select',
  //tags: ['autodocs'],
  args: {
    size: "m",
    searchEnabled: true,
    searchPlaceholderValue: 'Search...',
    placeholder: true,
    placeholderValue: 'Placeholder',
    error: false,
    errorMessage: 'Some error',
    label: '',
    disabled: false,
    // type: 'single', //for later implementation
  },

  argTypes: {
    // type: { //for later implementation
    //   // control: { type: 'radio' },
    //   control: false,
    // },
    size: {
      options: {
        'small (36px)': 's',
        'medium (40px)': 'm'
      },
      control: {
        type: 'radio',
      },
    },
    placeholder: {
      options: [true, false],
      control: { type: 'radio' },
    },
    placeholderValue: { control: 'text' },
    // value: { for later implementation
    //   control: 'text',
    //   description: 'Programmatically set the selected value',
    // },
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
    onIfxSelect: { action: 'ifxSelect' },
    options: {
      description: 'Takes an array of objects in the following format',
    }
  },
};

const DefaultTemplate = (args) => {
  const template = `<ifx-select 
  ifx-size='${args.size}'
  placeholder='${args.placeholder}'
  search-enabled='${args.searchEnabled}'
  search-placeholder-value='${args.searchPlaceholderValue}'
  ifx-disabled='${args.disabled}'
  ifx-error='${args.error}'
  ifx-error-message='${args.errorMessage}'
  ifx-label='${args.label}'
  ifx-placeholder-value='${args.placeholderValue}'
  ifx-options='${JSON.stringify(args.options)}' >
 </ifx-select>`
  setTimeout(() => {
    document.querySelector('ifx-select')?.addEventListener('ifxSelect', action('ifxSelect'));
  }, 0);

  return template;
}



export const Single = DefaultTemplate.bind({});
Single.args = {
  // type: 'single',
  options: options,


};

// export const Text = DefaultTemplate.bind({});
// Text.args = {
//   type: 'text',
//   name: 'text',
//   value: 'Placeholder',
//   allowHTML: true,
//   delimiter: ',',
//   editItems: true,
//   maxItemCount: 5,
// };

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






