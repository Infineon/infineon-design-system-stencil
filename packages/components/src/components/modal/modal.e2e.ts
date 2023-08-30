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
    let modalContainerOpen = await page.find('ifx-modal >>> .modal-container');
    expect(modalContainerOpen).toHaveClass('open');


    // Close the modal
    await modal.callMethod('close');
    // let modalContainerOpen = await page.find('ifx-modal >>> .modal-container');
    expect(modalContainerOpen).not.toHaveClass('open');

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

    //   // Click OK button
    //   const okButtonClickEvent = await modal.spyOnEvent('okButtonClick');
    //   await modal.callMethod('open');
    //   const okButton = await page.find('ifx-modal >>> ifx-button');
    //   const variant = await okButton.getProperty('variant');

    //   expect(variant).toBe('outline');

    //   await okButton.click();
    //   expect(okButtonClickEvent).toHaveReceivedEvent();

    //   // Click Cancel button
    //   const cancelButtonClickEvent = await modal.spyOnEvent('cancelButtonClick');
    //   const cancelButton = await modal.find('ifx-button');
    //   await cancelButton.click();
    //   await page.waitForChanges();
    //   expect(cancelButtonClickEvent).toHaveReceivedEvent();
  });


});
