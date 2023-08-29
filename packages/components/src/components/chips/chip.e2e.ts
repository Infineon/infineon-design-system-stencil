import { newE2EPage } from '@stencil/core/testing';

describe('ifx-chip', () => {
  it('renders correctly with default props', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-chip placeholder="Select an option"><ifx-dropdown-menu></ifx-dropdown-menu></ifx-chip>');

    const chip = await page.find('ifx-chip');
    const chipContainer = await chip.find('.dropdown.container');
    const wrapperLabel = await chip.find('.wrapper-label');
    const wrapperCloseButton = await chip.find('.wrapper-close-button');

    expect(chip).toHaveClass('hydrated');
    expect(chipContainer).toBeDefined();
    expect(wrapperLabel).toBeDefined();
    expect(wrapperCloseButton).toBeDefined();
  });


});
