import { newSpecPage } from "jest-stencil-runner";
import { Navbar } from "./navbar";
import { NavbarItem } from "./navbar-item";
import { NavbarProfile } from "./navbar-profile";
describe("ifx-navbar", () => {
    beforeEach(() => {
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
        const logo = page.root.shadowRoot.querySelector(".navbar__logo");
        expect(logo).toBeTruthy();
        // Should be fixed by default
        const header = page.root.shadowRoot.querySelector(".navbar");
        expect(header.classList.contains("navbar--fixed")).toBeTruthy();
    });
    it("renders with custom application name", async () => {
        const page = await newSpecPage({
            components: [Navbar],
            html: `<ifx-navbar application-name="Test App"></ifx-navbar>`,
        });
        const appName = page.root.shadowRoot.querySelector(
            ".navbar__application-name",
        );
        expect(appName.textContent).toBe("Test App");
    });
    it("hides logo and app name when showLogoAndAppname is false", async () => {
        const page = await newSpecPage({
            components: [Navbar],
            html: `<ifx-navbar show-logo-and-appname="false"></ifx-navbar>`,
        });
        const logo = page.root.shadowRoot.querySelector(".navbar__logo");
        expect(logo).toBeFalsy();
    });
    it("sets custom logo href and target", async () => {
        const page = await newSpecPage({
            components: [Navbar],
            html: `<ifx-navbar logo-href="https://example.com" logo-href-target="_blank"></ifx-navbar>`,
        });
        const logoLink = page.root.shadowRoot.querySelector(
            ".navbar__logo-link",
        );
        expect(logoLink.getAttribute("href")).toBe("https://example.com");
        expect(logoLink.getAttribute("target")).toBe("_blank");
    });
    it("can be rendered without fixed position", async () => {
        const page = await newSpecPage({
            components: [Navbar],
            html: `<ifx-navbar fixed="false"></ifx-navbar>`,
        });
        const header = page.root.shadowRoot.querySelector(".navbar");
        expect(header.classList.contains("navbar--fixed")).toBeFalsy();
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
        it("updates the active item when a navbar item is clicked", async () => {
                const page = await newSpecPage({
                        components: [Navbar, NavbarItem],
                        html: `
                <ifx-navbar>
                    <ifx-navbar-item slot="left-item" active="true">Item 1</ifx-navbar-item>
                    <ifx-navbar-item slot="left-item">Item 2</ifx-navbar-item>
                </ifx-navbar>
            `,
                });
                const items = page.root.querySelectorAll("ifx-navbar-item");
                const firstNavItem = items[0].shadowRoot.querySelector(".navbar__item");
                const secondNavItem = items[1].shadowRoot.querySelector(".navbar__item");

                expect(firstNavItem.classList.contains("active")).toBe(true);
                expect(secondNavItem.classList.contains("active")).toBe(false);

                secondNavItem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                await page.waitForChanges();

                expect(items[0].active).toBe(false);
                expect(items[1].active).toBe(true);
                expect(items[0].getAttribute("active")).toBe("false");
                expect(items[1].getAttribute("active")).toBe("true");
                expect(firstNavItem.classList.contains("active")).toBe(false);
                expect(secondNavItem.classList.contains("active")).toBe(true);
        });
        it("activates the top-level parent when a nested navbar item is clicked", async () => {
            const page = await newSpecPage({
                components: [Navbar, NavbarItem],
                html: `
                    <ifx-navbar>
                        <ifx-navbar-item slot="left-item">
                            Parent
                            <ifx-navbar-item>Nested item</ifx-navbar-item>
                        </ifx-navbar-item>
                        <ifx-navbar-item slot="left-item">Other item</ifx-navbar-item>
                    </ifx-navbar>
                `,
            });
            const items = page.root.querySelectorAll("ifx-navbar-item");
            const parentItem = items[0];
            const nestedItem = items[1];
            const otherItem = items[2];

            nestedItem.shadowRoot
                .querySelector(".navbar__item")
                .dispatchEvent(new MouseEvent("click", { bubbles: true }));
            await page.waitForChanges();

            expect(parentItem.active).toBe(true);
            expect(parentItem.shadowRoot.querySelector(".navbar__item").classList.contains("active")).toBe(true);
            expect(nestedItem.active).toBe(false);
            expect(nestedItem.shadowRoot.querySelector(".navbar__item").classList.contains("active")).toBe(false);
            expect(otherItem.active).toBe(false);
        });
    it.each(["click", "Enter"])(
        "preserves the active selection when an icon-only item receives %s",
        async (interaction) => {
            const page = await newSpecPage({
                components: [Navbar, NavbarItem],
                html: `
                    <ifx-navbar>
                        <ifx-navbar-item slot="left-item" active="true">Selected</ifx-navbar-item>
                        <ifx-navbar-item slot="right-item" show-label="false" icon="image-16"></ifx-navbar-item>
                    </ifx-navbar>
                `,
            });
            const items = page.root.querySelectorAll("ifx-navbar-item");
            const iconLink = items[1].shadowRoot.querySelector(".navbar__item");

            if (interaction === "click") {
                iconLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            } else {
                iconLink.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
                );
            }
            await page.waitForChanges();

            expect(items[0].active).toBe(true);
            expect(items[0].getAttribute("active")).toBe("true");
            expect(items[0].shadowRoot.querySelector(".navbar__item").classList.contains("active")).toBe(true);
            expect(items[1].active).toBe(false);
            expect(iconLink.classList.contains("active")).toBe(false);
        },
    );
    it("keeps icon-only items unselected when their label is shown in the mobile menu", async () => {
        const page = await newSpecPage({
            components: [Navbar, NavbarItem],
            html: `
                <ifx-navbar>
                    <ifx-navbar-item slot="left-item" active="true">Selected</ifx-navbar-item>
                    <ifx-navbar-item slot="right-item" show-label="true" data-navbar-original-show-label="false" icon="image-16">Action</ifx-navbar-item>
                </ifx-navbar>
            `,
        });
        const items = page.root.querySelectorAll("ifx-navbar-item");
        items[1].shadowRoot.querySelector(".navbar__item").dispatchEvent(
            new MouseEvent("click", { bubbles: true }),
        );
        await page.waitForChanges();

        expect(items[0].active).toBe(true);
        expect(items[1].active).toBe(false);
    });
    it("activates items that have both an icon and a label", async () => {
        const page = await newSpecPage({
            components: [Navbar, NavbarItem],
            html: `
                <ifx-navbar>
                    <ifx-navbar-item slot="left-item" active="true">Selected</ifx-navbar-item>
                    <ifx-navbar-item slot="left-item" icon="image-16">Labeled item</ifx-navbar-item>
                </ifx-navbar>
            `,
        });
        const items = page.root.querySelectorAll("ifx-navbar-item");
        items[1].shadowRoot.querySelector(".navbar__item").dispatchEvent(
            new MouseEvent("click", { bubbles: true }),
        );
        await page.waitForChanges();

        expect(items[0].active).toBe(false);
        expect(items[1].active).toBe(true);
        expect(items[1].getAttribute("active")).toBe("true");
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
       
        (Navbar.prototype as any).handleBodyScroll = jest.fn();
        const page = await newSpecPage({
            components: [Navbar],
            html: `<ifx-navbar></ifx-navbar>`,
        });
        const navbar = page.rootInstance;
        const emitSpy = jest.spyOn(navbar.ifxNavbarMobileMenuIsOpen, "emit");
        // Manually call the handler
        navbar.handleSidebar();
        // Verify handleBodyScroll was called with 'hide'
        expect((Navbar.prototype as any).handleBodyScroll).toHaveBeenCalledWith(
            "hide",
        );
        // Verify the event was emitted with true
        expect(emitSpy).toHaveBeenCalledWith(true);
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
        // Mock private method via prototype cast
        (Navbar.prototype as any).moveNavItemsToSidebar = jest.fn();
        const page = await newSpecPage({
            components: [Navbar, NavbarItem],
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