# ifx-template



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `name`   | `name`    |             | `string` | `undefined` |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `toggleTemplates` |             | `CustomEvent<any>` |


## Methods

### `toggleTemplate(currTemp: any) => Promise<void>`



#### Parameters

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| `currTemp` | `any` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ifx-templates-ui](../templates-ui)

### Depends on

- [ifx-spinner](../../spinner)
- [ifx-button](../../button)
- [ifx-text-field](../../text-field)

### Graph
```mermaid
graph TD;
  ifx-template --> ifx-spinner
  ifx-template --> ifx-button
  ifx-template --> ifx-text-field
  ifx-text-field --> ifx-icon
  ifx-templates-ui --> ifx-template
  style ifx-template fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
