# ifx-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type      | Default |
| --------------- | --------------- | ----------- | --------- | ------- |
| `disabled`      | `disabled`      |             | `boolean` | `false` |
| `error`         | `error`         |             | `boolean` | `false` |
| `indeterminate` | `indeterminate` |             | `boolean` | `false` |
| `name`          | `name`          |             | `string`  | `''`    |
| `size`          | `size`          |             | `string`  | `'m'`   |
| `value`         | `value`         |             | `boolean` | `false` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `ifxChange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ifx-filter-entry](../filter-entry)
 - [ifx-multiselect](../select/multi-select)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-checkbox --> ifx-icon
  ifx-filter-entry --> ifx-checkbox
  ifx-multiselect --> ifx-checkbox
  style ifx-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
