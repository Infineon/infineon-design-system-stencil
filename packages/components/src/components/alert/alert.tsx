import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})

export class Alert {
  @Prop() variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' = 'primary';
  @Prop() icon: string;
  @Event() ifxClose: EventEmitter;
  @Prop() closable: boolean = true;

  handleClose() { 
    this.ifxClose.emit()
  }

  render() {
    return (
     this.variant === 'info' 
     ? <div class='alert__info-wrapper'>
        <div class='info__text-wrapper'>
          <div class="info__headline-wrapper">
            <slot name='headline' />
          </div>
          <div class="info__description-wrapper">
            <slot name='desc' />
          </div>
        </div>
        { this.closable && <div class="close-icon-wrapper">
          <a href="javascript:void(0);" onClick={this.handleClose.bind(this)}>
            <ifx-icon icon='cross-16' />
          </a>
        </div> }
      </div>
     : <div class={`alert ${this.variant}`}>
        {this.icon && (
          <div class='icon-wrapper'>
            <ifx-icon icon={this.icon} />
          </div>
        )
        }
        <div class="alert-text">
          <slot />
        </div>
        { this.closable && <div class="close-icon-wrapper">
          <a href="javascript:void(0);" onClick={this.handleClose.bind(this)}>
            <ifx-icon icon='cross-16' />
          </a>
        </div> }
      </div >
    );
  }
}
