# ifx-table



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description | Type      | Default     |
| -------------------- | ---------------------- | ----------- | --------- | ----------- |
| `cols`               | `cols`                 |             | `any`     | `undefined` |
| `filterOrientation`  | `filter-orientation`   |             | `string`  | `'sidebar'` |
| `pagination`         | `pagination`           |             | `boolean` | `true`      |
| `paginationPageSize` | `pagination-page-size` |             | `number`  | `10`        |
| `rowHeight`          | `row-height`           |             | `string`  | `'default'` |
| `rows`               | `rows`                 |             | `any`     | `undefined` |
| `showLoading`        | `show-loading`         |             | `boolean` | `false`     |
| `tableHeight`        | `table-height`         |             | `string`  | `'auto'`    |


## Methods

### `onBtShowLoading() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ifx-button](../button)
- [ifx-icon](../icon)
- [ifx-chip](../chip)
- [ifx-chip-item](../chip/chip-item)
- [ifx-pagination](../pagination)

### Graph
```mermaid
graph TD;
  ifx-table --> ifx-button
  ifx-table --> ifx-icon
  ifx-table --> ifx-chip
  ifx-table --> ifx-chip-item
  ifx-table --> ifx-pagination
  ifx-chip --> ifx-number-indicator
  ifx-chip --> ifx-icon
  ifx-chip-item --> ifx-checkbox
  ifx-chip-item --> ifx-icon
  ifx-checkbox --> ifx-icon
  ifx-pagination --> ifx-select
  ifx-pagination --> ifx-icon-button
  ifx-select --> ifx-icon
  ifx-icon-button --> ifx-icon
  style ifx-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
