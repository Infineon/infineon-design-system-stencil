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
  selected: false
},
{
  value: "d",
  label: "option d",
  selected: false
},
{
  value: "e",
  label: "option e",
  selected: false
},
{
  value: "f",
  label: "option f",
  selected: false
},
{
  value: "g",
  label: "option g",
  selected: false
},
{
  value: "h",
  label: "option h",
  selected: false
},
{
  value: "i",
  label: "option i",
  selected: false
},
{
  value: "j",
  label: "option j",
  selected: false
},
{
  value: "k",
  label: "option k",
  selected: false
},
{
  value: "l",
  label: "option l",
  selected: false
},
{
  value: "m",
  label: "option m",
  selected: false
},
{
  value: "n",
  label: "option n",
  selected: false
},
{
  value: "o",
  label: "option o",
  selected: false
},
{
  value: "p",
  label: "option p",
  selected: false
},
{
  value: "q",
  label: "option q",
  selected: false
},
{
  value: "r",
  label: "option r",
  selected: false
},
{
  value: "s",
  label: "option s",
  selected: false
},
{
  value: "t",
  label: "option t",
  selected: false
},
{
  value: "u",
  label: "option u",
  selected: false
},
{
  value: "v",
  label: "option v",
  selected: false
},
{
  value: "w",
  label: "option w",
  selected: false
},
{
  value: "x",
  label: "option x",
  selected: false
},
{
  value: "y",
  label: "option y",
  selected: false
},
{
  value: "z",
  label: "option z",
  selected: false,
  children: [
    {
      value: "z1",
      label: "option z1",
      selected: false
    },
    {
      value: "z2",
      label: "option z2",
      selected: false
    }
  ]
}];


export default {
  title: 'Components/Select/Multi Select',
  // tags: ['autodocs'],
  args: {
    size: "m",
    batchSize: 10,
    error: false,
    errorMessage: 'Some error',
    label: '',
    disabled: false,
    placeholder: 'Placeholder'


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
    batchSize: {
      description: 'Batch size used during lazy loading options',
      control: {
        type: 'number',
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
    placeholder: { control: 'text' },
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
  batch-size='${args.batchSize}'
  size='${args.size}'
  error='${args.error}'
  error-message='${args.errorMessage}'
  label='${args.label}'
  placeholder='${args.placeholder}'
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







