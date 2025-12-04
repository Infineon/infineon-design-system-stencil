# ifx-accordion-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `AriaLevel` | `aria-level` |             | `number`  | `3`         |
| `caption`   | `caption`    |             | `string`  | `undefined` |
| `open`      | `open`       |             | `boolean` | `false`     |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `ifxClose` |             | `CustomEvent<any>` |
| `ifxOpen`  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ifx-faq](../../storybook/stories/setup-and-installation/faq)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-accordion-item --> ifx-icon
  ifx-faq --> ifx-accordion-item
  style ifx-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
