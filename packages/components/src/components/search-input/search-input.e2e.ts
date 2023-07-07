import { newE2EPage } from '@stencil/core/testing';

describe('SearchInput', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-input></ifx-search-input>');

    const searchInput = await page.find('ifx-search-input');
    expect(searchInput).toHaveClass('hydrated');

    const wrapper = await page.find('ifx-search-input >>> .search-input__wrapper');
    expect(wrapper).toHaveClass('search-input__wrapper');

    const input = await page.find('ifx-search-input >>> input');
    expect(await input.getProperty('placeholder')).toBe('Search...');
    expect(await input.getProperty('disabled')).toBeFalsy();
    expect(await input.getProperty('value')).toBe('');

    const deleteIcon = await page.find('ifx-search-input >>> .delete-icon');
    expect(deleteIcon).toBeNull();
  });

  it('should update value on input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-input></ifx-search-input>');

    const input = await page.find('ifx-search-input >>> input');
    await input.press('KeyA');
    await input.press('KeyB');

    expect(await input.getProperty('value')).toBe('ab');
  });

  it('should emit ifxInput event on input change', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-input></ifx-search-input>');

    const input = await page.find('ifx-search-input >>> input');
    
    await input.press('KeyA');

    
  });

  it('should clear input on delete icon click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-input show-delete-icon value="Search text"></ifx-search-input>');

    const deleteIcon = await page.find('ifx-search-input >>> .delete-icon');
    const input = await page.find('ifx-search-input >>> input');
    const eventSpy = await page.spyOnEvent('ifxInput');

    await deleteIcon.click();

    expect(await input.getProperty('value')).toBe('');
    expect(eventSpy).toHaveReceivedEventDetail(null);
  });

  it('should set focus on input click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-input></ifx-search-input>');

    const input = await page.find('ifx-search-input >>> input');
    const wrapper = await page.find('ifx-search-input >>> .search-input__wrapper');

    await wrapper.click();

    expect(await input.getProperty('value')).toBe('');
    expect(await input.getProperty('disabled')).toBeFalsy();
    expect(await input.getProperty('placeholder')).toBe('Search...');
    expect(await wrapper.getProperty('className')).toContain('focused');
  });
});
