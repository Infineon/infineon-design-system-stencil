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
} from "@stencil/core";

@Component({
	tag: "ifx-navbar-item",
	styleUrl: "navbar-item.scss",
	shadow: true,
})
export class NavbarItem {
	@Element() el;
	@Prop() showLabel: boolean = true;
	@Prop() icon: string = "";
	@Prop() href: string = "";
	@Prop() target: string = "_self";
	@Prop() hideOnMobile: boolean = true;
	@State() internalHref: string = "";
	@State() isMenuItem: boolean = false;
	@State() hasChildNavItems: boolean = false;
	@State() isSidebarMenuItem: boolean = false;
	@State() itemPosition: string;
	@Event() ifxNavItem: EventEmitter;
	@Prop() numberIndicator: number;
	@Prop() dotIndicator: boolean = false;


	@Listen("mousedown", { target: "document" })
	handleOutsideClick(event: MouseEvent) {
		const path = event.composedPath();
		const itemMenu = this.getItemMenu();
		if (itemMenu) {
			if (itemMenu.classList.contains("open")) {
				if (!path.includes(this.el)) {
					this.closeItemMenu();
				}
			}
		}
	}

	@Method()
	async hideComponent() {
		this.el.style.display = "none";
	}

	@Method()
	async showComponent() {
		this.el.style.display = "";
	}

	@Method()
	async toggleChildren(action) {
		const itemMenu = this.getItemMenu();
		const arrowIcon = this.getChevronDownIconWrapper();
		if (itemMenu) {
			this.handleClassList(arrowIcon, action, "hide");
			this.handleClassList(itemMenu, action, "itemInMobileMenu");
		}
	}

	@Method()
	async moveChildComponentsIntoSubLayerMenu() {
		const subLayerMenu = this.getItemMenu();
		if (subLayerMenu) {
			const subLayerMenuIsOpened = this.handleClassList(
				subLayerMenu,
				"contains",
				"open",
			);
			if (subLayerMenuIsOpened) {
				const navbarItem = this.getNavBarItem();
				const subLayerBackButton = this.getSubLayerBackButton();
				this.handleClassList(navbarItem, "add", "layer__item-parent");
				this.handleClassList(subLayerBackButton, "add", "show");
				this.ifxNavItem.emit({ component: this.el, action: "hideFirstLayer" });
			}
		}

		const navItems = this.el.querySelectorAll('[slot="first__layer"]');
		this.isSidebarMenuItem = true;

		for (let i = 0; i < navItems.length; i++) {
			navItems[i].setAttribute("slot", "second__layer");
			navItems[i].moveChildComponentsIntoSubLayerMenu();
		}
	}

	getSubLayerBackButton() {
		const sublayerBackButton = this.el.shadowRoot.querySelector(
			".sub__layer-back-button",
		);
		return sublayerBackButton;
	}

	@Method()
	async toggleFirstLayerItem(actionOne, actionTwo) {
		const navbarItem = this.getNavBarItem();
		const secondLayerMenu = this.getSubLayerMenu();
		const subLayerBackButton = this.getSubLayerBackButton();
		this.handleClassList(subLayerBackButton, [actionOne], "show");
		this.handleClassList(navbarItem, [actionTwo], "hide");
		this.handleClassList(secondLayerMenu, [actionTwo], "remove__margin");
	}

	openSubLayerMenu() {
		if (this.hasChildNavItems) {
			const subLayerBackButton = this.getSubLayerBackButton();
			const rightArrowIcon = this.getRightArrowIcon();
			const navbarItem = this.getNavBarItem();
			const subLayerMenu = this.getSubLayerMenu();
			const slotName = this.el.getAttribute("slot");

			this.handleClassList(subLayerBackButton, "add", "show");
			this.handleClassList(rightArrowIcon, "add", "hide");
			this.handleClassList(navbarItem, "add", "layer__item-parent");
			this.handleClassList(subLayerMenu, "add", "open");

			if (slotName.toLowerCase() === "second__layer") {
				this.ifxNavItem.emit({
					component: this.el,
					parent: this.el.parentElement,
					action: "hideSecondLayer",
				});
				this.handleClassList(navbarItem, "remove", "menuItem");
			} else {
				this.ifxNavItem.emit({ component: this.el, action: "hideFirstLayer" });
			}
		}
	}

	@Method()
	async addMenuItemClass() {
		const navbarItem = this.getNavBarItem();
		this.handleClassList(navbarItem, "add", "menuItem");
		const rightArrowIcon = this.getRightArrowIcon();
		if (this.hasChildNavItems) {
			this.handleClassList(rightArrowIcon, "remove", "hide");
		}
	}

