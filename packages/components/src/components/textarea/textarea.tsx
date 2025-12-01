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
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	// formAssociated: true,
	shadow: true,
	styleUrl: "textarea.scss",
	tag: "ifx-textarea",
})
export class TextArea {
	private inputId: string = `ifx-textarea-${++textareaId}`;

	@AttachInternals() internals: ElementInternals;

	@Event() ifxInput: EventEmitter<string>;
	@Element() el;
	@Prop() caption: string;
	@Prop() cols: number;
	@Prop() disabled: boolean = false;
	@Prop() error: boolean = false;
	@Prop() label: string;
	@Prop() maxlength: number;
	@Prop() name: string;
	@Prop() placeholder: string;
	@Prop() required: boolean = false;
	@Prop() readOnly: boolean = false;
	@Prop() resize: "both" | "horizontal" | "vertical" | "none" = "both";
	@Prop() rows: number;
	@Prop({ mutable: true }) value: string;
	@Prop() wrap: "hard" | "soft" | "off" = "soft";
	@Prop({ reflect: true }) fullWidth: string = "false";

	@Method()
	async reset() {
		this.resetTextarea();
	}

	handleComponentWidth() {
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

	formResetCallback(): void {
		this.resetTextarea();
		//this.internals.setFormValue("");
	}

	handleOnInput(e: InputEvent): void {
		this.value = (e.target as HTMLTextAreaElement).value;
		//this.internals.setFormValue(this.value);
		this.ifxInput.emit(this.value);
	}

	resetTextarea() {
		this.value = "";
		//this.internals.setValidity({});
		//this.internals.setFormValue('');
	}

	// componentWillLoad() {
	// 	this.internals.setFormValue(this.value);
	// }

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
						aria-label="a textarea"
						aria-value={this.value}
						aria-disabled={this.disabled && !this.error}
						id={this.inputId}
						style={{ resize: this.resize }}
						name={this.name ? this.name : this.inputId}
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
