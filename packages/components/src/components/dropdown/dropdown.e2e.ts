// dropdown.e2e.ts
import { newE2EPage } from '@stencil/core/testing';

describe('Dropdown Component', () => {
    let page;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`
      <ifx-dropdown>
        <ifx-dropdown-trigger-button icon="c-info-16" variant="solid" color="primary" size="m"></ifx-dropdown-trigger-button>
        <ifx-dropdown-menu>
          <ifx-dropdown-item href="https://example.com" icon="c-info-16" target="_blank"></ifx-dropdown-item>
          <ifx-dropdown-separator></ifx-dropdown-separator>
          <ifx-dropdown-item href="https://example2.com" icon="c-info-16" target="_blank"></ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    `);
    });

    it('should be rendered', async () => {
        const dropdown = await page.find('ifx-dropdown');
        expect(dropdown).not.toBeNull();
    });

    it('should render the separator', async () => {
        const separator = await page.find('ifx-dropdown-separator');
        expect(separator).not.toBeNull();
    });

    it('should open the dropdown when the trigger is clicked', async () => {

        const dropdown = await page.find('ifx-dropdown');
        const trigger = await dropdown.querySelector('ifx-dropdown-trigger-button');
        await trigger.click();

        const dropdownMenu = await page.find('ifx-dropdown-menu');
        const isVisible = await dropdownMenu.isVisible();
        expect(isVisible).toBe(true);
    });

    it('should render the correct icon for each dropdown item', async () => {
        // Open the dropdown
        const dropdown = await page.find('ifx-dropdown');
        const trigger = await dropdown.querySelector('ifx-dropdown-trigger-button');
        await trigger.click();

        // Check the icons for each dropdown item
        const dropdownMenu = await page.find('ifx-dropdown-menu');
        const items = await dropdownMenu.findAll('ifx-dropdown-item');
        const icon1 = await items[0].shadowRoot.querySelector('ifx-icon');
        expect(icon1).not.toBeNull();

        const icon2 = await items[1].shadowRoot.querySelector('ifx-icon');
        expect(icon2).not.toBeNull();
    });
});