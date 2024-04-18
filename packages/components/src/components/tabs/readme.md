# ifx-tabs



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type                                        | Default        |
| ---------------- | ------------------ | ----------- | ------------------------------------------- | -------------- |
| `activeTabIndex` | `active-tab-index` |             | `number`                                    | `0`            |
| `orientation`    | `orientation`      |             | `string`                                    | `"horizontal"` |
| `tabs`           | --                 |             | `{ header: string; disabled?: boolean; }[]` | `[]`           |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `ifxTabChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-tabs --> ifx-icon
  style ifx-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
