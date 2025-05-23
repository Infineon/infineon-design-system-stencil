# ifx-button



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                                     | Default     |
| ----------- | ------------ | ----------- | ---------------------------------------- | ----------- |
| `ariaLabel` | `aria-label` |             | `string`                                 | `undefined` |
| `disabled`  | `disabled`   |             | `boolean`                                | `false`     |
| `fullWidth` | `full-width` |             | `boolean`                                | `false`     |
| `href`      | `href`       |             | `string`                                 | `undefined` |
| `size`      | `size`       |             | `string`                                 | `'m'`       |
| `target`    | `target`     |             | `string`                                 | `'_self'`   |
| `theme`     | `theme`      |             | `"danger" \| "default" \| "inverse"`     | `'default'` |
| `type`      | `type`       |             | `"button" \| "reset" \| "submit"`        | `"button"`  |
| `variant`   | `variant`    |             | `"primary" \| "secondary" \| "tertiary"` | `'primary'` |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ifx-dropdown-trigger-button](../dropdown/dropdown-trigger-button)
 - [ifx-file-upload](../file-upload)
 - [ifx-filter-bar](../table-advanced-version/filter-bar)
 - [ifx-table](../table-advanced-version)
 - [ifx-template](../templates/template)

### Graph
```mermaid
graph TD;
  ifx-dropdown-trigger-button --> ifx-button
  ifx-file-upload --> ifx-button
  ifx-filter-bar --> ifx-button
  ifx-table --> ifx-button
  ifx-template --> ifx-button
  style ifx-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
