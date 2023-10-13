import { Component, Prop, State, Method, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ifx-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class IfxModal {
  @State() showModal: boolean = false;

  @Prop() caption: string = 'Modal Title';
  @Prop() closeOnOverlayClick: boolean = true;

  @Event() modalOpen: EventEmitter;
  @Event() modalClose: EventEmitter;
  @Event() closeButtonClick: EventEmitter;

  @Prop() variant: 'default' | 'alert-brand' | 'alert-danger' = 'default';

  @Prop() alertIcon: string = '';
  @Prop() okButtonLabel: string = 'OK';
  @Prop() cancelButtonLabel: string = 'Cancel';

  @Method()
  async open() {
    this.showModal = true;
    this.modalOpen.emit();
  }

  @Method()
  async close() {
    this.showModal = false;
    this.modalClose.emit();
    this.handleCloseButtonClick();
  }

  handleCloseButtonClick() {
    this.closeButtonClick.emit();
  }


  handleOverlayClick() {
    if (this.closeOnOverlayClick) {
      this.close();
    }
  }


  render() {
    const isAlertVariant = this.variant !== 'default';
    return (
      <div aria-label='a modal popup covering the entire screen' class={`modal-container ${this.showModal ? 'open' : ''}`}>
        <div class="modal-overlay" onClick={() => this.handleOverlayClick()}></div>
        <div class={`modal-content-container`}>
          {isAlertVariant ? (
            <div class={`modal-icon-container ${this.variant === 'alert-brand' ? '' : 'danger'}`}>
              {this.alertIcon ? <ifx-icon icon={this.alertIcon} /> : null}
            </div>
          ) : null}
          <div class="modal-content">
            <div class="modal-header">
              <h2>{this.caption}</h2>
              <ifx-icon-button icon="cross-24" variant="tertiary" onClick={() => this.close()}></ifx-icon-button>
            </div>
            <div class="modal-body">
              <slot name="content" />
            </div>
            <div class="modal-footer">
              <slot name="buttons">
                <ifx-button>{this.okButtonLabel}</ifx-button>
                <ifx-button variant='secondary'>{this.cancelButtonLabel}</ifx-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
