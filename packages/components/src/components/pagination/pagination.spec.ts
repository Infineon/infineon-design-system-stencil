import { newSpecPage } from "jest-stencil-runner";
import { Pagination } from "./pagination";

describe("ifx-pagination", () => {
	const defaultItemsPerPage =
		'[{"label":"10","value":10},{"label":"20","value":20},{"label":"50","value":50}]';

	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		expect(page.root).toBeTruthy();
		const container = page.root.shadowRoot.querySelector(".container");
		expect(container).toBeTruthy();

		// Check Results per Page section
		const itemsPerPageLabel = page.root.shadowRoot.querySelector(
			".items__per-page-label",
		);
		expect(itemsPerPageLabel.textContent).toBe("Results per Page");

		// Check pagination elements
		const pagination = page.root.shadowRoot.querySelector(".pagination");
		expect(pagination).toBeTruthy();

		// With default total=1, only one page should be visible
		const pageLinks = page.root.shadowRoot.querySelectorAll(
			"ol li:not(.ellipsis)",
		);
		expect(pageLinks.length).toBe(1);

		// First page should be active
		expect(pageLinks[0].classList.contains("active")).toBeTruthy();

		// Previous button should be disabled
		const prevButton = page.root.shadowRoot.querySelector(".prev");
		expect(prevButton.classList.contains("disabled")).toBeTruthy();

		// Next button should be disabled since we only have 1 page
		const nextButton = page.root.shadowRoot.querySelector(".next");
		expect(nextButton.classList.contains("disabled")).toBeTruthy();
	});

	it("renders with custom total and currentPage", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="50" current-page="2" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// Manually trigger button state update
		page.rootInstance.initPagination();
		await page.waitForChanges();

		// Verify internal page is set correctly
		expect(page.rootInstance.internalPage).toBe(2);

		// With total=50 and itemsPerPage=10 (default), we should have 5 pages
		const pageLinks = page.root.shadowRoot.querySelectorAll(
			"ol li:not(.ellipsis)",
		);
		expect(pageLinks.length).toBe(5);

		// Second page should be active
		const activePage = page.root.shadowRoot.querySelector("ol li.active");
		expect(activePage.textContent.trim()).toBe("2");

		// Previous button should not be disabled since we're on page 2
		const prevButton = page.root.shadowRoot.querySelector(
			".prev",
		) as HTMLElement;
		expect(prevButton.classList.contains("disabled")).toBeFalsy();

		// Next button should not be disabled since we're not on the last page
		const nextButton = page.root.shadowRoot.querySelector(
			".next",
		) as HTMLElement;
		expect(nextButton.classList.contains("disabled")).toBeFalsy();
	});

	it("renders with ellipsis for many pages", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="200" current-page="5" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// With total=200 and itemsPerPage=10 (default), we should have ellipsis
		const ellipsis = page.root.shadowRoot.querySelectorAll(".ellipsis");
		expect(ellipsis.length).toBeGreaterThan(0);

		// Check visible pages (format should be something like 1, ..., 3, 4, 5, 6, 7, ..., 20)
		const visiblePages = page.rootInstance.visiblePages;
		expect(visiblePages).toContain(1); // First page always visible
		expect(visiblePages).toContain(20); // Last page always visible (200/10 = 20 pages)
		expect(visiblePages).toContain(5); // Current page
		expect(visiblePages).toContain("..."); // Ellipsis
	});

	it("handles page change events", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="50" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// Set up event spy
		const eventSpy = jest.fn();
		page.win.addEventListener("ifxPageChange", eventSpy);

		// Click next button
		const nextButton = page.root.shadowRoot.querySelector(
			".next",
		) as HTMLElement;
		nextButton.click();
		await page.waitForChanges();

		// Event should have been emitted
		expect(eventSpy).toHaveBeenCalled();

		// Current page should be 2
		expect(page.rootInstance.internalPage).toBe(2);

		// Second page should be active
		const activePage = page.root.shadowRoot.querySelector("ol li.active");
		expect(activePage.textContent.trim()).toBe("2");

		// Click previous button to go back
		const prevButton = page.root.shadowRoot.querySelector(
			".prev",
		) as HTMLElement;
		prevButton.click();
		await page.waitForChanges();

		// Current page should be 1 again
		expect(page.rootInstance.internalPage).toBe(1);
	});

	it("handles direct page selection", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="50" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// Set up event spy
		const eventSpy = jest.fn();
		page.win.addEventListener("ifxPageChange", eventSpy);

		// Simulate clicking on page 3
		page.rootInstance.changePage(3);
		await page.waitForChanges();

		// Current page should be 3
		expect(page.rootInstance.internalPage).toBe(3);

		// Event should have been emitted
		expect(eventSpy).toHaveBeenCalled();

		// The emitted event should contain the correct data
		const emittedEvent = eventSpy.mock.calls[0][0].detail;
		expect(emittedEvent.currentPage).toBe(3);
		expect(emittedEvent.totalPages).toBe(5); // 50/10 = 5 pages
		expect(emittedEvent.itemsPerPage).toBe(10);
	});

	it("handles items per page selection", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="100" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// Set up event spy
		const eventSpy = jest.fn();
		page.win.addEventListener("ifxPageChange", eventSpy);

		// Initially we should have 10 pages (100/10)
		expect(page.rootInstance.numberOfPages.length).toBe(10);

		// Simulate select event for 20 items per page
		page.rootInstance.setItemsPerPage({
			detail: { value: 20 },
		});
		await page.waitForChanges();

		// We should now have 5 pages (100/20)
		expect(page.rootInstance.numberOfPages.length).toBe(5);

		// Page should reset to 1
		expect(page.rootInstance.internalPage).toBe(1);

		// Event should have been emitted
		expect(eventSpy).toHaveBeenCalled();

		// The emitted event should contain the correct data
		const emittedEvent = eventSpy.mock.calls[0][0].detail;
		expect(emittedEvent.currentPage).toBe(1);
		expect(emittedEvent.totalPages).toBe(5);
		expect(emittedEvent.itemsPerPage).toBe(20);
	});

	it("correctly calculates number of pages", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="95" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// With 95 items and 10 per page, we should have 10 pages
		expect(page.rootInstance.numberOfPages.length).toBe(10);

		// Update to 20 items per page
		page.rootInstance.internalItemsPerPage = 20;
		page.rootInstance.calculateNumberOfPages();
		await page.waitForChanges();

		// With 95 items and 20 per page, we should have 5 pages (ceiling of 95/20)
		expect(page.rootInstance.numberOfPages.length).toBe(5);
	});

	it("handles boundary conditions", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="10" current-page="1" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// Attempt to go to page 0 (should stay at 1)
		page.rootInstance.changePage(0);
		await page.waitForChanges();
		expect(page.rootInstance.internalPage).toBe(1);

		// Attempt to go beyond last page (should stay at last page)
		page.rootInstance.changePage(100);
		await page.waitForChanges();
		expect(page.rootInstance.internalPage).toBe(1); // Only 1 page with 10 items

		// Test with more pages
		page.root.total = 100;
		page.rootInstance.calculateNumberOfPages();
		await page.waitForChanges();

		// Attempt to go beyond last page (should stay at last page)
		page.rootInstance.changePage(100);
		await page.waitForChanges();
		expect(page.rootInstance.internalPage).toBe(10); // 10 pages with 100 items
	});

	it("handles custom itemsPerPage format", async () => {
		const customOptions =
			'[{"label":"25","value":25},{"label":"50","value":50}]';
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="100" items-per-page='${customOptions}'></ifx-pagination>`,
		});

		// Should parse the custom options
		expect(page.rootInstance.filteredItemsPerPage).toHaveLength(2);
		expect(page.rootInstance.filteredItemsPerPage[0].value).toBe(25);
		expect(page.rootInstance.filteredItemsPerPage[1].value).toBe(50);

		// Default items per page should be the first option (25)
		expect(page.rootInstance.internalItemsPerPage).toBe(25);

		// 4 pages with 100 items and 25 per page
		expect(page.rootInstance.numberOfPages.length).toBe(4);

		// Simulate selecting 50 items per page
		page.rootInstance.setItemsPerPage({
			detail: { value: 50 },
		});
		await page.waitForChanges();

		// Should now have 2 pages (100/50)
		expect(page.rootInstance.numberOfPages.length).toBe(2);
	});

	it("handles items per page as array", async () => {
		const page = await newSpecPage({
			components: [Pagination],
			html: `<ifx-pagination total="100" items-per-page='${defaultItemsPerPage}'></ifx-pagination>`,
		});

		// Directly set itemsPerPage as array
		page.root.itemsPerPage = [
			{ label: "15", value: 15 },
			{ label: "30", value: 30 },
		];

		// Trigger reprocessing
		page.rootInstance.filterOptionsArray();
		await page.waitForChanges();

		// Should process the array options
		expect(page.rootInstance.filteredItemsPerPage).toHaveLength(2);
		expect(page.rootInstance.filteredItemsPerPage[0].value).toBe(15);
		expect(page.rootInstance.filteredItemsPerPage[1].value).toBe(30);
	});
});
