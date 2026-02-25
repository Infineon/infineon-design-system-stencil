import {
  AttachInternals,
  Component,
  Element,
  Event,
  State,
  Watch,
  Method,
  type EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
  tag: "ifx-date-picker",
  styleUrl: "date-picker.scss",
  shadow: true,
  // formAssociated: true,
})
export class DatePicker {
  private inputId: string = `ifx-date-picker-${++datePickerId}`;

  @Element() el: HTMLIfxDatePickerElement;
  /**
   * Size of the date picker input
   */
  @Prop() readonly size: string = "s";

  /**
   * Error state of the date picker
   */
  @Prop() readonly error: boolean = false;

  /**
   * Success state of the date picker
   */
  @Prop() readonly success: boolean = false;

  /**
   * Whether the date picker is disabled
   */
  @Prop() readonly disabled: boolean = false;

  /**
   * Aria label for the date picker input
   */
  @Prop() readonly ariaLabelText: string | null;

  /**
   * The value of the date picker
   */
  @Prop() readonly value: string;

  /**
   * Type of date input (date, datetime-local, etc.)
   */
  @Prop() readonly type: string = "date";

  /**
   * Maximum allowed date
   */
  @Prop() readonly max: string;

  /**
   * Minimum allowed date
   */
  @Prop() readonly min: string;

  /**
   * Whether the date picker is required
   */
  @Prop() readonly required: boolean = false;

  /**
   * Label text for the date picker
   */
  @Prop() readonly label: string;

  /**
   * Caption text displayed below the date picker
   */
  @Prop() readonly caption: string;

  /**
   * Autocomplete attribute for the input
   */
  @Prop() readonly autocomplete: string = "on";

  /**
   * Internal state to manage the current value
   */
  @State() private internalValue: string;

  @AttachInternals() internals: ElementInternals;

  /**
   * Event emitted when date value changes
   */
  @Event() ifxDate: EventEmitter;

  @Watch("value")
  handleValueChange(newValue: string) {
    this.internalValue = newValue;
  }

  /**
   * Clears the date picker value
   */
  @Method()
  async clear() {
    this.internalValue = "";
    const input = this.getInput();
    if (input) {
      input.classList.remove("has-value");
    }
    if (this.type === "datetime-local") {
      this.ifxDate.emit({
        day: null,
        month: null,
        year: null,
        hours: null,
        minutes: null,
      });
    } else {
      this.ifxDate.emit({ day: null, month: null, year: null });
    }
  }

  private getInput() {
    const input = this.el.shadowRoot.querySelector(
      ".date__picker-input",
    ) as HTMLInputElement;
    return input;
  }

  private getDate(e) {
    const inputValue = e.target.value;
    this.internalValue = inputValue;
    const selectedDate = new Date(inputValue);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();

    if (!inputValue) {
      //this.internals.setFormValue(null);

      if (this.type === "datetime-local") {
        const hours = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();
        this.ifxDate.emit({ day, month, year, hours, minutes });
      } else {
        this.ifxDate.emit({ day, month, year });
      }
      return;
    }

    const input = this.getInput();
    input.classList.add("has-value");

    //this.internals.setFormValue(selectedDate.toISOString().substring(0,10))
    if (this.type === "datetime-local") {
      const hours = selectedDate.getHours();
      const minutes = selectedDate.getMinutes();
      this.ifxDate.emit({ day, month, year, hours, minutes });
    } else {
      this.ifxDate.emit({ day, month, year });
    }
  }

  private handleIconKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;
    const browserIsFirefox = this.isFirefox();
    const input = this.getInput();
    if (e.key === "Enter" && browserIsFirefox) {
      e.preventDefault();
      if (input.showPicker) {
        input.showPicker();
      }
    }
  }

  private isFirefox() {
    const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
    return isFirefox;
  }

  private setFireFoxClasses() {
    const browserIsFirefox = this.isFirefox();
    const input = this.getInput();
    const iconWrapper = this.el.shadowRoot.querySelector(".icon__wrapper");

    if (browserIsFirefox) {
      input.classList.add("firefox__classes");
      iconWrapper.classList.add("firefox__classes");
    } else if (input.classList.contains("firefox__classes")) {
      input.classList.remove("firefox__classes");
      iconWrapper.classList.remove("firefox__classes");
    }
  }

  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent("ifx-date-picker", await framework);
    }
    this.setFireFoxClasses();
  }

  componentWillUpdate() {
    if (this.value) {
      this.getDate({ target: { value: this.value } });
    }
  }

  componentWillLoad() {
    this.internalValue = this.value;
  }

  // formResetCallback() {
  //   this.internals.setFormValue(null);
  // }

  render() {
    return (
      <div
        class={`date__picker-container ${this.error ? "error" : ""} ${
          this.disabled ? "disabled" : ""
        }`}
      >
        <label class="label__wrapper" htmlFor={this.inputId}>
          {this.label?.trim()}
          <span
            class={`asterisk ${this.required ? "required" : ""} ${
              this.error ? "error" : ""
            }`}
          >
            *
          </span>
        </label>

        <div
          class={`input__wrapper ${this.size === "l" ? "large" : "small"} ${
            this.disabled ? "disabled" : ""
          }`}
        >
          <input
            type={this.type}
            autocomplete={this.autocomplete}
            class={`date__picker-input ${this.error ? "error" : ""} ${
              this.success ? "success" : ""
            }`}
            disabled={this.disabled ? true : undefined}
            aria-invalid={this.error ? true : undefined}
            aria-label={this.ariaLabelText}
            max={this.max}
            min={this.min}
            value={this.internalValue}
            required={this.required}
            onChange={(e) => this.getDate(e)}
          />
          <div
            class="icon__wrapper"
            tabIndex={this.isFirefox() ? 0 : undefined}
            onKeyDown={(e) => this.handleIconKeyDown(e as KeyboardEvent)}
          >
            <ifx-icon icon="calendar16" aria-hidden="true"></ifx-icon>
          </div>
        </div>

        {this.caption?.trim() && (
          <div class="caption__wrapper">{this.caption.trim()}</div>
        )}
      </div>
    );
  }
}

let datePickerId = 0;
