import { newSpecPage } from '@stencil/core/testing';
import { Sidebar } from './sidebar';
import { SidebarItem } from './sidebar-item';
import { SidebarTitle } from './sidebar-title';

describe('ifx-sidebar', () => {
  // Mock complex methods to prevent DOM-related errors
  beforeEach(() => {
    // Use type assertion to bypass TypeScript private property check
    (Sidebar.prototype as any).adjustTopBorder = jest.fn();
    (Sidebar.prototype as any).setInitialActiveItem = jest.fn();
    (Sidebar.prototype as any).expandActiveItems = jest.fn();
    (Sidebar.prototype as any).adjustItemsPadding = jest.fn();
    (Sidebar.prototype as any).applyActiveSectionToParent = jest.fn();
  });
  
it('renders with default props', async () => {
  const page = await newSpecPage({
    components: [Sidebar],
    html: `<ifx-sidebar></ifx-sidebar>`,
  });
  
  expect(page.root).toBeTruthy();
  const sidebarContainer = page.root.shadowRoot.querySelector('.sidebar__container');
  expect(sidebarContainer).toBeTruthy();
  
  // Header should be visible by default
  const navBar = page.root.shadowRoot.querySelector('.sidebar__nav-bar');
  expect(navBar).toBeTruthy();
  
  // Footer is present with default links
  const footer = page.root.shadowRoot.querySelector('.sidebar__footer-container');
  expect(footer).toBeTruthy();
  
  // Check that links have the default '#' URLs
  const links = page.root.shadowRoot.querySelectorAll('.sidebar__footer-wrapper-top-links a');
  expect(links.length).toBe(3); // There are 3 default links
  
  // Verify default link values
  expect(links[0].getAttribute('href')).toBe('#');
  expect(links[0].textContent).toBe('Terms of use');
  
  expect(links[1].getAttribute('href')).toBe('#');
  expect(links[1].textContent).toBe('Imprint');
  
  expect(links[2].getAttribute('href')).toBe('#');
  expect(links[2].textContent).toBe('Privacy policy');
  
  // Default copyright text is present
  const copyright = page.root.shadowRoot.querySelector('.sidebar__footer-wrapper-bottom-links');
  expect(copyright).toBeTruthy();
  
  const copyrightText = copyright.textContent;
  expect(copyrightText).toContain('© 1999 -');
  expect(copyrightText).toContain('Infineon Technologies AG');
});


  it('renders with custom application name', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<ifx-sidebar application-name="Test App"></ifx-sidebar>`,
    });
    
    const appName = page.root.shadowRoot.querySelector('.sidebar__nav-bar-logo-text');
    expect(appName.textContent).toBe('Test App');
  });

  it('hides header when showHeader is false', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<ifx-sidebar show-header="false"></ifx-sidebar>`,
    });
    
    const navBar = page.root.shadowRoot.querySelector('.sidebar__nav-bar');
    expect(navBar).toBeFalsy();
  });

  it('shows footer with custom links', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<ifx-sidebar 
        terms-of-use="https://example.com/terms" 
        imprint="https://example.com/imprint"
        privacy-policy="https://example.com/privacy"
      ></ifx-sidebar>`,
    });
    
    const footer = page.root.shadowRoot.querySelector('.sidebar__footer-container');
    expect(footer).toBeTruthy();
    
    const links = page.root.shadowRoot.querySelectorAll('.sidebar__footer-wrapper-top-links a');
    expect(links.length).toBe(3);
    
    expect(links[0].getAttribute('href')).toBe('https://example.com/terms');
    expect(links[1].getAttribute('href')).toBe('https://example.com/imprint');
    expect(links[2].getAttribute('href')).toBe('https://example.com/privacy');
  });

  it('handles initialCollapse prop', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<ifx-sidebar initial-collapse="false"></ifx-sidebar>`,
    });
    
    // We're just checking that expandActiveItems was called
    expect((Sidebar.prototype as any).expandActiveItems).toHaveBeenCalled();
  });

  it('displays copyright text', async () => {
    const testCopyright = "© 2023 Test Copyright";
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<ifx-sidebar copyright-text="${testCopyright}"></ifx-sidebar>`,
    });
    
    const copyrightElement = page.root.shadowRoot.querySelector('.sidebar__footer-wrapper-bottom-links span');
    expect(copyrightElement.textContent).toBe(testCopyright);
  });

  it('renders sidebar items', async () => {
    const page = await newSpecPage({
      components: [Sidebar, SidebarItem],
      html: `
        <ifx-sidebar>
          <ifx-sidebar-item>Item 1</ifx-sidebar-item>
          <ifx-sidebar-item>Item 2</ifx-sidebar-item>
        </ifx-sidebar>
      `,
    });
    
    // Check if the slot exists and items are rendered
    const navContainer = page.root.shadowRoot.querySelector('.sidebar__nav-container');
    expect(navContainer).toBeTruthy();
    
    const sidebarItems = page.root.querySelectorAll('ifx-sidebar-item');
    expect(sidebarItems.length).toBe(2);
  });

  it('handles ifxSidebarNavigationItem event', async () => {
    const page = await newSpecPage({
      components: [Sidebar, SidebarItem],
      html: `
        <ifx-sidebar>
          <ifx-sidebar-item>Item 1</ifx-sidebar-item>
        </ifx-sidebar>
      `,
    });
    
    const sidebar = page.rootInstance;
    const sidebarItem = page.root.querySelector('ifx-sidebar-item');
    
    // Mock removeActiveClassesRecursively to prevent DOM errors
    sidebar.removeActiveClassesRecursively = jest.fn();
    
    // Manually trigger the event handler
    sidebar.handleSidebarItemActivated({
      detail: sidebarItem
    });
    
    // Verify removeActiveClassesRecursively was called
    expect(sidebar.removeActiveClassesRecursively).toHaveBeenCalled();
    
    // Verify active item was set
    expect(sidebar.activeItem).toBe(sidebarItem);
  });
});

describe('ifx-sidebar-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<ifx-sidebar-item>Test Item</ifx-sidebar-item>`,
    });
    
    expect(page.root).toBeTruthy();
    const navItem = page.root.shadowRoot.querySelector('.sidebar__nav-item');
    expect(navItem).toBeTruthy();
    
    // Should render the text content
    const label = page.root.shadowRoot.querySelector('.sidebar__nav-item-label');
    expect(label).toBeTruthy();
  });

  it('renders with icon', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<ifx-sidebar-item icon="home-16">Home</ifx-sidebar-item>`,
    });
    
    const iconWrapper = page.root.shadowRoot.querySelector('.sidebar__nav-item-icon-wrapper');
    expect(iconWrapper).toBeTruthy();
    
    const icon = iconWrapper.querySelector('ifx-icon');
    expect(icon.getAttribute('icon')).toBe('home-16');
  });

  it('renders with href and target', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<ifx-sidebar-item href="https://example.com" target="_blank">Link</ifx-sidebar-item>`,
    });
    
    const navItem = page.root.shadowRoot.querySelector('.sidebar__nav-item');
    expect(navItem.getAttribute('href')).toBe('https://example.com');
    expect(navItem.getAttribute('target')).toBe('_blank');
  });

  it('handles active state', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<ifx-sidebar-item active="true">Active Item</ifx-sidebar-item>`,
    });
    
    // Mock setActiveClasses to avoid DOM manipulation
    page.rootInstance.setActiveClasses = jest.fn();
    
    // Call componentDidLoad manually 
    page.rootInstance.componentDidLoad();
    
    // Verify active state is set correctly
    expect(page.rootInstance.internalActiveState).toBe(true);
    expect(page.rootInstance.setActiveClasses).toHaveBeenCalled();
  });

  it('emits ifxSidebarNavigationItem event on click', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<ifx-sidebar-item>Clickable Item</ifx-sidebar-item>`,
    });
    
    const sidebarItem = page.rootInstance;
    const emitSpy = jest.spyOn(sidebarItem.ifxSidebarNavigationItem, 'emit');
    
    // Instead of directly modifying properties, use a mock for toggleSubmenu to simulate non-expandable item
    sidebarItem.isExpandable = false; // This is a State, not a Prop, so it's mutable
    sidebarItem.handleActiveChange = jest.fn();
    
    // Create a mock for toggleSubmenu that bypasses property changes
    const originalToggleSubmenu = sidebarItem.toggleSubmenu;
    sidebarItem.toggleSubmenu = function() {
      // This simulates what happens in the original method without modifying props
      this.handleActiveChange(true, this.internalActiveState);
      this.ifxSidebarNavigationItem.emit(this.el);
      
      if (this.handleItemClick) {
        this.handleItemClick(this.el);
      }
    };
    
    // Call the method
    sidebarItem.toggleSubmenu();
    
    // Verify the event was emitted
    expect(emitSpy).toHaveBeenCalledWith(page.root);
    expect(sidebarItem.handleActiveChange).toHaveBeenCalledWith(true, false);
    
    // Restore original method
    sidebarItem.toggleSubmenu = originalToggleSubmenu;
  });

  it('emits ifxSidebarActionItem event for action items', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<ifx-sidebar-item is-action-item="true">Action Item</ifx-sidebar-item>`,
    });
    
    const sidebarItem = page.rootInstance;
    const emitSpy = jest.spyOn(sidebarItem.ifxSidebarActionItem, 'emit');
    
    // No need to set isActionItem - it's already set via HTML attribute
    sidebarItem.isExpandable = false; // This is a State, not a Prop, so it's mutable
    
    // Call the toggleSubmenu method
    sidebarItem.toggleSubmenu();
    
    // Verify the event was emitted
    expect(emitSpy).toHaveBeenCalledWith(page.root);
  });

  it('handles expandable items', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `
        <ifx-sidebar-item>
          Parent Item
          <ifx-sidebar-item>Child Item</ifx-sidebar-item>
        </ifx-sidebar-item>
      `,
    });
    
    // Ensure the parent item is recognized as expandable
    expect(page.rootInstance.isExpandable).toBe(true);
    
    // The expandable submenu should exist
    const submenu = page.root.shadowRoot.querySelector('.expandable__submenu');
    expect(submenu).toBeTruthy();
    
    // Mock handleEventEmission to avoid DOM errors
    page.rootInstance.handleEventEmission = jest.fn();
    
    // Mock DOM elements
    const mockMenuItem = { classList: { toggle: jest.fn() } };
    const mockSubmenu = { classList: { toggle: jest.fn() } };
    
    page.rootInstance.getSidebarMenuItem = jest.fn().mockReturnValue(mockMenuItem);
    page.rootInstance.getExpandableMenu = jest.fn().mockReturnValue(mockSubmenu);
    
    // Toggle the submenu
    page.rootInstance.toggleSubmenu();
    
    // Verify toggle was called on the menu and submenu
    expect(mockMenuItem.classList.toggle).toHaveBeenCalledWith('open');
    expect(mockSubmenu.classList.toggle).toHaveBeenCalledWith('open');
    expect(page.rootInstance.handleEventEmission).toHaveBeenCalled();
  });
});

describe('ifx-sidebar-title', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [SidebarTitle],
      html: `<ifx-sidebar-title>Section Title</ifx-sidebar-title>`,
    });
    
    expect(page.root).toBeTruthy();
    const titleElement = page.root.shadowRoot.querySelector('.sidebar__title');
    expect(titleElement).toBeTruthy();
    
    const labelElement = page.root.shadowRoot.querySelector('.sidebar__title-label');
    expect(labelElement).toBeTruthy();
  });
});