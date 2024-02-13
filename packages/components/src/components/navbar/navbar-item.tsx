import { Component, h, Element, Prop, State, Listen, Method } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-item',
  styleUrl: 'navbar-item.scss',
  shadow: true
})

export class NavbarItem {

  @Element() el;
  @Prop() showLabel: boolean = true;
  @Prop() icon: string = ""
  @Prop() href: string = ""
  @Prop() target: string = "_self";
  @State() internalHref: string = ""
  @State() isMenuItem: boolean = false;
  @State() hasChildNavItems: boolean = false;
  @State() itemPosition: string;
 
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
    this.checkIfItemHasChildren()
  }

  componentDidLoad() { 
    if(this.hasChildNavItems) { 
      const navItems = this.getNavbarItems();
      this.appendNavItemToMenu(navItems)
    }
  }
 
  @Method()
  async setMenuItemPosition() { 
    if(this.isMenuItem && this.hasChildNavItems) { 
      const menuPosition = this.checkItemMenuPosition()
      if(menuPosition === 'left') { 
        this.itemPosition = 'left'
      } else if(menuPosition === 'right') { 
        this.itemPosition = 'right'
      }
    }
  }

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
    const navItem = this.el.shadowRoot.querySelector('.navbar__item')
    return navItem;
  }

  appendNavItemToMenu(navItems) { 
    const menu = this.getItemMenu()
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
    if (parentElement.tagName.toUpperCase() === 'IFX-NAVBAR-ITEM' 
    || parentElement.tagName.toUpperCase() === 'IFX-NAVBAR-PROFILE') {
      this.isMenuItem = true;
      return;
    } else {
      this.isMenuItem = false;
    }
  }

  checkIfItemHasChildren() { 
    const sidebarItems = this.getNavbarItems();
    if (sidebarItems.length !== 0) {
      this.hasChildNavItems = true;
    } else {
      this.hasChildNavItems = false;
    } 
  }

  @Method()
  async setItemSideSpecifications() {  
    const menuItem = this.el;
    const itemMenu = this.getItemMenu()
    const slotValue = menuItem.getAttribute('slot')
 
    if(slotValue.toLowerCase().trim() === "right-item") { 
      this.handleClassList(itemMenu, 'add', 'rightSideItemMenu')
      //add hideable
      //add class for correct mobile menu location
    } else { 
      //remove hideable option
      //add class for correct mobile menu location
    }

    return true;
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
    //handle dynamic slot change
  }

  getItemMenu() { 
    const menu = this.el.shadowRoot.querySelector('.navbar-menu');
    return menu;
  }

  closeItemMenu() { 
    const itemMenu = this.getItemMenu()
    const menuItem = this.getNavBarItem()
    if(itemMenu) { 
      this.handleClassList(itemMenu, 'remove', 'open')
      this.handleClassList(menuItem, 'remove', 'open')
    }
  }

  checkItemMenuPosition() {
    let parentElement = this.el;
    while(parentElement) {
      if(parentElement.classList.contains('rightSideItemMenu')) {
        return 'left'
      }
      parentElement = parentElement.parentElement || parentElement.getRootNode().host;
    }
    return 'right'
  }
  
  toggleItemMenu() {
    if(!this.internalHref) {   
      const itemMenu = this.getItemMenu()
    
      if(this.hasChildNavItems) { 
        const menuItem = this.getNavBarItem()
        this.handleClassList(itemMenu, 'toggle', 'open');
        this.handleClassList(menuItem, 'toggle', 'open');
      } 
    }
  }

  handleNestedLayerMenu(e) { 
    if(this.isMenuItem && this.hasChildNavItems) { 
      const itemMenu = this.getItemMenu()
      const menuPosition = this.checkItemMenuPosition()
      if(e.type.toUpperCase() === 'MOUSEENTER') { 
        this.handleClassList(itemMenu, 'add', 'open')
        if(menuPosition === 'left') { 
          this.handleClassList(itemMenu, 'add', 'left')
        } else if(menuPosition === 'right') { 
          this.handleClassList(itemMenu, 'add', 'right')
        }
      }

      if(e.type.toUpperCase() === 'MOUSELEAVE') { 
        this.handleClassList(itemMenu, 'remove', 'open')
        if(menuPosition === 'left') { 
          this.handleClassList(itemMenu, 'remove', 'left')
        } else if (menuPosition === 'right') { 
          this.handleClassList(itemMenu, 'remove', 'right')
        }
      }
    }
  }

  
  render() {
    return (
      <div class="container" onMouseLeave={e => this.handleNestedLayerMenu(e)}  onMouseEnter={e => this.handleNestedLayerMenu(e)}>
        <a href={this.internalHref} target={this.target} onClick={() => this.toggleItemMenu()} class=   {`navbar__item ${!this.showLabel ? 'removeLabel' : ""} ${this.isMenuItem ? 'menuItem' : ""} ${this.hasChildNavItems ? 'isParent' : ""}`}>
          <div class="inner__content-wrapper">
            <div class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon ? "removeWrapper" : ""}`}>
              {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
            </div>

            {this.itemPosition === 'left' 
            && this.hasChildNavItems 
            && this.isMenuItem && 
            <div class="menuItemIconWrapper">
                <ifx-icon icon="chevron-left-12" />
            </div>}


            <span class="label__wrapper">
              <slot onSlotchange={(e) => this.handleSlotChange(e)} />
            </span>
          </div>

          {this.hasChildNavItems && !this.isMenuItem &&  
          <div class="navItemIconWrapper">
            <ifx-icon icon="chevron-down-12" />
          </div>}
         
         {this.itemPosition === 'right' 
         && this.hasChildNavItems 
         && this.isMenuItem && 
         <div class="menuItemIconWrapper">
            <ifx-icon icon="chevron-right-12" />
          </div>}
        </a>
        
        {this.hasChildNavItems && <ul class='navbar-menu'></ul>}
      </div>
    )
  }
}