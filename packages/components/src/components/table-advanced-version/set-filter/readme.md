# set-filter



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                              | Type                                          | Default     |
| ------------- | -------------- | -------------------------------------------------------- | --------------------------------------------- | ----------- |
| `filterLabel` | `filter-label` | User-visible label for the filter control                | `string`                                      | `undefined` |
| `filterName`  | `filter-name`  | Technical name/identifier for this filter                | `string`                                      | `undefined` |
| `options`     | `options`      | Options for select types, either array or string         | `any[] \| string`                             | `undefined` |
| `placeholder` | `placeholder`  | Placeholder text shown when no value is entered/selected | `string`                                      | `undefined` |
| `type`        | `type`         | Filter control type                                      | `"multi-select" \| "single-select" \| "text"` | `"text"`    |


## Events

| Event             | Description                                          | Type               |
| ----------------- | ---------------------------------------------------- | ------------------ |
| `ifxFilterSelect` | Emitted when the filter's value or selection changes | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-text-field](../../text-field)
- [ifx-select](../../select/single-select)
- [ifx-multiselect](../../select/multi-select)
- [ifx-multiselect-option](../../select/multi-select)

### Graph
```mermaid
graph TD;
  ifx-set-filter --> ifx-text-field
  ifx-set-filter --> ifx-select
  ifx-set-filter --> ifx-multiselect
  ifx-set-filter --> ifx-multiselect-option
  ifx-text-field --> ifx-icon
  ifx-select --> ifx-icon
  ifx-multiselect --> ifx-checkbox
  ifx-multiselect --> ifx-search-field
  ifx-multiselect --> ifx-icon
  ifx-checkbox --> ifx-icon
  ifx-search-field --> ifx-icon
  ifx-multiselect-option --> ifx-icon
  ifx-multiselect-option --> ifx-checkbox
  style ifx-set-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
