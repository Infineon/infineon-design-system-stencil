# ifx-chip-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute  | Description | Type        | Default                                                      |
| ----------- | ---------- | ----------- | ----------- | ------------------------------------------------------------ |
| `chipState` | --         |             | `ChipState` | `{ emitIfxChipItem: true, variant: 'multi', size: 'large' }` |
| `selected`  | `selected` |             | `boolean`   | `false`                                                      |
| `value`     | `value`    |             | `string`    | `undefined`                                                  |


## Events

| Event         | Description | Type                         |
| ------------- | ----------- | ---------------------------- |
| `ifxChipItem` |             | `CustomEvent<ChipItemEvent>` |


## Dependencies

### Depends on

- [ifx-checkbox](../../checkbox)
- [ifx-icon](../../icon)

### Graph
```mermaid
graph TD;
  ifx-chip-item --> ifx-checkbox
  ifx-chip-item --> ifx-icon
  ifx-checkbox --> ifx-icon
  style ifx-chip-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
