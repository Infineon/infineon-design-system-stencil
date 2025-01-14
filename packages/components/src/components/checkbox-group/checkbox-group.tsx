import { Component, State, Prop, h, Watch, Element} from '@stencil/core';
@Component({
    tag: 'ifx-checkbox-group',
    styleUrl: 'checkbox-group.scss',
    shadow: true,
    formAssociated: true
  })

export class CheckboxGroup {
  @Prop() alignment: 'horizontal' | 'vertical' = 'vertical';
  @Prop() size: string;
  @Prop() selectedItems: string[] = [];
  @Prop() disabledItems: string[] = [];
  @Prop() errorItems: string[] = [];  
  @Prop() indeterminate: string[] = [];
  @Prop() showGroupLabel: boolean;
  @Prop() groupLabelText: string = 'Group Label Text';
  @Prop() showCaption: boolean;
  @Prop() captionText: string;
  @Prop() showCaptionIcon: boolean;
  @Prop() showCaptionError: boolean;
  @State() internalSelectedItems: string[] = [];
  @State() internalDisabledItems: string[] = [];
  @State() internalErrorItems: string[] = [];
  @State() internalIndeterminateItems: string[] = [];
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.internalSelectedItems = [...this.selectedItems];
    this.internalDisabledItems = [...this.disabledItems];
    this.internalErrorItems = [...this.errorItems];
    this.internalIndeterminateItems = [...this.indeterminate];
  }

  @Watch('selectedItems')
  handleSelectedItemsChange(newValue: string[]) {
    this.internalSelectedItems = [...newValue];
    this.updateCheckboxStates();
  }

  @Watch('disabledItems')
  handleDisabledItemsChange(newValue: string[]) {
    this.internalDisabledItems = [...newValue];
    this.updateCheckboxStates();
  }

  @Watch('errorItems')
  handleErrorItemsChange(newValue: string[]) {
    this.internalErrorItems = [...newValue];
    this.updateCheckboxStates();
  }

  @Watch('size')
  handleSizeChange() {
    this.updateCheckboxStates();
  }

  @Watch('indeterminate')
  handleIndeterminateChange(newValue: string[]) {
    this.internalIndeterminateItems = [...newValue];
    this.updateCheckboxStates();
  }
  handleDisplayGroupLabel() {
    if (this.showGroupLabel) {
      return this.groupLabelText;
    }
  }

handleCheckboxChange(value: string) {
    this.internalSelectedItems = this.internalSelectedItems.includes(value)
      ? this.internalSelectedItems.filter(item => item !== value)
      : [...this.internalSelectedItems, value];
    this.updateCheckboxStates();
  }

  updateCheckboxStates() {
    const slot = this.el.shadowRoot.querySelector('slot');
    if (slot) {
      const children = slot.assignedElements();
      children.forEach((child: HTMLElement) => {
        if (child.tagName.toLowerCase() === 'custom-checkbox') {
          const value = child.getAttribute('value');
          if (value) {
            this.internalSelectedItems.includes(value)
              ? child.setAttribute('selected', 'true')
              : child.removeAttribute('selected');

            this.internalDisabledItems.includes(value)
              ? child.setAttribute('disabled', 'true')
              : child.removeAttribute('disabled');

            this.internalErrorItems.includes(value)
              ? child.setAttribute('error', 'true')
              : child.removeAttribute('error');
            
              this.internalIndeterminateItems.includes(value)
              ? child.setAttribute('indeterminate', 'true')
              : child.removeAttribute('indeterminate');

              if (this.size) {
                child.setAttribute('size', this.size);
              } else {
                child.removeAttribute('size');
              }
          }
        }
      });
    }
  }
  
  render() {
    return (
      <div class='checkbox-group-container'>
        {this.showGroupLabel ? <div class='group-label'>{this.groupLabelText}</div> : ''}
        <div class={`checkbox-group ${this.alignment} ${this.size}`}>
        <slot onSlotchange={() => {this.updateCheckboxStates();}}></slot>  
      </div>
      {this.showCaption ? (
          <div class={`caption ${this.showCaptionError ? 'error' : 'default'}`}>
            {this.showCaptionIcon ? <div class='caption-icon'><ifx-icon icon="c-info-16">
              </ifx-icon></div> : ''}
            <div class='caption-text'>{this.captionText}</div>
          </div>) : ''}
      </div>
    );
  }

  onSelectionChanged(value: string) {
    /*this.selectedItems = this.selectedItems.includes(value)
      ? this.selectedItems.filter(item => item !== value)
      : [...this.selectedItems, value];*/
      console.log(value);
  }
}
    