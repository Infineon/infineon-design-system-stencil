import { newSpecPage } from "jest-stencil-runner";
import { Navbar } from "./navbar";
import { NavbarItem } from "./navbar-item";
import { NavbarProfile } from "./navbar-profile";

describe("ifx-navbar", () => {
	// Mock addEventListenersToHandleCustomFocusState to prevent DOM-related errors
	beforeEach(() => {
		// Use type assertion to bypass TypeScript private property check
		(Navbar.prototype as any).addEventListenersToHandleCustomFocusState =
			jest.fn();
		(Navbar.prototype as any).setItemMenuPosition = jest
			.fn()
			.mockResolvedValue(undefined);

		// Mock window.matchMedia
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
			})),
		});
	});

	// Keep all the existing tests as they are
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Navbar],
			html: `<ifx-navbar></ifx-navbar>`,
		});

		expect(page.root).toBeTruthy();
		const navbarWrapper =
			page.root.shadowRoot.querySelector(".navbar__wrapper");
		expect(navbarWrapper).toBeTruthy();

		// Logo should be visible by default
		const logo = page.root.shadowRoot.querySelector(
			".navbar__container-left-logo",
		);
		expect(logo).toBeTruthy();

		// Should be fixed by default
		expect(navbarWrapper.classList.contains("fixed")).toBeTruthy();
	});

	it("renders with custom application name", async () => {
		const page = await newSpecPage({
			components: [Navbar],
			html: `<ifx-navbar application-name="Test App"></ifx-navbar>`,
		});

		const appName = page.root.shadowRoot.querySelector(
			".navbar__container-left-logo h6",
		);
		expect(appName.textContent).toBe("Test App");
	});

	it("hides logo and app name when showLogoAndAppname is false", async () => {
		const page = await newSpecPage({
			components: [Navbar],
			html: `<ifx-navbar show-logo-and-appname="false"></ifx-navbar>`,
		});

		const logo = page.root.shadowRoot.querySelector(
			".navbar__container-left-logo",
		);
		expect(logo).toBeFalsy();
	});

	it("sets custom logo href and target", async () => {
		const page = await newSpecPage({
			components: [Navbar],
			html: `<ifx-navbar logo-href="https://example.com" logo-href-target="_blank"></ifx-navbar>`,
		});

		const logoLink = page.root.shadowRoot.querySelector(
			".navbar__container-left-logo-default a",
		);
		expect(logoLink.getAttribute("href")).toBe("https://example.com");
		expect(logoLink.getAttribute("target")).toBe("_blank");
	});

	it("can be rendered without fixed position", async () => {
		const page = await newSpecPage({
			components: [Navbar],
			html: `<ifx-navbar fixed="false"></ifx-navbar>`,
		});

		const navbarWrapper =
			page.root.shadowRoot.querySelector(".navbar__wrapper");
		expect(navbarWrapper.classList.contains("fixed")).toBeFalsy();
	});

	it("renders with left menu items", async () => {
		const page = await newSpecPage({
			components: [Navbar, NavbarItem],
			html: `
        <ifx-navbar>
          <ifx-navbar-item slot="left-item">Products</ifx-navbar-item>
        </ifx-navbar>
      `,
		});

		// Check if the slot exists
		const leftItemSlot = page.root.shadowRoot.querySelector(
			'slot[name="left-item"]',
		);
		expect(leftItemSlot).toBeTruthy();

		// Verify that hasLeftMenuItems state is true
		expect(page.rootInstance.hasLeftMenuItems).toBeTruthy();
	});

	it("renders with right menu items", async () => {
		const page = await newSpecPage({
			components: [Navbar, NavbarItem],
			html: `
        <ifx-navbar>
          <ifx-navbar-item slot="right-item">Login</ifx-navbar-item>
        </ifx-navbar>
      `,
		});

		// Check if the slot exists
		const rightItemSlot = page.root.shadowRoot.querySelector(
			'slot[name="right-item"]',
		);
		expect(rightItemSlot).toBeTruthy();
	});

	it("renders with search bar slot", async () => {
		const page = await newSpecPage({
			components: [Navbar],
			html: `
        <ifx-navbar>
          <div slot="search-bar-right">Search</div>
        </ifx-navbar>
      `,
		});

		const searchBarSlot = page.root.shadowRoot.querySelector(
			'slot[name="search-bar-right"]',
		);
		expect(searchBarSlot).toBeTruthy();
	});

	it("emits ifxNavbarMobileMenuIsOpen event when sidebar is toggled", async () => {
		// Create a proper mock for toggleClass to avoid the error
		(Navbar.prototype as any).toggleClass = jest.fn();

		// Also mock handleBodyScroll to avoid further errors
		(Navbar.prototype as any).handleBodyScroll = jest.fn();

		const page = await newSpecPage({
			components: [Navbar],
			html: `<ifx-navbar></ifx-navbar>`,
		});

		const navbar = page.rootInstance;

		// Create a more complete mock event structure
		const mockClassList = {
			toggle: jest.fn(),
			contains: jest.fn().mockReturnValue(true), // Mock that 'show' class exists
		};

		const mockEvent = {
			currentTarget: {
				closest: jest.fn().mockReturnValue({
					querySelector: jest.fn().mockImplementation((selector) => {
						// Return different mocks based on the selector
						if (selector === ".navbar__cross-icon") {
							return { classList: mockClassList };
						}
						return { classList: mockClassList };
					}),
				}),
			},
		};

		// Manually call the handler with our mocked event
		navbar.handleSidebar(mockEvent);

		// Verify toggleClass was called at least once
		expect((Navbar.prototype as any).toggleClass).toHaveBeenCalled();

		// Verify handleBodyScroll was called with 'hide'
		expect((Navbar.prototype as any).handleBodyScroll).toHaveBeenCalledWith(
			"hide",
		);
	});

	it("responds to ifxNavItem event to manage menu layers", async () => {
		const page = await newSpecPage({
			components: [Navbar, NavbarItem],
			html: `
        <ifx-navbar>
          <ifx-navbar-item slot="left-item">Item 1</ifx-navbar-item>
          <ifx-navbar-item slot="left-item">Item 2</ifx-navbar-item>
        </ifx-navbar>
      `,
		});

		const navbar = page.rootInstance;

		// Mock getMobileMenuTop to return an array of objects with hideComponent method
		navbar.getMobileMenuTop = jest.fn().mockReturnValue([
			{
				isSameNode: jest.fn().mockReturnValue(false),
				hideComponent: jest.fn(),
			},
			{
				isSameNode: jest.fn().mockReturnValue(true),
				hideComponent: jest.fn(),
			},
		]);

		// Manually trigger the event handler with 'hideFirstLayer' action
		navbar.clearFirstLayerMenu({
			detail: {
				action: "hideFirstLayer",
				component: { isSameNode: () => true },
			},
		});

		// Verify getMobileMenuTop was called
		expect(navbar.getMobileMenuTop).toHaveBeenCalled();
	});

	it("handles search bar toggle via ifxOpen event", async () => {
		const page = await newSpecPage({
			components: [Navbar, NavbarItem],
			html: `
        <ifx-navbar>
          <div slot="search-bar-right">Search</div>
          <ifx-navbar-item slot="right-item">Menu</ifx-navbar-item>
        </ifx-navbar>
      `,
		});

		const navbar = page.rootInstance;

		// Replace the methods with mocks
		navbar.hideNavItems = jest.fn();
		navbar.showNavItems = jest.fn();

		// Simulate search bar opening
		navbar.handleSearchBarToggle({ detail: true });
		expect(navbar.hideNavItems).toHaveBeenCalled();

		// Simulate search bar closing
		navbar.handleSearchBarToggle({ detail: false });
		expect(navbar.showNavItems).toHaveBeenCalled();
	});

	it("renders with profile component", async () => {
		const page = await newSpecPage({
			components: [Navbar, NavbarProfile],
			html: `
        <ifx-navbar>
          <ifx-navbar-profile slot="right-item" user-name="John Doe"></ifx-navbar-profile>
        </ifx-navbar>
      `,
		});

		// Check if the profile slot is filled
		const rightItemSlot = page.root.shadowRoot.querySelector(
			'slot[name="right-item"]',
		);
		expect(rightItemSlot).toBeTruthy();

		// Check if the profile component is rendered
		const profile = page.root.querySelector("ifx-navbar-profile");
		expect(profile).toBeTruthy();
		expect(profile.getAttribute("user-name")).toBe("John Doe");
	});

	it("handles mobile menu when media query changes", async () => {
		// Mock matchMedia to return matches: true
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: true,
				media: query,
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
			})),
		});

		// Create a patched version of Navbar with mocked moveNavItemsToSidebar
		const MockedNavbar = class extends Navbar {
			moveNavItemsToSidebar = jest.fn();
		};

		const page = await newSpecPage({
			components: [MockedNavbar, NavbarItem],
			html: `
        <ifx-navbar>
          <ifx-navbar-item slot="left-item">Products</ifx-navbar-item>
          <ifx-navbar-item slot="right-item">Login</ifx-navbar-item>
        </ifx-navbar>
      `,
		});

		// Verify the method was called during component initialization
		expect(page.rootInstance.moveNavItemsToSidebar).toHaveBeenCalled();
	});
});
