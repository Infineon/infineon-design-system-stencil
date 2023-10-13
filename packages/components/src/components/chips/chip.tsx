import { Component, h, Element, Prop, Listen, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-chip',
  styleUrl: 'chip.scss',
  shadow: true
})

export class Chip {
  @Element() el;
  @Prop() placeholder: string;
  @State() selectedValue: string = "";
  @Event() ifxDropdownMenu: EventEmitter<CustomEvent>;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closedMenu();
    }
  }

  @Listen('ifxDropdownItem')
  handleDropdownItemValueEmission(event: CustomEvent) {
    this.selectedValue = event.detail;
    this.ifxDropdownMenu.emit(event.detail);
    this.toggleMenu()
  }

  getDropdownMenu() { 
    let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
    return dropdownMenuComponent
  }

  closedMenu() {
    let dropdownMenuComponent = this.getDropdownMenu()
    dropdownMenuComponent.isOpen = false;
  }

  toggleMenu() { 
    let dropdownMenuComponent = this.getDropdownMenu()
    dropdownMenuComponent.isOpen = !dropdownMenuComponent.isOpen;
    this.toggleCloseIcon()
  }

  toggleCloseIcon() { 
    const closeIconWrapper = this.el.shadowRoot.querySelector('.wrapper-close-button')
    closeIconWrapper.classList.toggle('show')
  }

  render() {
    return (
      <div aria-value={this.selectedValue} aria-label='chip with a dropdown menu' class="dropdown container">
        <div class="wrapper" onClick={() => this.toggleMenu()}>
          <div class="wrapper-label">
            {this.selectedValue ? this.selectedValue : this.placeholder}
          </div>
          <div class="wrapper-close-button">
            <ifx-icon icon="chevrondown12"></ifx-icon>
          </div>
        </div>
        <slot name="menu" />
      </div>
    );
  }
}