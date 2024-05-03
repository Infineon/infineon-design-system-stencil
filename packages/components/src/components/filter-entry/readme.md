# ifx-filter-entry



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default     |
| ------------- | -------------- | ----------- | --------- | ----------- |
| `filterName`  | `filter-name`  |             | `string`  | `undefined` |
| `filterValue` | `filter-value` |             | `boolean` | `undefined` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `ifxFilterEntryChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-checkbox](../checkbox)

### Graph
```mermaid
graph TD;
  ifx-filter-entry --> ifx-checkbox
  ifx-checkbox --> ifx-icon
  style ifx-filter-entry fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
