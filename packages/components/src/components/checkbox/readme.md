# ifx-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type      | Default |
| --------------- | --------------- | ----------- | --------- | ------- |
| `disabled`      | `disabled`      |             | `boolean` | `false` |
| `error`         | `error`         |             | `boolean` | `false` |
| `indeterminate` | `indeterminate` |             | `boolean` | `false` |
| `size`          | `size`          |             | `string`  | `'m'`   |
| `value`         | `value`         |             | `boolean` | `false` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `ifxChange` |             | `CustomEvent<any>` |


## Methods

### `toggleCheckedState(newVal: boolean) => Promise<void>`



#### Parameters

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `newVal` | `boolean` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ifx-chip-item](../chip/chip-item)
 - [ifx-list-entry](../table-advanced-version/list/list-entry)
 - [ifx-multiselect](../select/multi-select)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-checkbox --> ifx-icon
  ifx-chip-item --> ifx-checkbox
  ifx-list-entry --> ifx-checkbox
  ifx-multiselect --> ifx-checkbox
  style ifx-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
