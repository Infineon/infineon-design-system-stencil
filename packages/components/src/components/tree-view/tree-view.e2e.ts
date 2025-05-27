import { newE2EPage } from '@stencil/core/testing';

describe('ifx-tree-view', () => {
  it('renders with label and children', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view label="Tree Root">
          <ifx-tree-view-item label="Item 1"></ifx-tree-view-item>
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
          <ifx-tree-view-item label="Parent">
            <ifx-tree-view-item label="Child"></ifx-tree-view-item>
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
          <ifx-tree-view-item label="Disabled"></ifx-tree-view-item>
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
          <ifx-tree-view-item label="Expandable">
            <ifx-tree-view-item label="Child"></ifx-tree-view-item>
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
          <ifx-tree-view-item label="Expandable">
            <ifx-tree-view-item label="Child"></ifx-tree-view-item>
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

    expect(spy).toHaveReceivedEventDetail({
      expanded: true,
      affectedItems: [{ label: 'Expandable', expanded: true }]
    });
  });

  it('updates checkbox state and emits event', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view>
          <ifx-tree-view-item label="Checkable"></ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const checkbox = await page.find('ifx-tree-view-item >>> ifx-checkbox');
    expect(checkbox).toBeTruthy();

    const spy = await page.spyOnEvent('ifxTreeViewItemCheckChange');
    await checkbox.click();
    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail({ checked: true, indeterminate: false });
  });

  it('emits parent check event with affectedChildItems for parent items', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view>
          <ifx-tree-view-item label="Parent">
            <ifx-tree-view-item label="Child 1"></ifx-tree-view-item>
            <ifx-tree-view-item label="Child 2"></ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const parentCheckbox = await page.find('ifx-tree-view-item >>> ifx-checkbox');
    const spy = await page.spyOnEvent('ifxTreeViewItemCheckChange');

    await parentCheckbox.click();
    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail({
      checked: true,
      indeterminate: false,
      affectedChildItems: [
        { label: 'Parent', checked: true, indeterminate: false },
        { label: 'Child 1', checked: true, indeterminate: false },
        { label: 'Child 2', checked: true, indeterminate: false }
      ]
    });
  });

  it('handles keyboard navigation (ArrowDown)', async () => {
    const page = await newE2EPage({
      html: `
        <ifx-tree-view expand-all-items>
          <ifx-tree-view-item label="Item 1">
            <ifx-tree-view-item label="Child 1"></ifx-tree-view-item>
          </ifx-tree-view-item>
          <ifx-tree-view-item label="Item 2"></ifx-tree-view-item>
        </ifx-tree-view>
      `,
    });

    await page.waitForChanges();

    const firstLabel = await page.find('ifx-tree-view-item >>> .tree-item__label-icon-container');
    await firstLabel.focus();
    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();
  });
});
