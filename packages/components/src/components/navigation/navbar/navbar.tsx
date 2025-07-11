import { Component, h, Element, State, Prop, Listen, Event, EventEmitter } from '@stencil/core';
import { trackComponent } from '../../../global/utils/tracking';

@Component({
  tag: 'ifx-navbar',
  styleUrl: 'navbar.scss',
  shadow: true,
})

export class Navbar {
  @Element() el;
  @State() main: boolean = true
  @State() products: boolean = false
  @State() applications: boolean = false
  @State() design: boolean = false
  @State() support: boolean = false
  @State() about: boolean = false
  @Prop() applicationName: string = ""
  @State() hasLeftMenuItems: boolean = true;
  @Prop() fixed: boolean = true;
  @Prop() showLogoAndAppname: boolean = true;
  @State() searchBarIsOpen: string;
  @Prop() logoHref: string = "";
  @State() internalLogoHref: string = ""
  @Prop() logoHrefTarget: string = '_self';
  @State() internalLogoHrefTarget: string = '_self';
  @Event() ifxNavbarMobileMenuIsOpen: EventEmitter;

  private addEventListenersToHandleCustomFocusState() {
    const element = this.el.shadowRoot.firstChild;

    if (!element) {
      console.error('element not found');
      return;
    }
    element.tabIndex = -1;

    // Select all a elements in the navbar and set their tabIndex to -1 to make them non-focusable
    const aElements = element.querySelectorAll('a');
    for (let i = 0; i < aElements.length; i++) {
      aElements[i].tabIndex = -1;
    }

    const slot = element.querySelector('slot');
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      for (let i = 0; i < assignedNodes.length; i++) {
        const node = assignedNodes[i] as HTMLElement;
        if (node.nodeName === 'IFX-NAVBAR-ITEM') {
          const navbarItem = node as HTMLIfxNavbarItemElement;

          // Get all navigation items
          const aElements = navbarItem?.shadowRoot.querySelectorAll('a');
          for (let i = 0; i < aElements.length; i++) {
            aElements[i].tabIndex = -1;
          }
        }
      }
    }
  }

  @Listen('ifxNavItem') 
  clearFirstLayerMenu(event: CustomEvent) { 
    if(event.detail.action === 'hideFirstLayer') { 
      const leftMenuItems = this.getMobileMenuTop()
      for(let i = 0; i < leftMenuItems.length; i++) { 
        if(!leftMenuItems[i].isSameNode(event.detail.component)) {
          leftMenuItems[i].hideComponent()
        }
      }
    }

    if(event.detail.action === 'hideSecondLayer') { 
      const parent = event.detail.parent;
      const children = parent.children;
      parent.toggleFirstLayerItem('remove', 'add')
      for(let i = 0; i < children.length; i++) { 
        if(!children[i].isSameNode(event.detail.component)) {
          children[i].hideComponent()
        }
      }
    }

    if(event.detail.action === 'returnToSecondLayer') { 
      const parent = event.detail.parent;
      const children = parent.children;
      parent.toggleFirstLayerItem('add', 'remove')
      for(let i = 0; i < children.length; i++) { 
        if(!children[i].isSameNode(event.detail.component)) {
          children[i].showComponent()
        }
      }
    }

    if(event.detail.action === 'show') { 
      const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]')
      for(let i = 0; i < leftMenuItems.length; i++) { 
        if(!leftMenuItems[i].isSameNode(event.detail.component)) {
          leftMenuItems[i].showComponent()
        }
      }
    }

    if(event.detail.action === 'return') { 
      const leftMenuItems = this.getMobileMenuTop()
      for(let i = 0; i < leftMenuItems.length; i++) { 
        if(!leftMenuItems[i].isSameNode(event.detail.component)) {
          leftMenuItems[i].showComponent()
        }
      }
    }
  }

  getWrappers() {
    const rightContentNavigationGroup = this.el.shadowRoot.querySelector('.navbar__container-right-content-navigation-group')
    const searchBarRightWrapper = this.el.shadowRoot.querySelector('.navbar__container-right-content-navigation-item-search-bar-icon-wrapper')
    const searchBarLeftWrapper = this.el.shadowRoot.querySelector('.navbar__container-left-content-navigation-item-search-bar')
    const rightSideItemSlot = rightContentNavigationGroup.querySelector('slot[name="right-item"]');
    const rightSideSlot = searchBarRightWrapper.querySelector('slot');
    const leftSideSlot = searchBarLeftWrapper.querySelector('slot');
    const rightAssignedNodes = rightSideSlot.assignedNodes();
    const leftAssignedNodes = leftSideSlot.assignedNodes();
    const navbarProfile = this.el.querySelector('ifx-navbar-profile');
    const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]');
    const rightMenuItems = this.el.querySelectorAll('[slot="right-item"]');
    const topRowWrapper = this.el.shadowRoot.querySelector('.navbar__sidebar-top-row-wrapper')
    
    return {rightSideItemSlot, rightSideSlot, leftSideSlot, rightAssignedNodes, leftAssignedNodes, navbarProfile, leftMenuItems, rightMenuItems, topRowWrapper};
  }

  hideNavItems() {
    const { rightAssignedNodes, leftAssignedNodes, navbarProfile, leftMenuItems, rightMenuItems, topRowWrapper } = this.getWrappers();
    
    if(rightAssignedNodes.length !== 0) { 
      this.searchBarIsOpen = 'right'
    } else if(leftAssignedNodes.length !== 0) {
      this.searchBarIsOpen = 'left'
    }

    if(navbarProfile) { 
      navbarProfile.hideComponent()
    }
    
    for(let l = 0; l < leftMenuItems.length; l++) { 
      if(!topRowWrapper.classList.contains('expand')) {
        leftMenuItems[l].hideComponent()
      }
    }
  
    for(let r = 0; r < rightMenuItems.length; r++) { 
      if(topRowWrapper.classList.contains('expand')) {
        if(!rightMenuItems[r].hideOnMobile) { 
          rightMenuItems[r].hideComponent()
        }
      } else { 
        rightMenuItems[r].hideComponent()
      }
    }
  }

  showNavItems() {
    const { navbarProfile, leftMenuItems, rightMenuItems, topRowWrapper } = this.getWrappers();
    this.searchBarIsOpen = undefined;
    
    if(navbarProfile) {
      navbarProfile.showComponent()
    }
    
    for(let l = 0; l < leftMenuItems.length; l++) { 
      if(!topRowWrapper.classList.contains('expand')) {
        leftMenuItems[l].showComponent()
      }
    }
  
    for(let r = 0; r < rightMenuItems.length; r++) { 
      if(topRowWrapper.classList.contains('expand')) {
        if(!rightMenuItems[r].hideOnMobile) { 
          rightMenuItems[r].showComponent()
        }
      } else { 
        rightMenuItems[r].showComponent()
      }
    }
  }
  
  
  @Listen('ifxOpen')
  handleSearchBarToggle(event: CustomEvent) {
   
    if(event.detail) { 
      this.hideNavItems();
    } else if(!event.detail) {
      this.showNavItems();
    }
  }

  toggleClass(el, className) {
    el.classList.toggle(className)
  }

  handleSidebar(el) {
    const sidebarIconWrapper = el.currentTarget.closest('.navbar__burger-icon-wrapper');
    const sidebarIconOpen = sidebarIconWrapper.querySelector('.navbar__burger-icon')
    const sidebarIconClose = sidebarIconWrapper.querySelector('.navbar__cross-icon')
    const mainContainer = el.currentTarget.closest('.navbar__main-container');
    const navbarWrapper = el.currentTarget.closest('.navbar__wrapper')
    const sidebarWrapper = navbarWrapper.querySelector('.navbar__sidebar');
    this.toggleClass(navbarWrapper, 'show')
    this.toggleClass(mainContainer, 'show')
    this.toggleClass(sidebarWrapper, 'show')
    this.toggleClass(sidebarIconOpen, 'close')
    this.toggleClass(sidebarIconClose, 'show')

    if(sidebarIconClose.classList.contains('show')) { 
      this.handleBodyScroll('hide')
    } else { 
      this.handleBodyScroll('show')
    }
  }

  handleBodyScroll(action) { 
    const body = this.el.closest('body')
    if(!this.fixed && action === 'hide') { 
      body.style.overflow = 'hidden'
    } else if(action === 'show') { 
      body.style.overflow = 'visible'
    }
  }

  handleDropdownMenu(el) {
    const dropdownWrapper = el.currentTarget.querySelector('.navbar__dropdown-wrapper')
    dropdownWrapper.classList.toggle('open')
    const iconWrapper = el.currentTarget.querySelector('a')
    iconWrapper.classList.toggle('open')
  }

  async setItemMenuPosition() { 
    const navbarItems = this.el.querySelectorAll('ifx-navbar-item')
    const navbarProfile = this.el.querySelector('ifx-navbar-profile')

    if(navbarProfile) {
      const itemChildren = navbarProfile.querySelectorAll('ifx-navbar-item')
      if (itemChildren.length !== 0) {
        itemChildren.forEach(item => { 
          item.setMenuItemPosition()
          this.setMenuItemChildrenPosition(item)
        })
      }
    }
   
    if(navbarItems.length !== 0) { 
      for(let i = 0; i < navbarItems.length; i++) { 
        const item = navbarItems[i];
        const itemChildren = item.querySelectorAll('ifx-navbar-item')
        if (itemChildren.length !== 0) {
         const hasNestedItems = await item.setItemSideSpecifications()
         if(hasNestedItems) { 
          itemChildren.forEach(item => { 
            item.setMenuItemPosition()
            this.setMenuItemChildrenPosition(item)
          })
         }
        }
      }
    }
  }

  setMenuItemChildrenPosition(item) {
    const itemChildren = item.querySelectorAll('ifx-navbar-item');
    if (itemChildren.length !== 0) {
        itemChildren.forEach(subItem => { 
          subItem.setMenuItemPosition()
          this.setMenuItemChildrenPosition(subItem)
        })
    }
  }

  getMediaQueryList() { 
    const mediaQueryList = window.matchMedia('(max-width: 800px)');
    return mediaQueryList;
  }

  componentDidLoad() {
    this.setItemMenuPosition()
    this.addEventListenersToHandleCustomFocusState();
 
    const mediaQueryList = this.getMediaQueryList()

    if (mediaQueryList.matches) {
      this.moveNavItemsToSidebar();
    }

  }

  handleMobileMenuBottom(e) { 
    const mobileMenuBottomWrapper = this.el.shadowRoot.querySelector('.navbar__sidebar-bottom-row')
    const slotElement = e.target;
    const nodes = slotElement.assignedNodes();
    if(nodes.length > 0) { 
      mobileMenuBottomWrapper.classList.add('show')
    } else { 
      mobileMenuBottomWrapper.classList.remove('show')
    }
  }

  handleLogoHrefAndTarget(){
    if(this.logoHref.trim() === "") {
      this.internalLogoHref = undefined;
    }else{
      this.internalLogoHref = this.logoHref;
    }

    if(['_self', '_blank', '_parent'].includes(this.logoHrefTarget.trim())){
      this.internalLogoHrefTarget = this.logoHrefTarget;
    }else{
      this.internalLogoHrefTarget = '_self';
    }
  }

 
  componentWillLoad() {
    trackComponent('ifx-navbar')
    this.RemoveSpaceOnStorybookSnippet()
    const dropdownMenu = this.el.querySelector('ifx-navbar-menu')
    const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]')
    if (!leftMenuItems.length && !dropdownMenu) {
      this.hasLeftMenuItems = false;
    }
    this.handleLogoHrefAndTarget();

    const mediaQueryList = window.matchMedia('(max-width: 800px)');
    mediaQueryList.addEventListener('change', (e) => this.moveNavItemsToSidebar(e));
  }

 

  getSearchBarLeftWrapper() { 
    const searchBarLeftWrapper = this.el.shadowRoot.querySelector('.navbar__container-left-content-navigation-item-search-bar')
    return searchBarLeftWrapper;
  }

  getMobileMenuTop() { 
    const leftMenuItems = this.el.querySelectorAll('[slot="mobile-menu-top"]');
    return leftMenuItems;
  }

  getMobileMenuBottom() { 
    const rightMenuItems = this.el.querySelectorAll('[slot="mobile-menu-bottom"]');
    return rightMenuItems;
  }

  handleBurgerIcon() { 
    const leftMenuItems = this.getMobileMenuTop()
    const rightMenuItems = this.getMobileMenuBottom()
    if(!leftMenuItems.length && !rightMenuItems.length) { 
     const burgerIconWrapper = this.el.shadowRoot.querySelector('.navbar__burger-icon-wrapper')
     this.toggleClass(burgerIconWrapper, 'hide')
    }
  }
  
  moveNavItemsToSidebar(e?: MediaQueryListEvent) {
    const topRowWrapper = this.el.shadowRoot.querySelector('.navbar__sidebar-top-row-wrapper')
    const mediaQueryList = this.getMediaQueryList();
    const matches = e ? e.matches : mediaQueryList.matches;
  
    if (matches) {
      /* The viewport is 800px wide or less */
      topRowWrapper.classList.add('expand')
      
      //hide body scroll if sidebar was opened
      const crossIcon = this.el.shadowRoot.querySelector('.navbar__cross-icon')
      if(crossIcon.classList.contains('show')) { 
        this.handleBodyScroll('hide')
      }
      
      //move search bar to right-side
      const searchBarLeft = this.el.querySelector('[slot="search-bar-left"]')
      if(searchBarLeft) { 
        if(this.searchBarIsOpen) { 
          searchBarLeft.onNavbarMobile()
        }
        const searchBarLeftWrapper = this.getSearchBarLeftWrapper()
        searchBarLeftWrapper.classList.add('initial')
        searchBarLeft.setAttribute('slot', 'search-bar-right')
      }
      
      //left-side
      const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]')
      for(let i = 0; i < leftMenuItems.length; i++) { 
        leftMenuItems[i].setAttribute('slot', 'mobile-menu-top')
        leftMenuItems[i].moveChildComponentsIntoSubLayerMenu()
        if(this.searchBarIsOpen) { 
          leftMenuItems[i].showComponent()
        }
      }
      
      //right-side
      const rightMenuItems = this.el.querySelectorAll('[slot="right-item"]')
      for(let i = 0; i < rightMenuItems.length; i++) { 
        if(rightMenuItems[i].tagName.toUpperCase() === 'IFX-NAVBAR-PROFILE') { 
          rightMenuItems[i].showLabel = false;
        } else { 
          if(rightMenuItems[i].hideOnMobile) { 
            rightMenuItems[i].setAttribute('slot', 'mobile-menu-bottom')
            
            rightMenuItems[i].toggleChildren('add')
            
            rightMenuItems[i].showLabel = true;
            if(this.searchBarIsOpen) { 
              rightMenuItems[i].showComponent()
            }
          }
        }
      }
      
      this.handleBurgerIcon()

    } else {
      /* The viewport is more than 800px wide */
      topRowWrapper.classList.remove('expand')

      //show body scroll 
      this.handleBodyScroll('show')

      //return search bar to its original position
      const searchBarLeftWrapper = this.getSearchBarLeftWrapper()
      const leftIsInitial = searchBarLeftWrapper.classList.contains('initial')
      const searchBarRight = this.el.querySelector('[slot="search-bar-right"]')
      if(leftIsInitial) { 
        if(this.searchBarIsOpen) { 
          searchBarRight.onNavbarMobile()
        }
        if(searchBarRight) { 
          searchBarRight.setAttribute('slot', 'search-bar-left')
        }
      }

      //left-side
      const leftMenuItems = this.getMobileMenuTop()
      for(let i = 0; i < leftMenuItems.length; i++) { 
        leftMenuItems[i].setAttribute('slot', 'left-item')
        leftMenuItems[i].moveChildComponentsBackIntoNavbar()
      }

      //right-side
      const rightMenuItems = this.getMobileMenuBottom()
      const navbarProfileItem = this.el.querySelector('ifx-navbar-profile')
      if(navbarProfileItem) { 
        const showProfileItemLabel = navbarProfileItem.getAttribute('show-label');
        navbarProfileItem.setAttribute('show-label', showProfileItemLabel)
      }

      for(let i = 0; i < rightMenuItems.length; i++) { 
        rightMenuItems[i].setAttribute('slot', 'right-item')

          rightMenuItems[i].toggleChildren('remove')
          
          const showLabel = rightMenuItems[i].getAttribute('show-label');
          rightMenuItems[i].setAttribute('show-label', showLabel)
          if(this.searchBarIsOpen) { 
            rightMenuItems[i].hideComponent()
          }
        }
      }
    }

  RemoveSpaceOnStorybookSnippet() { 
    let parent = this.el.parentElement;
    if(parent) { 
      let storybookWrapper = parent.closest('.css-xzp052');
      if(storybookWrapper) { 
        storybookWrapper.style.overflow = 'visible'
      }
    }
  }


  
  render() {
    return (
      <div aria-label='a navigation navbar' class={`navbar__wrapper ${this.fixed ? 'fixed' : ""}`}>
        <div class={`navbar__main-container ${this.fixed ? 'fixed' : ""}`}>
          <div class={`navbar__container ${this.searchBarIsOpen ? "expanded" : ""}`}>
            <div class={`navbar__container-left ${this.searchBarIsOpen === 'left' ? "expand" : this.searchBarIsOpen === 'right' ? 'hide' : ""}`}>
              {this.showLogoAndAppname &&
                <div class={`navbar__container-left-logo ${this.searchBarIsOpen === 'left' ? 'hide' : ""}`}>
                  <div class="navbar__container-left-logo-default">
                    <a href={this.internalLogoHref} target = {this.internalLogoHrefTarget}>
                      <svg width="91" height="40" viewBox="0 0 91 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2396_2480)">
                          <path d="M67.691 26.7766C71.0884 26.7766 72.1461 23.1841 72.1461 19.8802C72.1461 15.4536 70.2871 13.1441 67.691 13.1441C64.4219 13.1441 63.2681 16.7367 63.3001 19.9443C63.3322 23.1199 64.2296 26.7766 67.691 26.7766ZM66.0244 19.8481C66.0244 18.533 66.0244 15.4536 67.691 15.4536C69.4859 15.4536 69.4218 18.5009 69.4218 19.9123C69.4218 21.2595 69.4218 24.5313 67.7551 24.5313C65.9603 24.4992 66.0244 21.2274 66.0244 19.8481ZM57.8195 26.7766C59.1976 26.7766 60.3835 26.2313 61.5053 25.0445L60.5117 23.1841C59.7425 24.018 58.9733 24.4671 58.0438 24.4671C57.2746 24.4671 56.6336 24.018 56.249 23.2482C55.9285 22.5746 55.8644 21.8048 55.8644 20.9708V20.7142H61.6335V20.1368C61.6335 17.282 61.2809 15.7102 60.3835 14.5234C59.7104 13.6253 58.7169 13.1441 57.499 13.1441C56.2169 13.1441 55.1593 13.7215 54.39 14.8442C53.5567 16.0631 53.2042 17.699 53.2042 19.9443C53.1721 24.2426 54.8708 26.7766 57.8195 26.7766ZM57.531 15.2612C58.172 15.2612 58.5566 15.614 58.813 16.1914C59.0053 16.7046 59.1015 17.5707 59.1015 18.5971H55.8644C55.8964 16.3197 56.3772 15.2612 57.531 15.2612ZM74.2614 26.4559H76.7614V16.8329C77.3703 16.0952 78.0754 15.6782 78.5882 15.6782C78.9087 15.6782 79.2292 15.7423 79.4215 15.9989C79.6138 16.2876 79.71 16.7046 79.71 17.699V26.4559H82.21V16.5442C82.21 15.6782 82.1138 14.8121 81.601 14.1706C81.1523 13.5932 80.4472 13.2404 79.5497 13.2404C78.3959 13.2404 77.2101 13.914 76.569 14.6838C76.537 14.0102 76.3126 13.3687 76.2485 13.1441L73.9089 13.7536C74.0371 14.4593 74.2294 15.3253 74.2294 16.8971V26.4559H74.2614ZM45.2236 14.6838C45.1915 14.0102 44.9672 13.3687 44.9031 13.1441L42.5634 13.7536C42.6916 14.4593 42.8839 15.3253 42.8839 16.8971V26.4238H45.3838V16.8008C45.9928 16.0631 46.6979 15.6461 47.2107 15.6461C47.5312 15.6461 47.8517 15.7102 48.044 15.9669C48.2363 16.2555 48.3325 16.6725 48.3325 17.6669V26.4238H50.8324V16.5442C50.8324 15.6782 50.7363 14.8121 50.2235 14.1706C49.7748 13.5932 49.0696 13.2404 48.1722 13.2404C47.0505 13.2404 45.8646 13.914 45.2236 14.6838ZM14.6473 9.07042C16.1216 9.07042 17.3075 7.88359 17.3075 6.40807C17.3075 4.93256 16.1216 3.74573 14.6473 3.74573C13.173 3.74573 11.9871 4.93256 11.9871 6.40807C11.9871 7.88359 13.173 9.07042 14.6473 9.07042ZM26.9227 26.4559V16.5442C26.9227 15.6782 26.8265 14.8121 26.3137 14.1706C25.865 13.5932 25.1599 13.2404 24.2625 13.2404C23.1087 13.2404 21.9228 13.914 21.2818 14.6838C21.2497 14.0102 21.0254 13.3687 20.9613 13.1441L18.6536 13.7857C18.7818 14.4913 18.9741 15.3574 18.9741 16.9291V26.4559H21.4741V16.8329C22.0831 16.0952 22.7882 15.6782 23.301 15.6782C23.6215 15.6782 23.942 15.7423 24.1343 15.9989C24.3266 16.2876 24.4227 16.7046 24.4227 17.699V26.4559H26.9227ZM38.4289 8.36474C37.4994 8.36474 36.7622 9.10249 36.7622 10.0327C36.7622 10.9629 37.4994 11.7007 38.3968 11.7007C39.3263 11.7007 40.0634 10.9629 40.0634 10.0327C40.0634 9.10249 39.3263 8.36474 38.4289 8.36474ZM13.4614 26.4559H15.9614V10.8346L13.4614 11.1554V26.4559ZM33.8777 9.90441C34.3264 9.90441 34.7751 10.0648 35.0635 10.2893L35.7687 8.33266C35.0956 7.85151 34.3584 7.62698 33.429 7.62698C32.788 7.62698 32.1149 7.78736 31.5059 8.26851C30.897 8.78173 30.256 9.80818 30.256 11.7328C30.256 12.5667 30.288 13.4328 30.288 13.4328H29.4226V15.6461H30.288V26.4238H32.8521V15.6782H34.743L35.2238 13.4649H32.8841V11.4762C32.8841 10.5139 33.2687 9.90441 33.8777 9.90441ZM37.1468 26.4559H39.6788V13.2404L37.1468 13.5611V26.4559Z" fill="#005DA9" />
                          <path d="M77.0816 33.5126C68.6203 36.0146 58.3321 37.1052 48.2682 37.1052C22.7239 37.1052 6.24986 29.5993 5.09604 19.6877C4.67938 15.9668 7.59599 12.3422 12.4677 9.26285C11.6023 8.62132 11.0575 7.59488 11.0254 6.44012C3.97427 10.161 0 15.0366 0 19.9764C0 30.9145 19.5188 40.1525 48.5246 39.7676C58.6205 39.6393 67.0498 38.1958 74.6778 35.6939C83.7482 32.7428 89.4532 28.5087 90.8313 26.6483C89.1968 28.1238 85.3186 31.0748 77.0816 33.5126ZM23.2687 4.38723C24.9674 3.80985 27.3712 3.0721 27.3712 3.0721C34.1339 1.21166 41.6017 0.121063 48.5566 0.185215C40.544 -0.295931 33.2365 0.185215 26.8584 1.33997C26.8584 1.33997 24.743 1.69281 22.4675 2.27018C22.4675 2.27018 21.3777 2.55887 20.7047 2.75133C20.0316 2.94379 19.1021 3.2004 19.1021 3.2004C18.4611 3.39286 17.8201 3.6174 17.1791 3.84193C17.8201 4.48346 18.2047 5.31745 18.2368 6.27974C19.3586 5.76652 21.5059 4.99668 23.2687 4.38723Z" fill="#E30034" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2396_2480">
                            <rect width="91" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  {this.applicationName && <h6>{this.applicationName}</h6>}
                  {this.applicationName && this.hasLeftMenuItems &&
                    <div class="navbar__container-left-logo-divider"></div>}
                </div>}
              <div class="navbar__container-left-content">
                <div class="navbar__container-left-content-navigation-group">
                  <slot name='left-item' />
                  <div class="navbar__container-left-content-navigation-item-search-bar">
                    <slot name='search-bar-left' />
                  </div>
                </div>
              </div>
            </div>
            <div class={`navbar__container-right ${this.searchBarIsOpen === 'right' ? "expand" : this.searchBarIsOpen === 'left' ? 'hide' : ""}`}>
              <div class="navbar__container-right-content">
                <div class="navbar__container-right-content-navigation-group">
                  <div class="navbar__container-right-content-navigation-item-search-bar">
                  <div class={`navbar__container-right-content-navigation-item-search-bar-icon-wrapper`}>
                      <slot name='search-bar-right' />
                    </div>
                  </div>
                  <slot name='right-item' />
                </div>
              </div>

              {/* MOBILE MENU BUTTON */}
              <div class={`navbar__burger-icon-wrapper`} onClick={this.handleSidebar.bind(this)}>
                <div class="navbar__burger-icon">
                  <ifx-icon icon="menu-right-16"></ifx-icon>
                </div>
                <div class="navbar__cross-icon">
                  <ifx-icon icon="cross-16"></ifx-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div class="navbar__sidebar">
          {/* left side ifx-navbar-item  */}
          <div class="navbar__sidebar-top-row">
            <div class="navbar__sidebar-top-row-wrapper">
              <slot name='mobile-menu-top' />
            </div>
          </div>

          {/* right side ifx-navbar-item  */}
          <div class="navbar__sidebar-bottom-row">
            <slot name='mobile-menu-bottom' onSlotchange={(e) => this.handleMobileMenuBottom(e)} />
          </div>
          
        </div>
      </div>
    );
  }
}