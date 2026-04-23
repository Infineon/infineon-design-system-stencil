# ifx-dropdown



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                   | Description                                                    | Type                                                                                                                                                                                                         | Default          |
| ----------------------- | --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `defaultOpen`           | `default-open`              | Wether the dropdown should be open initially.                  | `boolean`                                                                                                                                                                                                    | `false`          |
| `disabled`              | `disabled`                  | If true, dropdown is disabled and cannot be opened.            | `boolean`                                                                                                                                                                                                    | `undefined`      |
| `noAppendToBody`        | `no-append-to-body`         | If true, the menu is not appended to <body> (stays in place).  | `boolean`                                                                                                                                                                                                    | `false`          |
| `noCloseOnMenuClick`    | `no-close-on-menu-click`    | Id true, clicking inside the menu will not close the dropdown. | `boolean`                                                                                                                                                                                                    | `false`          |
| `noCloseOnOutsideClick` | `no-close-on-outside-click` | If true, clicking outside will not close the dropdown.         | `boolean`                                                                                                                                                                                                    | `false`          |
| `placement`             | `placement`                 | Where the dropdown menu is positioned relative to the trigger. | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `"bottom-start"` |


## Events

| Event         | Description                 | Type               |
| ------------- | --------------------------- | ------------------ |
| `ifxClose`    | Fired when dropdown closed. | `CustomEvent<any>` |
| `ifxDropdown` | General dropdown event.     | `CustomEvent<any>` |
| `ifxOpen`     | Fired when dropdown open.   | `CustomEvent<any>` |


## Methods

### `closeDropdown() => Promise<void>`

Closes the dropdown and cleans up the popper instance.

#### Returns

Type: `Promise<void>`



### `isOpen() => Promise<boolean>`

Returns wether the dropdown is currently open.

#### Returns

Type: `Promise<boolean>`



### `openDropdown() => Promise<void>`

Opens the dropdown and sets up the popper positioning.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
