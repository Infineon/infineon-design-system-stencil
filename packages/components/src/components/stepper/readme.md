# ifx-stepper



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                 | Type                     | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------------- | ------------------------ | ----------- |
| `activeStep`        | `active-step`        | Represents the active step of the stepper.                                  | `number`                 | `1`         |
| `indicatorPosition` | `indicator-position` | (Optional) Defines the position of the indicator in a compact variant.      | `"left" \| "right"`      | `'left'`    |
| `showStepNumber`    | `show-step-number`   | (Optional) Control whether to show step number or not in a DEFAULT variant. | `boolean`                | `false`     |
| `variant`           | `variant`            | (Optional) Defines the variant of the stepper.                              | `"compact" \| "default"` | `'default'` |


## Events

| Event       | Description                                       | Type               |
| ----------- | ------------------------------------------------- | ------------------ |
| `ifxChange` | An event emmited when the active step is changed. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
