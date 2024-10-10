# ifx-text-field



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default         |
| ------------- | ------------- | ----------- | --------- | --------------- |
| `caption`     | `caption`     |             | `string`  | `""`            |
| `disabled`    | `disabled`    |             | `boolean` | `false`         |
| `error`       | `error`       |             | `boolean` | `false`         |
| `icon`        | `icon`        |             | `string`  | `""`            |
| `label`       | `label`       |             | `string`  | `""`            |
| `maxlength`   | `maxlength`   |             | `number`  | `undefined`     |
| `optional`    | `optional`    |             | `boolean` | `false`         |
| `placeholder` | `placeholder` |             | `string`  | `"Placeholder"` |
| `required`    | `required`    |             | `boolean` | `false`         |
| `size`        | `size`        |             | `string`  | `'m'`           |
| `success`     | `success`     |             | `boolean` | `false`         |
| `value`       | `value`       |             | `string`  | `''`            |


## Events

| Event      | Description | Type                  |
| ---------- | ----------- | --------------------- |
| `ifxInput` |             | `CustomEvent<String>` |


## Methods

### `reset() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ifx-set-filter](../table-advanced-version/set-filter)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-text-field --> ifx-icon
  ifx-set-filter --> ifx-text-field
  style ifx-text-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
