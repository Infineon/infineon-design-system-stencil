import {
	Component,
	Element,
	h,
	Listen,
	Method,
	Prop,
	State,
} from "@stencil/core";

@Component({
	tag: "ifx-navbar-profile",
	styleUrl: "navbar-item.scss",
	shadow: true,
	assetsDirs: ["assets"],
})
export class NavbarProfile {
	@Element() el;
	@Prop() showLabel: boolean = true;
	@Prop() href: string = "";
	@Prop() imageUrl: string = "";
	@Prop() target: string = "_self";
	@Prop() alt: string = "";
	@Prop() userName: string = "";
	@State() internalHref: string = "";
	@State() isMenuItem: boolean = false;
	@State() hasChildNavItems: boolean = false;
	@State() internalImageUrl: any = { type: "", value: "" };

	private defaultProfileImage =
		`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="#0A8276"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14C21.7909 14 20 15.7909 20 18C20 20.2091 21.7909 22 24 22C26.2091 22 28 20.2091 28 18C28 15.7909 26.2091 14 24 14ZM18 18C18 14.6863 20.6863 12 24 12C27.3137 12 30 14.6863 30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18ZM16.5869 28.3984C18.2683 27.0179 20.7466 26 24 26C27.2541 26 29.7324 27.0209 31.4134 28.4024C33.0562 29.7526 34 31.5119 34 33V35C34 35.5523 33.5523 36 33 36H15C14.4477 36 14 35.5523 14 35V33C14 31.5074 14.9433 29.7479 16.5869 28.3984ZM17.8561 29.9441C16.5187 31.0421 16 32.2826 16 33V34H32V33C32 32.2881 31.4818 31.0474 30.1436 29.9476C28.8436 28.8791 26.8219 28 24 28C21.1774 28 19.1557 28.8771 17.8561 29.9441Z" fill="white"/>
</svg>`;

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

	componentWillLoad() {
		this.setHref();
		this.setImage();
		const sidebarItems = this.getNavbarItems();
		if (sidebarItems.length !== 0) {
			this.hasChildNavItems = true;
		} else {
			this.hasChildNavItems = false;
		}
	}

	componentDidLoad() {
		this.setProfileGap();
		if (this.hasChildNavItems) {
			const navItems = this.getNavbarItems();
			this.appendNavItemToMenu(navItems);
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

	handleClassList(el, type, className) {
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

	relocateUsingSlot(navItems) {
		navItems.forEach((item) => {
			item.setAttribute("slot", "first__layer");
		});
	}

	appendNavItemToMenu(navItems) {
		this.relocateUsingSlot(navItems);
	}

	isValidHttpUrl(string) {
		let url;

		try {
			url = new URL(string);
		} catch (_) {
			return false;
		}

		return url.protocol === "http:" || url.protocol === "https:";
	}

	setImage() {
		if (this.imageUrl.toLowerCase().trim() === "") {
			this.internalImageUrl = { type: undefined, value: "" };
		} else if (this.isValidHttpUrl(this.imageUrl)) {
			this.internalImageUrl = { type: "url", value: this.imageUrl };
		} else {
			this.internalImageUrl = { type: "initials", value: this.imageUrl };
		}
	}

	setHref() {
		if (this.href.toLowerCase().trim() === "") {
			this.internalHref = undefined;
		} else this.internalHref = this.href;
	}

	setProfileGap() {
		const innerContentWrapper = this.el.shadowRoot.querySelector(
			".inner__content-wrapper",
		);
		const labelWrapper = this.el.shadowRoot.querySelector(".label__wrapper");
		const labelSlot = labelWrapper.querySelector("slot");
		const nodes = labelSlot.assignedNodes();
		if (!nodes.length) {
			this.handleClassList(innerContentWrapper, "add", "no-gap");
		} else {
			this.handleClassList(innerContentWrapper, "remove", "no-gap");
		}
	}

	getItemMenu() {
		const menu = this.el.shadowRoot.querySelector(".navbar-menu");
		return menu;
	}

	closeItemMenu() {
		const itemMenu = this.getItemMenu();
		const menuItem = this.getNavBarItem();
		if (itemMenu) {
			this.handleClassList(itemMenu, "remove", "open");
			this.handleClassList(menuItem, "remove", "open");
		}
	}

	toggleItemMenu() {
		if (!this.internalHref) {
			if (this.isMenuItem && this.hasChildNavItems) {
				const itemMenu = this.getItemMenu();
				this.handleClassList(itemMenu, "add", "right");
			}

			if (this.hasChildNavItems) {
				const itemMenu = this.getItemMenu();
				const menuItem = this.getNavBarItem();
				this.handleClassList(itemMenu, "toggle", "open");
				this.handleClassList(menuItem, "toggle", "open");
			}
		}
	}

	itemHasNestedItems() {
		const childNavItem = this.el.shadowRoot.querySelector("ifx-navbar-item");
		if (childNavItem) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		return (
			<div class="container">
				<a
					href={this.internalHref}
					target={this.target}
					onClick={() => this.toggleItemMenu()}
					class={`navbar__item ${!this.showLabel ? "removeLabel" : ""} ${this.hasChildNavItems ? "isParent" : ""}`}
				>
					<div class="inner__content-wrapper">
						<div
							class={`navbar__container-right-content-navigation-item-icon-wrapper`}
						>
							{this.userName.trim() !== "" && (
								<div class="username__tooltip">{this.userName}</div>
							)}

							{this.internalImageUrl.type !== "initials" && (
								<img
									src={
										this.internalImageUrl.type === "url"
											? this.internalImageUrl.value
											: `data:image/svg+xml,${encodeURIComponent(this.defaultProfileImage)}`
									}
									alt={this.alt}
								/>
							)}

							{this.internalImageUrl.type === "initials" && (
								<div class="initials__wrapper">
									<span class="initials">{this.internalImageUrl.value}</span>
								</div>
							)}
						</div>
						<span class="label__wrapper">
							<slot onSlotchange={() => this.setProfileGap()} />
						</span>
					</div>
					{/* {this.userName.trim() !== "" && <div class='username__tooltip'>{this.userName}</div>} */}
				</a>

				{this.hasChildNavItems && (
					<ul class="navbar-menu rightSideItemMenu">
						{" "}
						<slot name="first__layer" />{" "}
					</ul>
				)}
			</div>
		);
	}
}
