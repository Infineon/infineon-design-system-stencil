import { Component, Prop, h, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Element() el: HTMLElement;
  @Prop() icon: string;
  @Prop() ariaLabel: string;

  componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-tag', framework)
    }
  }

  render() {
    return (
      <div role="button" 
        tabindex="0" 
        class="container">
        {this.icon && (
          <ifx-icon icon={this.icon}></ifx-icon>)}
        <a href="javascript:void(null);" tabindex="-1" class="label-wrapper" >
          <p class="label">
            <slot />
          </p>
        </a>
      </div>

    );
  }
}