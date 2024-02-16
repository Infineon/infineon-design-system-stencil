# set-filter



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                          | Default     |
| ------------- | -------------- | ----------- | --------------------------------------------- | ----------- |
| `filterLabel` | `filter-label` |             | `string`                                      | `undefined` |
| `filterName`  | `filter-name`  |             | `string`                                      | `undefined` |
| `options`     | `options`      |             | `any[] \| string`                             | `undefined` |
| `placeholder` | `placeholder`  |             | `string`                                      | `undefined` |
| `type`        | `type`         |             | `"multi-select" \| "single-select" \| "text"` | `'text'`    |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `ifxFilterChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-text-field](../text-field)
- [ifx-select](../select/single-select)
- [ifx-multiselect](../select/multi-select)

### Graph
```mermaid
graph TD;
  ifx-set-filter --> ifx-text-field
  ifx-set-filter --> ifx-select
  ifx-set-filter --> ifx-multiselect
  ifx-text-field --> ifx-icon
  ifx-select --> ifx-icon
  ifx-multiselect --> ifx-checkbox
  ifx-multiselect --> ifx-icon
  ifx-checkbox --> ifx-icon
  style ifx-set-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
