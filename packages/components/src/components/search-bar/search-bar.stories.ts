import { debounce } from 'lodash';


export default {
  title: 'Components/Search Bar',
  args: {
    width: '100%',
    showCloseButton: true,
  },
  argTypes: {
    onSearch: { action: 'search' },
    width: {
      options: ['40%', '60%', '80%', '100%'],
      control: { type: 'radio' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};
const debounceSearch = debounce((onSearch, query) => {
  onSearch(query);
}, 500);

const Template = (args) => {
  const handleInput = (e) => {
    const query = e.target.value;
    console.log(query);
    debounceSearch(args.onSearch, query);

  };

  return `<ifx-search-bar onSearch=${handleInput} style="width: ${args.width}" show-close-button="${args.showCloseButton}"></ifx-search-bar>`;
};

export const Default = Template.bind({});
Default.args = {
};