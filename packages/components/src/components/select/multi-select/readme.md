# ifx-multiselect



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type              | Default           |
| --------------- | ----------------- | ----------- | ----------------- | ----------------- |
| `batchSize`     | `batch-size`      |             | `number`          | `50`              |
| `disabled`      | `disabled`        |             | `boolean`         | `false`           |
| `error`         | `error`           |             | `boolean`         | `false`           |
| `errorMessage`  | `error-message`   |             | `string`          | `"Error"`         |
| `label`         | `label`           |             | `string`          | `""`              |
| `maxItemCount`  | `max-item-count`  |             | `number`          | `undefined`       |
| `options`       | `options`         |             | `any[] \| string` | `undefined`       |
| `placeholder`   | `placeholder`     |             | `string`          | `""`              |
| `showSearch`    | `show-search`     |             | `boolean`         | `true`            |
| `showSelectAll` | `show-select-all` |             | `boolean`         | `true`            |
| `size`          | `size`            |             | `string`          | `'medium (40px)'` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `ifxMultiselectIsOpen` |             | `CustomEvent<any>` |
| `ifxSelect`            |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ifx-set-filter](../../table-advanced-version/set-filter)

### Depends on

- [ifx-checkbox](../../checkbox)
- [ifx-dropdown-separator](../../dropdown/dropdown-seperator)
- [ifx-icon](../../icon)

### Graph
```mermaid
graph TD;
  ifx-multiselect --> ifx-checkbox
  ifx-multiselect --> ifx-dropdown-separator
  ifx-multiselect --> ifx-icon
  ifx-checkbox --> ifx-icon
  ifx-set-filter --> ifx-multiselect
  style ifx-multiselect fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
