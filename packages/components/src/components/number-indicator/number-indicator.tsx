import { Component, h, Prop, Element, State } from '@stencil/core';
 

@Component({
  tag: 'ifx-number-indicator',
  styleUrl: 'number-indicator.scss',
  shadow: true
})
export class NumberIndicator {
  @Element() el;
  @State() displayValue: string | number;
  @Prop() inverted: boolean = false;

  private handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const text = slot.assignedNodes({ flatten: true })[0]?.textContent?.trim() || '';
    const num = parseInt(text, 10);
    this.displayValue = !isNaN(num) && num > 99 ? '99+' : num;
  }

  render() {
    return (
      <div aria-label='a number indicator' class={`numberIndicator__container ${this.inverted ? 'inverted' : ""}`}>
        <span class="content-wrapper">
          <slot onSlotchange={(e) => this.handleSlotChange(e)} />
        </span>
        <span>{this.displayValue}</span>
      </div>
    );
  }
}