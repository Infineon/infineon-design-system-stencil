import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})

export class Alert {
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() icon: string;
  @Event() ifxClose: EventEmitter;

  handleClose() { 
    this.ifxClose.emit()
  }

 
  render() {
    return (
      <div class={`alert ${this.color}`}>
        {this.icon && (
          <div class='icon-wrapper'>
            <ifx-icon icon={this.icon} />
          </div>
        )
        }
        <div class="alert-text">
          <slot />
        </div>
        <div class="close-icon-wrapper">
          <a href="javascript:void(0);" onClick={this.handleClose.bind(this)}>
            <ifx-icon icon='cross-16' />
          </a>
        </div>
      </div >
    );
  }
}
