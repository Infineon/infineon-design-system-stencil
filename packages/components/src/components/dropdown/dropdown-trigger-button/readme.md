# ifx-dropdown-item



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                                             | Default     |
| ------------- | -------------- | ----------- | ---------------------------------------------------------------- | ----------- |
| `color`       | `color`        |             | `"danger" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled`    | `disabled`     |             | `boolean`                                                        | `undefined` |
| `hideChevron` | `hide-chevron` |             | `boolean`                                                        | `false`     |
| `icon`        | `icon`         |             | `string`                                                         | `undefined` |
| `isOpen`      | `is-open`      |             | `boolean`                                                        | `false`     |
| `position`    | `position`     |             | `string`                                                         | `'left'`    |
| `size`        | `size`         |             | `"m" \| "s"`                                                     | `'m'`       |
| `variant`     | `variant`      |             | `"outline" \| "outline-text" \| "solid"`                         | `'solid'`   |


## Dependencies

### Depends on

- [ifx-button](../../button)
- [ifx-icon](../../icon)

### Graph
```mermaid
graph TD;
  ifx-dropdown-trigger-button --> ifx-button
  ifx-dropdown-trigger-button --> ifx-icon
  ifx-button --> ifx-icon
  style ifx-dropdown-trigger-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
