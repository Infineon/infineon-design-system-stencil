import { Component, h } from "@stencil/core";

@Component({
  tag: "ifx-multiselect-separator",
  styleUrl: "multiselect-separator.scss",
})
export class MultiselectSeparator {
  render() {
    return <div class="multiselect-separator"></div>;
  }
}