	@Method()
	async moveChildComponentsBackIntoNavbar() {
		const subLayerBackButton = this.getSubLayerBackButton();
		const navbarItem = this.getNavBarItem();
		const secondLayerMenu = this.getSubLayerMenu();

		this.handleClassList(subLayerBackButton, "remove", "show");
		this.handleClassList(navbarItem, "remove", "layer__item-parent");
		this.handleClassList(secondLayerMenu, "remove", "remove__margin");

		this.ifxNavItem.emit({ component: this.el, action: "show" });

		const navItems = this.el.querySelectorAll('[slot="second__layer"]');
		this.isSidebarMenuItem = false;
		this.showComponent();
		this.handleClassList(navbarItem, "remove", "hide");

		for (let i = 0; i < navItems.length; i++) {
			navItems[i].setAttribute("slot", "first__layer");
			navItems[i].moveChildComponentsBackIntoNavbar();
			navItems[i].addMenuItemClass();
			navItems[i].returnToFirstLayer();
		}
	}

	getRightArrowIcon() {
		const menuItemRightIconWrapper = this.el.shadowRoot.querySelector(
			".menuItemRightIconWrapper",
		);
		return menuItemRightIconWrapper;
	}

	getChevronDownIconWrapper() {
		const arrowIcon = this.el.shadowRoot.querySelector(".navItemIconWrapper");
		return arrowIcon;
	}

	@Method()
	async returnToFirstLayer() {
		const subLayerBackButton = this.getSubLayerBackButton();
		const navbarItem = this.getNavBarItem();
		const rightArrowIcon = this.getRightArrowIcon();
		const subLayerMenu = this.getSubLayerMenu();
		const slotName = this.el.getAttribute("slot");

		this.handleClassList(subLayerBackButton, "remove", "show");
		this.handleClassList(navbarItem, "remove", "layer__item-parent");
		this.handleClassList(subLayerMenu, "remove", "open");
		if (this.hasChildNavItems) {
			this.handleClassList(rightArrowIcon, "remove", "hide");
		}

		if (slotName.toLowerCase() === "second__layer") {
			this.ifxNavItem.emit({
				component: this.el,
				parent: this.el.parentElement,
				action: "returnToSecondLayer",
			});
			this.handleClassList(navbarItem, "add", "menuItem");
		} else {
			this.ifxNavItem.emit({ component: this.el, action: "return" });
		}
	}

	componentWillLoad() {
		this.setHref();
		this.checkIfItemIsNested();
		this.checkIfItemHasChildren();
		this.removeEmptyItem();
	}

	componentDidLoad() {
		this.handleItemGap();
		this.handleLabelWrapper();
		if (this.hasChildNavItems) {
			const navItems = this.getNavbarItems();
			this.relocateItemsToFirstlayer(navItems);
		}
	}

	componentDidUpdate() {
		const navbarItem = this.getNavBarItem();
		const isLayerItemParent = this.handleClassList(
			navbarItem,
			"contains",
			"layer__item-parent",
		);
		if (this.isSidebarMenuItem && isLayerItemParent) {
			const rightArrowIcon = this.getRightArrowIcon();
			this.handleClassList(rightArrowIcon, "add", "hide");
		}
	}

	@Method()
	async setMenuItemPosition() {
		if (this.isMenuItem && this.hasChildNavItems) {
			const menuPosition = this.getItemMenuPosition();
			if (menuPosition === "left") {
				this.itemPosition = "left";
			} else if (menuPosition === "right") {
				this.itemPosition = "right";
			}
		}
	}

	handleClassList(el, type, className) {
		if (!el) return false;
		el.classList[type](className);
		if (type === "contains") {
			return el.classList.contains(className);
		}
	}

	getNavbarItems() {
		const navItems = this.el.querySelectorAll("ifx-navbar-item");
		return navItems;
	}

	getNavBarItem() {
		const navItem = this.el.shadowRoot.querySelector(".navbar__item");
		return navItem;
	}

	getSubLayerMenu() {
		const subLayerMenu = this.el.shadowRoot.querySelector(".sub__layer-menu");
		return subLayerMenu;
	}

	relocateItemsToFirstlayer(navItems) {
		navItems.forEach((item) => {
			item.setAttribute("slot", "first__layer");
		});
	}

	setHref() {
		if (this.href.toLowerCase().trim() === "") {
			this.internalHref = undefined;
		} else this.internalHref = this.href;
	}

