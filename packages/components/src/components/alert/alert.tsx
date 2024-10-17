import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  @Prop() variant: 'primary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Prop() icon: string;
  @Event() ifxClose: EventEmitter;
  @Prop() closable: boolean = true;

  @Prop() ariaIconLabel: string;
  @Prop() ariaLive = 'assertive';

  alertTypeDescription = {
    "primary": 'Neutral alert',
    "success": 'Success Alert',
    "danger": 'Error Alert',
    "warning": 'Warning Alert',
    "info": 'Neutral alert',
  };

  handleClose() {
    this.ifxClose.emit();
  }

  renderCloseButton() {
    return (
      <div class="close-icon-wrapper">
        <button onClick={this.handleClose.bind(this)} aria-label="Dismiss alert">
          <ifx-icon icon="cross-16" />
        </button>
      </div>
    );
  }

  render() {
    return this.variant === 'info' ? (
      <div class="alert__info-wrapper" role="alert" aria-live={this.ariaLive} aria-description={this.alertTypeDescription[this.variant]} aria-labelledby="alert-text alert-description">
        <div class="info__text-wrapper">
          <div class="info__headline-wrapper">
            <slot name="headline" />
          </div>
          <div id="alert-description" class="info__description-wrapper">
            <slot name="desc" />
          </div>
        </div>
        {this.closable ? this.renderCloseButton() : null}
      </div>
    ) : (
      <div class={`alert ${this.variant}`} role="alert">
        {this.icon && (
          <div class="icon-wrapper">
            <ifx-icon icon={this.icon} />
          </div>
        )}
        <div class="alert-text">
          <slot />
        </div>
        {this.closable ? this.renderCloseButton() : null}
      </div>
    );
  }
}
