import { debounce } from 'lodash';


export default {
  title: 'Components/Search Bar',
  argTypes: {
    onSearch: { action: 'search' },
  },
};
const debounceSearch = debounce((onSearch, query) => {
  onSearch(query);
}, 500);

const Template = ({ onSearch }) => {
  const handleInput = (e) => {
    const query = e.target.value;
    console.log(query);
    debounceSearch(onSearch, query);

  };

  return `<ifx-search-bar onSearch=${handleInput}></ifx-search-bar>`;
};

export const Default = Template.bind({});
Default.args = {
  onSearch: (query) => console.log(query),
};