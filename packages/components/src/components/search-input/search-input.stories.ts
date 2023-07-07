
export default {
  title: 'Components/Search Input',
  tags: ['autodocs'],

  args: {
    showDeleteIcon: false,
    disabled: false,
    borderColor: "light",
    size: "m",

  },
  argTypes: {
    onIfxInput: { action: 'ifxInput' },
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


const Template = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-search-input size="${args.size}" border-color="${args.borderColor}" disabled="${args.disabled}" show-delete-icon="${args.showDeleteIcon}">
  <ifx-icon icon="search-16" slot="search-icon" class="search-icon"></ifx-icon>
  </ifx-search-input>`;

  const inputElement = wrapper.querySelector('ifx-search-input');
  inputElement.addEventListener('ifxInput', (event) => {
    args.onIfxInput(event);

  });

  return wrapper.innerHTML;
};

export const Default = Template.bind({});
Default.args = {
  showDeleteIcon: false,
};



export const BorderColor = Template.bind({})
BorderColor.args = {
  borderColor: "green",
};


export const DeleteIcon = Template.bind({})
DeleteIcon.args = {
  showDeleteIcon: true,
};

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
};