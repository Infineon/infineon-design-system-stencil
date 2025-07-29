import { Component, h, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {
  @Element() el: HTMLElement;

   componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-badge', framework)
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