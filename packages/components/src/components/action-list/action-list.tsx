import { Component, h, Prop, Element } from '@stencil/core';
import { trackComponent } from '../../shared/utils/tracking';
import { isNestedInIfxComponent } from '../../shared/utils/dom-utils';
import { detectFramework } from '../../shared/utils/framework-detection';

@Component({
  tag: 'ifx-action-list',
  styleUrl: 'action-list.scss',
  shadow: true,
})
export class ActionList {
  @Element() el: HTMLElement;

  /**
   * Aria label for accessibility support
   */
  @Prop() listAriaLabel?: string;

  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent('ifx-action-list', await framework);
    }
  }

  render() {
    return (
      <div
        class="action-list"
        role="list"
        aria-label={this.listAriaLabel}
      >
        <slot></slot>
      </div>
    );
  }
}