import { Component, h, Prop, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'minimal-component-wrapper',
  styleUrl: 'minimal-component-wrapper.scss',
  shadow: true,
})
export class MinimalComponentWrapper {
  @Element() el: HTMLElement;

  /**
   * Aria label for accessibility support
   */
  @Prop() listAriaLabel?: string;

  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent('minimal-component-wrapper', await framework);
    }
  }

  render() {
    return (
      <div
        class="minimal-component-wrapper"
        role="list"
        aria-label={this.listAriaLabel}
      >
        <slot></slot>
      </div>
    );
  }
}
