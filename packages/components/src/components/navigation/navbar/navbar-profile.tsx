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
  @State() internalImageUrl: any = {type: "", value: ""}
 
  private defaultProfileImage = getAssetPath('./assets/48px-profile.png');

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
    this.setProfileGap()
    if(this.hasChildNavItems) { 
      const navItems = this.getNavbarItems();
      this.appendNavItemToMenu(navItems)
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

  isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  setImage() { 
    if (this.imageUrl.toLowerCase().trim() === "") {
      this.internalImageUrl = {type: undefined, value: ""}
    } else if(this.isValidHttpUrl(this.imageUrl)) {
      this.internalImageUrl = { type: 'url', value: this.imageUrl}
    } else { 
      this.internalImageUrl = { type: 'initials', value: this.imageUrl}
    }
  }

  setHref() {
    if (this.href.toLowerCase().trim() === "") {
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  setProfileGap() { 
    const innerContentWrapper = this.el.shadowRoot.querySelector('.inner__content-wrapper')
    const labelWrapper = this.el.shadowRoot.querySelector('.label__wrapper')
    const labelSlot = labelWrapper.querySelector('slot')
    const nodes = labelSlot.assignedNodes();
    if(nodes.length) { 
      this.handleClassList(innerContentWrapper, 'add', 'withLabel')
    } else { 
      this.handleClassList(innerContentWrapper, 'remove', 'withLabel')
    }
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
  


  render() {
    return (
      <div class="container">
        <a href={this.internalHref} target={this.target} onClick={() => this.toggleItemMenu()} class=   {`navbar__item ${!this.showLabel ? 'removeLabel' : ""} ${this.hasChildNavItems ? 'isParent' : ""}`}>
          <div class="inner__content-wrapper">
            <div class={`navbar__container-right-content-navigation-item-icon-wrapper`}>
             
             {this.internalImageUrl.type !== 'initials' && 
              <img src={ this.internalImageUrl.type === 'url' ? this.internalImageUrl.value : this.defaultProfileImage} alt={this.alt} />}

              {this.internalImageUrl.type === 'initials' && 
              <div class="initials__wrapper">
                <span class="initials">{this.internalImageUrl.value}</span>
              </div>}
              
            </div>
            <span class="label__wrapper">
              <slot onSlotchange={() => this.setProfileGap()} />
            </span>
          </div>
        </a>
        
        {this.hasChildNavItems && <ul class='navbar-menu rightSideItemMenu'> <slot name="first__layer" /> </ul>}
      </div>
    )
  }
}