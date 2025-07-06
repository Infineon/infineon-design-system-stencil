import { Component, h, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';

@Component({
  tag: 'ifx-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {
  @Element() el: HTMLElement;

   componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      trackComponent('ifx-badge')
    }
  }

  render() {
    return (
      <div class="badge__container">
        <slot />
      </div>
    );
  }
}