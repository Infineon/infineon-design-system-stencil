
export default {
  title: 'Components/Search Input',
  args: {
    showDeleteIcon: true,
    disabled: false,
    size: "m",

  },
  argTypes: {
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },
};


  const DefaultTemplate = (args) =>
  `<ifx-search-input disabled="${args.disabled}" size='${args.size}' show-delete-icon="${args.showDeleteIcon}">
  <ifx-icon icon="search-16" class="search-icon"></ifx-icon>
  </ifx-search-input>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
 
};