import { newE2EPage } from '@stencil/core/testing';

describe('ifx-tree-view', () => {
  beforeEach(async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view label="Tree Root">
          <ifx-tree-view-item>Item 1</ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });
    await page.waitForChanges();

  });


  it('renders with label and children', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view label="Tree Root">
          <ifx-tree-view-item>Item 1</ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    const label = await page.find('ifx-tree-view >>> .tree-view__label');
    const text = await label.getProperty('textContent');
    expect(text).toEqual('Tree Root');

    const item = await page.find('ifx-tree-view-item');
    expect(item).toBeTruthy();
  });

  it('expands all items when expandAllItems=true', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view expand-all-items>
          <ifx-tree-view-item>
            Parent
            <ifx-tree-view-item slot="children">Child</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();
    const parent = await page.find('ifx-tree-view-item');
    expect(await parent.getProperty('expanded')).toBe(true);

    const child = await parent.find('ifx-tree-view-item');
    expect(child).toBeTruthy();
  });

  it('disables all items with disableAllItems', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view disable-all-items>
          <ifx-tree-view-item>Disabled</ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    const item = await page.find('ifx-tree-view-item');

    const container = await item.find('>>> .tree-item');
    expect(container).toHaveClass('tree-item--disabled');
  });

  it('toggles expansion with click on chevron', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view>
          <ifx-tree-view-item>
            Expandable
            <ifx-tree-view-item slot="children">Child</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const chevron = await page.find('ifx-tree-view-item >>> .tree-item__chevron-container');
    expect(chevron).not.toBeNull();

    await chevron.click();
    await page.waitForChanges();

    const parent = await page.find('ifx-tree-view-item');
    expect(await parent.getProperty('expanded')).toBe(true);
  });

  it('emits expand change event', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view>
          <ifx-tree-view-item value="expandable-item">
            Expandable
            <ifx-tree-view-item slot="children">Child</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const parent = await page.find('ifx-tree-view-item');
    const chevron = await parent.find('>>> .tree-item__chevron-container');
    expect(chevron).not.toBeNull();

    const spy = await page.spyOnEvent('ifxTreeViewItemExpandChange');
    await chevron.click();
    await page.waitForChanges();

    const eventDetail = spy.events[0].detail;
    expect(eventDetail.expanded).toBe(true);
    expect(eventDetail.value).toBe('expandable-item');
    expect(eventDetail.affectedItems).toEqual([{ expanded: true, value: 'expandable-item' }]);
  });

  it('updates checkbox state and emits event', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view>
          <ifx-tree-view-item value="checkable-item">Checkable</ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const checkbox = await page.find('ifx-tree-view-item >>> ifx-checkbox');
    expect(checkbox).toBeTruthy();

    const spy = await page.spyOnEvent('ifxTreeViewItemCheckChange');
    await checkbox.click();
    await page.waitForChanges();

    const eventDetail = spy.events[0].detail;
    expect(eventDetail.checked).toBe(true);
    expect(eventDetail.indeterminate).toBe(false);
    expect(eventDetail.value).toBe('checkable-item');
    expect(eventDetail.level).toBe(0);
    expect(eventDetail.disabled).toBe(false);
  });

  it('emits parent check event with affectedChildItems for parent items', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view>
          <ifx-tree-view-item value="parent-item">
            Parent
            <ifx-tree-view-item slot="children" value="child-1">Child 1</ifx-tree-view-item>
            <ifx-tree-view-item slot="children" value="child-2">Child 2</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    const spy = await page.spyOnEvent('ifxTreeViewItemCheckChange');
    const checkbox = await page.find('ifx-tree-view-item >>> ifx-checkbox');

    await checkbox.click();
    await page.waitForChanges();

    const eventDetail = spy.events[0].detail;
    expect(eventDetail.checked).toBe(true);
    expect(eventDetail.indeterminate).toBe(false);
    expect(eventDetail.value).toBe('parent-item');
    expect(eventDetail.affectedChildItems).toEqual([
      { checked: true, indeterminate: false, value: 'child-1' },
      { checked: true, indeterminate: false, value: 'child-2' }
    ]);
  });

  it('handles keyboard navigation (ArrowDown)', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view expand-all-items>
          <ifx-tree-view-item>
            Item 1
            <ifx-tree-view-item slot="children">Child 1</ifx-tree-view-item>
          </ifx-tree-view-item>
          <ifx-tree-view-item>Item 2</ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const firstLabel = await page.find('ifx-tree-view-item >>> .tree-item__label-icon-container');
    await firstLabel.focus();
    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();
  });

  it('emits check change event with indeterminate state', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view expand-all-items>
          <ifx-tree-view-item>
            Parent
            <ifx-tree-view-item slot="children">Child 1</ifx-tree-view-item>
            <ifx-tree-view-item slot="children">Child 2</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();
    const spy = await page.spyOnEvent('ifxTreeViewItemCheckChange');
    const children = await page.findAll('ifx-tree-view-item ifx-tree-view-item');
    const firstChildCheckbox = await children[0].find('>>> ifx-checkbox');
    await firstChildCheckbox.click();
    await page.waitForChanges();
    await new Promise(res => setTimeout(res, 50));
    expect(spy.events.length).toBeGreaterThanOrEqual(1);
  });
});
