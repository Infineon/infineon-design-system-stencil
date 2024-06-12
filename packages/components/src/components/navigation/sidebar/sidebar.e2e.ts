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
  });
});
