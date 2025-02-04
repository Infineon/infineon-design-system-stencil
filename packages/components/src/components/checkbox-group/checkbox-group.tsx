import { Component, State, Prop, h, Element, Watch } from '@stencil/core';

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
  @Prop() error: boolean;
  @Prop() showCaptionIcon: boolean;
  @State() internalError: boolean = false;

  private checkboxes: HTMLIfxCheckboxElement[] = [];

  componentWillLoad() {
    this.checkboxes = Array.from(this.el.querySelectorAll('ifx-checkbox'));
    this.updateErrorStateAndCheckboxes(this.error);
  }

  @Watch('error')
  handleErrorChange(newValue: boolean) {
    this.updateErrorStateAndCheckboxes(newValue);
  }

  handleSlotChange = () => {
    this.checkboxes = Array.from(this.el.querySelectorAll('ifx-checkbox'));
    this.updateErrorStateAndCheckboxes(this.error);
  };

  updateErrorStateAndCheckboxes(error: boolean) {
    this.internalError = error;
    this.checkboxes.forEach((checkbox) => {
      checkbox.error = this.internalError;
    });
  }

  render() {
    return (
      <div class='checkbox-group-container'>
        {this.showGroupLabel ? <div class='group-label'>{this.groupLabelText} *</div> : ''}
        <div class={`checkbox-group ${this.alignment} ${this.size}`}>
          <slot onSlotchange={this.handleSlotChange}></slot>
        </div>
        {this.showCaption ? (
          <div class={`caption ${this.internalError ? 'error' : 'default'}`}>
            {this.showCaptionIcon ? <div class='caption-icon'><ifx-icon icon="c-info-16">
            </ifx-icon></div> : ''}
            <div class='caption-text'>{this.captionText}</div>
          </div>) : ''}
      </div>
    );
  }
}
