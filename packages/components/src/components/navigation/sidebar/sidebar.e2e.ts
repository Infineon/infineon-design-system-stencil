import { newE2EPage } from '@stencil/core/testing';

describe('Sidebar', () => {
  it('should render with default application name', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-sidebar></ifx-sidebar>');

    const sidebar = await page.find('ifx-sidebar');
    expect(sidebar).toHaveClass('hydrated');

    const sidebarContainer = await page.find('ifx-sidebar >>> .sidebar__container');
    expect(sidebarContainer).toHaveClass('sidebar__container');

    const navBar = await page.find('ifx-sidebar >>> .sidebar__nav-bar');
    expect(navBar).toHaveClass('sidebar__nav-bar');

    const navBarLogo = await page.find('ifx-sidebar >>> .sidebar__nav-bar-logo');
    expect(navBarLogo).toHaveClass('sidebar__nav-bar-logo');

    const navContainer = await page.find('ifx-sidebar >>> .sidebar__nav-container');
    expect(navContainer).toHaveClass('sidebar__nav-container');

    const footerWrapper = await page.find('ifx-sidebar >>> .sidebar__footer-wrapper');
    expect(footerWrapper).toHaveClass('sidebar__footer-wrapper');

    const footerTopLinks = await page.find('ifx-sidebar >>> .sidebar__footer-wrapper-top-links');
    expect(footerTopLinks).toHaveClass('sidebar__footer-wrapper-top-links');

    const footerBottomLinks = await page.find('ifx-sidebar >>> .sidebar__footer-wrapper-bottom-links');
    expect(footerBottomLinks).toHaveClass('sidebar__footer-wrapper-bottom-links');
  });

  it('should render with custom application name', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-sidebar application-name="Custom Name"></ifx-sidebar>');

    const sidebar = await page.find('ifx-sidebar');
    expect(sidebar).toHaveClass('hydrated');

    // Wait for the component to be fully rendered
    await page.waitForChanges();

    // Test that the custom application name property is set correctly
    const applicationName = await sidebar.getProperty('applicationName');
    expect(applicationName).toBe('Custom Name');

    // Check if it's displayed in the DOM (with proper error handling)
    const logoElement = await page.find('ifx-sidebar >>> .sidebar__nav-bar-logo');
    expect(logoElement).not.toBeNull();

    if (logoElement) {
      const logoText = await logoElement.textContent;
      expect(logoText).toContain('Custom Name');
    }
  });

  it('should toggle collapsed state when clicking hide menu', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-sidebar collapsible="true"></ifx-sidebar>');

    const sidebar = await page.find('ifx-sidebar');
    expect(sidebar).toHaveClass('hydrated');

    await page.waitForChanges();

    // Check initial state (should be expanded) - check CSS class instead of property
    const sidebarContainer = await page.find('ifx-sidebar >>> .sidebar__container');
    expect(sidebarContainer).not.toHaveClass('sidebar__container--collapsed');

    // Find and click the hide menu button
    const hideMenuButton = await page.find('ifx-sidebar >>> .sidebar__hide-menu');
    expect(hideMenuButton).not.toBeNull();

    // Listen for the collapse event
    const collapseEventSpy = await page.spyOnEvent('ifxSidebarCollapseChange');

    await hideMenuButton.click();
    await page.waitForChanges();

    // Check if collapse event was emitted
    expect(collapseEventSpy).toHaveReceivedEventDetail({ collapsed: true });

    // Check if CSS class is applied
    expect(sidebarContainer).toHaveClass('sidebar__container--collapsed');

    // Click again to expand
    await hideMenuButton.click();
    await page.waitForChanges();

    // Check if expand event was emitted
    expect(collapseEventSpy).toHaveReceivedEventDetail({ collapsed: false });

    // Verify collapsed class is removed
    expect(sidebarContainer).not.toHaveClass('sidebar__container--collapsed');
  });

  it('should render in collapsed state when collapsed property is set', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-sidebar collapsed="true" collapsible="true"></ifx-sidebar>');

    const sidebar = await page.find('ifx-sidebar');
    expect(sidebar).toHaveClass('hydrated');

    await page.waitForChanges();

    // Check that collapsed CSS class is applied initially
    const sidebarContainer = await page.find('ifx-sidebar >>> .sidebar__container');
    expect(sidebarContainer).toHaveClass('sidebar__container--collapsed');

    // Check that collapsed property attribute is set
    const collapsedAttribute = await sidebar.getAttribute('collapsed');
    expect(collapsedAttribute).toBe('true');
  });

  it('should not render hide menu button when collapsible is false', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-sidebar collapsible="false"></ifx-sidebar>');

    const sidebar = await page.find('ifx-sidebar');
    expect(sidebar).toHaveClass('hydrated');

    await page.waitForChanges();

    // Hide menu button should not exist
    const hideMenuButton = await page.find('ifx-sidebar >>> .sidebar__hide-menu');
    expect(hideMenuButton).toBeNull();
  });

  it('should emit collapse change event when toggled programmatically', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-sidebar collapsible="true"></ifx-sidebar>');

    const sidebar = await page.find('ifx-sidebar');
    expect(sidebar).toHaveClass('hydrated');

    await page.waitForChanges();

    // Listen for the collapse event
    const collapseEventSpy = await page.spyOnEvent('ifxSidebarCollapseChange');

    // Call the collapse method programmatically
    await sidebar.callMethod('toggleCollapse');
    await page.waitForChanges();

    // Check if event was emitted
    expect(collapseEventSpy).toHaveReceivedEventDetail({ collapsed: true });

    // Check CSS class
    const sidebarContainer = await page.find('ifx-sidebar >>> .sidebar__container');
    expect(sidebarContainer).toHaveClass('sidebar__container--collapsed');
  });
});
