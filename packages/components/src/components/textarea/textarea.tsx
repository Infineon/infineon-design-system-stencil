import { h, AttachInternals, Component, Event, EventEmitter, Host, Method, Prop } from "@stencil/core"

@Component({
	formAssociated: true,
	shadow: true,
	styleUrl: 'textarea.scss',
	tag: 'ifx-textarea'
})

export class TextArea {

	private inputId: string = `ifx-textarea-${++textareaId}`;

	@AttachInternals() internals: ElementInternals;

	@Event() ifxInput: EventEmitter<String>;

	@Prop() caption: string;
	@Prop() cols: number;
	@Prop() disabled: boolean = false;
	@Prop() error: boolean = false;
	@Prop() label: string;
	@Prop() maxlength: number;
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
		this.internals.setFormValue("");
	}
	
	handleOnInput(e: InputEvent): void {
		this.value = (e.target as HTMLTextAreaElement).value;
		this.internals.setFormValue(this.value);
		this.ifxInput.emit(this.value);
	}

	resetTextarea() {
		this.value = '';
		this.internals.setValidity({});
		this.internals.setFormValue('');
	}

	componentWillLoad() {
		this.internals.setFormValue(this.value);
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
						aria-label='a textarea'
						aria-value={ this.value }
						aria-disabled={ this.disabled }
						id={ this.inputId }
						style={ {resize: this.resize} }
						name={ this.name ? this.name : this.inputId}
						cols={ this.cols }
						rows={ this.rows }
						maxlength={ this.maxlength }
						wrap={ this.wrap }
						disabled={ this.disabled }
						readonly={ this.readOnly }
						placeholder={ this.placeholder }
						value={ this.value }
						onInput={ (e) => this.handleOnInput(e) }
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