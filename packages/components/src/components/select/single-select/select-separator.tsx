import { Component, h } from "@stencil/core";

@Component({
  tag: "ifx-select-separator",
  styleUrl: "select-separator.scss",
})
export class SelectSeparator {
  render() {
    return <div class="select-separator"></div>;
  }
}
