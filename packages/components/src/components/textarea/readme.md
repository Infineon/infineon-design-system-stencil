# ifx-text-area



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                      | Type                                             | Default     |
| ------------- | ------------- | ---------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| `caption`     | `caption`     | Helper text shown below the textarea.                            | `string`                                         | `undefined` |
| `cols`        | `cols`        | Number of visible text columns.                                  | `number`                                         | `undefined` |
| `disabled`    | `disabled`    | If true, the textarea is disabled and not interactive.           | `boolean`                                        | `false`     |
| `error`       | `error`       | If true, shows the textarea in an error state.                   | `boolean`                                        | `false`     |
| `fullWidth`   | `full-width`  | If 'true', the textarea stretches to fill the available width.   | `string`                                         | `"false"`   |
| `label`       | `label`       | Label text shown above the textarea.                             | `string`                                         | `undefined` |
| `maxlength`   | `maxlength`   | Maximum number of characters allowed.                            | `number`                                         | `undefined` |
| `name`        | `name`        | Name attribute used when submitting the textarea in a form.      | `string`                                         | `undefined` |
| `placeholder` | `placeholder` | Placeholder text shown when the textarea is empty.               | `string`                                         | `undefined` |
| `readOnly`    | `read-only`   | If true, the textarea is read-only but focusable.                | `boolean`                                        | `false`     |
| `required`    | `required`    | Whether a value is required (used for validation).               | `boolean`                                        | `false`     |
| `resize`      | `resize`      | How the textarea can be resized by the user.                     | `"both" \| "horizontal" \| "none" \| "vertical"` | `"both"`    |
| `rows`        | `rows`        | Number of visible text rows.                                     | `number`                                         | `undefined` |
| `value`       | `value`       | Current value of the textarea (can be updated programmatically). | `string`                                         | `""`        |
| `wrap`        | `wrap`        | How text wrapping is handled in the textarea.                    | `"hard" \| "off" \| "soft"`                      | `"soft"`    |


## Events

| Event      | Description                            | Type                  |
| ---------- | -------------------------------------- | --------------------- |
| `ifxInput` | Fired when the textarea value changes. | `CustomEvent<string>` |


## Methods

### `reset() => Promise<void>`

Resets the textarea value to its initial state.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
