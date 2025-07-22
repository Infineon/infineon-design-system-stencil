import { Component, Prop, h } from '@stencil/core';
 

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() icon: string;
  @Prop() ariaLabel: string;



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