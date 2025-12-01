import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";

@Component({
	tag: "ifx-sidebar-item",
	styleUrl: "sidebar-item.scss",
	shadow: true,
})
export class SidebarItem {
	@Element() el;
	@Prop() icon: string = "";
	@State() showIcon: boolean = true;
	@State() showIconWrapper: boolean = false;
	@Prop() href: string = "";
	@State() internalHref: string = "";
	@Prop() target: string = "_self";
	@State() isExpandable: boolean = false;
	@State() isNested: boolean = true;
	@State() isSubMenuItem: boolean = false;
	@Prop() numberIndicator: number;
	@Prop() active: boolean = false; // set to true manually or by clicking on a navigation item
	@Prop() isActionItem: boolean = false; // if an item is an action item, it can not become active
	@State() indicatorVariant: "number" | "dot" = "number";

	@State() internalActiveState: boolean = false;

	@Event({ bubbles: true, composed: true }) ifxSidebarMenu: EventEmitter;
	@Event({ bubbles: true, composed: true })
	ifxSidebarNavigationItem: EventEmitter;
	@Event({ bubbles: true, composed: true }) ifxSidebarActionItem: EventEmitter;

	@Prop() handleItemClick: (item: HTMLElement) => void;

	private titleText: string = "";

	@Watch("active")
	handleActiveChange(newValue: boolean, oldValue: boolean) {
		// If the item is an action item, ignore the active prop
		if (this.isActionItem) {
			this.internalActiveState = false;
			return;
		}
		this.internalActiveState = newValue;
		if (newValue !== oldValue) {
			const labelElement = this.getNavItem(this.el.shadowRoot);
			if (!this.isExpandable && !newValue) {
				this.handleClassList(labelElement, "remove", "active");
			}
			if (!this.isExpandable && newValue) {
				this.handleClassList(labelElement, "add", "active");
			}
		}
	}

	@Watch("numberIndicator")
	handleNumberIndicatorChange() {
		this.updateIndicatorVariant();
	}

	@Listen("consoleError")
	handleConsoleError(event: CustomEvent<boolean>) {
		if (event.detail) {
			this.showIcon = false;
		} else {
			this.showIcon = true;
		}
	}

	handleEventEmission() {
		// Get the active item section
		this.ifxSidebarMenu.emit(this.el);
	}

	handleClassList(el, type, className) {
		el.classList[type](className);
		if (type === "contains") {
			return el.classList.contains(className);
		}
	}

	getExpandableMenu() {
		const expandableSubmenu = this.el.shadowRoot.querySelector(
			".expandable__submenu",
		);
		return expandableSubmenu;
	}

	getNavItem(el) {
		return el?.querySelector(".sidebar__nav-item");
	}

	getSidebarMenuItems(el = this.el) {
		const sidebarItems = el.querySelectorAll("ifx-sidebar-item");
		if (sidebarItems.length === 0) {
			return el.shadowRoot.querySelectorAll("ifx-sidebar-item");
		}
		return sidebarItems;
	}

	getSidebarMenuItem() {
		const sidebarItem = this.el.shadowRoot.querySelector(".sidebar__nav-item");
		return sidebarItem;
	}

	toggleSubmenu() {
		if (this.isExpandable) {
			const menuItem = this.getSidebarMenuItem();
			const expandableMenu = this.getExpandableMenu();
			this.handleClassList(expandableMenu, "toggle", "open");
			this.handleClassList(menuItem, "toggle", "open");
			// Emit an event with the current component
			this.handleEventEmission();
		} else {
			// If the sidebar item is not expandable, it's a leaf item without a submenu.
			// Emit an event to the parent `ifx-sidebar` component to notify it that a leaf item has been clicked.
			if (this.isActionItem) {
				//its an action item that eg opens an overlay etc and should not influence the active state of the item
				this.ifxSidebarActionItem.emit(this.el); // emit new event if isActionItem is true
				return;
			} else {
				//its a navigation item which becomes active after clicking it
				this.handleActiveChange(true, this.internalActiveState);
				this.ifxSidebarNavigationItem.emit(this.el);
			}
			// If the sidebar item is selectable (not expandable), then call the handler function with the current element.
			if (this.handleItemClick) {
				this.handleItemClick(this.el);
			}
		}
		// // Emit an event with the current component
		// this.handleEventEmission();
	}

