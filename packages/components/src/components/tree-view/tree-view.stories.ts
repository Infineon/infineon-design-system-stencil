import type { Meta, StoryFn } from "@storybook/web-components-vite";
import { action } from "storybook/actions";

const hideAllControlsExcept = (allowedKeys: string[]) => {
	const allProps = [
		"label",
		"disableAllItems",
		"expandAllItems",
		"ariaLabel",
		"value",
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
	ifxTreeViewItemDisableChange: { table: { disable: true } },
};

const meta: Meta = {
	title: "Components/Tree View",
	tags: ["autodocs"],
	parameters: {
		controls: { expanded: true },
		docs: {
			description: {
				component:
					"Tree View component with nested items, checkboxes, keyboard navigation, and accessibility.",
			},
		},
	},
	argTypes: {
		// --- FUNCTION ---
		disableAllItems: {
			control: "boolean",
			description: "Disables all tree items.",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		expandAllItems: {
			control: "boolean",
			description: "Expands all tree items.",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		initiallyExpanded: {
			table: {
				category: "Function",
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
			description:
				"Expands this tree item initially (set as attribute on the item). No interactive control.",
			control: false,
		},
		initiallySelected: {
			table: {
				category: "Function",
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
			description:
				"Selects this tree item initially (set as attribute on the item). No interactive control.",
			control: false,
		},
		disableItem: {
			table: {
				category: "Function",
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
			description:
				"Disables this tree item (set as attribute on the item). No interactive control.",
			control: false,
		},
		value: {
			control: false,
			table: {
				category: "Function",
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
			},
			description:
				"Optional value for each tree item (set as attribute on the item). No interactive control.",
		},

		// --- Label ---
		label: {
			control: "text",
			description: "Label / Heading for tree view.",
			table: { category: "Label", defaultValue: { summary: "false" } },
		},

		// --- ARIA LABELS ---
		ariaLabel: {
			control: "text",
			description: "ARIA label for the tree view.",
			table: {
				category: "Aria Labels",
				defaultValue: { summary: "Tree View" },
			},
		},
		ariaLabelItem: {
			control: "text",
			description: "ARIA label for all tree view items.",
			table: {
				category: "Aria Labels",
				defaultValue: { summary: "Tree Item" },
			},
		},

		// --- CUSTOM EVENTS ---
		ifxTreeViewExpandAllChange: {
			action: "ifxTreeViewExpandAllChange",
			table: { category: "Custom Events" },
			description: "Fired when expandAllItems changes.",
		},
		ifxTreeViewDisableAllChange: {
			action: "ifxTreeViewDisableAllChange",
			table: { category: "Custom Events" },
			description: "Fired when disableAllItems changes.",
		},
		ifxTreeViewItemExpandChange: {
			action: "ifxTreeViewItemExpandChange",
			table: { category: "Custom Events" },
			description:
				"Fired when a tree item is expanded/collapsed. For parent items, includes affectedItems array with all affected parent descendants.",
		},
		ifxTreeViewItemCheckChange: {
			action: "ifxTreeViewItemCheckChange",
			table: { category: "Custom Events" },
			description:
				"Fired when a tree item is checked/unchecked. For parent items, includes affectedChildItems array with all affected descendants.",
		},
		ifxTreeViewItemDisableChange: {
			action: "ifxTreeViewItemDisableChange",
			table: { category: "Custom Events" },
			description: "Fired when a tree item is disabled/enabled.",
		},
	},
};

export default meta;

const BaseTemplate: StoryFn = (args) => {
	const el = document.createElement("ifx-tree-view");
	if (args.label) el.setAttribute("label", args.label);
	el.setAttribute("aria-label", args.ariaLabel);

	if (args.disableAllItems) el.setAttribute("disable-all-items", "true");
	else el.removeAttribute("disable-all-items");

	if (args.expandAllItems) el.setAttribute("expand-all-items", "true");
	else el.removeAttribute("expand-all-items");

	const ariaLabelItemAttr = args.ariaLabelItem
		? `aria-label="${args.ariaLabelItem}"`
		: "";

	el.innerHTML = `
    <ifx-tree-view-item icon="folder" initially-expanded="true" value="root-folder" ${ariaLabelItemAttr}>
      Root Folder
      <ifx-tree-view-item slot="children" icon="folder" initially-expanded="true" value="subfolder-1" ${ariaLabelItemAttr}>
        Subfolder 1
        <ifx-tree-view-item slot="children" icon="file" value="file-1-1" ${ariaLabelItemAttr}>File 1-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" icon="file" value="file-1-2" ${ariaLabelItemAttr}>File 1-2.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" icon="folder" value="subfolder-1-1" ${ariaLabelItemAttr}>
          Subfolder 1-1
          <ifx-tree-view-item slot="children" icon="file" value="file-1-1-1" ${ariaLabelItemAttr}>File 1-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" icon="file" value="file-1-1-2" ${ariaLabelItemAttr}>File 1-1-2.txt</ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" icon="folder" value="subfolder-2" ${ariaLabelItemAttr}>
        Subfolder 2
        <ifx-tree-view-item slot="children" icon="file" value="file-2-1" ${ariaLabelItemAttr}>File 2-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" icon="folder" value="subfolder-2-1" ${ariaLabelItemAttr}>
          Subfolder 2-1
          <ifx-tree-view-item slot="children" icon="file" value="file-2-1-1" ${ariaLabelItemAttr}>File 2-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" icon="folder" value="subfolder-2-1-1" ${ariaLabelItemAttr}>
            Subfolder 2-1-1
            <ifx-tree-view-item slot="children" icon="file" value="file-2-1-1-1" ${ariaLabelItemAttr}>File 2-1-1-1.txt</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" icon="file" value="file-at-root" ${ariaLabelItemAttr}>File at root.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item icon="folder" value="another-root" ${ariaLabelItemAttr}>
      Another Root Folder
      <ifx-tree-view-item slot="children" icon="file" value="file-a" ${ariaLabelItemAttr}>File A.txt</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" icon="file" value="file-b" ${ariaLabelItemAttr}>File B.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item icon="file" value="single-file" ${ariaLabelItemAttr}>Single File</ifx-tree-view-item>
  `;

	el.addEventListener(
		"ifxTreeViewExpandAllChange",
		action("ifxTreeViewExpandAllChange"),
	);
	el.addEventListener(
		"ifxTreeViewDisableAllChange",
		action("ifxTreeViewDisableAllChange"),
	);
	el.addEventListener("ifxTreeViewItemExpandChange", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxTreeViewItemExpandChange")({
			expanded: customEvent.detail.expanded,
			value: customEvent.detail.value,
			affectedItems: customEvent.detail.affectedItems || [],
		});
	});
	el.addEventListener("ifxTreeViewItemCheckChange", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxTreeViewItemCheckChange")({
			checked: customEvent.detail.checked,
			indeterminate: customEvent.detail.indeterminate,
			value: customEvent.detail.value,
			affectedChildItems: customEvent.detail.affectedChildItems || [],
			level: customEvent.detail.level,
			disabled: customEvent.detail.disabled,
		});
	});
	el.addEventListener(
		"ifxTreeViewItemDisableChange",
		action("ifxTreeViewItemDisableChange"),
	);

	return el;
};

