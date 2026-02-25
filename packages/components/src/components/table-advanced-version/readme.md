# ifx-table



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                   | Description                                               | Type                                                                                        | Default     |
| --------------------------- | --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------- |
| `buttonRendererOptions`     | --                          | Options for button renderer including click handler.      | `{ onButtonClick?: (params: any, event: Event) => void; }`                                  | `undefined` |
| `checkboxRendererOptions`   | --                          | Options for checkbox renderer including click handler.    | `{ onCheckboxClick?: (params: any, event: Event) => void; }`                                | `undefined` |
| `cols`                      | `cols`                      | The column definitions for the grid.                      | `any`                                                                                       | `undefined` |
| `columnMinWidth`            | `column-min-width`          | Minimum width for columns.                                | `number`                                                                                    | `undefined` |
| `columnWidth`               | `column-width`              | Fixed width for columns.                                  | `string`                                                                                    | `undefined` |
| `enableSelection`           | `enable-selection`          | Enable row selection.                                     | `boolean`                                                                                   | `false`     |
| `filterOrientation`         | `filter-orientation`        | Filter display orientation (sidebar or inline).           | `string`                                                                                    | `"sidebar"` |
| `fitColumns`                | `fit-columns`               | Auto-fit columns to container width.                      | `boolean`                                                                                   | `false`     |
| `headline`                  | `headline`                  | Headline text displayed above the grid.                   | `string`                                                                                    | `""`        |
| `headlineNumber`            | `headline-number`           | Numeric value displayed in headline.                      | `number`                                                                                    | `null`      |
| `iconButtonRendererOptions` | --                          | Options for icon button renderer including click handler. | `{ onIconButtonClick?: (params: any, event: Event) => void; }`                              | `undefined` |
| `pagination`                | `pagination`                | Enable or disable pagination.                             | `boolean`                                                                                   | `true`      |
| `paginationItemsPerPage`    | `pagination-items-per-page` | Number of items per page.                                 | `string`                                                                                    | `undefined` |
| `rowHeight`                 | `row-height`                | Height of each row.                                       | `string`                                                                                    | `"default"` |
| `rows`                      | `rows`                      | The rows definitions for the grid.                        | `any`                                                                                       | `undefined` |
| `serverPageChangeHandler`   | --                          | Handler for server-side page changes.                     | `(params: { page: number; pageSize: number; }) => Promise<{ rows: any[]; total: number; }>` | `undefined` |
| `serverSidePagination`      | `server-side-pagination`    | Enable server-side pagination mode.                       | `boolean`                                                                                   | `false`     |
| `showLoading`               | `show-loading`              | Show loading overlay.                                     | `boolean`                                                                                   | `false`     |
| `tableHeight`               | `table-height`              | Total height of the table.                                | `string`                                                                                    | `"auto"`    |
| `variant`                   | `variant`                   | Visual variant of the grid.                               | `string`                                                                                    | `"default"` |


## Events

| Event           | Description                      | Type               |
| --------------- | -------------------------------- | ------------------ |
| `ifxSortChange` | Emitted when sort order changes. | `CustomEvent<any>` |


## Methods

### `onBtShowLoading() => Promise<void>`

Shows the loading overlay on the grid.

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
  ifx-chip --> ifx-icon
  ifx-chip --> ifx-indicator
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
