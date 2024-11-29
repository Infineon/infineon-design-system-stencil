import { newE2EPage } from '@stencil/core/testing';

describe('ifx-content-switcher', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-content-switcher></ifx-content-switcher>');

    const element = await page.find('ifx-content-switcher');
    expect(element).toHaveClass('hydrated');
  });

  it('should have no items selected initially', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
        <ifx-content-switcher-item>Item 1</ifx-content-switcher-item>
        <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
      </ifx-content-switcher>`);

    const selectedItems = await page.findAll('ifx-content-switcher >>> [selected]');
    expect(selectedItems.length).toBe(0);
  });

  it('should have correct item selected initially', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
        <ifx-content-switcher-item selected>Item 1</ifx-content-switcher-item>
        <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
      </ifx-content-switcher>`);

    const selectedItems = await page.findAll('ifx-content-switcher [selected]');
    expect(selectedItems.length).toBe(1);
  });

  it('should have only one item selected initially', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
        <ifx-content-switcher-item selected>Item 1</ifx-content-switcher-item>
        <ifx-content-switcher-item selected>Item 2</ifx-content-switcher-item>
      </ifx-content-switcher>`);

    const selectedItems = await page.findAll('ifx-content-switcher [selected]');
    expect(selectedItems.length).toBe(1);
  });

  it('should select an item on click', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
        <ifx-content-switcher-item>Item 1</ifx-content-switcher-item>
        <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
      </ifx-content-switcher>`);

    const items = await page.findAll('ifx-content-switcher ifx-content-switcher-item');
    await items[0].click();

    const selectedItems = await page.findAll('ifx-content-switcher [selected]');
    expect(selectedItems.length).toBe(1);
    expect(selectedItems[0].textContent).toBe('Item 1');
  });

  
  it('should select an item on click', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
        <ifx-content-switcher-item>Item 1</ifx-content-switcher-item>
        <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
      </ifx-content-switcher>`);

    const items = await page.findAll('ifx-content-switcher ifx-content-switcher-item');
    await items[1].click();
    await items[0].click();

    const selectedItems = await page.findAll('ifx-content-switcher [selected]');
    expect(selectedItems.length).toBe(1);
    expect(selectedItems[0].textContent).toBe('Item 1');
  });

  it('should emit ifxChange event on selection change', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
      <ifx-content-switcher-item>Item 1</ifx-content-switcher-item>
      <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
    </ifx-content-switcher>`);

    const component = await page.find('ifx-content-switcher');
    const changeEventSpy = await component.spyOnEvent('ifxChange');

    const items = await page.findAll('ifx-content-switcher ifx-content-switcher-item');
    await items[0].click();

    expect(changeEventSpy).toHaveReceivedEvent();
    expect(changeEventSpy).toHaveReceivedEventDetail({ oldValue: '-1', newValue: '0' });
  });


  it('should update dividers visibility on selection and hover', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-content-switcher>
      <ifx-content-switcher-item>Item 1</ifx-content-switcher-item>
      <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
      <ifx-content-switcher-item>Item 3</ifx-content-switcher-item>
      <ifx-content-switcher-item>Item 4</ifx-content-switcher-item>
      <ifx-content-switcher-item>Item 5</ifx-content-switcher-item>
    </ifx-content-switcher>`);

    let dividers = await page.findAll('ifx-content-switcher .ifx-content-switcher-divider');
    expect(dividers.length).toBe(4);
    // every divider visible if nothing selected
    expect(dividers[0]).not.toHaveClass('hidden')
    expect(dividers[1]).not.toHaveClass('hidden')
    expect(dividers[2]).not.toHaveClass('hidden')
    expect(dividers[3]).not.toHaveClass('hidden')

    const items = await page.findAll('ifx-content-switcher ifx-content-switcher-item');
    await items[0].click();
    // divider next to selected element should be hidden
    expect(dividers[0]).toHaveClass('hidden')
    expect(dividers[1]).not.toHaveClass('hidden')

    // divider next to hovered element should be hidden
    await items[1].hover();
    expect(dividers[0]).toHaveClass('hidden');
    expect(dividers[1]).toHaveClass('hidden');
    expect(dividers[2]).not.toHaveClass('hidden')
    expect(dividers[3]).not.toHaveClass('hidden')
  });
});