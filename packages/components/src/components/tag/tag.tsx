import { Component, Prop, h } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() icon: string;

  componentWillLoad() { 
    trackComponent('ifx-tag')
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