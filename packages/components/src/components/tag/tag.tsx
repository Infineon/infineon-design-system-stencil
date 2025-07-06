import { Component, Prop, h, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Element() el: HTMLElement;
  @Prop() icon: string;

  componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      trackComponent('ifx-tag')
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