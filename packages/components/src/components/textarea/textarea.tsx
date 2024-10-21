import { h, Component, Host, Prop } from "@stencil/core"

@Component({
	formAssociated: true,
	shadow: true,
	styleUrl: 'textarea.scss',
	tag: 'ifx-textarea'
})

export class TextArea {

	private inputId = `ifx-textarea-${textareaId++}`;

	@Prop() caption: string;
	@Prop() cols: number;
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

	render() {
		return (
			<Host class='wrapper'>
				<label class='wrapper__label' htmlFor={ this.inputId }>
					{ this.label?.trim() }
				</label>

				<div class='wrapper__textarea'>
					<textarea
						id={ this.inputId }
						style={ {resize: this.resize} }
						name={ this.name ? this.name : this.inputId}
						cols={ this.cols }
						rows={ this.rows }
						maxlength={ this.maxlength }
						minlength={ this.minlength }
						wrap={ this.wrap }
						readonly={ this.readOnly }
						placeholder={ this.placeholder }
						value={ this.value }
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