import { newE2EPage } from '@stencil/core/testing';

describe('ifx-checkbox-group', () => {
    it('should display horizontal alignment', async () => {
        const page = await newE2EPage({ timeout: 30000 });
        await page.setContent('<ifx-checkbox-group alignment="horizontal"></ifx-checkbox-group>');

        const element = await page.find('ifx-checkbox-group >>> .checkbox-group');

        expect(element).toHaveClass("horizontal");
    });
});