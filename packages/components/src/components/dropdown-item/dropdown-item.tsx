import { Component, Prop, h, Element, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-item',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownItem {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop() checkable: boolean = false;
  @Prop() value: string = ""
  @State() checkboxColor: string = "";
  @Event({ bubbles: false }) itemValues: EventEmitter<Object>;
  @Element() el;

  // handleMenuItem() {
  //   const target = this.el.innerHTML;
  //   //console.log('target', this.el.innerHTML)
  //   this.select.emit(target);
  // }

  // handleCheckValue(event) { 
  //   this.ItemCheck.emit(event.target.checked)
  // }

  toggleCheckBox() {
    let input = this.el.shadowRoot.querySelector('input')
    if (input) {
      input.checked = !input.checked
    }
  }

  handleItemChange(event) {
    const isNested = this.el.closest('ifx-dropdown')
    if (!isNested) {
      this.toggleCheckBox()
    }
    //console.log('current Target',event.currentTarget)
    if (event.currentTarget.className.toLowerCase() !== 'form-check-input') {

      const checkBoxValue = this.el.shadowRoot.querySelector('input');
      if (checkBoxValue) {
        this.itemValues.emit({ checked: checkBoxValue.checked, value: this.value })
      } else this.itemValues.emit({ value: this.value })
    }
  }



  componentWillRender() {
    const ifxDropdown = this.el.closest('ifx-dropdown')
    if (ifxDropdown) {
      const ifxButton = this.el.closest('ifx-dropdown').querySelector('ifx-button');
      if (ifxButton) {
        const ifxButtonColor = this.el.closest('ifx-dropdown').querySelector('ifx-button').color;
        this.checkboxColor = ifxButtonColor;
      }
    }
  }


  render() {
    return (
      <a href="javascript:;" onClick={this.handleItemChange.bind(this)} class={`dropdown-item ${this.checkboxColor}`}>
        {this.checkable && <input onClick={this.handleItemChange.bind(this)} type="checkbox" id="checkbox4" class={`form-check-input`} />}
        {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
        <label class="form-check-label"><slot /></label>
      </a>
    )
  }
}