export const Default = BaseTemplate.bind({});
Default.args = {
	disableAllItems: false,
	expandAllItems: false,
	label: "Tree Example",
	ariaLabel: "Tree View",
	ariaLabelItem: "Tree Item",
};

Default.argTypes = {
	...hideAllControlsExcept([
		"label",
		"disableAllItems",
		"expandAllItems",
		"ariaLabel",
		"value",
	]),
	...disableCustomEventControls,

	ifxTreeViewExpandAllChange: {
		action: "ifxTreeViewExpandAllChange",
		table: { category: "Custom Events" },
		description: "Fired when expandAllItems changes.",
	},
	ifxTreeViewDisableAllChange: {
		action: "ifxTreeViewDisableAllChange",
		table: { category: "Custom Events" },
		description: "Fired when disableAllItems changes.",
	},
	ifxTreeViewItemExpandChange: {
		action: "ifxTreeViewItemExpandChange",
		table: { category: "Custom Events" },
		description:
			"Fired when a tree item is expanded/collapsed. For parent items, includes affectedItems array with all affected parent descendants.",
	},
	ifxTreeViewItemCheckChange: {
		action: "ifxTreeViewItemCheckChange",
		table: { category: "Custom Events" },
		description:
			"Fired when a tree item is checked/unchecked. For parent items, includes affectedChildItems array with all affected descendants.",
	},
	ifxTreeViewItemDisableChange: {
		action: "ifxTreeViewItemDisableChange",
		table: { category: "Custom Events" },
		description: "Fired when a tree item is disabled/enabled.",
	},
};

