# ifx-multiselect



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                            | Default     |
| --------- | --------- | ----------- | ----------------------------------------------- | ----------- |
| `options` | `options` |             | `string \| { value: string; label: string; }[]` | `undefined` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `ifxMultiselectIsOpen` |             | `CustomEvent<any>` |
| `ifxSelect`            |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-checkbox](../checkbox)

### Graph
```mermaid
graph TD;
  ifx-multiselect --> ifx-checkbox
  ifx-checkbox --> ifx-icon
  style ifx-multiselect fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
