# ifx-search-bar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default     |
| ----------------- | ------------------- | ----------- | --------- | ----------- |
| `icon`            | `icon`              |             | `string`  | `undefined` |
| `showCloseButton` | `show-close-button` |             | `boolean` | `true`      |
| `width`           | `width`             |             | `string`  | `'100%'`    |


## Events

| Event    | Description | Type                  |
| -------- | ----------- | --------------------- |
| `search` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [ifx-search-input](../search-input)
- [ifx-button](../button)
- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-search-bar --> ifx-search-input
  ifx-search-bar --> ifx-button
  ifx-search-bar --> ifx-icon
  ifx-search-input --> ifx-icon
  ifx-button --> ifx-icon
  style ifx-search-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
