import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-pagination",
	styleUrl: "pagination.scss",
	shadow: true,
})
export class Pagination {
	@Element() el: HTMLElement;
	@Event() ifxPageChange: EventEmitter;
	@Event() ifxItemsPerPageChange: EventEmitter;
	@Prop() currentPage: number = 1;
	@Prop() showItemsPerPage: boolean = true;
	@State() internalPage: number = 1;
	@State() internalItemsPerPage: number = 10;
	@State() numberOfPages: number[] = [];
	@Prop() total: number = 1;
	@Prop() itemsPerPage: any[] | string;
	@State() filteredItemsPerPage: any[] = [];
	@State() visiblePages: (number | string)[] = [];

	private CLASS_DISABLED = "disabled";
	private CLASS_ACTIVE = "active";
	private prevInternalPage: number;

	@Watch("total")
	watchTotalHandler() {
		this.calculateNumberOfPages();
		this.updateVisiblePages();
	}

	@Watch("currentPage")
	currentPageWatcher(newVal: number) {
		this.internalPage = Math.max(
			1,
			Math.min(newVal, this.numberOfPages.length),
		);
		this.calculateNumberOfPages();
		this.updateVisiblePages();
	}

	@Listen("ifxSelect")
	setItemsPerPage(e: CustomEvent) {
		const selectedValue = e.detail?.value || e.detail?.label;
		const newItemsPerPage = parseInt(selectedValue) || 10;

		if (newItemsPerPage === this.internalItemsPerPage) {
			return;
		}

		this.internalItemsPerPage = newItemsPerPage;
		this.internalPage = 1;
		this.calculateNumberOfPages();
		this.updateVisiblePages();
		this.handleEventEmission();
	}

	emitItemsPerPage(e) {
		this.ifxItemsPerPageChange.emit((e as any).detail.label);
	}

