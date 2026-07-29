import {
  Component,
  Element,
  Event,
  type EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { detectFramework } from '../../../shared/utils/framework-detection';
import { trackComponent } from '../../../shared/utils/tracking';

@Component({
  tag: 'ifx-navbar',
  styleUrl: 'navbar.scss',
  shadow: true,
})
export class Navbar {
  @Element() el!: HTMLIfxNavbarElement;
  /** Name of the application shown in the navbar. */
  @Prop() readonly applicationName: string = '';
  @State() hasLeftMenuItems: boolean = true;
  /** If true, the navbar is fixed (e.g. sticks to the top). */
  @Prop() readonly fixed: boolean = true;
  /** If true, shows the logo and application name in the navbar. */
  @Prop() readonly showLogoAndAppname: boolean = true;
  @State() searchBarIsOpen: 'left' | 'right' | undefined;
  @State() isMobileMenuOpen: boolean = false;
  @State() hasLeftSearchBar: boolean = false;
  @State() hasRightSearchBar: boolean = false;
  @State() hasLeftItems: boolean = false;
  @State() hasRightItems: boolean = false;
  /** Link URL for the logo click action. */
  @Prop() readonly logoHref: string = '';
  @State() internalLogoHref: string | undefined;
  /** Where to open the logo link (same tab, new tab, etc.). */
  @Prop() readonly logoHrefTarget: string = '_self';
  @State() internalLogoHrefTarget: string = '_self';
  /** Fired when the mobile navbar menu is opened or closed. */
  @Event() ifxNavbarMobileMenuIsOpen: EventEmitter | undefined;

  private initialSearchBarOpen: boolean = false;
  private isResizing: boolean = false;

  private addEventListenersToHandleCustomFocusState() {
    const element = this.el.shadowRoot!.firstChild as HTMLElement;

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

          const aElements = navbarItem?.shadowRoot!.querySelectorAll('a');
          for (let i = 0; i < aElements.length; i++) {
            aElements[i].tabIndex = -1;
          }
        }
      }
    }
  }

  @Listen('ifxNavItem')
  clearFirstLayerMenu(event: CustomEvent) {
    if (event.detail.action === 'hideFirstLayer') {
      const leftMenuItems = this.getMobileMenuTop();
      for (let i = 0; i < leftMenuItems.length; i++) {
        const item = leftMenuItems[i];
        if (
          !item.isSameNode(event.detail.component) &&
          this.isNavbarItem(item)
        ) {
          item.hideComponent();
        }
      }
    }

    if (event.detail.action === 'hideSecondLayer') {
      const parent = event.detail.parent;
      const children = parent.children;
      if (this.isNavbarItem(parent)) {
        parent.toggleFirstLayerItem('remove', 'add');
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (
          !child.isSameNode(event.detail.component) &&
          this.isNavbarItem(child)
        ) {
          child.hideComponent();
        }
      }
    }

    if (event.detail.action === 'returnToSecondLayer') {
      const parent = event.detail.parent;
      const children = parent.children;
      if (this.isNavbarItem(parent)) {
        parent.toggleFirstLayerItem('add', 'remove');
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (
          !child.isSameNode(event.detail.component) &&
          this.isNavbarItem(child)
        ) {
          child.showComponent();
        }
      }
    }

    if (event.detail.action === 'show') {
      const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]');
      for (let i = 0; i < leftMenuItems.length; i++) {
        const item = leftMenuItems[i];
        if (
          !item.isSameNode(event.detail.component) &&
          this.isNavbarItem(item)
        ) {
          item.showComponent();
        }
      }
    }

    if (event.detail.action === 'return') {
      const leftMenuItems = this.getMobileMenuTop();
      for (let i = 0; i < leftMenuItems.length; i++) {
        const item = leftMenuItems[i];
        if (
          !item.isSameNode(event.detail.component) &&
          this.isNavbarItem(item)
        ) {
          item.showComponent();
        }
      }
    }
  }

  private isNavbarItem(element: Element): element is HTMLIfxNavbarItemElement {
    return (
      typeof (element as HTMLIfxNavbarItemElement).hideComponent === 'function'
    );
  }

  private isNavbarSearchBar(
    element: Element | null,
  ): element is HTMLIfxSearchBarElement {
    return (
      !!element &&
      typeof (element as HTMLIfxSearchBarElement).close === 'function' &&
      typeof (element as HTMLIfxSearchBarElement).open === 'function' &&
      typeof (element as HTMLIfxSearchBarElement).close === 'function'
    );
  }

  private hasShowLabel(
    element: Element,
  ): element is Element & { showLabel: boolean } {
    return 'showLabel' in element;
  }

  private storeShowLabel(element: Element) {
    if (element.hasAttribute('data-navbar-original-show-label')) return;

    element.setAttribute(
      'data-navbar-original-show-label',
      element.getAttribute('show-label') ?? '',
    );
  }

  private hideLabelOnMobile(element: Element) {
    this.storeShowLabel(element);
    element.removeAttribute('show-label');

    if (this.hasShowLabel(element)) {
      element.showLabel = false;
    }
  }

  private restoreLabelAfterMobile(element: Element | null) {
    if (!element) return;

    const originalShowLabel = element.getAttribute(
      'data-navbar-original-show-label',
    );

    if (originalShowLabel === null) return;

    if (originalShowLabel === '') {
      element.removeAttribute('show-label');

      if (this.hasShowLabel(element)) {
        element.showLabel = false;
      }
    } else {
      element.setAttribute('show-label', originalShowLabel);

      if (this.hasShowLabel(element)) {
        element.showLabel = originalShowLabel === 'true';
      }
    }

    element.removeAttribute('data-navbar-original-show-label');
  }

  private getWrappers() {
    const rightSideItemSlot = this.el.shadowRoot!.querySelector(
      'slot[name="right-item"]',
    );
    const rightSideSlot = this.el.shadowRoot!.querySelector(
      '.navbar__search--right slot',
    ) as HTMLSlotElement | null;
    const leftSideSlot = this.el.shadowRoot!.querySelector(
      '.navbar__search--left slot',
    ) as HTMLSlotElement | null;
    const navbarProfile = this.el.querySelector('ifx-navbar-profile');
    const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]');
    const rightMenuItems = this.el.querySelectorAll('[slot="right-item"]');
    const topRowWrapper = this.el.shadowRoot!.querySelector(
      '.navbar__mobile-list',
    );

    return {
      rightSideItemSlot,
      rightSideSlot,
      leftSideSlot,
      rightAssignedNodes: rightSideSlot?.assignedNodes() ?? [],
      leftAssignedNodes: leftSideSlot?.assignedNodes() ?? [],
      navbarProfile,
      leftMenuItems,
      rightMenuItems,
      topRowWrapper,
    };
  }

  private hideNavItems() {
    const {
      rightAssignedNodes,
      leftAssignedNodes,
      navbarProfile,
      leftMenuItems,
      rightMenuItems,
      topRowWrapper,
    } = this.getWrappers();

    if (rightAssignedNodes.length !== 0) {
      this.searchBarIsOpen = 'right';
    } else if (leftAssignedNodes.length !== 0) {
      this.searchBarIsOpen = 'left';
    }

    if (navbarProfile) {
      navbarProfile.hideComponent();
    }

    for (let l = 0; l < leftMenuItems.length; l++) {
      if (!topRowWrapper!.classList.contains('expand')) {
        const item = leftMenuItems[l];
        if (this.isNavbarItem(item)) {
          item.hideComponent();
        }
      }
    }

    for (let r = 0; r < rightMenuItems.length; r++) {
      if (topRowWrapper!.classList.contains('expand')) {
        const item = rightMenuItems[r];
        if (this.isNavbarItem(item) && !item.hideOnMobile) {
          item.hideComponent();
        }
      } else {
        const item = rightMenuItems[r];
        if (this.isNavbarItem(item)) {
          item.hideComponent();
        }
      }
    }
  }

  private showNavItems() {
    const { navbarProfile, leftMenuItems, rightMenuItems, topRowWrapper } =
      this.getWrappers();
    this.searchBarIsOpen = undefined;

    if (navbarProfile) {
      navbarProfile.showComponent();
    }

    for (let l = 0; l < leftMenuItems.length; l++) {
      if (!topRowWrapper!.classList.contains('expand')) {
        const item = leftMenuItems[l];
        if (this.isNavbarItem(item)) {
          item.showComponent();
        }
      }
    }

    for (let r = 0; r < rightMenuItems.length; r++) {
      if (topRowWrapper!.classList.contains('expand')) {
        const item = rightMenuItems[r];
        if (this.isNavbarItem(item) && !item.hideOnMobile) {
          item.showComponent();
        }
      } else {
        const item = rightMenuItems[r];
        if (this.isNavbarItem(item)) {
          item.showComponent();
        }
      }
    }
  }

  @Listen('ifxOpen')
  handleSearchBarToggle(event: CustomEvent) {
    if (this.isResizing) return;

    const leftSearchBar = this.getSearchBar('left');
    const rightSearchBar = this.getSearchBar('right');

    if (event.detail) {
      this.hideNavItems();

      if (this.isNavbarSearchBar(leftSearchBar)) {
        leftSearchBar.setAttribute('show-close-button', 'true');
      }
      if (this.isNavbarSearchBar(rightSearchBar)) {
        rightSearchBar.setAttribute('show-close-button', 'true');
      }
    } else {
      this.showNavItems();

      if (this.isNavbarSearchBar(leftSearchBar)) {
        leftSearchBar.setAttribute('show-close-button', 'false');
      }
      if (this.isNavbarSearchBar(rightSearchBar)) {
        rightSearchBar.setAttribute('show-close-button', 'false');
      }
    }
  }

  private handleSidebar() {
    const isOpen = !this.isMobileMenuOpen;

    this.isMobileMenuOpen = isOpen;
    this.handleBodyScroll(isOpen ? 'hide' : 'show');
    this.ifxNavbarMobileMenuIsOpen?.emit(isOpen);
  }

  private handleBodyScroll(action: 'hide' | 'show') {
    const body = this.el.closest('body');

    if (!body) return;

    if (!this.fixed && action === 'hide') {
      body.style.overflow = 'hidden';
    } else if (action === 'show') {
      body.style.overflow = 'visible';
    }
  }

  private async setItemMenuPosition() {
    const navbarItems = this.el.querySelectorAll('ifx-navbar-item');
    const navbarProfile = this.el.querySelector('ifx-navbar-profile');

    if (navbarProfile) {
      const itemChildren = navbarProfile.querySelectorAll('ifx-navbar-item');
      if (itemChildren.length !== 0) {
        itemChildren.forEach((item) => {
          if (this.isNavbarItem(item)) {
            item.setMenuItemPosition();
            this.setMenuItemChildrenPosition(item);
          }
        });
      }
    }

    if (navbarItems.length !== 0) {
      for (let i = 0; i < navbarItems.length; i++) {
        const item = navbarItems[i];
        if (!this.isNavbarItem(item)) {
          continue;
        }
        const itemChildren = item.querySelectorAll('ifx-navbar-item');
        if (itemChildren.length !== 0) {
          const hasNestedItems = await item.setItemSideSpecifications();
          if (hasNestedItems) {
            itemChildren.forEach((item) => {
              if (this.isNavbarItem(item)) {
                item.setMenuItemPosition();
                this.setMenuItemChildrenPosition(item);
              }
            });
          }
        }
      }
    }
  }

  private setMenuItemChildrenPosition(item: Element) {
    const itemChildren = item.querySelectorAll('ifx-navbar-item');

    itemChildren.forEach((subItem) => {
      if (this.isNavbarItem(subItem)) {
        subItem.setMenuItemPosition();
        this.setMenuItemChildrenPosition(subItem);
      }
    });
  }

  private getMediaQueryList() {
    return window.matchMedia('(max-width: 800px)');
  }

  async componentDidLoad() {
    const framework = detectFramework();
    trackComponent('ifx-navbar', await framework);
    this.setItemMenuPosition();
    this.addEventListenersToHandleCustomFocusState();

    const mediaQueryList = this.getMediaQueryList();

    if (mediaQueryList.matches) {
      this.moveNavItemsToSidebar();
    } else {
      const searchBarRight = this.getSearchBar('right');

      if (this.isNavbarSearchBar(searchBarRight)) {
        // ALWAYS closed on desktop initially
        await searchBarRight.close();
        searchBarRight.setAttribute('show-close-button', 'false');
      }
    }
  }

  private syncSearchBarSlots() {
    this.hasLeftSearchBar = !!this.el.querySelector('[slot="search-bar-left"]');
    this.hasRightSearchBar = !!this.el.querySelector(
      '[slot="search-bar-right"]',
    );
  }

  private syncNavigationSlots() {
    this.hasLeftItems = !!this.el.querySelector('[slot="left-item"]');
    this.hasRightItems = !!this.el.querySelector('[slot="right-item"]');
  }

  private handleNavigationSlotChange(event: Event, position: 'left' | 'right') {
    const slot = event.target as HTMLSlotElement;
    const hasAssignedContent =
      slot.assignedElements({ flatten: true }).length > 0;

    if (position === 'left') {
      this.hasLeftItems = hasAssignedContent;
      return;
    }

    this.hasRightItems = hasAssignedContent;
  }

  private handleSearchSlotChange(event: Event, position: 'left' | 'right') {
    const slot = event.target as HTMLSlotElement;
    const hasAssignedContent =
      slot.assignedElements({ flatten: true }).length > 0;

    if (position === 'left') {
      this.hasLeftSearchBar = hasAssignedContent;
      return;
    }

    this.hasRightSearchBar = hasAssignedContent;
  }

  private handleMobileMenuBottom(event: Event) {
    const mobileMenuBottomWrapper = this.el.shadowRoot!.querySelector(
      '.navbar__mobile-bottom',
    );
    const slotElement = event.target as HTMLSlotElement;
    const hasItems = slotElement.assignedNodes().length > 0;

    mobileMenuBottomWrapper?.classList.toggle('show', hasItems);
  }

  private handleLogoHrefAndTarget() {
    if (this.logoHref.trim() === '') {
      this.internalLogoHref = undefined;
    } else {
      this.internalLogoHref = this.logoHref;
    }

    if (['_self', '_blank', '_parent'].includes(this.logoHrefTarget.trim())) {
      this.internalLogoHrefTarget = this.logoHrefTarget;
    } else {
      this.internalLogoHrefTarget = '_self';
    }
  }

  componentWillLoad() {
    this.RemoveSpaceOnStorybookSnippet();
    const dropdownMenu = this.el.querySelector('ifx-navbar-menu');
    const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]');
    if (!leftMenuItems.length && !dropdownMenu) {
      this.hasLeftMenuItems = false;
    }
    this.handleLogoHrefAndTarget();
    this.syncSearchBarSlots();
    this.syncNavigationSlots();

    const mediaQueryList = window.matchMedia('(max-width: 800px)');
    mediaQueryList.addEventListener('change', (e) =>
      this.moveNavItemsToSidebar(e),
    );

    this.setInitialStateOnSearchBar();
  }

  private setInitialStateOnSearchBar() {
    const searchBar = this.el.querySelector(
      '[slot="search-bar-left"], [slot="search-bar-right"]',
    ) as HTMLIfxSearchBarElement;
    if (searchBar) {
      const isRight = searchBar.getAttribute('slot') === 'search-bar-right';

      if (!isRight) {
        const isOpenAttr = searchBar.getAttribute('is-open');
        this.initialSearchBarOpen =
          isOpenAttr === 'true' || isOpenAttr === 'open';
      } else {
        this.initialSearchBarOpen = false;
      }
      const mediaQueryList = this.getMediaQueryList();
      if (!mediaQueryList.matches) {
        searchBar.setAttribute('show-close-button', 'false');
      }
    }
  }

  private getSearchBarLeftWrapper() {
    return this.el.shadowRoot!.querySelector('.navbar__search--left');
  }

  private getMobileMenuTop() {
    const leftMenuItems = this.el.querySelectorAll('[slot="mobile-menu-top"]');
    return leftMenuItems;
  }

  private getMobileMenuBottom() {
    const rightMenuItems = this.el.querySelectorAll(
      '[slot="mobile-menu-bottom"]',
    );
    return rightMenuItems;
  }

  private handleBurgerIcon() {
    const hasMobileItems =
      this.getMobileMenuTop().length > 0 ||
      this.getMobileMenuBottom().length > 0;
    const burgerIcon = this.el.shadowRoot!.querySelector('.navbar__burger');

    burgerIcon?.classList.toggle('navbar__burger--hidden', !hasMobileItems);
  }

  private getSearchBar(position: 'left' | 'right') {
    return this.el.querySelector(
      `[slot="search-bar-${position}"]`,
    ) as HTMLIfxSearchBarElement | null;
  }

  private async moveNavItemsToSidebar(e?: MediaQueryListEvent) {
    const topRowWrapper = this.el.shadowRoot!.querySelector(
      '.navbar__mobile-list',
    );

    const mediaQueryList = this.getMediaQueryList();
    const matches = e ? e.matches : mediaQueryList.matches;

    if (matches) {
      /* The viewport is 800px wide or less */
      topRowWrapper!.classList.add('expand');

      const allNavbarItems = this.el.querySelectorAll('ifx-navbar-item');
      for (let i = 0; i < allNavbarItems.length; i++) {
        const item = allNavbarItems[i];
        if (this.isNavbarItem(item)) {
          item.showComponent();
        }
      }

      if (this.isMobileMenuOpen) {
        this.handleBodyScroll('hide');
      }

      const searchBarLeft = this.getSearchBar('left');
      if (searchBarLeft) {
        if (this.searchBarIsOpen) {
          if (this.isNavbarSearchBar(searchBarLeft)) {
            searchBarLeft.close();
          }
        }
        const searchBarLeftWrapper = this.getSearchBarLeftWrapper();
        searchBarLeftWrapper!.classList.add('initial');
        searchBarLeft.setAttribute('slot', 'search-bar-right');
        searchBarLeft.setAttribute('show-close-button', 'true');
        this.hasLeftSearchBar = false;
        this.hasRightSearchBar = true;
      }

      //left-side
      const leftMenuItems = this.el.querySelectorAll('[slot="left-item"]');
      for (let i = 0; i < leftMenuItems.length; i++) {
        const item = leftMenuItems[i];
        item.setAttribute('slot', 'mobile-menu-top');
        if (this.isNavbarItem(item)) {
          item.moveChildComponentsIntoSubLayerMenu();
        }

        const searchBar = this.getSearchBar('right');
        if (this.isNavbarSearchBar(searchBar)) {
          await searchBar.close();
        }

        if (this.searchBarIsOpen) {
          if (this.isNavbarItem(item)) {
            item.showComponent();
          }
        }
      }

      //right-side
      const rightMenuItems = this.el.querySelectorAll('[slot="right-item"]');
      for (let i = 0; i < rightMenuItems.length; i++) {
        const item = rightMenuItems[i];
        if (item.tagName.toUpperCase() === 'IFX-NAVBAR-PROFILE') {
          this.hideLabelOnMobile(item);
        } else {
          if (this.isNavbarItem(item) && item.hideOnMobile) {
            item.setAttribute('slot', 'mobile-menu-bottom');
            item.toggleChildren('add');
            this.hideLabelOnMobile(item);

            if (this.searchBarIsOpen) {
              item.showComponent();
            }
          }
        }
      }

      this.handleBurgerIcon();
    } else {
      /* The viewport is more than 800px wide */
      topRowWrapper!.classList.remove('expand');

      this.handleBodyScroll('show');
      const searchBarLeftWrapper = this.getSearchBarLeftWrapper();
      const leftIsInitial = searchBarLeftWrapper!.classList.contains('initial');
      const searchBarRight = this.getSearchBar('right');
      if (leftIsInitial && searchBarRight) {
        if (this.searchBarIsOpen) {
          if (this.isNavbarSearchBar(searchBarRight)) {
            await searchBarRight.close();
          }
        }
        searchBarRight.setAttribute('slot', 'search-bar-left');
        searchBarRight.setAttribute('show-close-button', 'false');
        this.hasLeftSearchBar = true;
        this.hasRightSearchBar = false;
        searchBarLeftWrapper!.classList.remove('initial');
      }

      const searchBarLeft = this.getSearchBar('left');
      const searchBar = searchBarLeft || this.getSearchBar('right');
      if (this.isNavbarSearchBar(searchBar)) {
        this.isResizing = true;
        const isRight = searchBar.getAttribute('slot') === 'search-bar-right';
        if (isRight) {
          await searchBar.close();
          searchBar.setAttribute('show-close-button', 'false');
        } else {
          if (this.initialSearchBarOpen) {
            await searchBar.open();
          } else {
            await searchBar.close();
          }
        }
        this.isResizing = false;
      }
      //left-side
      const leftMenuItems = this.getMobileMenuTop();
      for (let i = 0; i < leftMenuItems.length; i++) {
        const item = leftMenuItems[i];
        item.setAttribute('slot', 'left-item');
        if (this.isNavbarItem(item)) {
          item.moveChildComponentsBackIntoNavbar();
        }
      }
      //right-side
      const rightMenuItems = this.getMobileMenuBottom();
      const navbarProfileItem = this.el.querySelector('ifx-navbar-profile');
      this.restoreLabelAfterMobile(navbarProfileItem);

      for (let i = 0; i < rightMenuItems.length; i++) {
        const item = rightMenuItems[i];
        item.setAttribute('slot', 'right-item');
        if (this.isNavbarItem(item)) {
          item.toggleChildren('remove');
        }
        this.restoreLabelAfterMobile(item);
        if (this.searchBarIsOpen) {
          if (this.isNavbarItem(item)) {
            item.hideComponent();
          }
        }
      }
      this.searchBarIsOpen = undefined;
      this.showNavItems();
    }
  }

  private RemoveSpaceOnStorybookSnippet() {
    const parent = this.el.parentElement;
    if (parent) {
      const storybookWrapper = parent.closest('.css-xzp052');
      if (storybookWrapper instanceof HTMLElement) {
        storybookWrapper.style.overflow = 'visible';
      }
    }
  }

  private getPaneClass(position: 'left' | 'right') {
    const opposite = position === 'left' ? 'right' : 'left';
    const state =
      this.searchBarIsOpen === position
        ? `navbar__${position}--expanded`
        : this.searchBarIsOpen === opposite
          ? `navbar__${position}--hidden`
          : '';

    return [`navbar__${position}`, state].filter(Boolean).join(' ');
  }

  private renderLogo() {
    if (!this.showLogoAndAppname) return null;

    const logoClasses = [
      'navbar__logo',
      this.searchBarIsOpen === 'left' ? 'navbar__logo--hidden' : '',
      this.applicationName && this.hasLeftMenuItems
        ? 'navbar__logo--divided'
        : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div class={logoClasses} aria-label='Brand'>
        <a
          class='navbar__logo-link'
          href={this.internalLogoHref}
          target={this.internalLogoHrefTarget}
          aria-label='Go to application home'
        >
          <svg
            class='navbar__logo-image'
            width='91'
            height='40'
            viewBox='0 0 91 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_2396_2480)'>
              <path
                d='M67.691 26.7766C71.0884 26.7766 72.1461 23.1841 72.1461 19.8802C72.1461 15.4536 70.2871 13.1441 67.691 13.1441C64.4219 13.1441 63.2681 16.7367 63.3001 19.9443C63.3322 23.1199 64.2296 26.7766 67.691 26.7766ZM66.0244 19.8481C66.0244 18.533 66.0244 15.4536 67.691 15.4536C69.4859 15.4536 69.4218 18.5009 69.4218 19.9123C69.4218 21.2595 69.4218 24.5313 67.7551 24.5313C65.9603 24.4992 66.0244 21.2274 66.0244 19.8481ZM57.8195 26.7766C59.1976 26.7766 60.3835 26.2313 61.5053 25.0445L60.5117 23.1841C59.7425 24.018 58.9733 24.4671 58.0438 24.4671C57.2746 24.4671 56.6336 24.018 56.249 23.2482C55.9285 22.5746 55.8644 21.8048 55.8644 20.9708V20.7142H61.6335V20.1368C61.6335 17.282 61.2809 15.7102 60.3835 14.5234C59.7104 13.6253 58.7169 13.1441 57.499 13.1441C56.2169 13.1441 55.1593 13.7215 54.39 14.8442C53.5567 16.0631 53.2042 17.699 53.2042 19.9443C53.1721 24.2426 54.8708 26.7766 57.8195 26.7766ZM57.531 15.2612C58.172 15.2612 58.5566 15.614 58.813 16.1914C59.0053 16.7046 59.1015 17.5707 59.1015 18.5971H55.8644C55.8964 16.3197 56.3772 15.2612 57.531 15.2612ZM74.2614 26.4559H76.7614V16.8329C77.3703 16.0952 78.0754 15.6782 78.5882 15.6782C78.9087 15.6782 79.2292 15.7423 79.4215 15.9989C79.6138 16.2876 79.71 16.7046 79.71 17.699V26.4559H82.21V16.5442C82.21 15.6782 82.1138 14.8121 81.601 14.1706C81.1523 13.5932 80.4472 13.2404 79.5497 13.2404C78.3959 13.2404 77.2101 13.914 76.569 14.6838C76.537 14.0102 76.3126 13.3687 76.2485 13.1441L73.9089 13.7536C74.0371 14.4593 74.2294 15.3253 74.2294 16.8971V26.4559H74.2614ZM45.2236 14.6838C45.1915 14.0102 44.9672 13.3687 44.9031 13.1441L42.5634 13.7536C42.6916 14.4593 42.8839 15.3253 42.8839 16.8971V26.4238H45.3838V16.8008C45.9928 16.0631 46.6979 15.6461 47.2107 15.6461C47.5312 15.6461 47.8517 15.7102 48.044 15.9669C48.2363 16.2555 48.3325 16.6725 48.3325 17.6669V26.4238H50.8324V16.5442C50.8324 15.6782 50.7363 14.8121 50.2235 14.1706C49.7748 13.5932 49.0696 13.2404 48.1722 13.2404C47.0505 13.2404 45.8646 13.914 45.2236 14.6838ZM14.6473 9.07042C16.1216 9.07042 17.3075 7.88359 17.3075 6.40807C17.3075 4.93256 16.1216 3.74573 14.6473 3.74573C13.173 3.74573 11.9871 4.93256 11.9871 6.40807C11.9871 7.88359 13.173 9.07042 14.6473 9.07042ZM26.9227 26.4559V16.5442C26.9227 15.6782 26.8265 14.8121 26.3137 14.1706C25.865 13.5932 25.1599 13.2404 24.2625 13.2404C23.1087 13.2404 21.9228 13.914 21.2818 14.6838C21.2497 14.0102 21.0254 13.3687 20.9613 13.1441L18.6536 13.7857C18.7818 14.4913 18.9741 15.3574 18.9741 16.9291V26.4559H21.4741V16.8329C22.0831 16.0952 22.7882 15.6782 23.301 15.6782C23.6215 15.6782 23.942 15.7423 24.1343 15.9989C24.3266 16.2876 24.4227 16.7046 24.4227 17.699V26.4559H26.9227ZM38.4289 8.36474C37.4994 8.36474 36.7622 9.10249 36.7622 10.0327C36.7622 10.9629 37.4994 11.7007 38.3968 11.7007C39.3263 11.7007 40.0634 10.9629 40.0634 10.0327C40.0634 9.10249 39.3263 8.36474 38.4289 8.36474ZM13.4614 26.4559H15.9614V10.8346L13.4614 11.1554V26.4559ZM33.8777 9.90441C34.3264 9.90441 34.7751 10.0648 35.0635 10.2893L35.7687 8.33266C35.0956 7.85151 34.3584 7.62698 33.429 7.62698C32.788 7.62698 32.1149 7.78736 31.5059 8.26851C30.897 8.78173 30.256 9.80818 30.256 11.7328C30.256 12.5667 30.288 13.4328 30.288 13.4328H29.4226V15.6461H30.288V26.4238H32.8521V15.6782H34.743L35.2238 13.4649H32.8841V11.4762C32.8841 10.5139 33.2687 9.90441 33.8777 9.90441ZM37.1468 26.4559H39.6788V13.2404L37.1468 13.5611V26.4559Z'
                fill='#005DA9'
              />
              <path
                d='M77.0816 33.5126C68.6203 36.0146 58.3321 37.1052 48.2682 37.1052C22.7239 37.1052 6.24986 29.5993 5.09604 19.6877C4.67938 15.9668 7.59599 12.3422 12.4677 9.26285C11.6023 8.62132 11.0575 7.59488 11.0254 6.44012C3.97427 10.161 0 15.0366 0 19.9764C0 30.9145 19.5188 40.1525 48.5246 39.7676C58.6205 39.6393 67.0498 38.1958 74.6778 35.6939C83.7482 32.7428 89.4532 28.5087 90.8313 26.6483C89.1968 28.1238 85.3186 31.0748 77.0816 33.5126ZM23.2687 4.38723C24.9674 3.80985 27.3712 3.0721 27.3712 3.0721C34.1339 1.21166 41.6017 0.121063 48.5566 0.185215C40.544 -0.295931 33.2365 0.185215 26.8584 1.33997C26.8584 1.33997 24.743 1.69281 22.4675 2.27018C22.4675 2.27018 21.3777 2.55887 20.7047 2.75133C20.0316 2.94379 19.1021 3.2004 19.1021 3.2004C18.4611 3.39286 17.8201 3.6174 17.1791 3.84193C17.8201 4.48346 18.2047 5.31745 18.2368 6.27974C19.3586 5.76652 21.5059 4.99668 23.2687 4.38723Z'
                fill='#E30034'
              />
            </g>
            <defs>
              <clipPath id='clip0_2396_2480'>
                <rect width='91' height='40' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </a>

        {this.applicationName && (
          <span class='navbar__application-name'>{this.applicationName}</span>
        )}
      </div>
    );
  }

  private renderLeftNavigation() {
    const isEmpty = !this.hasLeftItems && !this.hasLeftSearchBar;
    const paneClasses = [
      this.getPaneClass('left'),
      isEmpty ? 'navbar__left--empty' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const searchClasses = [
      'navbar__search',
      'navbar__search--left',
      !this.hasLeftSearchBar ? 'navbar__search--empty' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div class={paneClasses}>
        <slot
          name='left-item'
          onSlotchange={(event) =>
            this.handleNavigationSlotChange(event, 'left')
          }
        />

        <div class={searchClasses}>
          <slot
            name='search-bar-left'
            onSlotchange={(event) => this.handleSearchSlotChange(event, 'left')}
          />
        </div>
      </div>
    );
  }

  private renderRightNavigation() {
    const searchClasses = [
      'navbar__search',
      'navbar__search--right',
      !this.hasRightSearchBar ? 'navbar__search--empty' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div class={this.getPaneClass('right')}>
        <div class={searchClasses}>
          <slot
            name='search-bar-right'
            onSlotchange={(event) =>
              this.handleSearchSlotChange(event, 'right')
            }
          />
        </div>

        <slot
          name='right-item'
          onSlotchange={(event) =>
            this.handleNavigationSlotChange(event, 'right')
          }
        />
        {this.renderMobileMenuButton()}
      </div>
    );
  }

  private renderMobileMenuButton() {
    return (
      <button
        type='button'
        class='navbar__burger'
        aria-label='Toggle mobile navigation menu'
        aria-controls='ifx-navbar-mobile-menu'
        aria-expanded={String(this.isMobileMenuOpen)}
        onClick={this.handleSidebar.bind(this)}
      >
        <span
          class={`navbar__menu-icon ${this.isMobileMenuOpen ? 'navbar__menu-icon--hidden' : ''}`.trim()}
          aria-hidden='true'
        >
          <ifx-icon icon='menu-right-16'></ifx-icon>
        </span>
        <span
          class={`navbar__close-icon ${this.isMobileMenuOpen ? 'navbar__close-icon--visible' : ''}`.trim()}
          aria-hidden='true'
        >
          <ifx-icon icon='cross-16'></ifx-icon>
        </span>
      </button>
    );
  }

  private renderMobileSidebar() {
    return (
      <aside
        id='ifx-navbar-mobile-menu'
        class='navbar__sidebar'
        aria-label='Mobile navigation'
      >
        <nav class='navbar__mobile-nav' aria-label='Mobile primary navigation'>
          <div class='navbar__mobile-list'>
            <slot name='mobile-menu-top' />
          </div>
        </nav>

        <nav
          class='navbar__mobile-bottom'
          aria-label='Mobile secondary navigation'
        >
          <slot
            name='mobile-menu-bottom'
            onSlotchange={(event) => this.handleMobileMenuBottom(event)}
          />
        </nav>
      </aside>
    );
  }

  render() {
    const navbarClasses = [
      'navbar',
      this.fixed ? 'navbar--fixed' : '',
      this.isMobileMenuOpen ? 'navbar--open' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      'navbar__container',
      this.searchBarIsOpen ? 'navbar__container--expanded' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <header class={navbarClasses}>
        <div class='navbar__wrapper'>
          <nav class={containerClasses} aria-label='Main navigation'>
            {this.renderLogo()}
            {this.renderLeftNavigation()}
            {this.renderRightNavigation()}
          </nav>
        </div>

        {this.renderMobileSidebar()}
      </header>
    );
  }
}
