// Mock ag-grid-community BEFORE importing Table
jest.mock("ag-grid-community", () => ({
	createGrid: jest.fn().mockReturnValue({
		sizeColumnsToFit: jest.fn(),
		setGridOption: jest.fn(),
	}),
	FirstDataRenderedEvent: jest.fn(),
	GridApi: jest.fn(),
	GridOptions: jest.fn(),
}));

// Now import Table AFTER mocking its dependencies
import { Table } from "./table";

// Mock other dependencies
jest.mock("./customNoRowsOverlay", () => ({
	CustomNoRowsOverlay: {},
}));

jest.mock("./customLoadingOverlay", () => ({
	CustomLoadingOverlay: {},
}));

describe("ifx-basic-table", () => {
	it("has the expected properties and methods", () => {
		const table = new Table();

		// Check default props
		expect((table as any).rowHeight).toBe("default");
		expect((table as any).tableHeight).toBe("auto");
		expect((table as any).variant).toBe("default");

		// Check that key methods exist
		expect(typeof (table as any).getRowData).toBe("function");
		expect(typeof (table as any).getColData).toBe("function");
		expect(typeof (table as any).setColsAndRows).toBe("function");
		expect(typeof (table as any).getClassNames).toBe("function");
	});

	it("processes row data correctly", () => {
		const table = new Table();

		// Test with array data
		const rowData = [
			{ name: "John", age: 30 },
			{ name: "Jane", age: 25 },
		];

		(table as any).rows = rowData;
		const processedRows = (table as any).getRowData();

		// Check that row data is processed correctly
		expect(Array.isArray(processedRows)).toBe(true);
		expect(processedRows.length).toBe(2);
		expect(processedRows[0].name).toBe("John");
		expect(processedRows[1].name).toBe("Jane");
	});

	it("processes column data correctly", () => {
		const table = new Table();

		// Test with array data
		const colData = [
			{ field: "name", headerName: "Name" },
			{ field: "age", headerName: "Age" },
		];

		(table as any).cols = colData;
		const processedCols = (table as any).getColData();

		// Check that column data is processed correctly
		expect(Array.isArray(processedCols)).toBe(true);
		expect(processedCols.length).toBe(2);
		expect(processedCols[0].field).toBe("name");
		expect(processedCols[1].field).toBe("age");
	});

	it("handles JSON string input", () => {
		const table = new Table();

		// Test with JSON string data
		const rowData = JSON.stringify([
			{ name: "John", age: 30 },
			{ name: "Jane", age: 25 },
		]);

		(table as any).rows = rowData;
		const processedRows = (table as any).getRowData();

		// Check that JSON string data is parsed correctly
		expect(Array.isArray(processedRows)).toBe(true);
		expect(processedRows.length).toBe(2);
		expect(processedRows[0].name).toBe("John");
		expect(processedRows[1].name).toBe("Jane");
	});

	it("returns correct class names", () => {
		const table = new Table();

		// With auto table height
		(table as any).tableHeight = "auto";
		let classNames = (table as any).getClassNames();
		expect(classNames).toContain("table-wrapper");
		expect(classNames).toContain("ag-root-wrapper-body");

		// With fixed table height
		(table as any).tableHeight = "400px";
		classNames = (table as any).getClassNames();
		expect(classNames).toContain("table-wrapper");
		expect(classNames).not.toContain("ag-root-wrapper-body");
	});
});
