# ifx-accordion-item



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type      | Default     |
| ----------------- | ------------------ | ----------- | --------- | ----------- |
| `caption`         | `caption`          |             | `string`  | `undefined` |
| `initialCollapse` | `initial-collapse` |             | `boolean` | `true`      |
| `open`            | `open`             |             | `boolean` | `false`     |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `ifxItemClose` |             | `CustomEvent<any>` |
| `ifxItemOpen`  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ifx-faq](../../stories/setup-and-installation/faq)

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
