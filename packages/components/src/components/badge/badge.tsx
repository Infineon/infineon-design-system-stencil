import { Component, h } from '@stencil/core';
import { trackComponentView } from '../../global/utils/tracking';

@Component({
  tag: 'ifx-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {

  componentDidLoad() {
    trackComponentView('Badge');
  }

  render() {
    return (
      <div class="badge__container">
        <slot />
      </div>
    );
  }
}