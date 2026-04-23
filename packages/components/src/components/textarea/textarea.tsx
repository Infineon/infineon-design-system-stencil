import {
	AttachInternals,
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	Method,
	Prop,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	formAssociated: true,
	shadow: true,
	styleUrl: "textarea.scss",
	tag: "ifx-textarea",
})
export class TextArea {
	private inputId: string = `ifx-textarea-${++textareaId}`;
	private textareaElement: HTMLTextAreaElement;
	private initialValue = "";

	@AttachInternals() internals: ElementInternals;

	/** Fired when the textarea value changes. */
	@Event() ifxInput: EventEmitter<string>;
	@Element() el: HTMLIfxTextareaElement;
	/** Helper text shown below the textarea. */
	@Prop() readonly caption: string;
	/** Number of visible text columns. */
	@Prop() readonly cols: number;
	/** If true, the textarea is disabled and not interactive. */
	@Prop() readonly disabled: boolean = false;
	/** If true, shows the textarea in an error state. */
	@Prop() readonly error: boolean = false;
	/** Label text shown above the textarea. */
	@Prop() readonly label: string;
	/** Maximum number of characters allowed. */
	@Prop() readonly maxlength: number;
	/** Name attribute used when submitting the textarea in a form. */
	@Prop({ reflect: true }) readonly name: string;
	/** Placeholder text shown when the textarea is empty. */
	@Prop() readonly placeholder: string;
	/** Whether a value is required (used for validation). */
	@Prop() readonly required: boolean = false;
	/** If true, the textarea is read-only but focusable. */
	@Prop() readonly readOnly: boolean = false;
	/** How the textarea can be resized by the user. */
	@Prop() readonly resize: "both" | "horizontal" | "vertical" | "none" = "both";
	/** Number of visible text rows. */
	@Prop() readonly rows: number;
	/** Current value of the textarea (can be updated programmatically). */
	@Prop({ mutable: true }) value: string = "";
	/** How text wrapping is handled in the textarea. */
	@Prop() readonly wrap: "hard" | "soft" | "off" = "soft";
	/** If 'true', the textarea stretches to fill the available width. */
	@Prop({ reflect: true }) readonly fullWidth: string = "false";

	@Watch("value")
	valueWatcher(newValue: string) {
		const normalizedValue = newValue ?? "";
		if (this.textareaElement && normalizedValue !== this.textareaElement.value) {
			this.textareaElement.value = normalizedValue;
		}
		this.syncFormValue(normalizedValue);
	}

	private syncFormValue(value: string = this.value ?? "") {
		this.internals.setFormValue(value);
	}

	/** Resets the textarea value to its initial state. */
	@Method()
	async reset() {
		this.resetTextarea();
	}

	private handleComponentWidth() {
		const textareaWrapper =
			this.el.shadowRoot.querySelector(".wrapper__textarea");
		const isFullWidth = this.fullWidth.toLowerCase() === "true";

		if (isFullWidth) {
			textareaWrapper.classList.add("fullWidth");
		} else if (textareaWrapper.classList.contains("fullWidth")) {
			textareaWrapper.classList.remove("fullWidth");
		}
	}

	componentDidRender() {
		this.handleComponentWidth();
	}

	componentWillLoad() {
		this.initialValue = this.value ?? "";
		this.syncFormValue(this.initialValue);
	}

	formResetCallback(): void {
		this.resetTextarea(this.initialValue);
	}

	private handleOnInput(e: InputEvent): void {
		this.value = (e.target as HTMLTextAreaElement).value;
		this.ifxInput.emit(this.value);
	}

	private resetTextarea(value: string = "") {
		this.value = value;
		if (this.textareaElement) {
			this.textareaElement.value = value;
		}
		this.syncFormValue(value);
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-textarea", await framework);
		}
	}

	render() {
		return (
			<Host
				class={`wrapper--${this.error ? "error" : ""} wrapper--${this.disabled && !this.error ? "disabled" : ""}`}
			>
				<label class="wrapper__label" htmlFor={this.inputId}>
					{this.label?.trim()}
					{this.required && (
						<span class={`required ${this.error ? "error" : ""}`}>*</span>
					)}
				</label>

				<div class="wrapper__textarea">
					<textarea
						ref={(el) => (this.textareaElement = el)}
						aria-label="a textarea"
						aria-value={this.value}
						aria-disabled={this.disabled && !this.error}
						id={this.inputId}
						style={{ resize: this.resize }}
						cols={this.cols}
						rows={this.rows}
						maxlength={this.maxlength}
						wrap={this.wrap}
						disabled={this.disabled && !this.error}
						readonly={this.readOnly}
						placeholder={this.placeholder}
						value={this.value}
						onInput={(e) => this.handleOnInput(e)}
					/>
				</div>

				{this.caption?.trim() && (
					<div class="wrapper__caption">{this.caption.trim()}</div>
				)}
			</Host>
		);
	}
}

let textareaId = 0;
