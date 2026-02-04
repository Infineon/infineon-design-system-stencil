# ifx-tag



<!-- Auto Generated Below -->


## Overview

A toggle switch component for binary on/off states.

This component is form-associated, meaning it can participate in HTML forms
just like native form controls. It supports form validation, form reset,
and browser autofill/restore functionality.


Code organization follows the Stencil Style Guide:
https://stenciljs.com/docs/style-guide

1. Own Properties (internal, not exposed)
2.

## Properties

| Property   | Attribute  | Description                                                                               | Type      | Default |
| ---------- | ---------- | ----------------------------------------------------------------------------------------- | --------- | ------- |
| `checked`  | `checked`  | Sets the checked state of the switch.                                                     | `boolean` | `false` |
| `disabled` | `disabled` | Disables user interaction when true.                                                      | `boolean` | `false` |
| `name`     | `name`     | Form field name.                                                                          | `string`  | `""`    |
| `value`    | `value`    | Form field value when checked. If not set, defaults to "on" (standard checkbox behavior). | `string`  | `"on"`  |


## Events

| Event       | Description                         | Type                   |
| ----------- | ----------------------------------- | ---------------------- |
| `ifxChange` | Emitted when checked state changes. | `CustomEvent<boolean>` |


## Methods

### `isChecked() => Promise<boolean>`

Returns the current checked state.

#### Returns

Type: `Promise<boolean>`



### `setChecked(checked: boolean) => Promise<void>`

Sets the checked state.

#### Parameters

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `checked` | `boolean` | - New checked state. |

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<boolean>`

Toggles the checked state.

#### Returns

Type: `Promise<boolean>`

Resolves when the toggle is complete.


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
