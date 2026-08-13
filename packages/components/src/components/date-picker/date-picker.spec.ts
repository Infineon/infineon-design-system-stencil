import { newSpecPage } from "jest-stencil-runner";
import { DatePicker } from "./date-picker";

// Define interface for date picker events
interface DatePickerEventData {
	day: number;
	month: number;
	year: number;
	hours?: number;
	minutes?: number;
}

// Mock the ElementInternals API with proper typing
//const mockSetFormValue = jest.fn();
// class MockElementInternals {
//   form = null;
//   labels = null;
//   //setFormValue = mockSetFormValue;
//   //setValidity() {}
//   checkValidity() { return true; }
//   reportValidity() { return true; }
// }

// Cast it to any to bypass TypeScript validation
//(global as any).ElementInternals = MockElementInternals;

describe("ifx-date-picker", () => {
	beforeEach(() => {
		// Clear mock calls between tests
		//mockSetFormValue.mockClear();
	});

	// Other tests...

	it("should emit ifxDate event on date change", async () => {
		const page = await newSpecPage({
			components: [DatePicker],
			html: `<ifx-date-picker></ifx-date-picker>`,
		});

		const datePicker = page.rootInstance;

		// Manually assign the mock internals to the component instance
		//datePicker.internals = new MockElementInternals();

		const spy = jest.spyOn(datePicker.ifxDate, "emit");

		// Simulate date selection
		const dateStr = "2023-01-15";
		const event = { target: { value: dateStr } };
		datePicker.getDate(event);

		expect(spy).toHaveBeenCalled();
		//expect(mockSetFormValue).toHaveBeenCalled();

		// Verify the emitted event data with proper typing
		const eventData = spy.mock.calls[0][0] as DatePickerEventData;
		expect(eventData.day).toBe(15);
		expect(eventData.month).toBe(1);
		expect(eventData.year).toBe(2023);
	});

	it("should emit ifxDate event with time for datetime-local type", async () => {
		const page = await newSpecPage({
			components: [DatePicker],
			html: `<ifx-date-picker type="datetime-local"></ifx-date-picker>`,
		});

		const datePicker = page.rootInstance;

		// Manually assign the mock internals to the component instance
		//datePicker.internals = new MockElementInternals();

		const spy = jest.spyOn(datePicker.ifxDate, "emit");

		// Simulate datetime selection
		const dateTimeStr = "2023-01-15T14:30";
		const event = { target: { value: dateTimeStr } };
		datePicker.getDate(event);

		expect(spy).toHaveBeenCalled();

		// Verify the emitted event data includes time with proper typing
		const eventData = spy.mock.calls[0][0] as DatePickerEventData;
		expect(eventData.day).toBe(15);
		expect(eventData.month).toBe(1);
		expect(eventData.year).toBe(2023);
		expect(eventData.hours).toBe(14);
		expect(eventData.minutes).toBe(30);
	});

	it("should keep the new value and emit only the new date when selecting after a prefilled value", async () => {
		const page = await newSpecPage({
			components: [DatePicker],
			html: `<ifx-date-picker value="2026-05-18"></ifx-date-picker>`,
		});

		const datePicker = page.root as HTMLIfxDatePickerElement;
		const datePickerInstance = page.rootInstance;
		const spy = jest.spyOn(datePickerInstance.ifxDate, "emit");

		const input = datePicker.shadowRoot.querySelector(".date__picker-input") as HTMLInputElement;
		input.value = "2026-05-31";
		input.dispatchEvent(new Event("change"));
		await page.waitForChanges();

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenLastCalledWith({ day: 31, month: 5, year: 2026 });
		expect(datePicker.value).toBe("2026-05-31");
	});
});
