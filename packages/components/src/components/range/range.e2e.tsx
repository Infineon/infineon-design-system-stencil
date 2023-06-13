import { newE2EPage } from '@stencil/core/testing';

describe('ifx-range', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range></ifx-range>');

        const element = await page.find('ifx-range');
        expect(element).toHaveClass('hydrated');
    });

    it('renders changes to the value data', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range value="50"></ifx-range>');

        const element = await page.find('ifx-range >>> input');

        const value = await element.getProperty('value');
        expect(value).toEqual('50');
    });

    it('handles input change', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range></ifx-range>');

        const element = await page.find('ifx-range >>> input');
        await element.press('ArrowRight');

        const value = await element.getProperty('value');
        expect(value).toEqual('1');
    });

    it('disables when the disabled property is set', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range disabled></ifx-range>');

        const element = await page.find('ifx-range >>> input');
        expect(element.getAttribute('disabled')).not.toBeNull();
    });

    it('renders left text', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range left-text="Left Text"></ifx-range>');

        const element = await page.find('ifx-range >>> .left-text');
        expect(element.textContent).toEqual('Left Text');
    });

    it('renders right text', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range right-text="Right Text"></ifx-range>');

        const element = await page.find('ifx-range >>> .right-text');
        expect(element.textContent).toEqual('Right Text');
    });

    it('renders percentage if showPercentage is true', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range value="30" show-percentage></ifx-range>');

        const element = await page.find('ifx-range >>> .percentage-display');
        expect(element.textContent).toEqual('30%');
    });

    it('emits the ifxChanged event when the input changes', async () => {
        const page = await newE2EPage();
        await page.setContent('<ifx-range value="50"></ifx-range>');
        const spy = await page.spyOnEvent('ifxChanged');

        const input = await page.find('ifx-range >>> input');
        await input.press('ArrowRight');

        expect(spy).toHaveReceivedEventDetail(51);
    });
});
