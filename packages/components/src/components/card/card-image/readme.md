# ifx-card-image



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                      | Type                                       | Default         |
| ------------------- | -------------------- | ---------------------------------------------------------------- | ------------------------------------------ | --------------- |
| `alt`               | `alt`                | Text description of the image for screen readers.                | `string`                                   | `undefined`     |
| `backgroundColor`   | `background-color`   | Background color used when withBackground is enabled.            | `"transparent"`                            | `"transparent"` |
| `backgroundPadding` | `background-padding` | Padding applied around the image when withBackground is enabled. | `"0"`                                      | `"0"`           |
| `objectFit`         | `object-fit`         | CSS object-fit value applied to the image.                       | `"contain" \| "cover" \| "fill" \| "none"` | `"cover"`       |
| `position`          | `position`           | Image position.                                                  | `string`                                   | `undefined`     |
| `src`               | `src`                | Image source URL.                                                | `string`                                   | `undefined`     |
| `withBackground`    | `with-background`    | Shows a configurable background behind the image.                | `boolean`                                  | `false`         |


## Events

| Event         | Description                                         | Type               |
| ------------- | --------------------------------------------------- | ------------------ |
| `imgPosition` | Emits the image position when it changes or is set. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
