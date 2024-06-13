# ifx-search-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type      | Default       |
| ---------------- | ------------------ | ----------- | --------- | ------------- |
| `disabled`       | `disabled`         |             | `boolean` | `false`       |
| `placeholder`    | `placeholder`      |             | `string`  | `"Search..."` |
| `showDeleteIcon` | `show-delete-icon` |             | `boolean` | `false`       |
| `size`           | `size`             |             | `string`  | `'l'`         |
| `value`          | `value`            |             | `string`  | `''`          |


## Events

| Event      | Description | Type                  |
| ---------- | ----------- | --------------------- |
| `ifxInput` |             | `CustomEvent<String>` |


## Dependencies

### Used by

 - [ifx-search-bar](../search-bar)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-search-field --> ifx-icon
  ifx-search-bar --> ifx-search-field
  style ifx-search-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
