# ifx-filter-search



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description | Type      | Default     |
| ------------------- | -------------------- | ----------- | --------- | ----------- |
| `disabled`          | `disabled`           |             | `boolean` | `false`     |
| `filterKey`         | `filter-key`         |             | `string`  | `undefined` |
| `filterName`        | `filter-name`        |             | `string`  | `undefined` |
| `filterOrientation` | `filter-orientation` |             | `string`  | `'sidebar'` |
| `filterValue`       | `filter-value`       |             | `string`  | `undefined` |
| `placeholder`       | `placeholder`        |             | `string`  | `undefined` |


## Events

| Event                   | Description | Type               |
| ----------------------- | ----------- | ------------------ |
| `ifxFilterSearchChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-search-field](../../../search-field)

### Graph
```mermaid
graph TD;
  ifx-filter-search --> ifx-search-field
  ifx-search-field --> ifx-icon
  style ifx-filter-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
