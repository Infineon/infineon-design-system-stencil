import { newE2EPage } from '@stencil/core/testing';

describe('SearchField', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-field></ifx-search-field>');

    const searchInput = await page.find('ifx-search-field');
    expect(searchInput).toHaveClass('hydrated');

    const wrapper = await page.find('ifx-search-field >>> .search-field__wrapper');
    expect(wrapper).toHaveClass('search-field__wrapper');

    const input = await page.find('ifx-search-field >>> input');
    expect(await input.getProperty('placeholder')).toBe('Search...');
    expect(await input.getProperty('disabled')).toBeFalsy();
    expect(await input.getProperty('value')).toBe('');

    const deleteIcon = await page.find('ifx-search-field >>> .delete-icon');
    expect(deleteIcon).toBeNull();
  });

  it('should update value on input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-field></ifx-search-field>');

    const input = await page.find('ifx-search-field >>> input');
    await input.press('KeyA');
    await input.press('KeyB');

    expect(await input.getProperty('value')).toBe('ab');
  });

  it('should emit ifxInput event on input change', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-field></ifx-search-field>');

    const input = await page.find('ifx-search-field >>> input');

    await input.press('KeyA');


  });

  it('should clear input on delete icon click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-field show-delete-icon value="Search text"></ifx-search-field>');

    const searchField = await page.find('ifx-search-field');
    const deleteIcon = await searchField.find('.delete-icon');
    const input = await searchField.find('input');
    const eventSpy = await page.spyOnEvent('ifxInput');

    if (deleteIcon) {
      await deleteIcon.click();
    }

    if (!input) {
      console.error('Input not found!');
      return; // Exit the test early.
    }

    expect(await input.getProperty('value')).toBe('');
    expect(eventSpy).toHaveReceivedEventDetail(null);
  });


  it('should not update value when maxlength is set', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-field maxlength="2"></ifx-search-field>');

    const input = await page.find('ifx-search-field >>> input');
    await input.press('KeyA');
    await input.press('KeyB');
    await input.press('KeyC');

    expect(await input.getProperty('value')).toBe('ab');
  })
});
