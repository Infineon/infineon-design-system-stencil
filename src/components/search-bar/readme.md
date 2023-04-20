# ifx-search-bar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default     |
| ----------------- | ------------------- | ----------- | --------- | ----------- |
| `icon`            | `icon`              |             | `string`  | `undefined` |
| `isOpen`          | `is-open`           |             | `boolean` | `true`      |
| `showCloseButton` | `show-close-button` |             | `boolean` | `true`      |


## Events

| Event    | Description | Type                  |
| -------- | ----------- | --------------------- |
| `search` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ifx-navbar](../navbar)

### Depends on

- [ifx-search-input](../search-input)
- [ifx-icon](../icon)
- [ifx-link](../link)

### Graph
```mermaid
graph TD;
  ifx-search-bar --> ifx-search-input
  ifx-search-bar --> ifx-icon
  ifx-search-bar --> ifx-link
  ifx-search-input --> ifx-icon
  ifx-link --> ifx-icon
  ifx-navbar --> ifx-search-bar
  style ifx-search-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