export const ContainerDemo: StoryFn = (args) => {
	const ariaLabelItemAttr = args.ariaLabelItem
		? `aria-label="${args.ariaLabelItem}"`
		: "";

	const wrapper = document.createElement("div");
	wrapper.style.maxWidth = "225px";
	wrapper.style.border = "1px solid #ccc";
	wrapper.style.padding = "8px";
	wrapper.style.overflow = "auto";

	const el = document.createElement("ifx-tree-view");
	el.setAttribute("label", args.label);
	el.setAttribute("aria-label", args.ariaLabel);

	if (args.disableAllItems) el.setAttribute("disable-all-items", "true");
	if (args.expandAllItems) el.setAttribute("expand-all-items", "true");

	el.innerHTML = `
    <ifx-tree-view-item icon="folder" initially-expanded="true" value="root-folder" ${ariaLabelItemAttr}>
      Root Folder
      <ifx-tree-view-item slot="children" icon="folder" initially-expanded="true" value="subfolder-1" ${ariaLabelItemAttr}>
        Subfolder 1
        <ifx-tree-view-item slot="children" icon="file" value="file-1-1" ${ariaLabelItemAttr}>File 1-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" icon="file" value="file-1-2" ${ariaLabelItemAttr}>File 1-2.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" icon="folder" value="subfolder-1-1" ${ariaLabelItemAttr}>
          Subfolder 1-1
          <ifx-tree-view-item slot="children" icon="file" value="file-1-1-1" ${ariaLabelItemAttr}>File 1-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" icon="file" value="file-1-1-2" ${ariaLabelItemAttr}>File 1-1-2.txt</ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" icon="folder" value="subfolder-2" ${ariaLabelItemAttr}>
        Subfolder 2
        <ifx-tree-view-item slot="children" icon="file" value="file-2-1" ${ariaLabelItemAttr}>File 2-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" icon="folder" value="subfolder-2-1" ${ariaLabelItemAttr}>
          Subfolder 2-1
          <ifx-tree-view-item slot="children" icon="file" value="file-2-1-1" ${ariaLabelItemAttr}>File 2-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" icon="folder" value="subfolder-2-1-1" ${ariaLabelItemAttr}>
            Subfolder 2-1-1
            <ifx-tree-view-item slot="children" icon="file" value="file-2-1-1-1" ${ariaLabelItemAttr}>File 2-1-1-1.txt</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" icon="file" value="file-at-root" ${ariaLabelItemAttr}>File at root.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item icon="folder" value="another-root" ${ariaLabelItemAttr}>
      Another Root Folder
      <ifx-tree-view-item slot="children" icon="file" value="file-a" ${ariaLabelItemAttr}>File A.txt</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" icon="file" value="file-b" ${ariaLabelItemAttr}>File B.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item icon="file" value="single-file" ${ariaLabelItemAttr}>Single File</ifx-tree-view-item>
  `;

	el.addEventListener(
		"ifxTreeViewExpandAllChange",
		action("ifxTreeViewExpandAllChange"),
	);
	el.addEventListener(
		"ifxTreeViewDisableAllChange",
		action("ifxTreeViewDisableAllChange"),
	);
	el.addEventListener("ifxTreeViewItemExpandChange", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxTreeViewItemExpandChange")({
			expanded: customEvent.detail.expanded,
			value: customEvent.detail.value,
			affectedItems: customEvent.detail.affectedItems || [],
		});
	});
	el.addEventListener("ifxTreeViewItemCheckChange", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxTreeViewItemCheckChange")({
			checked: customEvent.detail.checked,
			indeterminate: customEvent.detail.indeterminate,
			value: customEvent.detail.value,
			affectedChildItems: customEvent.detail.affectedChildItems || [],
			level: customEvent.detail.level,
			disabled: customEvent.detail.disabled,
		});
	});
	el.addEventListener(
		"ifxTreeViewItemDisableChange",
		action("ifxTreeViewItemDisableChange"),
	);

	wrapper.appendChild(el);
	return wrapper;
};

