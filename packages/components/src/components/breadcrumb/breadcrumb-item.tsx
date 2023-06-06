import { Component, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem {
  @Prop() url: string = "#"
  @State() isLastItem: boolean = false;
  @Element() el;


  toggleDropdownMenu() { 
    const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('open')
  }

  componentWillLoad() { 
    const breadcrumbItems = this.el.closest('ifx-breadcrumb').querySelectorAll('ifx-breadcrumb-item')
    if(this.el === breadcrumbItems[breadcrumbItems.length-1]) { 
      this.isLastItem = true;
    } else this.isLastItem = false;

    for(let i = 0; i < breadcrumbItems.length; i++) { 
      if(this.el === breadcrumbItems[i]) { 
        //from this point on, stop iterating, and take the rest of the items, and put them inside array;
      }
    }

    const menuItems = [];
    const [current, ...rest] = menuItems;
    console.log(current);
    console.log(rest);
  }

  render() {
    return (
      <li class="breadcrumb-parent" aria-current="" onClick={this.toggleDropdownMenu.bind(this)}>
       <li class="breadcrumb-wrapper">
          <a href={this.url}>
            <slot />
          </a>
          <ifx-icon icon="chevron-down-12"></ifx-icon>
          <div class="dropdown-menu">
            <ifx-dropdown-menu>
              <ifx-dropdown-item>Item 1</ifx-dropdown-item>
              <ifx-dropdown-item>Item 2</ifx-dropdown-item>
              <ifx-dropdown-item>Item 3</ifx-dropdown-item>
            </ifx-dropdown-menu>
          </div>
        </li>
        {!this.isLastItem && <span class="breadcrumb-divider">/</span>}
      </li>
    );
  }
}
