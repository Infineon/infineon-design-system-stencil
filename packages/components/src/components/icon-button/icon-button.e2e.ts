import { newE2EPage } from '@stencil/core/testing';

describe('ifx-icon-button', () => {
    it('should render', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-icon-button></ifx-icon-button>');

        const element = await page.find('ifx-icon-button');
        expect(element).not.toBeNull();
    });

    it('should not propagate click event if disabled', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-icon-button disabled="true"></ifx-icon-button>');
        const spy = await page.spyOnEvent('click');
        const element = await page.find('ifx-icon-button');
    
        await element.click();
        await page.waitForChanges();

        expect(spy).not.toHaveReceivedEvent();
    });

    it('should propagate click event if enabled', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-icon-button disabled="false"></ifx-icon-button>');
        const spy = await page.spyOnEvent('click');
        const element = await page.find('ifx-icon-button');
    
        await element.click();
        await page.waitForChanges();

        expect(spy).toHaveReceivedEvent();
    });
});