# ifx-list-entry



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `label`  | `label`   |             | `string`  | `undefined` |
| `type`   | `type`    |             | `string`  | `undefined` |
| `value`  | `value`   |             | `boolean` | `undefined` |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `ifxListEntryChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-checkbox](../../checkbox)
- [ifx-radio-button](../../radio-button)

### Graph
```mermaid
graph TD;
  ifx-list-entry --> ifx-checkbox
  ifx-list-entry --> ifx-radio-button
  ifx-checkbox --> ifx-icon
  style ifx-list-entry fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
