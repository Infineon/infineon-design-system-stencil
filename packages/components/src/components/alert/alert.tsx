import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

declare global {
  interface Window {
    btntConfig?: any;
    btntQueue?: any;
    btnt?: any;
  }
}

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
  @Prop() AriaLive = 'assertive';
  @State() uniqueId: string;

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

  generateUniqueId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
  }

  componentWillLoad() { 
    if (!this.uniqueId) {
      this.uniqueId = this.generateUniqueId('alert');
    }

    this.initalizeTracking()
    

  }

  initalizeTracking() { 
    (function (t, r, kk, n, pp) {
      if (typeof window.btntConfig !== "object") {
      window.btntConfig = {
      domain: "https://ssgtm.infineon.com",
      withCookies: true,
      maxBatchSize: 10
      };
      }
      if (window["btnt"]) return;
      window["btnt"] = function (z) {
      if (typeof z !== "object") {
      z = {};
      }
      if (typeof window.btntQueue !== "object") {
      window.btntQueue = [];
      }
      window.btntQueue.push(z);
      };
      n = t.createElement(r);
      pp = t.getElementsByTagName(r)[0];
      n.async = 1;
      n.src = window.btntConfig.domain + "/btnt.js";
      pp.parentNode.insertBefore(n, pp);
    })(document, "script", );

    window.btnt({
    event_name: "component_initialized",
    component_name: 'ifx-alert',
    })
  }

  render() {
    return this.variant === 'info' ? (
      <div class="alert__info-wrapper" role="alert" aria-live={this.AriaLive} aria-describedby={this.alertTypeDescription[this.variant]} aria-labelledby="alert-text alert-description">
        <div class="info__text-wrapper">
          <div class="info__headline-wrapper">
            <slot name="headline" />
          </div>
          <div id={`alert-description-${this.uniqueId}`} class="info__description-wrapper">
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
        <div class="alert-text" id={`alert-text-${this.uniqueId}`}>
          <slot />
        </div>
        {this.closable ? this.renderCloseButton() : null}
      </div>
    );
  }
}
