# ifx-segmented-controls-group



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                   | Default     |
| ---------- | ---------- | ----------- | ---------------------- | ----------- |
| `caption`  | `caption`  |             | `string`               | `""`        |
| `error`    | `error`    |             | `boolean`              | `false`     |
| `label`    | `label`    |             | `string`               | `""`        |
| `required` | `required` |             | `boolean`              | `false`     |
| `size`     | `size`     |             | `"regular" \| "small"` | `"regular"` |


## Events

| Event       | Description | Type                                                             |
| ----------- | ----------- | ---------------------------------------------------------------- |
| `ifxChange` |             | `CustomEvent<{ previousValue: string; selectedValue: string; }>` |


## Dependencies

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-segmented-control --> ifx-icon
  style ifx-segmented-control fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
