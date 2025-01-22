# ifx-alert



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                                                        | Default       |
| ---------- | ----------- | ----------- | ----------------------------------------------------------- | ------------- |
| `AriaLive` | `aria-live` |             | `string`                                                    | `'assertive'` |
| `closable` | `closable`  |             | `boolean`                                                   | `true`        |
| `icon`     | `icon`      |             | `string`                                                    | `undefined`   |
| `variant`  | `variant`   |             | `"danger" \| "info" \| "primary" \| "success" \| "warning"` | `'primary'`   |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `ifxClose` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ifx-icons-preview](../icons-preview)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-alert --> ifx-icon
  ifx-icons-preview --> ifx-alert
  style ifx-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
