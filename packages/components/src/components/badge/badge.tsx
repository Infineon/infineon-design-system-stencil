import { Component, h } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';

@Component({
  tag: 'ifx-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {

   componentWillLoad() { 
    trackComponent('ifx-badge')
  }

  render() {
    return (
      <div class="badge__container">
        <slot />
      </div>
    );
  }
}