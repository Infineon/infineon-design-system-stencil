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
| `target`    | `target`    |             | `string`     | `"_self"`   |
| `url`       | `url`       |             | `string`     | `""`        |
| `value`     | `value`     |             | `string`     | `""`        |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `itemValues` |             | `CustomEvent<Object>` |


## Dependencies

### Depends on

- [ifx-checkbox](../checkbox)
- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-dropdown-item --> ifx-checkbox
  ifx-dropdown-item --> ifx-icon
  ifx-checkbox --> ifx-icon
  style ifx-dropdown-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
