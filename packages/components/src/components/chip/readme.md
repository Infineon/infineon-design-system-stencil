# ifx-chip



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                  | Default     |
| ------------- | ------------- | ----------- | --------------------- | ----------- |
| `placeholder` | `placeholder` |             | `string`              | `''`        |
| `readOnly`    | `read-only`   |             | `boolean`             | `false`     |
| `size`        | `size`        |             | `"large" \| "small"`  | `'large'`   |
| `value`       | `value`       |             | `string \| string[]`  | `undefined` |
| `variant`     | `variant`     |             | `"multi" \| "single"` | `'single'`  |


## Events

| Event           | Description | Type                                                                                                                |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `ifxChipChange` |             | `CustomEvent<{ previousSelection: ChipItemSelectEvent[]; currentSelection: ChipItemSelectEvent[]; name: string; }>` |


## Dependencies

### Used by

 - [ifx-table](../table-advanced-version)

### Depends on

- [ifx-number-indicator](../number-indicator)
- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-chip --> ifx-number-indicator
  ifx-chip --> ifx-icon
  ifx-table --> ifx-chip
  style ifx-chip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
