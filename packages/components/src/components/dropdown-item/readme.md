# ifx-dropdown-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type         | Default     |
| ----------- | ----------- | ----------- | ------------ | ----------- |
| `checkable` | `checkable` |             | `boolean`    | `false`     |
| `disabled`  | `disabled`  |             | `boolean`    | `undefined` |
| `icon`      | `icon`      |             | `string`     | `undefined` |
| `label`     | `label`     |             | `string`     | `undefined` |
| `size`      | `size`      |             | `"m" \| "s"` | `undefined` |
| `value`     | `value`     |             | `string`     | `""`        |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `itemValues` |             | `CustomEvent<Object>` |


## Dependencies

### Used by

 - [ifx-chip](../chips)

### Depends on

- [ifx-checkbox](../checkbox)
- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-dropdown-item --> ifx-checkbox
  ifx-dropdown-item --> ifx-icon
  ifx-checkbox --> ifx-icon
  ifx-chip --> ifx-dropdown-item
  style ifx-dropdown-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
