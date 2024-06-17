# ifx-table



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description | Type              | Default     |
| -------------------- | ---------------------- | ----------- | ----------------- | ----------- |
| `cols`               | `cols`                 |             | `any[] \| string` | `undefined` |
| `enableFiltering`    | `enable-filtering`     |             | `boolean`         | `true`      |
| `filterOrientation`  | `filter-orientation`   |             | `string`          | `'topbar'`  |
| `pagination`         | `pagination`           |             | `boolean`         | `true`      |
| `paginationPageSize` | `pagination-page-size` |             | `number`          | `10`        |
| `rowHeight`          | `row-height`           |             | `string`          | `'default'` |
| `rows`               | `rows`                 |             | `any[] \| string` | `undefined` |
| `showLoading`        | `show-loading`         |             | `boolean`         | `false`     |
| `tableHeight`        | `table-height`         |             | `string`          | `'auto'`    |


## Methods

### `onBtShowLoading() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ifx-button](../button)
- [ifx-icon](../icon)
- [ifx-chip](../chips)
- [ifx-dropdown-menu](../dropdown/dropdown-menu)
- [ifx-dropdown-item](../dropdown/dropdown-item)
- [ifx-pagination](../pagination)

### Graph
```mermaid
graph TD;
  ifx-table --> ifx-button
  ifx-table --> ifx-icon
  ifx-table --> ifx-chip
  ifx-table --> ifx-dropdown-menu
  ifx-table --> ifx-dropdown-item
  ifx-table --> ifx-pagination
  ifx-chip --> ifx-icon
  ifx-dropdown-item --> ifx-icon
  ifx-pagination --> ifx-select
  ifx-pagination --> ifx-icon-button
  ifx-select --> ifx-icon
  ifx-icon-button --> ifx-icon
  style ifx-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
