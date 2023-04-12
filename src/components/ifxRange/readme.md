# ifx-tag



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `disabled`       | `disabled`        |             | `boolean` | `false`     |
| `leftIcon`       | `left-icon`       |             | `string`  | `undefined` |
| `leftText`       | `left-text`       |             | `string`  | `undefined` |
| `max`            | `max`             |             | `number`  | `100`       |
| `min`            | `min`             |             | `number`  | `0`         |
| `rightIcon`      | `right-icon`      |             | `string`  | `undefined` |
| `rightText`      | `right-text`      |             | `string`  | `undefined` |
| `showPercentage` | `show-percentage` |             | `boolean` | `false`     |
| `value`          | `value`           |             | `number`  | `0`         |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `valueChanged` |             | `CustomEvent<number>` |


## Dependencies

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-range --> ifx-icon
  style ifx-range fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
