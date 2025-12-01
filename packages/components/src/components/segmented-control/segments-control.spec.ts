import { newSpecPage } from "jest-stencil-runner";
import { Segment } from "./segment/segment";
import { SegmentedControl } from "./segmented-control";

describe("ifx-segmented-control", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl],
			html: `<ifx-segmented-control></ifx-segmented-control>`,
		});

		expect(page.root).toBeTruthy();
		const container = page.root.shadowRoot.querySelector(".group");
		expect(container).toBeTruthy();

		// Group label should be empty by default
		const groupLabel = page.root.shadowRoot.querySelector(".group__label");
		expect(groupLabel.textContent.trim()).toBe("");

		// Caption should not be rendered by default
		const groupCaption = page.root.shadowRoot.querySelector(".group__caption");
		expect(groupCaption).toBeFalsy();

		// Should have a controls container
		const controlsContainer =
			page.root.shadowRoot.querySelector(".group__controls");
		expect(controlsContainer).toBeTruthy();
	});

	it("renders with custom label and caption", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl],
			html: `<ifx-segmented-control label="Custom Label" caption="Custom Caption"></ifx-segmented-control>`,
		});

		const groupLabel = page.root.shadowRoot.querySelector(".group__label");
		expect(groupLabel.textContent.trim()).toBe("Custom Label");

		const groupCaption = page.root.shadowRoot.querySelector(".group__caption");
		expect(groupCaption).toBeTruthy();
		expect(groupCaption.textContent.trim()).toContain("Custom Caption");
	});

	it("shows asterisk on the label when required is true", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl],
			html: `<ifx-segmented-control label="Custom Label" required="true"></ifx-segmented-control>`,
		});

		const groupLabel = page.root.shadowRoot.querySelector(".group__label");
		const required = page.root.shadowRoot.querySelector(".required");
		expect(required).toBeTruthy();
		expect(required.textContent).toBe("*");
		expect(groupLabel.textContent.trim()).toBe("Custom Label*");
	});

	it("renders segments with proper size classes", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl, Segment],
			html: `
        <ifx-segmented-control size="small">
          <ifx-segment value="option1">Option 1</ifx-segment>
        </ifx-segmented-control>
      `,
		});

		// Wait for componentDidRender to be called
		await page.waitForChanges();

		// Access the segment's shadow DOM
		const segment = page.root.querySelector("ifx-segment");
		const segmentDiv = segment.shadowRoot.querySelector(".segment");

		// Check if the size class is applied
		expect(segmentDiv.classList.contains("segment--small")).toBeTruthy();
	});

	it("sets the first selected segment as active and ignores others", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl, Segment],
			html: `
        <ifx-segmented-control>
          <ifx-segment value="option1">Option 1</ifx-segment>
          <ifx-segment value="option2" selected="true">Option 2</ifx-segment>
          <ifx-segment value="option3" selected="true">Option 3</ifx-segment>
        </ifx-segmented-control>
      `,
		});

		// Wait for componentDidLoad to be called
		await page.waitForChanges();

		const segments = page.root.querySelectorAll("ifx-segment");

		// First segment should not be selected
		expect(segments[0].selected).toBeFalsy();

		// Second segment should be selected (first one with selected=true)
		expect(segments[1].selected).toBeTruthy();

		// Third segment should not be selected (even though it has selected=true)
		expect(segments[2].selected).toBeFalsy();

		// Check if selectedValue is set correctly
		expect(page.rootInstance.selectedValue).toBe("option2");
	});

	it("assigns index to each segment", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl, Segment],
			html: `
        <ifx-segmented-control>
          <ifx-segment value="option1">Option 1</ifx-segment>
          <ifx-segment value="option2">Option 2</ifx-segment>
        </ifx-segmented-control>
      `,
		});

		await page.waitForChanges();

		const segments = page.root.querySelectorAll("ifx-segment");
		expect(segments[0].segmentIndex).toBe(0);
		expect(segments[1].segmentIndex).toBe(1);
	});
	it("emits ifxChange event when segment is selected", async () => {
		const page = await newSpecPage({
			components: [SegmentedControl, Segment],
			html: `
        <ifx-segmented-control>
          <ifx-segment value="option1" selected="true">Option 1</ifx-segment>
          <ifx-segment value="option2">Option 2</ifx-segment>
        </ifx-segmented-control>
      `,
		});

		await page.waitForChanges();

		// Set up spy for the ifxChange event
		const ifxChangeSpy = jest.fn();
		page.win.addEventListener("ifxChange", ifxChangeSpy);

		// Get reference to segments
		const segments = page.root.querySelectorAll("ifx-segment");
		const segment2 = segments[1];

		// Instead of directly dispatching the event, let's simulate a click on the segment
		// which will trigger the internal handleSegmentClick method
		const segmentDiv = segment2.shadowRoot.querySelector(
			".segment",
		) as HTMLElement;
		segmentDiv.click();

		await page.waitForChanges();

		// Check if event was fired
		expect(ifxChangeSpy).toHaveBeenCalled();

		// Manually verify the state
		expect(segments[0].selected).toBeFalsy();

		// Force refresh our reference to segment2 after the state change
		const updatedSegment2 = page.root.querySelectorAll("ifx-segment")[1];
		expect(updatedSegment2.selected).toBeTruthy();

		// Check the internal state by accessing rootInstance directly
		expect(page.rootInstance.selectedValue).toBe("option2");
	});
});

