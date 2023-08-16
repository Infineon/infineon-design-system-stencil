import { Component, Prop, h, Element, State, Watch } from '@stencil/core';
import { createPopper } from '@popperjs/core';

@Component({
  tag: 'ifx-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true
})
export class Tooltip {

  @Element() el: HTMLElement;
  @State() tooltipVisible: boolean = false;

  @Prop() text: string = '';
  @Prop({ mutable: true }) position: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto' = 'auto';

  tooltipEl: HTMLElement;
  referenceEl: HTMLElement;
  popperInstance: any = null;

  initializePopper() {
    if (this.popperInstance) return;

    this.referenceEl = this.el;
    this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-text');

    const effectivePosition = this.position === 'auto' ? this.determineBestPosition() : this.position;

    if (this.tooltipEl && this.referenceEl) {
      this.popperInstance = createPopper(this.referenceEl, this.tooltipEl, {
        placement: effectivePosition,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8]  // this offset should be adjusted to ensure the tooltip doesn't overlap its reference element
            }
          }
        ]
      });
    }

    // Add this line to set the 'data-placement' attribute on the tooltip
    this.tooltipEl.setAttribute('data-placement', effectivePosition);
  }

  determineBestPosition() {
    // This is a simplified version, you can enhance this based on available viewport space.
    const rect = this.el.getBoundingClientRect();
    if (rect.top > window.innerHeight / 2) {
      return 'top';
    } else {
      return 'bottom';
    }
    // Add more conditions for left and right if needed.
  }

  @Watch('position')
  positionChanged() {
    this.popperInstance?.destroy();
    this.popperInstance = null; // Force re-initialization on next mouse enter
  }

  onMouseEnter = () => {
    this.initializePopper(); // Lazy initialization
    this.tooltipVisible = true;
    this.popperInstance?.update();
  }

  onMouseLeave = () => {
    this.tooltipVisible = false;
  }

  disconnectedCallback() {
    this.popperInstance?.destroy();
  }

  render() {
    return (
      <div class="tooltip__container"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <slot></slot>
        <div class={{ 'tooltip-text': true, 'visible': this.tooltipVisible }}>
          {this.text}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
          </svg>
        </div>

      </div>
    );
  }


}