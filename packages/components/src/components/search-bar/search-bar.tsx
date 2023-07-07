export default {
  title: 'Components/SearchBar',
  args: {
    showCloseButton: true,
  },
  argTypes: {
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};


const DefaultTemplate = (args) =>
  `<ifx-search-bar is-open="${args.isOpen}" show-close-button="${args.showCloseButton}"></ifx-search-bar>`;


export const Default = DefaultTemplate.bind({});

