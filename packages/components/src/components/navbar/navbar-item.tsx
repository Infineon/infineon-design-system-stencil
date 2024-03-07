import { Component, h, Element, Prop, State, Listen, Method, Event, EventEmitter } from "@stencil/core";

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
  @State() isSidebarMenuItem: boolean = false;
  @State() itemPosition: string;
  @Event() ifxNavItem: EventEmitter;
 
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

  @Method()
  async hideComponent() { 
    this.el.style.display = 'none';
  }

  @Method()
  async showComponent() { 
    this.el.style.display = '';
  }

  @Method()
  async moveChildComponentsIntoSubLayerMenu() { 
    const subLayerMenu = this.getItemMenu()
    if(subLayerMenu && subLayerMenu.classList.contains('open')) { 
      this.toggleLayerItemParent('add')
      this.toggleSubLayerBackButton('add')
      this.ifxNavItem.emit({component: this.el, action: 'hide'})
    }

    const navItems = this.el.querySelectorAll('[slot="first__layer"]')
    this.isSidebarMenuItem = true;

    for(let i = 0; i < navItems.length; i++) { 
      navItems[i].setAttribute('slot', 'second__layer')
    }
  }

  toggleSubLayerBackButton(action) { 
    const sublayerBackButton = this.el.shadowRoot.querySelector('.sub__layer-back-button')
    sublayerBackButton.classList[action]('show')
  }
 
  openSubLayerMenu() { 
    if(this.hasChildNavItems) { 
      this.toggleSubLayerBackButton('add')
      this.toggleRightArrowIcon('add')
      this.toggleLayerItemParent('add')
      this.toggleSubLayerMenu('add')
      this.ifxNavItem.emit({component: this.el, action: 'hide'})
    }
  }

  @Method()
  async moveChildComponentsBackIntoNavbar() { 
    this.toggleSubLayerBackButton('remove')
    this.toggleLayerItemParent('remove')
    this.ifxNavItem.emit({component: this.el, action: 'show'})
    const navItems = this.el.querySelectorAll('[slot="second__layer"]')
    this.isSidebarMenuItem = false;
    for(let i = 0; i < navItems.length; i++) { 
      navItems[i].setAttribute('slot', 'first__layer')
    }
  }

  toggleRightArrowIcon(action) { 
    const menuItemRightIconWrapper = this.el.shadowRoot.querySelector('.menuItemRightIconWrapper')
    menuItemRightIconWrapper.classList[action]('hide')
  }

  toggleLayerItemParent(action) { 
    const label__wrapper = this.el.shadowRoot.querySelector('.inner__content-wrapper')
    if(action === 'contains') { 
      return label__wrapper.classList.contains('layer__item-parent')
    }
    label__wrapper.classList[action]('layer__item-parent')
  }

  returnToFirstLayer() { 
    this.toggleSubLayerBackButton('remove')
    this.toggleLayerItemParent('remove')
    this.toggleRightArrowIcon('remove')
    this.toggleSubLayerMenu('remove')
    this.ifxNavItem.emit({component: this.el, action: 'return'})
  }

  componentWillLoad() {
    this.setHref()
    this.checkIfItemIsNested()
    this.checkIfItemHasChildren()
  }

  componentDidLoad() { 
    if(this.hasChildNavItems) { 
      const navItems = this.getNavbarItems();
      this.relocateItemsToFirstlayer(navItems)
    }
  }

  componentDidUpdate() { 
    const isLayerItemParent = this.toggleLayerItemParent('contains')
    if(this.isSidebarMenuItem && isLayerItemParent) {
      this.toggleRightArrowIcon('add')
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

  toggleSubLayerMenu(action) { 
    const subLayerMenu = this.el.shadowRoot.querySelector('.sub__layer-menu')
    subLayerMenu.classList[action]('open')
  }

  relocateItemsToFirstlayer(navItems) { 
     navItems.forEach(item => {
      item.setAttribute('slot', 'first__layer')
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
      if(parentElement.tagName === 'IFX-NAVBAR-PROFILE') {
        return 'left'
      }
      parentElement = parentElement.parentElement || parentElement.getRootNode().host;
    }
    return 'right'
  }
  
  toggleItemMenu() {
    const slotName = this.el.getAttribute('slot')

    if(slotName.toLowerCase() === 'mobile-menu-top') { 
      this.openSubLayerMenu()
    }

   
    if(!this.internalHref && slotName.toLowerCase() !== 'mobile-menu-top' ) {   
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
        <div class="sub__layer-back-button">
          <button onClick={() => this.returnToFirstLayer()}>Go Back</button>
        </div>
        <a href={this.internalHref} target={this.target} onClick={() => this.toggleItemMenu()} class=   {`navbar__item ${this.isSidebarMenuItem ? 'sidebarMenuItem' : ""} ${!this.showLabel ? 'removeLabel' : ""} ${this.isMenuItem ? 'menuItem' : ""} ${this.hasChildNavItems ? 'isParent' : ""}`}>
          <div class="inner__content-wrapper">
            <div class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon ? "removeWrapper" : ""}`}>
              {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
            </div>

            {this.itemPosition === 'left' 
            && this.hasChildNavItems 
            && this.isMenuItem && 
            <div class="menuItemLeftIconWrapper">
                <ifx-icon icon="chevron-left-12" />
            </div>}


            <span class="label__wrapper">
              <slot />
            </span>
          </div>

           
          <div class={`navItemIconWrapper ${this.hasChildNavItems && !this.isMenuItem && !this.isSidebarMenuItem ? '' : "hide"}`}>
            <ifx-icon icon="chevron-down-12" />
          </div>
          
         {/* {((this.itemPosition === 'right' && this.hasChildNavItems && this.isMenuItem) 
         || (this.isSidebarMenuItem && this.hasChildNavItems)) && 
         <div class="menuItemRightIconWrapper">
            <ifx-icon icon="chevron-right-12" />
          </div>} */}

         {
         <div class={`menuItemRightIconWrapper ${((this.itemPosition === 'right' && this.hasChildNavItems && this.isMenuItem) || (this.isSidebarMenuItem && this.hasChildNavItems)) ? '' : "hide"}`}>
            <ifx-icon icon="chevron-right-12" />
          </div>}

        </a>
        
        {this.hasChildNavItems && !this.isSidebarMenuItem && <ul class='navbar-menu'> <slot name="first__layer" /> </ul>}
        {this.isSidebarMenuItem && <ul class='sub__layer-menu'> <slot name="second__layer" /> </ul>}

        {/* <div class="sub__layer-menu">
            <slot name="second__layer" />
        </div> */}

      </div>
    )
  }
}