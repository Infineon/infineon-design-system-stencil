# ifx-stepper



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                           | Type                                   | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `activeStep`        | `active-step`        | Currently active step in the stepper.                                 | `number`                               | `1`         |
| `ariaCurrentText`   | `aria-current-text`  | ARIA current value for the active step (e.g. 'step' or 'page').       | `string`                               | `undefined` |
| `ariaLabelText`     | `aria-label-text`    | Accessible label for the stepper region.                              | `string`                               | `undefined` |
| `indicatorPosition` | `indicator-position` | Position of the indicator relative to the step content.               | `"left" \| "right"`                    | `"left"`    |
| `showStepNumber`    | `show-step-number`   | If true, displays step numbers inside the indicators.                 | `boolean`                              | `false`     |
| `variant`           | `variant`            | Visual layout variant of the stepper (default, compact, or vertical). | `"compact" \| "default" \| "vertical"` | `"default"` |


## Events

| Event       | Description                         | Type               |
| ----------- | ----------------------------------- | ------------------ |
| `ifxChange` | Fired when the active step changes. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
