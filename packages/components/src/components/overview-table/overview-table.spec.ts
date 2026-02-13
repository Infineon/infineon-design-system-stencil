import { newSpecPage } from "jest-stencil-runner";
import { OverviewTable } from "./overview-table";

describe("ifx-overview-table", () => {
	it("renders with header and table structure", async () => {
		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		expect(page.root).toBeTruthy();

		// Check header elements
		const header = page.root.shadowRoot.querySelector(".header");
		expect(header).toBeTruthy();

		const title = page.root.shadowRoot.querySelector(".title");
		expect(title.textContent).toBe("DDS Components Overview");

		// Check table structure
		const table = page.root.shadowRoot.querySelector("table");
		expect(table).toBeTruthy();

		const thead = table.querySelector("thead");
		expect(thead).toBeTruthy();

		const tbody = table.querySelector("tbody");
		expect(tbody).toBeTruthy();

		// Check column headers
		const thElements = thead.querySelectorAll("th");
		expect(thElements.length).toBe(4);
		expect(thElements[0].textContent).toContain("Component");
		expect(thElements[1].textContent).toContain("Version 1");
		expect(thElements[2].textContent).toContain("Version 2");
		expect(thElements[3].textContent).toContain("Version 3");
	});

	it("counts planned components correctly", async () => {
		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		// Mock document.querySelectorAll to return a specific number of planned components
		const mockPlannedComponents = Array(4).fill(document.createElement("div"));
		jest
			.spyOn(page.root.shadowRoot, "querySelectorAll")
			.mockImplementation((selector) => {
				if (selector === ".planned__component") {
					return mockPlannedComponents as any;
				}
				return document.querySelectorAll(selector);
			});

		const instance = page.rootInstance;

		// Call the method directly
		const plannedCount = instance.getPlannedComponents();
		expect(plannedCount).toBe(4);

		// Reset mock
		jest.restoreAllMocks();
	});

	it("counts completed components correctly", async () => {
		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		// Mock document.querySelectorAll to return a specific number of completed components
		const mockCompletedComponents = Array(40).fill(
			document.createElement("div"),
		);
		jest
			.spyOn(page.root.shadowRoot, "querySelectorAll")
			.mockImplementation((selector) => {
				if (selector === ".completed__component") {
					return mockCompletedComponents as any;
				}
				return document.querySelectorAll(selector);
			});

		const instance = page.rootInstance;

		// Call the method directly
		const completedCount = instance.getCompletedComponents();
		expect(completedCount).toBe(40);

		// Reset mock
		jest.restoreAllMocks();
	});

	it("calculates total components correctly", async () => {
		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		const instance = page.rootInstance;

		// Mock the methods to return specific values
		instance.getPlannedComponents = jest.fn().mockReturnValue(5);
		instance.getCompletedComponents = jest.fn().mockReturnValue(35);

		// Create a mock element to capture the number assignment
		const mockIndicator = { number: 0 };
		jest
			.spyOn(page.root.shadowRoot, "getElementById")
			.mockReturnValue(mockIndicator as any);

		// Call the method
		instance.setTotalComponentsNumber();

		// Verify the calculation
		expect(mockIndicator.number).toBe(40);

		// Reset mocks
		jest.restoreAllMocks();
	});

	it("updates DOM with component counts", async () => {
		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		const instance = page.rootInstance;

		// Mock the component counting methods
		instance.getPlannedComponents = jest.fn().mockReturnValue(4);
		instance.getCompletedComponents = jest.fn().mockReturnValue(36);

		// Create mock elements to capture the number assignments
		const mockPlannedIndicator = { number: 0 };
		const mockCompletedIndicator = { number: 0 };
		const mockTotalIndicator = { number: 0 };

		// Mock getElementById to return different indicators based on the id
		jest
			.spyOn(page.root.shadowRoot, "getElementById")
			.mockImplementation((id) => {
				if (id === "number__indicator-planned")
					return mockPlannedIndicator as any;
				if (id === "number__indicator-completed")
					return mockCompletedIndicator as any;
				if (id === "number__indicator-total") return mockTotalIndicator as any;
				return null;
			});

		// Call the methods
		instance.setPlannedComponentsNumber();
		instance.setCompletedComponentsNumber();
		instance.setTotalComponentsNumber();

		// Verify the values were set correctly
		expect(mockPlannedIndicator.number).toBe(4);
		expect(mockCompletedIndicator.number).toBe(36);
		expect(mockTotalIndicator.number).toBe(40);

		// Reset mocks
		jest.restoreAllMocks();
	});

	it("sets header height CSS variable", async () => {
		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		const instance = page.rootInstance;

		// Mock DOM elements
		const mockHeader = { offsetHeight: 100 };
		const mockWrapper = { style: { setProperty: jest.fn() } };

		jest
			.spyOn(page.root.shadowRoot, "querySelector")
			.mockImplementation((selector) => {
				if (selector === "header") return mockHeader as any;
				if (selector === ".wrapper") return mockWrapper as any;
				return null;
			});

		// Call componentDidLoad method
		instance.componentDidLoad();

		// Verify that the CSS variable was set correctly
		expect(mockWrapper.style.setProperty).toHaveBeenCalledWith(
			"--header-height",
			"100px",
		);

		// Reset mocks
		jest.restoreAllMocks();
	});

	it("sets parent padding to 0", async () => {
		// Create a parent element structure
		const grandparent = document.createElement("div");
		const parent = document.createElement("div");
		grandparent.appendChild(parent);

		const page = await newSpecPage({
			components: [OverviewTable],
			html: `<ifx-overview-table></ifx-overview-table>`,
		});

		// Set up the parent element structure for the component
		Object.defineProperty(page.root, "parentElement", {
			get: jest.fn().mockReturnValue(parent),
		});

		// Call componentWillLoad method
		page.rootInstance.componentWillLoad();

		// Verify that the grandparent's padding was set to 0
		expect(grandparent.style.padding).toBe("0px");
	});
});
