import { Component, h, Prop, Element, } from '@stencil/core';

@Component({
    tag: 'ifx-radio-button-group',
    styleUrl: 'radio-button-group.scss',
    shadow: true,
    formAssociated: true
})

export class RadioButtonGroup {
    @Element() el: HTMLElement;
    @Prop() alignment: 'horizontal' | 'vertical' = 'vertical';
    @Prop() size: string;
    @Prop() showGroupLabel: boolean;
    @Prop() groupLabelText: string = 'Group Label Text';
    @Prop() showCaption: boolean;
    @Prop() captionText: string;
    @Prop() showCaptionIcon: boolean;
    @Prop() hasErrors: boolean = false;
    private errorStates: Map<HTMLElement, boolean> = new Map();

    componentWillLoad() {
        this.initializeState();
    }

    handleSlotChange = () => {
        this.initializeState();
    };

    private initializeState() {
        this.errorStates.clear();
        const radioButtons = Array.from(this.el.querySelectorAll('ifx-radio-button'));
        radioButtons.forEach((radioButton) => {
            if (!this.errorStates.has(radioButton)) {
                this.errorStates.set(radioButton, (radioButton as any).error || false);
            }
        });
        this.updateHasErrors();
    }
    private updateHasErrors() {
        this.hasErrors = Array.from(this.errorStates.values()).some((error) => error);
    }

    render() {
        return (
            <div class='radio-button-group-container'>
                {this.showGroupLabel ? <div class='group-label'>{this.groupLabelText} *</div> : ''}
                <div class={`radio-button-group ${this.alignment} ${this.size}`}>
                    <slot onSlotchange={this.handleSlotChange} ></slot>
                </div>
                {this.showCaption ? (
                    <div class={`caption ${this.hasErrors ? 'error' : 'default'}`}>
                        {this.showCaptionIcon ? <div class='caption-icon'><ifx-icon icon="c-info-16">
                        </ifx-icon></div> : ''}
                        <div class='caption-text'>{this.captionText}</div>
                    </div>) : ''}
            </div>
        );
    }
}