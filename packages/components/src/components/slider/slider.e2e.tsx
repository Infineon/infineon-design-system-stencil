import { newE2EPage } from '@stencil/core/testing';

describe('ifx-slider', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider></ifx-slider>');

        const element = await page.find('ifx-slider');
        expect(element).toHaveClass('hydrated');
    });

    it('renders changes to the value data', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider value="50"></ifx-slider>');

        const element = await page.find('ifx-slider >>> input');

        const value = await element.getProperty('value');
        expect(value).toEqual('50');
    });

    it('handles input change', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider></ifx-slider>');

        const element = await page.find('ifx-slider >>> input');
        await element.press('ArrowRight');

        const value = await element.getProperty('value');
        expect(value).toEqual('51');
    });

    it('disables when the disabled property is set', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider disabled></ifx-slider>');

        const element = await page.find('ifx-slider >>> input');
        expect(element.getAttribute('disabled')).not.toBeNull();
    });

    it('renders left text', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider left-text="Left Text"></ifx-slider>');

        const element = await page.find('ifx-slider >>> .left-text');
        expect(element.textContent).toEqual('Left Text');
    });

    it('renders right text', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider right-text="Right Text"></ifx-slider>');

        const element = await page.find('ifx-slider >>> .right-text');
        expect(element.textContent).toEqual('Right Text');
    });

    it('renders percentage if showPercentage is true', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider value="30" show-percentage></ifx-slider>');

        const element = await page.find('ifx-slider >>> .percentage-display');
        expect(element.textContent).toEqual('30%');
    });

    it('emits the ifxChange event when the input changes', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider value="50"></ifx-slider>');
        const spy = await page.spyOnEvent('ifxChange');

        const input = await page.find('ifx-slider >>> input');
        await input.press('ArrowRight');

        expect(spy).toHaveReceivedEventDetail(51);
    });

    it('increments the value according to step size', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-slider value="50" step="5"></ifx-slider>');
        const element = await page.find('ifx-slider >>> input');

        await element.press('ArrowRight');

        const value = await element.getProperty('value');
        expect(value).toEqual('55');
    });
});
