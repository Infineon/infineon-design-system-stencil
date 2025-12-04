import { Component, Element, h, Listen, State } from "@stencil/core";

@Component({
	tag: "ifx-breadcrumb-item",
	styleUrl: "breadcrumb-item.scss",
	shadow: true,
})
export class BreadcrumbItem {
	@State() isLastItem: boolean = false;
	@Element() el;
	private emittedElement: HTMLElement;
	@State() uniqueId: string;
	@State() hasDropdownMenu: boolean = false;

	@Listen("mousedown", { target: "document" })
	handleOutsideClick(event: MouseEvent) {
		const path = event.composedPath();
		if (!path.includes(this.el)) {
			this.closeDropdownMenu();
		}
	}

	@Listen("keydown")
	handleKeyDown(ev: KeyboardEvent) {
		if (ev.key === "Enter" || ev.key === " ") {
			this.toggleDropdownMenu();
		} else if (ev.key === "Escape") {
			this.closeDropdownMenu();
		}
	}

	getDropdownMenu() {
		const dropdownMenu = this.el.shadowRoot.querySelector(".dropdown-menu");
		return dropdownMenu;
	}

	@Listen("breadcrumbMenuIconWrapper")
	menuWrapperEventReEmitter(event: CustomEvent<HTMLElement>) {
		this.emittedElement = event.detail;
	}

	getMenuIconWrapper(): HTMLElement | undefined {
		return this.emittedElement;
	}

	handleClassList(el, type, className) {
		el.classList[type](className);
	}

	closeDropdownMenu() {
		if (this.hasDropdownMenu) {
			const dropdownMenu = this.getDropdownMenu();
			const menuWrapper = this.getMenuIconWrapper();
			this.handleClassList(dropdownMenu, "remove", "open");
			this.handleClassList(menuWrapper, "remove", "show");
		}
	}

	toggleDropdownMenu() {
		if (this.hasDropdownMenu) {
			const dropdownMenu = this.getDropdownMenu();
			const menuWrapper = this.getMenuIconWrapper();
			this.handleClassList(dropdownMenu, "toggle", "open");
			this.handleClassList(menuWrapper, "toggle", "show");
		}
	}

	isDropdownMenuOpen(): boolean {
		const dropdownMenu = this.getDropdownMenu();
		return (
			this.hasDropdownMenu &&
			dropdownMenu &&
			dropdownMenu.classList.contains("open")
		);
	}

	handleLastItem() {
		const breadcrumbItems = this.el
			.closest("ifx-breadcrumb")
			.querySelectorAll("ifx-breadcrumb-item");
		if (this.el === breadcrumbItems[breadcrumbItems.length - 1]) {
			this.isLastItem = true;
		} else this.isLastItem = false;
	}

	generateUniqueId(prefix = "id") {
		return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
	}

	componentWillLoad() {
		if (!this.uniqueId) {
			this.uniqueId = this.generateUniqueId("breadcrumb-dropdown");
		}
		this.handleLastItem();
	}

	componentDidUpdate() {
		this.handleLastItem();
	}

	componentWillRender() {
		this.setHasDropdownMenuState();
	}

	setHasDropdownMenuState() {
		const dropdownMenu = this.getIfxDropdownMenuComponent();
		if (dropdownMenu) {
			this.hasDropdownMenu = !!dropdownMenu;
		}
	}

	getIfxDropdownMenuComponent() {
		const dropdownMenu = this.el.querySelector("ifx-dropdown-menu");
		return dropdownMenu;
	}

	componentDidLoad() {
		const dropdownMenu = this.getIfxDropdownMenuComponent();

		if (!this.hasDropdownMenu) {
			const iconMenuWrapper = this.getMenuIconWrapper();
			this.handleClassList(iconMenuWrapper, "toggle", "hide");
		} else {
			dropdownMenu.isOpen = true;
		}
	}

	render() {
		return (
			<li
				class="breadcrumb-parent"
				aria-current={`${this.isLastItem ? "page" : ""}`}
			>
				<li
					role="button"
					tabindex={this.hasDropdownMenu ? 0 : -1}
					class="breadcrumb-wrapper"
					onClick={() => this.toggleDropdownMenu()}
					aria-controls={this.uniqueId}
					aria-haspopup="menu"
					aria-label="Toggle dropdown menu"
				>
					<slot name="label" />
					<div
						id={this.uniqueId}
						class="dropdown-menu"
						aria-expanded={this.isDropdownMenuOpen()}
						aria-label="Dropdown menu"
					>
						<slot />
					</div>
				</li>
				{!this.isLastItem && (
					<span class="breadcrumb-divider" aria-hidden="true">
						/
					</span>
				)}
			</li>
		);
	}
}