	checkIfItemIsNested() {
		const parentElement = this.el.parentElement;
		if (
			parentElement.tagName.toUpperCase() === "IFX-NAVBAR-ITEM" ||
			parentElement.tagName.toUpperCase() === "IFX-NAVBAR-PROFILE"
		) {
			this.isMenuItem = true;
			return;
		} else {
			this.isMenuItem = false;
		}
	}

	checkIfItemHasChildren() {
		const sidebarItems = this.getNavbarItems();
		if (sidebarItems.length !== 0) {
			this.hasChildNavItems = true;
		} else {
			this.hasChildNavItems = false;
		}
	}

	@Method()
	async setItemSideSpecifications() {
		const menuItem = this.el;
		const itemMenu = this.getItemMenu();
		const slotValue = menuItem.getAttribute("slot");

		if (slotValue.toLowerCase().trim() === "right-item") {
			this.handleClassList(itemMenu, "add", "rightSideItemMenu");
		}

		return true;
	}

	getItemMenu() {
		const menu = this.el.shadowRoot.querySelector(".navbar-menu");
		return menu;
	}

	getParentItemMenu() {
		return this.el.parentElement?.shadowRoot.querySelector(".navbar-menu");
	}

	closeItemMenu() {
		const itemMenu = this.getItemMenu();
		const menuItem = this.getNavBarItem();

		if (itemMenu) {
			this.handleClassList(itemMenu, "remove", "open");
			this.handleClassList(menuItem, "remove", "open");
		}
	}

	getItemMenuPosition() {
		let parentElement = this.el;
		while (parentElement) {
			if (
				parentElement.tagName === "IFX-NAVBAR-PROFILE" ||
				parentElement.slot === "right-item"
			) {
				return "left";
			}
			parentElement =
				parentElement.parentElement || parentElement.getRootNode().host;
		}
		return "right";
	}

	toggleItemMenu() {
		const slotName = this.el.getAttribute("slot").toLowerCase();
		if (slotName === "mobile-menu-top" || slotName === "second__layer") {
			this.openSubLayerMenu();
		} else if (!this.internalHref) {
			if (this.hasChildNavItems) {
				const itemMenu = this.getItemMenu();
				const menuItem = this.getNavBarItem();
				this.handleClassList(itemMenu, "toggle", "open");
				this.handleClassList(menuItem, "toggle", "open");
				if (
					this.isMenuItem &&
					!this.isSidebarMenuItem &&
					itemMenu.classList.contains("open")
				) {
					this.handleNestedLayerMenu({ type: "mouseenter" } as any);
				}
			} else {
				const parentItemMenu = this.getParentItemMenu();
				if (parentItemMenu) {
					this.handleClassList(parentItemMenu, "toggle", "open");
				}
			}
		}
	}

	handleNestedLayerMenu(e) {
		if (this.isMenuItem && this.hasChildNavItems && !this.isSidebarMenuItem) {
			const itemMenu = this.getItemMenu();
			const menuPosition = this.getItemMenuPosition();
			const type = e.type.toUpperCase();

			if (type === "MOUSEENTER") {
				this.handleClassList(itemMenu, "add", "open");
				if (menuPosition === "left") {
					this.handleClassList(itemMenu, "add", "left");
				} else if (menuPosition === "right") {
					this.handleClassList(itemMenu, "add", "right");
				}
			}

			if (type === "MOUSELEAVE") {
				this.handleClassList(itemMenu, "remove", "open");
				if (menuPosition === "left") {
					this.handleClassList(itemMenu, "remove", "left");
				} else if (menuPosition === "right") {
					this.handleClassList(itemMenu, "remove", "right");
				}
			}

			if (type === "FOCUSOUT") {
				const isStillInComponent = this.isFocusWithinComponent(e.relatedTarget);
				if (!isStillInComponent) {
					this.handleClassList(itemMenu, "remove", "open");
					if (menuPosition === "left") {
						this.handleClassList(itemMenu, "remove", "left");
					} else if (menuPosition === "right") {
						this.handleClassList(itemMenu, "remove", "right");
					}
				}
			}
		}
	}

	private isFocusWithinComponent(relatedTarget: EventTarget | null): boolean {
		if (!relatedTarget) return false;

		const target = relatedTarget as Node;
		const isInLightDOM = this.el.contains(target);
		const isInShadowDOM = this.el.shadowRoot?.contains(target);

		const rootNode = target.getRootNode();

		if (rootNode instanceof ShadowRoot) {
			const shadowRoot = rootNode as ShadowRoot;
			if (this.el.contains(shadowRoot.host)) {
				return true;
			}
		}

		return isInLightDOM || isInShadowDOM;
	}