	handleExpandableMenu(sidebarItems) {
		const sidebarExpandableMenu = this.getExpandableMenu();
		sidebarItems.forEach((el: HTMLElement) => {
			const li = document.createElement("li");
			li.appendChild(el);
			sidebarExpandableMenu.appendChild(li);
		});
	}

	parentElementIsSidebar() {
		const parentElement = this.el.parentElement;
		if (parentElement.tagName.toUpperCase() === "IFX-SIDEBAR") {
			return true;
		} else return false;
	}

	checkIfMenuItemIsNested() {
		const parentIsSidebar = this.parentElementIsSidebar();
		if (parentIsSidebar) {
			this.isNested = false;
		}
	}

	checkIfMenuItemIsSubMenu() {
		const parentElement = this.el.parentElement;
		const navItem = this.getNavItem(parentElement.shadowRoot);
		if (
			parentElement.tagName.toUpperCase() === "IFX-SIDEBAR-ITEM" &&
			!this.handleClassList(navItem, "contains", "header__section")
		) {
			this.isSubMenuItem = true;
		} else {
			this.isSubMenuItem = false;
		}
	}

	isActive(iteratedComponent) {
		const activeAttributeValue = iteratedComponent.getAttribute("active");
		const isActive = activeAttributeValue === "true";
		return isActive;
	}

	getParentSection(el: HTMLElement) {
		let parentElement = el.parentElement;

		while (
			parentElement &&
			parentElement.tagName.toUpperCase() !== "IFX-SIDEBAR"
		) {
			if (parentElement.tagName.toUpperCase() === "IFX-SIDEBAR-ITEM") {
				return parentElement;
			}
			parentElement = parentElement.parentElement;
		}

		return null;
	}

	handleBorderIndicatorDisplacement(menuItem) {
		// Recursive function to handle each item
		const handleItem = (item, menuItem) => {
			const isActive = this.isActive(item);
			if (isActive) {
				const isOpen = this.handleClassList(menuItem, "contains", "open");
				const activeMenuItemSection = this.getActiveItemSection();
				if (!isOpen) {
					this.handleClassList(activeMenuItemSection, "add", "active-section");
				} else {
					this.handleClassList(
						activeMenuItemSection,
						"remove",
						"active-section",
					);
				}
			}

			// Process each child item
			const children = this.getSidebarMenuItems(item);
			children.forEach((child) => handleItem(child, menuItem));
		};

		// Start with the top-level items
		const topLevelItems = this.getSidebarMenuItems();
		topLevelItems.forEach((item) => handleItem(item, menuItem));
	}

	setHref() {
		if (this.href.toLowerCase().trim() === "") {
			this.internalHref = undefined;
		} else this.internalHref = this.href;
	}

	getActiveItemSection() {
		const parentIsSidebar = this.parentElementIsSidebar();
		if (parentIsSidebar) {
			const labelElement = this.getNavItem(this.el.shadowRoot);
			return labelElement;
		} else {
			const labelElement = this.getNavItem(this.el.shadowRoot);
			return labelElement;
		}
	}

	@Method()
	async setActiveClasses() {
		const activeMenuItem = this.getNavItem(this.el.shadowRoot);
		this.handleClassList(activeMenuItem, "add", "active");
	}

	@Method()
	async expandMenu(ac: boolean) {
		const menuItem = this.getSidebarMenuItem();
		const expandableMenu = this.getExpandableMenu();
		this.handleClassList(expandableMenu, "add", "open");
		this.handleClassList(menuItem, "add", "open");
		if (ac) {
			this.handleClassList(expandableMenu, "remove", "active-section");
			this.handleClassList(menuItem, "remove", "active-section");
		}
	}

	@Method()
	async isItemExpandable() {
		return this.isExpandable;
	}

	handleActiveState() {
		if (this.internalActiveState) {
			this.setActiveClasses();
		}
	}

	handleKeyDown(event: KeyboardEvent) {
		if (event.key === "Enter") {
			this.toggleSubmenu();
		}
	}

