import { Component, Prop, h, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class Tag {
  @Element() el: HTMLElement;
  @Prop() icon: string;
  @Prop() ariaLabel: string | null;
  @Prop() role: string | null;

  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent('ifx-tag', await framework);
    }
  }

  render() {
    return (
      <div role={this.role} aria-label={this.ariaLabel} tabindex="0" class="container">
        {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
        <p class="label">
          <slot />
        </p>
      </div>
    );
  }
}
