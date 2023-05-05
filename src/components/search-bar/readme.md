# ifx-search-bar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default     |
| ----------------- | ------------------- | ----------- | --------- | ----------- |

| `hideLabel`       | `hide-label`        |             | `boolean` | `false`     |
| `icon`            | `icon`              |             | `string`  | `undefined` |
| `isOpen`          | `is-open`           |             | `boolean` | `true`      |
| `showCloseButton` | `show-close-button` |             | `boolean` | `true`      |
| `size`            | `size`              |             | `string`  | `""`        |

| `icon`            | `icon`              |             | `string`  | `undefined` |
| `isOpen`          | `is-open`           |             | `boolean` | `true`      |
| `showCloseButton` | `show-close-button` |             | `boolean` | `true`      |
| `width`           | `width`             |             | `string`  | `'100%'`    |



## Events

| Event    | Description | Type                  |
| -------- | ----------- | --------------------- |
| `search` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [ifx-search-input](../search-input)
- [ifx-icon](../icon)

- [ifx-link](../link)

- [ifx-button](../button)


### Graph
```mermaid
graph TD;
  ifx-search-bar --> ifx-search-input
  ifx-search-bar --> ifx-icon

  ifx-search-bar --> ifx-link
  ifx-search-input --> ifx-icon
  ifx-link --> ifx-icon

  ifx-search-bar --> ifx-button
  ifx-search-input --> ifx-icon
  ifx-button --> ifx-icon

  style ifx-search-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
