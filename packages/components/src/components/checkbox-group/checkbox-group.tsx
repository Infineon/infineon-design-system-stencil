import { Component, State, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
  formAssociated: true
})

export class CheckboxGroup {
  private errorStates: Map<HTMLElement, boolean> = new Map();

  @Element() el: HTMLElement;
  @Prop() alignment: 'horizontal' | 'vertical' = 'vertical';
  @Prop() size: string;
  @Prop() showGroupLabel: boolean;
  @Prop() groupLabelText: string = 'Group Label Text';
  @Prop() showCaption: boolean;
  @Prop() captionText: string;
  @Prop() showCaptionIcon: boolean;
  @State() hasErrors: boolean = false;

  @Listen('ifxError')
  handleCheckboxError(event: CustomEvent) {
    const checkbox = event.target as HTMLElement;

    if (checkbox.tagName === 'ifx-checkbox') {
      this.errorStates.set(checkbox, event.detail);
      this.updateHasErrors();
    }
  }

  componentWillLoad() {
    this.initializeState();
  }

  handleSlotChange = () => {
    this.initializeState();
  };

  private initializeState() {
    this.errorStates.clear();
    const checkboxes = Array.from(this.el.querySelectorAll('ifx-checkbox'));
    checkboxes.forEach((checkbox) => {
      if (!this.errorStates.has(checkbox)) {
        this.errorStates.set(checkbox, (checkbox as any).error || false);
      }
    });
    this.updateHasErrors();
  }

  private updateHasErrors() {
    this.hasErrors = Array.from(this.errorStates.values()).some((error) => error);
  }

  render() {
    return (
      <div class='checkbox-group-container'>
        {this.showGroupLabel ? <div class='group-label'>{this.groupLabelText} *</div> : ''}
        <div class={`checkbox-group ${this.alignment} ${this.size}`}>
          <slot onSlotchange={this.handleSlotChange}></slot>
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
