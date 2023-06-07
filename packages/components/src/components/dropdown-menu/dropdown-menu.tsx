import { Component, Prop, h, Element, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-menu',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownMenu {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
  @Event({ bubbles: false }) selectValues: EventEmitter<Object>;
  @State() isShown: boolean = true;
  @State() isInsideSelect: boolean = false;
  @State() isInsideMultiSelect: boolean = false;
  @Element() el;


  handleValues(event) { 
    this.selectValues.emit(event.detail)
  }

  toggleCheckbox(target) {
    target.querySelector('input').checked = !target.querySelector('input').checked
  }

  componentWillRender() {
    const isInsideDropdown = this.el.closest('ifx-dropdown')
    const isInsideSelect = this.el.closest('ifx-select-input')
    const isInsideMultiSelect = this.el.closest('ifx-multi-select-input')
    const isInsideChip = this.el.closest('ifx-chip')

    if (isInsideDropdown || isInsideSelect || isInsideMultiSelect || isInsideChip) {
      this.isShown = false;
    }
    
    if(isInsideSelect) { 
      this.isInsideSelect = true;
    } else this.isInsideSelect = false;

    if(isInsideMultiSelect) { 
      this.isInsideMultiSelect = true;
    } else this.isInsideMultiSelect = false;
  }

  componentDidLoad() { 
    const dropdownItems = this.el.querySelectorAll('ifx-dropdown-item');
    for(let i = 0; i < dropdownItems.length; i++) { 
      dropdownItems[i].addEventListener('itemValues', this.handleValues.bind(this))
      dropdownItems[i].index = i;
    }
  }


  render() {
    return (
      <div class={
        `dropdown-menu 
        ${this.isShown ? 'show nested' : ""} 
        ${this.icon ? 'showIcon' : ""}
        ${this.isInsideSelect ? 'select' : ""}
        ${this.isInsideMultiSelect ? "multiSelect" : ""}`}>
        <slot />
      </div>
    )
  }
}