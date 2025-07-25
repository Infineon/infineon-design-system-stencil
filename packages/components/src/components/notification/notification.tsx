import { Component, h, Host, Prop, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';
export type NotificationVariant = 'success' | 'locked' | 'error' | 'neutral';

@Component({
  tag: 'ifx-notification',
  styleUrl: 'notification.scss',
  shadow: true
})
export class Notification {
  @Element() el;
  @Prop() icon: string;
  @Prop() variant: NotificationVariant = 'success';
  @Prop() linkText: string; 
  @Prop() linkHref: string;
  @Prop() linkTarget: string = '_blank';

  componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-notification', framework)
    }
  }

  private getClassName(): string {
    switch (this.variant) {
      case 'success':
        return 'ifx-notification__wrapper--success';
      case 'locked':
        return 'ifx-notification__wrapper--locked';
      case 'error':
        return 'ifx-notification__wrapper--error';
      case 'neutral':
        return 'ifx-notification__wrapper--neutral';
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