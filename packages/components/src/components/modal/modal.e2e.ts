import { newE2EPage } from '@stencil/core/testing';

describe('ifx-modal', () => {
  it('opens and closes the modal', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-modal></ifx-modal>');

    const modal = await page.find('ifx-modal');
    let modalContainer = await page.find('ifx-modal >>> .modal-container');
    expect(modalContainer).not.toHaveClass('open');

    // Open the modal
    await modal.setProperty('opened', true);
    await page.waitForChanges();
    expect(await modal.getProperty('opened')).toBe(true);
    let modalContainerOpen = await page.find('ifx-modal >>> .modal-container');
    expect(modalContainerOpen).toHaveClass('open');

    // Close the modal
    await modal.setProperty('opened', false);
    await page.waitForChanges();
    expect(await modal.getProperty('opened')).toBe(false);

    let modalContainerClosed = await page.find('ifx-modal >>> .modal-container');
    await page.waitForChanges();
    expect(modalContainerClosed).not.toHaveClass('open');
  });



});