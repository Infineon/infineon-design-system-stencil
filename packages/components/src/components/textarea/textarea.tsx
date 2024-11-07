import { Method } from "@stencil/core";
import { h, Component, Host, Prop, Event, EventEmitter, AttachInternals } from "@stencil/core"

@Component({
	formAssociated: true,
	shadow: true,
	styleUrl: 'textarea.scss',
	tag: 'ifx-textarea'
})

export class TextArea {

	private inputId = `ifx-textarea-${++textareaId}`;
	// private textareaRef: HTMLTextAreaElement;

	@AttachInternals() internals: ElementInternals;

	@Event() ifxChange: EventEmitter<{oldValue: String, newValue: String}>;
	@Event() ifxInput: EventEmitter<String>;

	@Prop() caption: string;
	@Prop() cols: number;
	@Prop() disabled: boolean = false;
	@Prop() error: boolean = false;
	@Prop() label: string;
	@Prop() maxlength: number;
	@Prop() minlength: number;
	@Prop() name: string;
	@Prop() placeholder: string;
	@Prop() readOnly: boolean = false;
	@Prop() resize: 'both' | 'horizontal' | 'vertical' | 'none' = 'both';
	@Prop() rows: number;
	@Prop({ mutable: true }) value: string;
	@Prop() wrap: 'hard' | 'soft' | 'off' = 'soft';

	@Method()
	async reset() {
		this.resetTextarea();
	}
	
	formResetCallback(): void {
		this.resetTextarea();
	}
	
	handleOnChange(e: Event): void {
		const value = (e.target as HTMLTextAreaElement).value;
		this.value = value;
		this.internals.setFormValue(this.value)
		this.ifxChange.emit({oldValue: value, newValue: this.value});
	}
	
	handleOnInput(e: InputEvent): void {
		this.ifxInput.emit((e.target as HTMLTextAreaElement).value)
	}

	resetTextarea() {
		this.value = '';
		this.internals.setValidity({});
		this.internals.setFormValue('');
	}

	render() {
		return (
			<Host class={`wrapper 
						wrapper--${this.error ? 'error' : ''}
						wrapper--${this.disabled ? 'disabled': ''}`}>
				<label class='wrapper__label' htmlFor={ this.inputId }>
					{ this.label?.trim() }
				</label>

				<div class='wrapper__textarea'>
					<textarea
						// ref={ (el) => (this.textareaRef = el) }
						id={ this.inputId }
						style={ {resize: this.resize} }
						name={ this.name ? this.name : this.inputId}
						cols={ this.cols }
						rows={ this.rows }
						maxlength={ this.maxlength }
						minlength={ this.minlength }
						wrap={ this.wrap }
						disabled={ this.disabled }
						readonly={ this.readOnly }
						placeholder={ this.placeholder }
						value={ this.value }
						onInput={ (e) => this.handleOnInput(e) }
						onChange={ (e) => this.handleOnChange(e) }
					/>
				</div>

				{ this.caption?.trim() && (
					<div class='wrapper__caption'>
						{ this.caption.trim() }
					</div> 
				)}
			</Host>
		);
	}
}

let textareaId = 0;