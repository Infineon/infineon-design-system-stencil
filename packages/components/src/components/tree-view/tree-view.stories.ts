import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/html';

const hideAllControlsExcept = (allowedKeys: string[]) => {
  const allProps = [
    'label', 'disableAllItems', 'expandAllItems', 'ariaLabel'
  ];
  const argTypes: Record<string, any> = {};
  for (const prop of allProps) {
    if (!allowedKeys.includes(prop)) {
      argTypes[prop] = { table: { disable: true } };
    }
  }
  return argTypes;
};

const disableCustomEventControls = {
  ifxTreeViewExpandAllChange: { table: { disable: true } },
  ifxTreeViewDisableAllChange: { table: { disable: true } },
  ifxTreeViewItemExpandChange: { table: { disable: true } },
  ifxTreeViewItemCheckChange: { table: { disable: true } },
  ifxTreeViewItemDisableChange: { table: { disable: true } }
};

const meta: Meta = {
  title: 'Components/Tree View',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Tree View component with nested items, checkboxes, keyboard navigation, and accessibility.',
      },
    },
  },
  argTypes: {
    // --- FUNCTION ---
    disableAllItems: {
      control: 'boolean',
      description: 'Disables all tree items.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    expandAllItems: {
      control: 'boolean',
      description: 'Expands all tree items.',
      table: { category: 'Function', defaultValue: { summary: 'false' } },
    },
    initiallyExpanded: {
      table: { category: 'Function', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      description: 'Expands this tree item initially (set as attribute on the item). No interactive control.',
      control: false,
    },
    disableItem: {
      table: { category: 'Function', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      description: 'Disables this tree item (set as attribute on the item). No interactive control.',
      control: false,
    },

    // --- ARIA LABELS ---
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the tree view.',
      table: { category: 'Aria Labels', defaultValue: { summary: 'Tree View' } },
    },
    ariaLabelItem: {
      control: 'text',
      description: 'ARIA label for all tree view items.',
      table: { category: 'Aria Labels', defaultValue: { summary: 'Tree Item' } },
    },

    // --- CUSTOM EVENTS ---
    ifxTreeViewExpandAllChange: {
      action: 'ifxTreeViewExpandAllChange',
      table: { category: 'Custom Events' },
      description: 'Fired when expandAllItems changes.',
    },
    ifxTreeViewDisableAllChange: {
      action: 'ifxTreeViewDisableAllChange',
      table: { category: 'Custom Events' },
      description: 'Fired when disableAllItems changes.',
    },
    ifxTreeViewItemExpandChange: {
      action: 'ifxTreeViewItemExpandChange',
      table: { category: 'Custom Events' },
      description: 'Fired when a tree item is expanded/collapsed.',
    },
    ifxTreeViewItemCheckChange: {
      action: 'ifxTreeViewItemCheckChange',
      table: { category: 'Custom Events' },
      description: 'Fired when a tree item is checked/unchecked.',
    },
    ifxTreeViewItemDisableChange: {
      action: 'ifxTreeViewItemDisableChange',
      table: { category: 'Custom Events' },
      description: 'Fired when a tree item is disabled/enabled.',
    },
  }
};

export default meta;

