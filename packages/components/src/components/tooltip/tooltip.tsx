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
  @Prop() header: string = '';
  @Prop() text: string = '';
  @Prop({ mutable: true }) position: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto' = 'auto';
  @Prop() variant: 'compact' | 'dismissable' | 'textPlusIcon' = 'compact';
  @Prop() icon: string;

  tooltipEl: HTMLElement;
  referenceEl: HTMLElement;
  popperInstance: any = null;

  initializePopper() {
    if (this.popperInstance) return;

    this.referenceEl = this.el;
    this.tooltipEl;
    if (this.variant === 'compact') {
      this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-compact');
    }
    else if (this.variant === 'dismissable') {
      this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-dismissable');
    }
    else {
      this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-text-icon');

    }

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

  onClick = () => {
    if (this.variant === 'dismissable') {
      this.initializePopper();
      this.tooltipVisible = !this.tooltipVisible;
      this.popperInstance?.update();
    }
  }

  render() {
    const tooltipDismissable = {
      'tooltip-dismissable': true,
      'visible': this.tooltipVisible,
    };

    const tooltipCompact = {
      'tooltip-compact': true,
      'visible': this.tooltipVisible,
    };

    const tooltipTextPlusIcon = {
      'tooltip-text-icon': true,
      'visible': this.tooltipVisible,
    };

    const eventHandlers = this.variant === 'compact' || this.variant === 'textPlusIcon' ? {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    } : {
      onClick: this.onClick,
    };

    return (
      <div class="tooltip__container" {...eventHandlers}>
        <slot></slot>

        {this.variant === 'dismissable' && <div class={tooltipDismissable}>
          <ifx-icon icon="cross16" class="close-button"></ifx-icon>
          <div class="tooltip-dismissable-content">
            <div class="tooltip-dismissable-header">{this.header}</div>
            <div class="tooltip-dismissable-body">{this.text}</div>
          </div>
          <svg class="tooltip-arrow-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
          </svg>
        </div>
        }
        {this.variant === 'compact' &&
          <div class={tooltipCompact}>
            {this.text}
            <svg class="tooltip-arrow-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
            </svg>
          </div>
        }
        {this.variant === 'textPlusIcon' &&
          <div class={tooltipTextPlusIcon}>
            <slot name="icon">
              {this.icon ? <div class="text-plus-icon_icon"><ifx-icon icon={this.icon}></ifx-icon></div> :
                <svg class="text-plus-icon_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z" />
                  <path stroke="#fff" d="M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z" />
                  <path fill="#fff" d="M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
              }
            </slot>
            <div class="tooltip-text-icon-content">
              <div class="tooltip-text-icon-header">{this.header}</div>
              <div class="tooltip-text-icon-body">{this.text}</div>
            </div>
            <svg class="tooltip-arrow-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
            </svg>
          </div >
        }
      </div>
    );
  }


}