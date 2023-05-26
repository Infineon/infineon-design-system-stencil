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

  toggleCheckBox() { 
    let input = this.el.shadowRoot.querySelector('input')
    if(input) { 
      input.checked = !input.checked
    }
  }

  handleItemChange(event) { 
    const isNested = this.el.closest('ifx-dropdown')
    if(!isNested) { 
      this.toggleCheckBox()
    }

    if(event.currentTarget.className.toLowerCase() !== 'form-check-input') { 
      
      const checkBoxValue = this.el.shadowRoot.querySelector('ifx-checkbox');
      if(checkBoxValue) { 
        if(event.target.nodeName.toUpperCase() === 'IFX-CHECKBOX') { 
          this.itemValues.emit({check: !checkBoxValue.checked, value: this.value, target: this.el.closest('ifx-dropdown-item')})
        } else this.itemValues.emit({check: checkBoxValue.checked, value: this.value, target: this.el.closest('ifx-dropdown-item')})
      } else this.itemValues.emit({value: this.value})
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
        {this.checkable && <ifx-checkbox></ifx-checkbox> }
        {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
        <label class="form-check-label"><slot /></label>
      </a>
    )
  }
}