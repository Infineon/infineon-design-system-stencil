
export default {
  title: 'Components/DatePicker',
  tags: ['autodocs'],

  args: {
    disabled: false,
    size: 's',
    success: false,
    error: false,
  },
  argTypes: {
   
  },
};

const DefaultTemplate = args => `<ifx-date-picker error="${args.error}" success="${args.success}" disabled="${args.disabled}" size="${args.size}"></ifx-date-picker>`;

export const Default = DefaultTemplate.bind({});
