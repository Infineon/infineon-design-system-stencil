// dropdown-menu.tsx
import { Component, h, Prop, Element, State, Event, EventEmitter, Listen } from "@stencil/core";

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
  @State() filteredItems: HTMLIfxDropdownItemElement[] = [];
  @Event() ifxValue: EventEmitter;

  @Listen('ifxInput')
  handleMenuFilter(event: CustomEvent) { 
    const searchValue = event.detail;
    this.filterDropdownItems(searchValue)
  }

  @Listen('ifxDropdownItemValue')
  handleDropdownItemValueEmission(e) { 
    const optionValue = e.detail;
    this.ifxValue.emit(optionValue)
  }

  filterDropdownItems(searchValue: string) {
  const allItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
  let dropdownItem, txtValue;
  let query = searchValue.toUpperCase()

  for (let i = 0; i < allItems.length; i++) {
      dropdownItem = allItems[i];
      txtValue = dropdownItem.textContent || dropdownItem.innerText;

      if(txtValue.toUpperCase().indexOf(query) > -1) { 
        dropdownItem.setAttribute('hide', false)
      } else { 
        dropdownItem.setAttribute('hide', true)
      }
    }
  }
  
  componentWillUpdate() { 
    this.menuSize.emit(this.size)
  }

  componentWillLoad() { 
    this.filteredItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item')) as HTMLIfxDropdownItemElement[];
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