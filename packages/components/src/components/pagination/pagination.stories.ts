export default {
  title: "Components/Pagination",
  tags: ['autodocs'],

  args: {
    total: 50,
    currentPage: 1
  },
};


const DefaultTemplate = (args) =>
  `<ifx-pagination total="${args.total}" current-page="${args.currentPage}"></ifx-pagination>`;


export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}


