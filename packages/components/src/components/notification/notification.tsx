import { Component, h, Host, Prop } from '@stencil/core';
 
export type NotificationVariant = 'success' | 'warning' | 'error';

@Component({
  tag: 'ifx-notification',
  styleUrl: 'notification.scss',
  shadow: true
})
export class Notification {
  @Prop() icon: string;
  @Prop() variant: NotificationVariant = 'success';
  @Prop() linkText: string; 
  @Prop() linkHref: string;
  @Prop() linkTarget: string = '_blank';


  private getClassName(): string {
    switch (this.variant) {
      case 'success':
        return 'ifx-notification__wrapper--success';
      case 'warning':
        return 'ifx-notification__wrapper--warning';
      case 'error':
        return 'ifx-notification__wrapper--error';
      default:
        return 'ifx-notification__wrapper--success';
    }
  }

  render() {
    return (
      <Host>
        <div class={"ifx-notification__wrapper " + this.getClassName()}>
          <div class="ifx-notification__icon">
            <ifx-icon icon={this.icon}></ifx-icon>
          </div>
          <div class="ifx-notification__body">
            <div class="ifx-notification__slot">
              <slot/>
            </div>
            { this.linkText && this.linkHref && 
            <div class="ifx-notification__link">
              <ifx-link href={this.linkHref} target={this.linkTarget}>
                {this.linkText}<ifx-icon icon="arrow-right-16">
              </ifx-icon>
              </ifx-link>
            </div>
          }
          </div>
        </div>
      </Host>
    );
  }
}