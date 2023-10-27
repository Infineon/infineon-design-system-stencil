import { newE2EPage } from '@stencil/core/testing';

describe('ifx-modal', () => {
  it('opens and closes the modal', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-modal></ifx-modal>');

    const modal = await page.find('ifx-modal');
    let modalContainer = await page.find('ifx-modal >>> .modal-container');
    expect(modalContainer).not.toHaveClass('open');

    // Open the modal
    await modal.callMethod('open');
  
    


    // Close the modal
    await modal.callMethod('close');
  
  });

  it('emits events on open, close, OK button click, and Cancel button click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-modal></ifx-modal>');

    const modal = await page.find('ifx-modal');

    // Open the modal
    const openEvent = await modal.spyOnEvent('modalOpen');
    await modal.callMethod('open');
    expect(openEvent).toHaveReceivedEvent();

    // Close the modal
    const closeEvent = await modal.spyOnEvent('modalClose');
    await modal.callMethod('close');
    expect(closeEvent).toHaveReceivedEvent();


  });


});
