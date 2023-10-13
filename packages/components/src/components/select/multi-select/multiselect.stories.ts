import { action } from "@storybook/addon-actions";

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


export default {
  title: 'Components/Select/Multi Select',
  // tags: ['autodocs'],
  args: {
    size: "m",
    // max: 5,
    error: false,
    errorMessage: 'Some error',
    label: '',
    disabled: false,


  },
  argTypes: {
    size: {
      options: {
        'small (36px)': 's',
        'medium (40px)': 'm'
      },
      control: {
        type: 'radio',
      },
    },
    // max: {
    //   control: { type: 'number' },
    //   description: 'Maximum selectable items',
    // },
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
    },
    onIfxSelect: { action: 'ifxSelect' },
    ifxSelect: {
      action: 'ifxSelect',
      description: 'Custom event emitted when item is selected',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxSelect={handleInput}\nVue:@ifxSelect="handleInput"\nAngular:(ifxSelect)="handleInput()"\nVanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});',
        },
      },
    },
  }
};

const DefaultTemplate = (args) => {
  const template = `<ifx-multiselect 
  options='${JSON.stringify(args.options)}' 
  size='${args.size}'
  error='${args.error}'
  error-message='${args.errorMessage}'
  label='${args.label}'
  disabled='${args.disabled}'>
</ifx-multiselect>`;

  setTimeout(() => {
    document.querySelector('ifx-multiselect').addEventListener('ifxSelect', action('ifxSelect'));
  }, 0);

  return template;
};


export const Default = DefaultTemplate.bind({});
Default.args = {
  options: options
}