const BaseTemplate: StoryFn = (args) => {
  const el = document.createElement('ifx-tree-view');
  el.setAttribute('label', args.label);
  el.setAttribute('aria-label', args.ariaLabel);

  if (args.disableAllItems) el.setAttribute('disable-all-items', 'true');
  else el.removeAttribute('disable-all-items');

  if (args.expandAllItems) el.setAttribute('expand-all-items', 'true');
  else el.removeAttribute('expand-all-items');

  // Template: aria-label for items
  const ariaLabelItemAttr = args.ariaLabelItem
    ? `aria-label="${args.ariaLabelItem}"`
    : '';

  el.innerHTML = `
    <ifx-tree-view-item label="Root Folder" icon="folder" initially-expanded="true" ${ariaLabelItemAttr}>
      <ifx-tree-view-item label="Subfolder 1" icon="folder" initially-expanded="true" ${ariaLabelItemAttr}>
        <ifx-tree-view-item label="File 1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        <ifx-tree-view-item label="File 1-2.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        <ifx-tree-view-item label="Subfolder 1-1" icon="folder" ${ariaLabelItemAttr}>
          <ifx-tree-view-item label="File 1-1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
          <ifx-tree-view-item label="File 1-1-2.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item label="Subfolder 2" icon="folder" ${ariaLabelItemAttr}>
        <ifx-tree-view-item label="File 2-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        <ifx-tree-view-item label="Subfolder 2-1" icon="folder" ${ariaLabelItemAttr}>
          <ifx-tree-view-item label="File 2-1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
          <ifx-tree-view-item label="Subfolder 2-1-1" icon="folder" ${ariaLabelItemAttr}>
            <ifx-tree-view-item label="File 2-1-1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item label="File at root.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item label="Another Root Folder" icon="folder" ${ariaLabelItemAttr}>
      <ifx-tree-view-item label="File A.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
      <ifx-tree-view-item label="File B.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item label="Single File" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
  `;

  el.addEventListener('ifxTreeViewExpandAllChange', action('ifxTreeViewExpandAllChange'));
  el.addEventListener('ifxTreeViewDisableAllChange', action('ifxTreeViewDisableAllChange'));
  el.addEventListener('ifxTreeViewItemExpandChange', action('ifxTreeViewItemExpandChange'));
  el.addEventListener('ifxTreeViewItemCheckChange', action('ifxTreeViewItemCheckChange'));
  el.addEventListener('ifxTreeViewItemDisableChange', action('ifxTreeViewItemDisableChange'));

  return el;
};

export const Default = BaseTemplate.bind({});
Default.args = {
  label: 'Tree Example',
  disableAllItems: false,
  expandAllItems: false,
  ariaLabel: 'Tree View',
  ariaLabelItem: 'Tree Item',
};

Default.argTypes = {
  ...hideAllControlsExcept(['label', 'disableAllItems', 'expandAllItems', 'ariaLabel']),
  ...disableCustomEventControls,

  ifxTreeViewExpandAllChange: {
    action: 'ifxTreeViewExpandAllChange',
    table: { category: 'Custom Events' },
    description: 'Fired when expandAllItems changes.',
  },
  ifxTreeViewDisableAllChange: {
    action: 'ifxTreeViewDisableAllChange',
    table: { category: 'Custom Events' },
    description: 'Fired when disableAllItems changes.',
  },
  ifxTreeViewItemExpandChange: {
    action: 'ifxTreeViewItemExpandChange',
    table: { category: 'Custom Events' },
    description: 'Fired when a tree item is expanded/collapsed.',
  },
  ifxTreeViewItemCheckChange: {
    action: 'ifxTreeViewItemCheckChange',
    table: { category: 'Custom Events' },
    description: 'Fired when a tree item is checked/unchecked.',
  },
  ifxTreeViewItemDisableChange: {
    action: 'ifxTreeViewItemDisableChange',
    table: { category: 'Custom Events' },
    description: 'Fired when a tree item is disabled/enabled.',
  },
};

