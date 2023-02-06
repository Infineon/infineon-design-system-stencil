export default {
  title: 'Components/Dropdown',
  args: {
    label: "dropdown",
    size: "m",
    disabled: false,
    variant: "solid",
    color: "primary",
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    }
  },
}

const DefaultTemplate = (args) =>
  `<ifx-dropdown >
    <ifx-button color="${args.color}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}">${args.label}</ifx-button>
    <ifx-dropdown-menu>
      <ifx-dropdown-item>item 1</ifx-dropdown-item>
      <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>
      <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>
      <ifx-dropdown-item>item 4</ifx-dropdown-item>
  </ifx-dropdown-menu>
  </ifx-dropdown>`;

export const Default = DefaultTemplate.bind({});

// const IconTemplate = (args) =>
//   `<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" icon={true}></ifx-dropdown>`;

// export const Icon = IconTemplate.bind({})

const SearchTemplate = (args) => 
`<ifx-dropdown>
<ifx-button color="${args.color}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}">${args.label}</ifx-button>
<ifx-dropdown-menu>
  <ifx-search-input></ifx-search-input>
  <ifx-dropdown-item>item 1</ifx-dropdown-item>
  <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>
  <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>
  <ifx-dropdown-item>item 4</ifx-dropdown-item>
</ifx-dropdown-menu>
</ifx-dropdown>`;

export const Search = SearchTemplate.bind({})

const FilterTemplate = (args) => 
`<ifx-dropdown>
  <ifx-button color="${args.color}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}">${args.label}</ifx-button>
  <ifx-dropdown-menu>
    <ifx-dropdown-filter>
      <option value="">One</option>
      <option value="">Two</option>
      <option value="">Three</option>
      <option value="">Four</option>
    </ifx-dropdown-filter>
    <ifx-dropdown-item>item 1</ifx-dropdown-item>
    <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>
    <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>
    <ifx-dropdown-item>item 4</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;

export const Filter = FilterTemplate.bind({})