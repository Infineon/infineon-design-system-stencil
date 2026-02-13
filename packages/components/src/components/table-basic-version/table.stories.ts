import { html } from "lit";

//default
const cols = [
	{
		headerName: "ID",
		field: "id",
		sortable: true,
		sort: "desc",
		unSortIcon: true,
	},
	{ headerName: "Item", field: "item", sortable: true, unSortIcon: true },
	{ headerName: "Price", field: "price" },
	{ headerName: "Date", field: "date" },
];
const rows = [
	{ id: 1, item: "Item 1", price: 356, date: "2025-05-11" },
	{ id: 2, item: "Item 2", price: 55, date: "2025-03-26" },
	{ id: 3, item: "Item 3", price: 24 },
	{ id: 4, item: "Item 4", price: 874, date: "2025-04-30" },
	{ id: 5, item: "Item 5", price: 689, date: "2025-09-14" },
	{ id: 6, item: "Item 6", price: 46 },
	{ id: 7, item: "Item 7", price: 421, date: "2026-07-25" },
	{ id: 8, item: "Item 8", price: 17, date: "2026-06-28" },
	{ id: 9, item: "Item 9", price: 752 },
	{ id: 10, item: "Item 10", price: 73, date: "2026-01-27" },
	{ id: 11, item: "Item 11", price: 94, date: "2026-10-31" },
	{ id: 12, item: "Item 12", price: 846 },
];

export default {
	title: "Components/Table (basic)",
	// tags: ['autodocs'],
	args: {
		tableHeight: "auto",
		rowHeight: "default",
		variant: "default",
	},
	argTypes: {
		tableHeight: {
			description: "Controls the height of the table.",
			table: {
				category: "ifx-table props",
				defaultValue: { summary: "auto" },
				type: {
					summary: "Options",
					detail: 'Default: "auto"\nExample for fixed height: "400px"',
				},
			},
		},
		rowHeight: {
			description: "Controls the height of the rows.",
			table: {
				category: "ifx-table props",
				defaultValue: { summary: "default" },
				type: {
					summary: "Options",
					detail: "Default: 40\nCompact: 32\nOptions: 40, 32",
				},
			},
			options: ["compact", "default"],
			control: { type: "radio" },
		},
		cols: {
			description:
				"The array must be a string for Vanilla JavaScript, and stringified or array object for React/Vue/Angular.",
			table: {
				category: "ifx-table props",
				type: {
					summary: "Column header options",
					detail:
						'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\nresizable: false\nflex: 1\nminWidth: 50px\nwidth: 100px\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link",',
				},
			},
		},
		rows: {
			description:
				"The array must be a string for Vanilla JavaScript, and stringified or array object for React/Vue/Angular.",
			table: {
				category: "ifx-table props",
				type: {
					summary: "Row data options",
					detail:
						'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000\nresizable: false\nflex: 1\nminWidth: 50px\nwidth: 100px\n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
				},
			},
		},
		variant: {
			description: "Sets the variant of the table.",
			table: {
				category: "ifx-table props",
				defaultValue: { summary: "default" },
			},
			options: ["default", "zebra"],
			control: { type: "radio" },
		},
	},
};

const DefaultTemplate = (args) => html`<ifx-basic-table 
cols='${JSON.stringify(args.cols)}' 
rows='${JSON.stringify(args.rows)}'
table-height='${args.tableHeight}'
row-height='${args.rowHeight}'
variant='${args.variant}'>
</ifx-basic-table>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
	cols: cols,
	rows: rows,
	tableHeight: "auto",
};

export const FixedHeight = DefaultTemplate.bind({});
FixedHeight.args = {
	tableHeight: "400px",
	cols: cols,
	rows: rows,
};
