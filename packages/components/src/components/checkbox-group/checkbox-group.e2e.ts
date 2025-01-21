import { newE2EPage } from '@stencil/core/testing';

describe('ifx-checkbox-group', () => {
    let page;
    let element;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent('<ifx-checkbox-group></ifx-checkbox-group>');
        element = await page.find('ifx-checkbox-group');
    });

    it('should display horizontal alignment', async () => {
        element.setProperty('alignment', 'horizontal');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display vertical alignment', async () => {
        element.setProperty('alignment', 'vertical');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display caption', async () => {
        element.setProperty('showCaption', true);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should not display caption', async () => {
        element.setProperty('showCaption', false);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display caption icon', async () => {
        element.setProperty('showCaptionIcon', true);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should not display caption icon', async () => {
        element.setProperty('showCaptionIcon', false);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display group label', async () => {
        element.setProperty('showGroupLabel', true);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should not display group label', async () => {
        element.setProperty('showGroupLabel', false);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display group label text', async () => {
        element.setProperty('groupLabelText', 'Group Label Text');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display caption text', async () => {
        element.setProperty('captionText', 'Caption Text');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display error state', async () => {
        element.setProperty('hasErrors', true);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display error message when hasErrors is true', async () => {
        element.setProperty('hasErrors', true);
        await page.waitForChanges();
        const errorDiv = await page.find('ifx-checkbox-group >>> div.error');
        expect(errorDiv).not.toBeNull();
    });
});