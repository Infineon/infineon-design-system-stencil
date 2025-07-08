import { newE2EPage } from '@stencil/core/testing';

describe('SearchField', () => {
  it('should render', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-search-field></ifx-search-field>');
    await page.waitForChanges();

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
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-search-field></ifx-search-field>');
    await page.waitForChanges();

    const input = await page.find('ifx-search-field >>> input');
    await input.press('KeyA');
    await input.press('KeyB');

    expect(await input.getProperty('value')).toBe('ab');
  });

  it('should emit ifxInput event on input change', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-search-field></ifx-search-field>');
    await page.waitForChanges();

    const input = await page.find('ifx-search-field >>> input');

    await input.press('KeyA');


  });

it('should clear input on delete icon click', async () => {
  const page = await newE2EPage({ timeout: 30000 });
  await page.setContent('<ifx-search-field show-delete-icon></ifx-search-field>');
  await page.waitForChanges();

  const searchField = await page.find('ifx-search-field');
  expect(searchField).not.toBeNull();

  const input = await page.find('ifx-search-field >>> input');
  expect(input).not.toBeNull();

  // Enter some text to make the delete icon appear
  await input.press('KeyA');
  await page.waitForChanges();

  const deleteIcon = await page.find('ifx-search-field >>> .delete-icon');
  expect(deleteIcon).not.toBeNull();

  const eventSpy = await page.spyOnEvent('ifxInput');

  await deleteIcon.click();
  await page.waitForChanges();

  expect(await input.getProperty('value')).toBe('');
  expect(eventSpy).toHaveReceivedEventDetail('');
});

  it('should not update value when maxlength is set', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-search-field maxlength="2"></ifx-search-field>');
    await page.waitForChanges();

    const input = await page.find('ifx-search-field >>> input');
    await input.press('KeyA');
    await input.press('KeyB');
    await input.press('KeyC');

    expect(await input.getProperty('value')).toBe('ab');
  })
});
