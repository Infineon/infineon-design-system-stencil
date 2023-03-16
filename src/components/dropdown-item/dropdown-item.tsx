import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-item',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownItem {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() checkable: boolean = false;
  @Element() el;


  render() {
    return (
       <a href="javascript:;" class="dropdown-item">
          {this.checkable && <input type="checkbox" id="checkbox4" class="form-check-input" />}
          <label htmlFor="checkbox4" class="form-check-label"><slot /></label>
        </a>
    )
  }
}