	componentDidLoad() {
		this.handleActiveState();
		if (this.isExpandable) {
			const sidebarItems = this.getSidebarMenuItems();
			this.handleExpandableMenu(sidebarItems);
		}
		// Listen for collapsed state changes
		this.updateIndicatorVariant();
		// Set up MutationObserver to watch for CSS custom property changes
		this.observeCollapsedState();
		// Extract text content for title attribute
		this.extractTitleText();
	}

	private extractTitleText() {
		// Get the text content from the slot
		const slotElement = this.el.shadowRoot.querySelector("slot");
		if (slotElement) {
			const assignedNodes = slotElement.assignedNodes();
			this.titleText = assignedNodes
				.filter(
					(node) =>
						node.nodeType === Node.TEXT_NODE ||
						node.nodeType === Node.ELEMENT_NODE,
				)
				.map((node) => node.textContent?.trim() || "")
				.join(" ")
				.trim();
		}
	}

	private updateIndicatorVariant() {
		// Check the data attribute on this element
		const isCollapsed = this.el.hasAttribute("data-sidebar-collapsed");
		//this.indicatorVariant = isCollapsed ? 'dot' : 'number';
		if (this.numberIndicator > 0) {
			this.indicatorVariant = isCollapsed ? "dot" : "number";
		}
	}

	private observeCollapsedState() {
		// Create a MutationObserver to watch for data-sidebar-collapsed attribute changes
		const observer = new MutationObserver(() => {
			this.updateIndicatorVariant();
		});

		observer.observe(this.el, {
			attributes: true,
			attributeFilter: ["data-sidebar-collapsed"],
		});
	}

	componentWillLoad() {
		this.internalActiveState = this.active;
		this.checkIfMenuItemIsNested();
		this.checkIfMenuItemIsSubMenu();
		this.setHref();

		// Set attribute to track if item has icon
		this.el.setAttribute("data-has-icon", this.icon ? "true" : "false");

		const sidebarItems = this.getSidebarMenuItems();
		if (sidebarItems.length !== 0) {
			this.isExpandable = true;
		} else {
			this.isExpandable = false;
		}
	}

	componentWillUpdate() {
		// If the active prop has been set to true and the internalActiveState has not been set to true yet
		if (this.active && !this.internalActiveState) {
			// Set the internal active state to true
			this.internalActiveState = this.active;

			// Emit the event to notify the parent Sidebar
			this.ifxSidebarNavigationItem.emit(this.el);
		}
	}

	render() {
		const isCollapsed = this.el.hasAttribute("data-sidebar-collapsed");
		const shouldHide = this.el.hasAttribute("data-hide-in-collapsed");

		return (
			<div style={{ display: shouldHide ? "none" : "block" }}>
				<a
					tabIndex={1}
					onKeyDown={(event) => this.handleKeyDown(event)}
					href={this.internalHref}
					onClick={() => this.toggleSubmenu()}
					target={this.target}
					class={`sidebar__nav-item ${!this.isNested && this.isExpandable ? "header__section" : ""} ${this.isSubMenuItem ? "submenu__item" : ""}`}
					title={this.titleText}
				>
					{this.icon && (
						<div
							class={`sidebar__nav-item-icon-wrapper ${!this.showIcon && !isCollapsed ? "noIcon" : ""}`}
						>
							<ifx-icon icon={this.icon}></ifx-icon>
						</div>
					)}
					<div class="sidebar__nav-item-label">
						<slot />
					</div>
					{(this.isExpandable || !isNaN(this.numberIndicator)) && (
						<div
							class="sidebar__nav-item-indicator"
							style={{
								display: !isCollapsed || this.icon ? "flex" : "none",
							}}
						>
							{this.isExpandable && (
								<span class="item__arrow-wrapper">
									<ifx-icon icon="chevron-down-16" />
								</span>
							)}

							{this.numberIndicator > 0 &&
								!this.isExpandable &&
								!this.isNested && (
									<span class="item__number-indicator">
										<ifx-indicator
											variant={this.indicatorVariant}
											number={this.numberIndicator}
										></ifx-indicator>
									</span>
								)}
						</div>
					)}
				</a>
				{this.isExpandable && <ul class="expandable__submenu"></ul>}
			</div>
		);
	}
}
