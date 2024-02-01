import { Component, h, Element, Prop, State, Listen } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-item',
  styleUrl: 'navbar-item.scss',
  shadow: true
})

export class NavbarItem {

  @Element() el;
  @Prop() hideLabel: boolean = false;
  @Prop() icon: string = ""
  @Prop() href: string = ""
  @State() internalHref: string = ""
  @Prop() target: string = "_self";
  @Prop() hideComponent: boolean = false;
  @State() isMenuItem: boolean = false;
  @State() hasChildNavItems: boolean = false;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    const itemMenu = this.getItemMenu()
    if(itemMenu) { 
      if(itemMenu.classList.contains('open')) { 
        if (!path.includes(this.el)) {
          this.closeItemMenu();
        }
      }
    }
  }

  componentWillLoad() {
    this.setHref()
    this.checkIfItemIsNested()
    const sidebarItems = this.getNavbarItems();
    if (sidebarItems.length !== 0) {
      this.hasChildNavItems = true;
    } else {
      this.hasChildNavItems = false;
    }
  }

  componentDidLoad() { 
    //this.setInternalContent()
    //this.appendNavItemToMenu()
    if(this.hasChildNavItems) { 
      const navItems = this.getNavbarItems();
      this.appendNavItemToMenu(navItems)
    }
  }

  // @Listen('mousedown', { target: 'document' })
  // handleOutsideClick(event: MouseEvent) {
  //   const target = event.target as HTMLElement;

  //   if (NavbarItem.currentlyOpen.length > 0 && !NavbarItem.currentlyOpen.some(item => item.el.contains(target))) {
  //     while (NavbarItem.currentlyOpen.length > 0) {
  //       NavbarItem.currentlyOpen[0].toggleItemMenu();
  //     }
  //   }
  // }

  handleClassList(el, type, className) {
    el.classList[type](className)
    if (type === 'contains') {
      return el.classList.contains(className)
    }
  }

 
  getNavbarItems() {
    const navItems = this.el.querySelectorAll('ifx-navbar-item')
    return navItems;
  }
  
  getNavBarItem() { 
    const navItem = this.el.shadowRoot.querySelector('.navbar__container-left-content-navigation-item')
    return navItem;
  }


  appendNavItemToMenu(navItems) { 
    const menu = this.getItemMenu()
    //const navItems = this.getNavbarItems()
    navItems.forEach((el: HTMLElement) => {
      const li = document.createElement('li')
      li.appendChild(el)
      menu.appendChild(li)
    })
  }

  setHref() {
    if (this.href.toLowerCase().trim() === "") {
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  checkIfItemIsNested() {
    const parentElement = this.el.parentElement;
    if (parentElement.tagName.toUpperCase() === 'IFX-NAVBAR-ITEM') {
      this.isMenuItem = true;
      return;
    } else {
      this.isMenuItem = false;
      this.setItemSideSpecifications()
    }
  }

  setItemSideSpecifications() { 
    const menuItem = this.el;
    const slotValue = menuItem.getAttribute('slot')
    if(slotValue.toLowerCase().trim() === "right-item") { 
      //add hideable
      //add class for correct mobile menu location
    } else { 
      //remove hideable option
      //add class for correct mobile menu location
    }
  }

  setInternalContent() {
    const slot = this.el.shadowRoot.querySelector('slot');
    let nodes = slot.assignedNodes();

    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        //console.log('Slotted content is text:', node.textContent);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const elementNode = node as Element;
        if (elementNode.tagName === 'IFX-NAVBAR-ITEM') {
          //console.log('Slotted content is an IFX-NAVBAR-ITEM component', elementNode);
        } else {
          //console.log('Slotted content is an unknown component:', elementNode.tagName);
        }
      }
    });
    
  }


  handleSlotChange(event) { 
    
  }

  getItemMenu() { 
    const menu = this.el.shadowRoot.querySelector('.navbar-menu');
    return menu;
  }

  closeItemMenu() { 
    const itemMenu = this.getItemMenu()
    if(itemMenu) { 
      this.handleClassList(itemMenu, 'remove', 'open')
    }
  }

  toggleItemMenu() {
    //const hasChildNavItems = this.itemHasNestedItems()
    if(this.hasChildNavItems) { 
      const itemMenu = this.getItemMenu();
      const menuItem = this.getNavBarItem()


      this.handleClassList(itemMenu, 'toggle', 'open');
      this.handleClassList(menuItem, 'toggle', 'open');
      
      // if(hasChildNavItems) {
      //   if (NavbarItem.currentlyOpen.includes(this)) {
      //     NavbarItem.currentlyOpen = NavbarItem.currentlyOpen.filter(item => item !== this);
      //     this.handleClassList(itemMenu, 'remove', 'open');
      //   } else {
      //     NavbarItem.currentlyOpen = [...NavbarItem.currentlyOpen, this];
      //     this.handleClassList(itemMenu, 'add', 'open');
      //   }
      // }
    } else { 

    }
  }

  
  // toggleSubmenu() {
  //   if (this.isExpandable) {
  //     const menuItem = this.getSidebarMenuItem();
  //     const expandableMenu = this.getExpandableMenu();
  //     this.handleClassList(expandableMenu, 'toggle', 'open');
  //     this.handleClassList(menuItem, 'toggle', 'open');
  //     // Emit an event with the current component
  //     this.handleEventEmission();
  //   } else {
  //     // If the sidebar item is not expandable, it's a leaf item without a submenu.
  //     // Emit an event to the parent `ifx-sidebar` component to notify it that a leaf item has been clicked.
  //     if (this.isActionItem) { //its an action item that eg opens an overlay etc and should not influence the active state of the item
  //       this.ifxSidebarActionItem.emit(this.el); // emit new event if isActionItem is true
  //       return;
  //     } else { //its a navigation item which becomes active after clicking it
  //       this.handleActiveChange(true, this.internalActiveState)
  //       this.ifxSidebarNavigationItem.emit(this.el);
  //     }
  //     // If the sidebar item is selectable (not expandable), then call the handler function with the current element.
  //     if (this.handleItemClick) {
  //       this.handleItemClick(this.el);
  //     }
  //   }
  //   // // Emit an event with the current component
  //   // this.handleEventEmission();
  // }

  itemHasNestedItems() { 
    const childNavItem = this.el.shadowRoot.querySelector('ifx-navbar-item')
    if(childNavItem) { 
      return true;
    } else {
      return false;
    }
  }
  

  // handleClick(event: MouseEvent) {
  //   event.stopPropagation();

  //   // If this is a top-level menu and it's not currently open, close the currently open top-level menus
  //   if (!this.el.closest('ifx-navbar-item') && !NavbarItem.currentlyOpen.includes(this)) {
  //     while (NavbarItem.currentlyOpen.length > 0) {
  //       NavbarItem.currentlyOpen[0].toggleItemMenu();
  //     }
  //   }

  //   // Toggle the submenu
  //   this.toggleItemMenu();
  // }

  
  render() {
    return (
      <div>
        <a href={this.internalHref} target={this.target} onClick={() => this.toggleItemMenu()} class=   {`navbar__container-left-content-navigation-item ${this.hideLabel ? 'removeLabel' : ""} ${this. hideComponent ? 'hideElement' : ""} ${this.isMenuItem ? 'menuItem' : ""}`}>
          <div class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon ? "removeWrapper" : ""}`}>
            {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
          </div>
          <span>
            <slot onSlotchange={(e) => this.handleSlotChange(e)} />
          </span>
        </a>
        {this.hasChildNavItems && <ul class='navbar-menu'></ul>}
      </div>
    )
  }
}