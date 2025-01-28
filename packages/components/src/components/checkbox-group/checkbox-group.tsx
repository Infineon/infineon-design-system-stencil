import { Component, State, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
  formAssociated: true
})

export class CheckboxGroup {
  @Element() el: HTMLElement;
  @Prop() alignment: 'horizontal' | 'vertical' = 'vertical';
  @Prop() size: string;
  @Prop() showGroupLabel: boolean;
  @Prop() groupLabelText: string = 'Group Label Text';
  @Prop() showCaption: boolean;
  @Prop() captionText: string;
  @Prop() showCaptionIcon: boolean;
  @State() hasErrors: boolean = false;

  private checkboxes: HTMLIfxCheckboxElement[] = [];

  @Listen('ifxError')
  handleCheckboxError(event: CustomEvent) {
    const targetCheckbox = event.target as HTMLIfxCheckboxElement;

    if (targetCheckbox) {
      this.hasErrors = event.detail;
      this.checkboxes.forEach((checkbox) => {
        if (event.target !== targetCheckbox) {
          checkbox.error = event.detail;
        }
      });
    }
  }

  componentWillLoad() {
    this.initialize();
  }

  handleSlotChange = () => {
    this.initialize();
  };

  private initialize() {
    this.checkboxes = [];
    this.checkboxes = Array.from(this.el.querySelectorAll('ifx-checkbox'));
    let anyErrors = this.checkboxes.some((checkbox) => checkbox.error);

    if (anyErrors) {
      this.hasErrors = true;
      this.checkboxes.forEach((checkbox) => {
        checkbox.error = true;
      });
    }
    else {
      this.hasErrors = false;
      this.checkboxes.forEach((checkbox) => {
        checkbox.error = false;
      });
    }
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
