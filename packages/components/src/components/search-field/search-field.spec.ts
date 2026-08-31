import { newSpecPage } from "jest-stencil-runner";
import { SearchField } from "./search-field";

describe("ifx-search-field", () => {
    it("renders with default props", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field></ifx-search-field>`,
        });
        expect(page.root).toBeTruthy();
        const searchField = page.root.shadowRoot.querySelector(".search-field");
        expect(searchField).toBeTruthy();
        const input = page.root.shadowRoot.querySelector("input");
        expect(input.getAttribute("placeholder")).toBe("Search");
        expect(input.getAttribute("type")).toBe("search");
        const wrapper = page.root.shadowRoot.querySelector(".search-field__wrapper");
        expect(wrapper.classList.contains("search-field__wrapper-s")).toBeFalsy();
        const searchIcon = page.root.shadowRoot.querySelector(".search-icon");
        expect(searchIcon).toBeTruthy();
        expect(searchIcon.getAttribute("icon")).toBe("search-16");
        const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon");
        expect(deleteIcon).toBeFalsy();
    });

    it("handles disabled state", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field disabled></ifx-search-field>`,
        });
        const searchField = page.root.shadowRoot.querySelector(".search-field");
        expect(searchField.hasAttribute("aria-disabled")).toBeTruthy();
        const input = page.root.shadowRoot.querySelector("input");
        expect(input.disabled).toBeTruthy();
    });

    it("renders with small size", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field size="s"></ifx-search-field>`,
        });
        const wrapper = page.root.shadowRoot.querySelector(".search-field__wrapper");
        expect(wrapper.classList.contains("search-field__wrapper-s")).toBeTruthy();
    });

    it("renders with custom placeholder", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field placeholder="Type something..."></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        expect(input.getAttribute("placeholder")).toBe("Type something...");
    });

    it("handles input events and updates value", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field></ifx-search-field>`,
        });
        const inputEventSpy = jest.fn();
        page.win.addEventListener("ifxInput", inputEventSpy);
        const input = page.root.shadowRoot.querySelector("input");
        input.value = "test query";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        expect(page.rootInstance.value).toBe("test query");
        expect(inputEventSpy).toHaveBeenCalled();
        const emittedEvent = inputEventSpy.mock.calls[0][0];
        expect(emittedEvent.detail).toBe("test query");
    });

    it("announces history results after the input receives focus", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-suggestions></ifx-search-field>`,
        });
        page.rootInstance.searchHistory = ["Frankfurt", "Stuttgart"];
        const input = page.root.shadowRoot.querySelector("input");
        input.dispatchEvent(new Event("focus"));
        await page.waitForChanges();
        const status = page.root.shadowRoot.querySelector(".suggestion-status");
        expect(status.textContent).toBe("");
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await page.waitForChanges();
        expect(status.textContent).toBe("2 results available");
    });

    it("shows delete icon when showDeleteIcon is true and value is not empty", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-delete-icon value="test"></ifx-search-field>`,
        });
        page.rootInstance.showDeleteIconInternalState = true;
        await page.waitForChanges();
        const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon");
        expect(deleteIcon).toBeTruthy();
        expect(deleteIcon.getAttribute("icon")).toBe("cRemove16");
    });

    it("handles delete icon click", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-delete-icon value="test"></ifx-search-field>`,
        });
        page.rootInstance.showDeleteIconInternalState = true;
        await page.waitForChanges();
        const inputEventSpy = jest.fn();
        page.win.addEventListener("ifxInput", inputEventSpy);
        const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon") as HTMLElement;
        expect(deleteIcon).toBeTruthy();
        const input = page.root.shadowRoot.querySelector("input");
        deleteIcon.click();
        await page.waitForChanges();
        expect(page.rootInstance.value).toBe("");
        expect(input.value).toBe("");
        expect(inputEventSpy).toHaveBeenCalled();
        const emittedEvent = inputEventSpy.mock.calls[0][0];
        expect(emittedEvent.detail).toBe("");
        const deleteIconAfterClick = page.root.shadowRoot.querySelector(".delete-icon");
        expect(deleteIconAfterClick).toBeFalsy();
    });

    it("does not show delete icon when value is empty", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-delete-icon="true" value=""></ifx-search-field>`,
        });
        await page.waitForChanges();
        const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon");
        expect(deleteIcon).toBeFalsy();
    });

    it("handles focus", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field></ifx-search-field>`,
        });
        const focusEventSpy = jest.fn();
        page.win.addEventListener("ifxFocus", focusEventSpy);
        expect(page.rootInstance.isFocused).toBeFalsy();
        const input = page.root.shadowRoot.querySelector("input");
        input.dispatchEvent(new Event("focus"));
        await page.waitForChanges();
        expect(page.rootInstance.isFocused).toBeTruthy();
        expect(focusEventSpy).toHaveBeenCalled();
        const wrapper = page.root.shadowRoot.querySelector(".search-field__wrapper");
        expect(wrapper.classList.contains("focused")).toBeTruthy();
    });

    it("watches value changes and updates input", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        page.root.value = "new value";
        await page.waitForChanges();
        expect(input.value).toBe("new value");
    });

    it("handles outside click to hide dropdown", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field></ifx-search-field>`,
        });
        page.rootInstance.showDropdown = true;
        await page.waitForChanges();
        page.rootInstance.inputElement = null;
        page.rootInstance.dropdownElement = null;
        page.rootInstance.wrapperElement = null;
        const outsideClickEvent = new MouseEvent("mousedown");
        Object.defineProperty(outsideClickEvent, "composedPath", {
            value: () => [document.body],
            writable: true,
        });
        document.dispatchEvent(outsideClickEvent);
        await page.waitForChanges();
        expect(page.rootInstance.showDropdown).toBeFalsy();
    });

    it("sets maxlength on input when provided", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field maxlength="10"></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        expect(input.getAttribute("maxlength")).toBe("10");
    });

    it("sets autocomplete attribute on input", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field autocomplete="off"></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        expect(input.getAttribute("autocomplete")).toBe("off");
    });

    it("announces suggestion count after asynchronous suggestion updates", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-suggestions></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        input.value = "t";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        const status = page.root.shadowRoot.querySelector(".suggestion-status");
        expect(status.textContent).toBe("");
        page.rootInstance.showDropdown = true;
        page.root.suggestions = [
            { id: "frankfurt", text: "Frankfurt" },
            { id: "stuttgart", text: "Stuttgart" },
        ];
        await page.waitForChanges();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await page.waitForChanges();
        expect(status.textContent).toBe("2 results available");
    });

    it("clears stale announcements before new suggestions arrive", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-suggestions></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        input.value = "t";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        page.rootInstance.showDropdown = true;
        page.root.suggestions = [
            { id: "frankfurt", text: "Frankfurt" },
            { id: "stuttgart", text: "Stuttgart" },
        ];
        await page.waitForChanges();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await page.waitForChanges();
        const status = page.root.shadowRoot.querySelector(".suggestion-status");
        expect(status.textContent).toBe("2 results available");
        page.rootInstance.showDropdown = false;
        page.root.suggestions = [];
        input.value = "te";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        expect(status.textContent).toBe("");
    });

    it("announces equal consecutive result counts again", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-suggestions></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        input.value = "t";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        page.rootInstance.showDropdown = true;
        page.root.suggestions = [
            { id: "frankfurt", text: "Frankfurt" },
            { id: "stuttgart", text: "Stuttgart" },
        ];
        await page.waitForChanges();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await page.waitForChanges();
        const status = page.root.shadowRoot.querySelector(".suggestion-status");
        expect(status.textContent).toBe("2 results available");
        page.rootInstance.showDropdown = false;
        page.root.suggestions = [];
        input.value = "te";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        expect(status.textContent).toBe("");
        page.rootInstance.showDropdown = true;
        page.root.suggestions = [
            { id: "test1", text: "Test 1" },
            { id: "test2", text: "Test 2" },
        ];
        await page.waitForChanges();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await page.waitForChanges();
        expect(status.textContent).toBe("2 results available");
    });

    it("cancels pending announcement when dropdown closes", async () => {
        const page = await newSpecPage({
            components: [SearchField],
            html: `<ifx-search-field show-suggestions></ifx-search-field>`,
        });
        const input = page.root.shadowRoot.querySelector("input");
        input.value = "t";
        input.dispatchEvent(new Event("input"));
        await page.waitForChanges();
        page.rootInstance.showDropdown = true;
        page.root.suggestions = [{ id: "frankfurt", text: "Frankfurt" }];
        await page.waitForChanges();
        page.rootInstance.hideDropdown();
        await page.waitForChanges();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await page.waitForChanges();
        const status = page.root.shadowRoot.querySelector(".suggestion-status");
        expect(status.textContent).toBe("");
    });
});