	async componentDidLoad() {
		if (this.showItemsPerPage) {
			const select = this.el.shadowRoot.querySelector("#itemsPerPageSelect");
			if (select) {
				select.addEventListener("ifxSelect", (e) => this.emitItemsPerPage(e));
			}
		}

		// Add resize listener to update pagination on screen size changes
		window.addEventListener("resize", this.handleResize);

		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-pagination", await framework);
		}
		this.initPagination();
	}

	disconnectedCallback() {
		if (this.showItemsPerPage) {
			const select = this.el.shadowRoot.querySelector("#itemsPerPageSelect");
			if (select) {
				select.removeEventListener("ifxSelect", (e) =>
					this.emitItemsPerPage(e),
				);
			}
		}

		// Remove resize listener
		window.removeEventListener("resize", this.handleResize);

		// Clear any pending resize timeout
		if (this.resizeTimeout) {
			clearTimeout(this.resizeTimeout);
		}
	}

	updateVisiblePages() {
		// Check if screen is mobile (< 375px)
		const isMobile = window.innerWidth < 375;
		const totalPages = this.numberOfPages.length;
		const current = this.internalPage;
		let pages: (number | string)[] = [];

		if (isMobile) {
			// Mobile logic: maximum 5 elements
			if (totalPages <= 5) {
				pages = [...this.numberOfPages];
			} else {
				// Always show first page
				pages.push(1);

				if (current <= 2) {
					// Show: 1 2 3 … 10 (for pages 1 and 2)
					pages.push(2, 3, "...", totalPages);
				} else if (current >= totalPages - 1) {
					// Show: 1 … 23 24 25 (for last 2 pages only)
					pages.push("...", totalPages - 2, totalPages - 1, totalPages);
				} else {
					// Show: 1 … 5 … 10 (for middle pages, including page 3 and third-to-last page)
					pages.push("...", current, "...", totalPages);
				}
			}
		} else {
			// Desktop logic: maximum 7 elements
			const buffer = 2;

			if (totalPages <= 7) {
				pages = [...this.numberOfPages];
			} else {
				// Always show first page
				pages.push(1);

				// Determine the range around current page
				let start = Math.max(2, current - buffer);
				let end = Math.min(totalPages - 1, current + buffer);

				// Adjust range to ensure we show enough pages
				// If we're close to the beginning, extend the end
				if (current <= 4) {
					start = 2;
					end = Math.min(totalPages - 1, 5);
				}
				// If we're close to the end, extend the start
				else if (current >= totalPages - 3) {
					start = Math.max(2, totalPages - 4);
					end = totalPages - 1;
				}
				// For middle pages, show current +/- 1
				else {
					start = current - 1;
					end = current + 1;
				}

				// Add ellipsis before the range if there's a gap
				if (start > 2) {
					pages.push("...");
				}

				// Add the range of pages
				for (let i = start; i <= end; i++) {
					pages.push(i);
				}

				// Add ellipsis after the range if there's a gap
				if (end < totalPages - 1) {
					pages.push("...");
				}

				// Always show last page
				pages.push(totalPages);
			}
		}

		this.visiblePages = pages;
	}

	calculateNumberOfPages() {
		const totalPages = Math.ceil(this.total / this.internalItemsPerPage);
		this.numberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);
		this.internalPage = Math.max(1, Math.min(this.currentPage, totalPages));
	}

	filterOptionsArray() {
		const items =
			typeof this.itemsPerPage === "string"
				? JSON.parse(this.itemsPerPage)
				: this.itemsPerPage;
		this.filteredItemsPerPage = items.map((item) => ({
			...item,
			label: item.label || item.value,
		}));
	}

	componentWillLoad() {
		this.filterOptionsArray();

		const selectedOption = this.filteredItemsPerPage.find(
			(option) => option.selected,
		);
		if (selectedOption) {
			this.internalItemsPerPage = Number(selectedOption.value);
		} else if (this.filteredItemsPerPage.length > 0) {
			this.internalItemsPerPage = Number(this.filteredItemsPerPage[0].value);
		}

		this.calculateNumberOfPages();
		this.internalPage = Math.max(
			1,
			Math.min(this.currentPage, this.numberOfPages.length),
		);
		this.updateVisiblePages();
	}

	componentWillUpdate() {
		if (this.prevInternalPage !== this.internalPage) {
			this.updateVisiblePages();
			this.prevInternalPage = this.internalPage;
		}
	}

	componentDidUpdate() {
		this.initPagination();
	}

	handleEventEmission() {
		this.ifxPageChange.emit({
			currentPage: this.internalPage,
			totalPages: this.numberOfPages.length,
			itemsPerPage: this.internalItemsPerPage,
		});
	}

	initPagination() {
		const pagination = this.el.shadowRoot.querySelector(".pagination");
		if (!pagination) return;

		const updateButtons = () => {
			const prev = pagination.querySelector<HTMLButtonElement>(".prev");
			const next = pagination.querySelector<HTMLButtonElement>(".next");
			if (prev) {
				prev.disabled = this.internalPage === 1;
				prev.classList.toggle(this.CLASS_DISABLED, this.internalPage === 1);
			}
			if (next) {
				next.disabled = this.internalPage === this.numberOfPages.length;
				next.classList.toggle(
					this.CLASS_DISABLED,
					this.internalPage === this.numberOfPages.length,
				);
			}
		};

		pagination.querySelectorAll("li").forEach((li) => {
			li.removeEventListener("click", this.handlePageClick);
			li.addEventListener("click", this.handlePageClick);
		});

		updateButtons();
	}

	private handlePageClick = (e: Event) => {
		const li = e.currentTarget as HTMLLIElement;
		const page = parseInt(li.dataset.page);
		if (!isNaN(page)) this.changePage(page);
	};

	private handleResize = () => {
		// Debounce resize events to prevent excessive calls
		clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(() => {
			this.updateVisiblePages();
		}, 100);
	};

	private resizeTimeout: any;

	changePage(newPage: number) {
		newPage = Math.max(1, Math.min(newPage, this.numberOfPages.length));
		if (newPage === this.internalPage) return;

		this.internalPage = newPage;
		this.handleEventEmission();
		this.initPagination();
	}

	render() {
		return (
			<div class="container">
				{this.showItemsPerPage && (
					<div class="items__per-page-wrapper">
						<div class="items__per-page-label">Results per Page</div>
						<div class="items__per-page-field">
							<ifx-select
								id="itemsPerPageSelect"
								placeholder="false"
								show-search="false"
								value={undefined}
								disabled={false}
								error={false}
								size="s"
								options={this.filteredItemsPerPage}
								placeholder-value="Select"
							></ifx-select>
						</div>
					</div>
				)}

				<div class="items__total-wrapper">
					<div class="pagination">
						<ifx-icon-button
							class="prev"
							icon="arrow-left-16"
							aria-label="Previous Page"
							onClick={() => this.changePage(this.internalPage - 1)}
							variant="secondary"
						></ifx-icon-button>

						<ol>
							{this.visiblePages.map((page, i) =>
								typeof page === "number" ? (
									<li
										key={`page-${page}`}
										class={{ [this.CLASS_ACTIVE]: page === this.internalPage }}
										data-page={page}
									>
										<span
											class="page__button"
											role="button"
											tabindex="0"
											aria-current={
												page === this.internalPage ? "page" : undefined
											}
											aria-label={`Page ${page}`}
											onClick={() => this.changePage(page)}
											onKeyDown={(e) =>
												(e.key === "Enter" || e.key === " ") &&
												this.changePage(page)
											}
										>
											{page}
										</span>
									</li>
								) : (
									<li class="ellipsis" key={`ellipsis-${i}`}>
										<span aria-hidden="true">...</span>
									</li>
								),
							)}
						</ol>

						<ifx-icon-button
							class="next"
							icon="arrow-right-16"
							aria-label="Next Page"
							onClick={() => this.changePage(this.internalPage + 1)}
							variant="secondary"
						></ifx-icon-button>
					</div>
				</div>
			</div>
		);
	}
}
