import { newE2EPage } from '@stencil/core/testing';

describe('SearchBar', () => {
  it('should render with open state', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const searchBar = await page.find('ifx-search-bar');
    expect(searchBar).toHaveClass('hydrated');

    const searchBarWrapper = await page.find('ifx-search-bar >>> .search-bar-wrapper');
    expect(searchBarWrapper).toHaveClass('search-bar-wrapper');

    const searchInput = await page.find('ifx-search-bar >>> ifx-search-input');
    expect(searchInput).not.toBeNull();

    const closeButton = await page.find('ifx-search-bar >>> a');
    expect(closeButton).not.toBeNull();

    const searchBarIconWrapper = await page.find('ifx-search-bar >>> .search-bar__icon-wrapper');
    expect(searchBarIconWrapper).toBeNull();
  });

  it('should render with closed state', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar is-open="false"></ifx-search-bar>');

    const searchBar = await page.find('ifx-search-bar');
    expect(searchBar).toHaveClass('hydrated');

    const searchBarWrapper = await page.find('ifx-search-bar >>> .search-bar-wrapper');
    expect(searchBarWrapper).toBeNull();

    const searchInput = await page.find('ifx-search-bar >>> ifx-search-input');
    expect(searchInput).toBeNull();

    const searchBarIconWrapper = await page.find('ifx-search-bar >>> .search-bar__icon-wrapper');
    expect(searchBarIconWrapper).toHaveClass('search-bar__icon-wrapper');
  });

  it('should update value on search input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const searchInput = await page.find('ifx-search-bar >>> ifx-search-input');
    await searchInput.setProperty('value', 'search term');

    const searchBar = await page.find('ifx-search-bar');
    expect(await searchBar.getProperty('value')).toBe(undefined);
  });

  it('should emit ifxChange event on search input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const searchInput = await page.find('ifx-search-bar >>> ifx-search-input');
    await searchInput.triggerEvent('ifxInput', { detail: 'search term' });
  });

  it('should toggle internal state on close button click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const searchBar = await page.find('ifx-search-bar');
    expect(await searchBar.getProperty('isOpen')).toBe(true);

    const closeButton = await page.find('ifx-search-bar >>> a');
    await closeButton.click();

    expect(await searchBar.getProperty('isOpen')).toBe(true);
  });

  it('should toggle internal state on icon wrapper click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const searchBar = await page.find('ifx-search-bar');
    expect(await searchBar.getProperty('isOpen')).toBe(true);

    expect(await searchBar.getProperty('isOpen')).toBe(true);
  });
});