ContainerDemo.args = {
	disableAllItems: false,
	expandAllItems: false,
	label: "Tree Example",
	ariaLabel: "Tree View",
	ariaLabelItem: "Tree Item",
};

ContainerDemo.storyName = "TreeView with scrollbar";
ContainerDemo.parameters = {
	controls: { disable: true },
};

export const SingleItemStates: StoryFn = (args) => {
	const el = document.createElement("ifx-tree-view");
	if (args.label) el.setAttribute("label", args.label);
	el.setAttribute("aria-label", args.ariaLabel);

	const ariaLabelItemAttr = args.ariaLabelItem
		? `aria-label="${args.ariaLabelItem}"`
		: "";

	el.innerHTML = `
    <ifx-tree-view-item value="file-1" ${ariaLabelItemAttr}>File</ifx-tree-view-item>
    <ifx-tree-view-item value="file-disabled" ${ariaLabelItemAttr} disable-item="true">File disabled</ifx-tree-view-item>
    <ifx-tree-view-item initially-expanded="true" value="folder-expanded" ${ariaLabelItemAttr}>
      Folder initially expanded
      <ifx-tree-view-item slot="children" initially-selected="true" value="file-selected" ${ariaLabelItemAttr}>File</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-normal" ${ariaLabelItemAttr}>File</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="item-1" ${ariaLabelItemAttr}>Normal Item</ifx-tree-view-item>
    <ifx-tree-view-item value="item-2" ${ariaLabelItemAttr}>Normal Item</ifx-tree-view-item>
  `;

	el.addEventListener(
		"ifxTreeViewExpandAllChange",
		action("ifxTreeViewExpandAllChange"),
	);
	el.addEventListener(
		"ifxTreeViewDisableAllChange",
		action("ifxTreeViewDisableAllChange"),
	);
	el.addEventListener("ifxTreeViewItemExpandChange", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxTreeViewItemExpandChange")({
			expanded: customEvent.detail.expanded,
			value: customEvent.detail.value,
			affectedItems: customEvent.detail.affectedItems || [],
		});
	});
	el.addEventListener("ifxTreeViewItemCheckChange", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxTreeViewItemCheckChange")({
			checked: customEvent.detail.checked,
			indeterminate: customEvent.detail.indeterminate,
			value: customEvent.detail.value,
			affectedChildItems: customEvent.detail.affectedChildItems || [],
			level: customEvent.detail.level,
			disabled: customEvent.detail.disabled,
		});
	});
	el.addEventListener(
		"ifxTreeViewItemDisableChange",
		action("ifxTreeViewItemDisableChange"),
	);

	return el;
};

SingleItemStates.args = {
	disableAllItems: false,
	expandAllItems: false,
	label: "Tree Example",
	ariaLabel: "Tree View",
	ariaLabelItem: "Tree Item",
};

SingleItemStates.storyName = "Single Item Expanded & disabled";
SingleItemStates.parameters = {
	controls: { disable: true },
};
