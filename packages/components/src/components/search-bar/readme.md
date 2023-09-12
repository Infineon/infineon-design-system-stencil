# ifx-search-bar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default     |
| ----------------- | ------------------- | ----------- | --------- | ----------- |
| `disabled`        | `disabled`          |             | `boolean` | `false`     |
| `isOpen`          | `is-open`           |             | `boolean` | `true`      |
| `showCloseButton` | `show-close-button` |             | `boolean` | `true`      |
| `value`           | `value`             |             | `string`  | `undefined` |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `ifxInput`           |             | `CustomEvent<any>` |
| `ifxSearchBarIsOpen` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-search-field](../search-field)
- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-search-bar --> ifx-search-field
  ifx-search-bar --> ifx-icon
  ifx-search-field --> ifx-icon
  style ifx-search-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
