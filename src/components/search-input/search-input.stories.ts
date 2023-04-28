import { debounce } from 'lodash';


export default {
  title: 'Components/Search Input',
  args: {
    showDeleteIcon: false,
    disabled: false,
    borderColor: "light",
    size: "m",

  },
  argTypes: {
    onSearch: { action: 'search' },
    borderColor: {
      options: ['light', 'dark', 'green'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
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

  return `<ifx-search-input size="${args.size}" border-color="${args.borderColor}" disabled="${args.disabled}" onSearch=${handleInput} show-delete-icon="${args.showDeleteIcon}">
  <ifx-icon icon="search-16" slot="search-icon" class="search-icon"></ifx-icon>
  </ifx-search-bar>`;
};

export const Default = Template.bind({});
Default.args = {
  showDeleteIcon: false,
};


const BorderColorTemplate = (args) => {
  const handleInput = (e) => {
    const query = e.target.value;
    console.log(query);
    debounceSearch(args.onSearch, query);
  };

  return `<ifx-search-input size="${args.size}" border-color="${args.borderColor}" disabled="${args.disabled}" onSearch=${handleInput} show-delete-icon="${args.showDeleteIcon}">
  <ifx-icon icon="search-16" slot="search-icon" class="search-icon"></ifx-icon>
  </ifx-search-bar>`;
};

export const BorderColor = BorderColorTemplate.bind({})
BorderColor.args = {
  borderColor: "green",
};


const DeleteIconTemplate = (args) => {
  const handleInput = (e) => {
    const query = e.target.value;
    console.log(query);
    debounceSearch(args.onSearch, query);
  };

  return `<ifx-search-input size="${args.size}" border-color="${args.borderColor}" disabled="${args.disabled}" onSearch=${handleInput} show-delete-icon="${args.showDeleteIcon}">
  <ifx-icon icon="search-16" slot="search-icon" class="search-icon"></ifx-icon>
  </ifx-search-bar>`;
};

export const DeleteIcon = DeleteIconTemplate.bind({})
DeleteIcon.args = {
  showDeleteIcon: true,
};

const DisabledTemplate = (args) => {
  const handleInput = (e) => {
    const query = e.target.value;
    console.log(query);
    debounceSearch(args.onSearch, query);
  };

  return `<ifx-search-input size="${args.size}" border-color="${args.borderColor}" onSearch=${handleInput} disabled="${args.disabled}">
  <ifx-icon icon="search-16" slot="search-icon" class="search-icon"></ifx-icon>
  </ifx-search-bar>`;
};

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {
  disabled: true,
};