	handleLabelWrapper() {
		const labelWrapper = this.el.shadowRoot.querySelector(".label__wrapper");
		const navItem = this.getNavBarItem();
		const slot = labelWrapper.querySelector("slot");
		if (!slot.assignedNodes().length) {
			navItem.classList.add("removeLabel");
		} else if (this.showLabel && navItem.classList.contains("removeLabel")) {
			navItem.classList.remove("removeLabel");
		}
	}

	handleItemGap() {
		const innerContentWrapper =
			this.el.shadowRoot.querySelector(".navbar__item");
		const numberIndicatorWrapper = innerContentWrapper.querySelector(
			".navbar__container-right-content-navigation-item-icon-wrapper",
		);
		if (this.numberIndicator || this.dotIndicator) {
			this.handleClassList(numberIndicatorWrapper, "add", "no-gap");
		} else {
			this.handleClassList(numberIndicatorWrapper, "remove", "no-gap");
		}
	}

	removeEmptyItem() {
		const hostElement = this.el.shadowRoot.host;
		if (!this.showLabel && !this.icon) {
			this.handleClassList(hostElement, "add", "hidden");
		}
	}

	handleKeyDown(event: KeyboardEvent) {
		if (event.key === "Enter") {
			event.stopPropagation();
			event.preventDefault();
			this.toggleItemMenu();
		}
	}

	render() {
		return (
			<div
				tabIndex={1}
				class="container"
				onMouseLeave={(e) => this.handleNestedLayerMenu(e)}
				onKeyDown={(e) => this.handleKeyDown(e)}
				onMouseEnter={(e) => this.handleNestedLayerMenu(e)}
			>
				<div class="sub__layer-back-button">
					<div
						class="back__button-wrapper"
						onClick={() => this.returnToFirstLayer()}
					>
						<ifx-icon icon="arrow-left-16" />
						<span>Back</span>
					</div>
				</div>
				<a
					tabindex={-1}
					href={this.internalHref}
					target={this.target}
					onClick={() => this.toggleItemMenu()}
					class={`navbar__item ${this.isSidebarMenuItem ? "sidebarMenuItem" : ""} ${!this.showLabel ? "removeLabel" : ""} ${this.isMenuItem ? "menuItem" : ""} ${this.hasChildNavItems ? "isParent" : ""}`}
				>
					<div class="inner__content-wrapper">
						<div
							class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon ? "removeWrapper" : ""}`}
						>
							{this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
							{this.icon && !this.showLabel && !isNaN(this.numberIndicator) && (
								<div class="number__indicator-wrapper">
									<ifx-indicator
										variant="number"
										number={this.numberIndicator}
									></ifx-indicator>
								</div>
							)}
							{this.icon &&
								!this.showLabel &&
								!this.numberIndicator &&
								this.dotIndicator && <div class="dot__indicator-wrapper"></div>}
						</div>

						{this.itemPosition === "left" &&
							this.hasChildNavItems &&
							this.isMenuItem && (
								<div class="menuItemLeftIconWrapper">
									<ifx-icon icon="chevron-left-16" />
								</div>
							)}

						<span class="label__wrapper">
							<slot />
						</span>
					</div>

					{this.showLabel &&
					this.numberIndicator &&
					!isNaN(this.numberIndicator) ? (
						<div class="number__indicator-wrapper">
							<ifx-indicator
								variant="number"
								number={this.numberIndicator}
							></ifx-indicator>
						</div>
					) : (
						""
					)}

					{this.showLabel && !this.numberIndicator && this.dotIndicator ? (
						<ifx-indicator variant="dot" />
					) : (
						""
					)}

					<div
						class={`navItemIconWrapper ${this.hasChildNavItems && !this.isMenuItem && !this.isSidebarMenuItem ? "" : "hide"}`}
					>
						<ifx-icon icon="chevron-down-16" />
					</div>

					{
						<div
							class={`menuItemRightIconWrapper ${(this.itemPosition === "right" && this.hasChildNavItems && this.isMenuItem) || (this.isSidebarMenuItem && this.hasChildNavItems) ? "" : "hide"}`}
						>
							<ifx-icon icon="chevron-right-16" />
						</div>
					}
				</a>

				{this.hasChildNavItems && !this.isSidebarMenuItem && (
					<ul class="navbar-menu">
						{" "}
						<slot name="first__layer" />{" "}
					</ul>
				)}
				{this.isSidebarMenuItem && (
					<ul class="sub__layer-menu">
						{" "}
						<slot name="second__layer" />{" "}
					</ul>
				)}
			</div>
		);
	}
}
