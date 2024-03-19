import { Component, h, Element, Prop, State, Listen, getAssetPath, Method } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-profile',
  styleUrl: 'navbar-item.scss',
  shadow: true,
  assetsDirs: ['assets']
})

export class NavbarProfile {

  @Element() el;
  @Prop() showLabel: boolean = true;
  @Prop() href: string = ""
  @Prop() imageUrl: string = ""
  @Prop() target: string = "_self";
  @Prop() alt: string = ""
  @State() internalHref: string = ""
  @State() isMenuItem: boolean = false;
  @State() hasChildNavItems: boolean = false;
  @State() internalImageUrl: string = ""
 
  private defaultProfileImage = getAssetPath(`./assets/default_profile2.png`);

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
    this.setImage()
    const sidebarItems = this.getNavbarItems();
    if (sidebarItems.length !== 0) {
      this.hasChildNavItems = true;
    } else {
      this.hasChildNavItems = false;
    }
  }

  componentDidLoad() { 
    if(this.hasChildNavItems) { 
      const navItems = this.getNavbarItems();
      this.appendNavItemToMenu(navItems)
    }
  }

  // @Method()
  // async hideComponent(action) { 
  //   const container = this.el.shadowRoot.querySelector('.container')
  //   this.handleClassList(container, action, 'hide')
  // }

  @Method()
  async hideComponent() { 
    this.el.style.display = 'none';
  }

  @Method()
  async showComponent() { 
    this.el.style.display = '';
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

  relocateUsingSlot(navItems) { 
    navItems.forEach(item => {
     item.setAttribute('slot', 'first__layer')
   })
 }

  appendNavItemToMenu(navItems) { 
    this.relocateUsingSlot(navItems)
  }

  setImage() { 
    if (this.imageUrl.toLowerCase().trim() === "") {
      this.internalImageUrl = undefined;
    } else this.internalImageUrl = this.imageUrl;
  }

  setHref() {
    if (this.href.toLowerCase().trim() === "") {
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }



  // setItemSideSpecifications() { 
  //   const menuItem = this.el;
  //   const slotValue = menuItem.getAttribute('slot')
  //   if(slotValue.toLowerCase().trim() === "right-item") { 
  //     //add hideable
  //     //add class for correct mobile menu location
  //   } else { 
  //     //remove hideable option
  //     //add class for correct mobile menu location
  //   }
  // }

  // setInternalContent() {
  //   const slot = this.el.shadowRoot.querySelector('slot');
  //   let nodes = slot.assignedNodes();

  //   nodes.forEach(node => {
  //     if (node.nodeType === Node.TEXT_NODE) {
  //       //console.log('Slotted content is text:', node.textContent);
  //     } else if (node.nodeType === Node.ELEMENT_NODE) {
  //       const elementNode = node as Element;
  //       if (elementNode.tagName === 'IFX-NAVBAR-ITEM') {
  //         //console.log('Slotted content is an IFX-NAVBAR-ITEM component', elementNode);
  //       } else {
  //         //console.log('Slotted content is an unknown component:', elementNode.tagName);
  //       }
  //     }
  //   });
    
  // }


  handleSlotChange() { 
    
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

  toggleItemMenu() {
    if(!this.internalHref) {     
      if(this.isMenuItem && this.hasChildNavItems) { 
        const itemMenu = this.getItemMenu()
        this.handleClassList(itemMenu, 'add', 'right')
      }
   
      if(this.hasChildNavItems) { 
        const itemMenu = this.getItemMenu();
        const menuItem = this.getNavBarItem()
        this.handleClassList(itemMenu, 'toggle', 'open');
        this.handleClassList(menuItem, 'toggle', 'open');
      } 
    }
  }

  
  itemHasNestedItems() { 
    const childNavItem = this.el.shadowRoot.querySelector('ifx-navbar-item')
    if(childNavItem) { 
      return true;
    } else {
      return false;
    }
  }
  
  handleNestedLayerMenu() { 
    // if(this.isMenuItem && this.hasChildNavItems) { 
    //   const itemMenu = this.getItemMenu()
    //   if(e.type.toUpperCase() === 'MOUSEENTER') { 
    //     console.log('itemmenu', itemMenu)
    //     this.handleClassList(itemMenu, 'add', 'open')
    //     this.handleClassList(itemMenu, 'add', 'right')
    //   }

    //   if(e.type.toUpperCase() === 'MOUSELEAVE') { 
        
    //     this.handleClassList(itemMenu, 'remove', 'open')
    //     this.handleClassList(itemMenu, 'remove', 'right')
    //   }
    // }
  }

  
  render() {
    return (
      <div class="container" onMouseLeave={() => this.handleNestedLayerMenu()}  onMouseEnter={() => this.handleNestedLayerMenu()}>
        <a href={this.internalHref} target={this.target} onClick={() => this.toggleItemMenu()} class=   {`navbar__item ${!this.showLabel ? 'removeLabel' : ""} ${this.hasChildNavItems ? 'isParent' : ""}`}>
          <div class="inner__content-wrapper">
            <div class={`navbar__container-right-content-navigation-item-icon-wrapper`}>
              <img src={ this.internalImageUrl ? this.internalImageUrl : this.defaultProfileImage} alt={this.alt} />
            </div>
            <span class="label__wrapper">
              <slot  />
            </span>
          </div>
        </a>
        
        {this.hasChildNavItems && <ul class='navbar-menu rightSideItemMenu'> <slot name="first__layer" /> </ul>}
      </div>
    )
  }
}