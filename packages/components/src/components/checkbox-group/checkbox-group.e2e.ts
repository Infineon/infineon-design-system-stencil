import { newE2EPage } from '@stencil/core/testing';

describe('ifx-checkbox-group', () => {
    let page;
    let element;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent('<ifx-checkbox-group></ifx-checkbox-group>');
        element = await page.find('ifx-checkbox-group');
    });
});