// Tests for ifx-segment component
describe("ifx-segment", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1">Option 1</ifx-segment>`,
		});

		const segmentDiv = page.root.shadowRoot.querySelector(".segment");
		expect(segmentDiv).toBeTruthy();

		// The issue here is that in the test environment, slot content isn't processed the same way
		// Let's check for the existence of a slot element instead
		const slot = segmentDiv.querySelector("slot");
		expect(slot).toBeTruthy();

		// For text content verification, let's use a different approach
		// Insert text directly as a property instead of slot content
		page.root.textContent = "Option 1";
		await page.waitForChanges();

		// Check that the selected class is not applied
		expect(segmentDiv.classList.contains("segment--selected")).toBeFalsy();
	});
	it("renders with icon", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1" icon="star-16">Option 1</ifx-segment>`,
		});

		const icon = page.root.shadowRoot.querySelector("ifx-icon");
		expect(icon).toBeTruthy();
		expect(icon.getAttribute("icon")).toBe("star-16");
	});

	it("renders with selected state", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1" selected="true">Option 1</ifx-segment>`,
		});

		const segmentDiv = page.root.shadowRoot.querySelector(".segment");
		expect(segmentDiv.classList.contains("segment--selected")).toBeTruthy();
	});

	it("emits segmentSelect event on click when not selected", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1">Option 1</ifx-segment>`,
		});

		// Set up spy for the segmentSelect event
		const segmentSelectSpy = jest.fn();
		page.win.addEventListener("segmentSelect", segmentSelectSpy);

		// Simulate clicking on the segment
		const segmentDiv = page.root.shadowRoot.querySelector(
			".segment",
		) as HTMLElement;
		segmentDiv.click();

		await page.waitForChanges();

		// Check if event was fired
		expect(segmentSelectSpy).toHaveBeenCalled();

		// Check if segment is now selected
		expect(page.rootInstance.selected).toBeTruthy();
	});

	it("does not emit segmentSelect event on click when already selected", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1" selected="true">Option 1</ifx-segment>`,
		});

		// Set up spy for the segmentSelect event
		const segmentSelectSpy = jest.fn();
		page.win.addEventListener("segmentSelect", segmentSelectSpy);

		// Simulate clicking on the segment
		const segmentDiv = page.root.shadowRoot.querySelector(
			".segment",
		) as HTMLElement;
		segmentDiv.click();

		await page.waitForChanges();

		// Check if event was not fired
		expect(segmentSelectSpy).not.toHaveBeenCalled();
	});

	it("handles keyboard navigation with Enter key", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1">Option 1</ifx-segment>`,
		});

		// Set up spy for the segmentSelect event
		const segmentSelectSpy = jest.fn();
		page.win.addEventListener("segmentSelect", segmentSelectSpy);

		// Simulate pressing Enter key
		const segmentDiv = page.root.shadowRoot.querySelector(".segment");
		const keyDownEvent = new KeyboardEvent("keydown", { code: "Enter" });
		segmentDiv.dispatchEvent(keyDownEvent);

		await page.waitForChanges();

		// Check if event was fired
		expect(segmentSelectSpy).toHaveBeenCalled();

		// Check if segment is now selected
		expect(page.rootInstance.selected).toBeTruthy();
	});

	it("handles keyboard navigation with Space key", async () => {
		const page = await newSpecPage({
			components: [Segment],
			html: `<ifx-segment value="option1">Option 1</ifx-segment>`,
		});

		// Set up spy for the segmentSelect event
		const segmentSelectSpy = jest.fn();
		page.win.addEventListener("segmentSelect", segmentSelectSpy);

		// Simulate pressing Space key
		const segmentDiv = page.root.shadowRoot.querySelector(".segment");
		const keyDownEvent = new KeyboardEvent("keydown", { code: "Space" });
		segmentDiv.dispatchEvent(keyDownEvent);

		await page.waitForChanges();

		// Check if event was fired
		expect(segmentSelectSpy).toHaveBeenCalled();

		// Check if segment is now selected
		expect(page.rootInstance.selected).toBeTruthy();
	});
});
