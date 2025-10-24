import { Component, h, Prop, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

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
      trackComponent('action-list', await framework);
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
