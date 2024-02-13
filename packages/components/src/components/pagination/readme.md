# ifx-pagination



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default |
| ------------- | -------------- | ----------- | -------- | ------- |
| `currentPage` | `current-page` |             | `number` | `0`     |
| `total`       | `total`        |             | `number` | `1`     |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `ifxNextPage`   |             | `CustomEvent<any>` |
| `ifxPageChange` |             | `CustomEvent<any>` |
| `ifxPrevPage`   |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ifx-table](../table-advanced-version)

### Depends on

- [ifx-select](../select/single-select)
- [ifx-icon-button](../icon-button)

### Graph
```mermaid
graph TD;
  ifx-pagination --> ifx-select
  ifx-pagination --> ifx-icon-button
  ifx-select --> ifx-icon
  ifx-icon-button --> ifx-icon
  ifx-table --> ifx-pagination
  style ifx-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
