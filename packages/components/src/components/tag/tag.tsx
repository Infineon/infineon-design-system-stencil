import { Component, Prop, h } from '@stencil/core';
import { trackComponentView } from '../../global/utils/tracking';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() icon: string;

  componentDidLoad() {
    trackComponentView('Tag');
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