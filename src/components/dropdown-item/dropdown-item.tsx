import { Component, Prop, h, Element, State } from "@stencil/core";

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
  @State() checkboxColor: string = "";
  @Element() el;

  componentWillRender() { 
    const ifxDropdown = this.el.closest('ifx-dropdown')
    if(ifxDropdown) { 
      const ifxButton = this.el.closest('ifx-dropdown').querySelector('ifx-button');
      if(ifxButton) { 
        const ifxButtonColor = this.el.closest('ifx-dropdown').querySelector('ifx-button').color;
        this.checkboxColor = ifxButtonColor;
      }
    }
  }

  render() {
    return (
       <a href="javascript:;" class={`dropdown-item ${this.checkboxColor}`}>
          {this.checkable && <input type="checkbox" id="checkbox4" class={`form-check-input`} />}
          <infineon-icon-stencil icon={'calendar24'}></infineon-icon-stencil>
          <label htmlFor="checkbox4" class="form-check-label"><slot /></label>
        </a>
    )
  }
}