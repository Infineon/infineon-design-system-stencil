import { Component, h } from "@stencil/core";

@Component({
  tag: "ifx-multiselect-separator",
  styleUrl: "multiselect-separator.scss",
//   shadow: true,
})
export class MultiselectSeparator {
  render() {
    return (
      <div class="multiselect-separator">
        <slot name="children" />
      </div>
    );
  }
}
