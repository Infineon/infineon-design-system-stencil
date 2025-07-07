import { newE2EPage } from '@stencil/core/testing';

describe('ifx-radio-button-group', () => {
    let page
    let element;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent('<ifx-radio-button-group></ifx-radio-button-group>');
           await page.waitForChanges();

        element = await page.find('ifx-radio-button-group');
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

    it('should display group label text', async () => {
        element.setProperty('groupLabelText', 'Group Label');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should not display group label', async () => {
        element.setProperty('showGroupLabel', false);
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should display caption text', async () => {
        element.setProperty('captionText', 'Caption Text');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });

    it('should not display caption text', async () => {
        element.setProperty('captionText', '');
        await page.waitForChanges();
        expect(element).toEqualText('');
    });
});