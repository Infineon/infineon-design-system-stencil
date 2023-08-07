// dropdown-menu.tsx
import { Component, h, Prop, Element, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-menu',
  styleUrl: 'dropdown-menu.scss',
  shadow: true
})

export class DropdownMenu {
  @Prop() isOpen: boolean = false;
  @Prop() size: string = 'l'
  @State() hideTopPadding: boolean = false;
  @Element() el;
  @Event() menuSize: EventEmitter;

  componentWillUpdate() { 
    this.menuSize.emit(this.size)
  }

  componentWillLoad() { 
    
    const searchField = this.el.querySelector('ifx-search-field')
    const dropdownHeader = this.el.querySelector('ifx-dropdown-header')

    if(searchField || dropdownHeader) { 
      this.hideTopPadding = true;
    } else this.hideTopPadding = false;
  }

  componentDidLoad() { 
    this.menuSize.emit(this.size)
  }


  render() {
    return (
      <div class={`dropdown-menu 
      ${this.isOpen ? 'show' : ''} 
      ${this.hideTopPadding ? 'hideTopPadding' : ""}
      ${this.size === 's' ? 'small' : ""}`}>
        <slot />
      </div >
    );
  }
}