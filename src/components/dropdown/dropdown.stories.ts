export default { 
  title: 'Components/Dropdow',
  args: {
    label: "dropdown",
    size: "m",
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['s', 'm'],
      control: {type: 'radio'},
    }
  }
}

const DefaultTemplate = (args) => 
`<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}"></ifx-dropdown>`;

export const Default = DefaultTemplate.bind({});

const IconTemplate = (args) => 
`<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" icon={true}>
  <button>test</button>
</ifx-dropdown>`;

export const Icon = IconTemplate.bind({})

const SearchTemplate = (args) => 
`<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" search={true}>
  <button>test</button>
</ifx-dropdown>`;

export const Search = SearchTemplate.bind({})