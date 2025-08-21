# ifx-radio-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type         | Default     |
| ---------- | ---------- | ----------- | ------------ | ----------- |
| `checked`  | `checked`  |             | `boolean`    | `undefined` |
| `disabled` | `disabled` |             | `boolean`    | `false`     |
| `error`    | `error`    |             | `boolean`    | `false`     |
| `name`     | `name`     |             | `string`     | `undefined` |
| `size`     | `size`     |             | `"m" \| "s"` | `"s"`       |
| `value`    | `value`    |             | `string`     | `undefined` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `ifxChange` |             | `CustomEvent<any>` |
| `ifxError`  |             | `CustomEvent<any>` |


## Methods

### `isChecked() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




## Dependencies

### Used by

 - [ifx-list-entry](../table-advanced-version/list/list-entry)

### Graph
```mermaid
graph TD;
  ifx-list-entry --> ifx-radio-button
  style ifx-radio-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