export const ContainerDemo: StoryFn = (args) => {
  const ariaLabelItemAttr = args.ariaLabelItem
    ? `aria-label="${args.ariaLabelItem}"`
    : '';


  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '225px';
  wrapper.style.border = '1px solid #ccc';
  wrapper.style.padding = '8px';
  wrapper.style.overflow = 'auto';

  const el = document.createElement('ifx-tree-view');
  el.setAttribute('label', args.label);
  el.setAttribute('aria-label', args.ariaLabel);

  if (args.disableAllItems) el.setAttribute('disable-all-items', 'true');
  if (args.expandAllItems) el.setAttribute('expand-all-items', 'true');

  el.innerHTML = `
    <ifx-tree-view-item label="Root Folder" icon="folder" initially-expanded="true" ${ariaLabelItemAttr}>
      <ifx-tree-view-item label="Subfolder 1" icon="folder" initially-expanded="true" ${ariaLabelItemAttr}>
        <ifx-tree-view-item label="File 1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        <ifx-tree-view-item label="File 1-2.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        <ifx-tree-view-item label="Subfolder 1-1" icon="folder" ${ariaLabelItemAttr}>
          <ifx-tree-view-item label="File 1-1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
          <ifx-tree-view-item label="File 1-1-2.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item label="Subfolder 2" icon="folder" ${ariaLabelItemAttr}>
        <ifx-tree-view-item label="File 2-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
        <ifx-tree-view-item label="Subfolder 2-1" icon="folder" ${ariaLabelItemAttr}>
          <ifx-tree-view-item label="File 2-1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
          <ifx-tree-view-item label="Subfolder 2-1-1" icon="folder" ${ariaLabelItemAttr}>
            <ifx-tree-view-item label="File 2-1-1-1.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item label="File at root.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item label="Another Root Folder" icon="folder" ${ariaLabelItemAttr}>
      <ifx-tree-view-item label="File A.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
      <ifx-tree-view-item label="File B.txt" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item label="Single File" icon="file" ${ariaLabelItemAttr}></ifx-tree-view-item>
  `;

  el.addEventListener('ifxTreeViewExpandAllChange', action('ifxTreeViewExpandAllChange'));
  el.addEventListener('ifxTreeViewDisableAllChange', action('ifxTreeViewDisableAllChange'));
  el.addEventListener('ifxTreeViewItemExpandChange', action('ifxTreeViewItemExpandChange'));
  el.addEventListener('ifxTreeViewItemCheckChange', action('ifxTreeViewItemCheckChange'));
  el.addEventListener('ifxTreeViewItemDisableChange', action('ifxTreeViewItemDisableChange'));

  wrapper.appendChild(el);
  return wrapper;
};

ContainerDemo.args = {
  label: 'Tree Example',
  disableAllItems: false,
  expandAllItems: false,
  ariaLabel: 'Tree View',
  ariaLabelItem: 'Tree Item',
};

ContainerDemo.storyName = 'TreeView with scrollbar';
ContainerDemo.parameters = {
  controls: { disable: true }
};

export const SingleItemStates: StoryFn = (args) => {
  const el = document.createElement('ifx-tree-view');
  el.setAttribute('aria-label', args.ariaLabel);

  const ariaLabelItemAttr = args.ariaLabelItem
    ? `aria-label="${args.ariaLabelItem}"`
    : '';

  el.innerHTML = `
    <ifx-tree-view-item label="File" ${ariaLabelItemAttr}></ifx-tree-view-item>
    <ifx-tree-view-item label="File disabled" ${ariaLabelItemAttr} disable-item="true"></ifx-tree-view-item>
    <ifx-tree-view-item label="Folder initially expanded" initially-expanded="true" ${ariaLabelItemAttr}>
      <ifx-tree-view-item label="File" ${ariaLabelItemAttr}></ifx-tree-view-item>
      <ifx-tree-view-item label="File disabled" disable-item="true" ${ariaLabelItemAttr}></ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item label="Normal Item" ${ariaLabelItemAttr}></ifx-tree-view-item>
    <ifx-tree-view-item label="Normal Item" ${ariaLabelItemAttr}></ifx-tree-view-item>
  `;

  el.addEventListener('ifxTreeViewExpandAllChange', action('ifxTreeViewExpandAllChange'));
  el.addEventListener('ifxTreeViewDisableAllChange', action('ifxTreeViewDisableAllChange'));
  el.addEventListener('ifxTreeViewItemExpandChange', action('ifxTreeViewItemExpandChange'));
  el.addEventListener('ifxTreeViewItemCheckChange', action('ifxTreeViewItemCheckChange'));
  el.addEventListener('ifxTreeViewItemDisableChange', action('ifxTreeViewItemDisableChange'));

  return el;
};

SingleItemStates.args = {
  ariaLabel: 'Tree View',
  ariaLabelItem: 'Tree Item',
};

SingleItemStates.storyName = 'Single Item Expanded & disabled';
SingleItemStates.parameters = {
  controls: { disable: true }
};
