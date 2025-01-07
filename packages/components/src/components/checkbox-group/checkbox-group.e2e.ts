import { newE2EPage } from '@stencil/core/testing';

describe('ifx-checkbox-group', () => {
    let page;
    let element;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent('<ifx-checkbox-group></ifx-checkbox-group>');
        element = await page.find('ifx-checkbox-group');
    });

    it('sets alignment as expected', async () => {
        element.setProperty('alignment', 'horizontal');
        await page.waitForChanges();
        expect(await element.getProperty('alignment')).toBe('horizontal');
    });

    it('sets disabled as expected', async () => {
        element.setProperty('disabled', true);
        await page.waitForChanges();
        expect(await element.getProperty('disabled')).toBe(true);
    });

    it('sets checked as expected', async () => {
        element.setProperty('checked', true);
        await page.waitForChanges();
        expect(await element.getProperty('checked')).toBe(true);
    });

    it('sets error as expected', async () => {
        element.setProperty('error', true);
        await page.waitForChanges();
        expect(await element.getProperty('error')).toBe(true);
    });

    it('sets indeterminate as expected', async () => {
        element.setProperty('indeterminate', true);
        await page.waitForChanges();
        expect(await element.getProperty('indeterminate')).toBe(true);
    });
});