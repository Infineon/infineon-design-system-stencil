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

  componentDidLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-tag', framework)
    }
  }

  render() {
    return (
      <div aria-label="a tag" class="container">
        {this.icon && (
          <ifx-icon icon={this.icon}></ifx-icon>)}
        <a href="javascript:void(null);" class="label-wrapper" >
          <p class="label">
            <slot />
          </p>
        </a>
      </div>

    );
  }
}