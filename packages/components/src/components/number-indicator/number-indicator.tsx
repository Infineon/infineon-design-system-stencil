import { Component, h, Prop } from '@stencil/core';
 

@Component({
  tag: 'ifx-number-indicator',
  styleUrl: 'number-indicator.scss',
  shadow: true
})
export class NumberIndicator {
  @Prop() inverted: boolean = false;

  render() {
    return (
      <div aria-label='a number indicator' class={`numberIndicator__container ${this.inverted ? 'inverted' : ""}`}>
        <span>
          <slot />
        </span>
      </div>
    );
  }
}