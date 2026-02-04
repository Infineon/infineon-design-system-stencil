import { createPopper } from "@popperjs/core";
import { Component, Element, h, Prop, State, Watch } from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
  tag: 'ifx-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  @Element() el: HTMLElement;
  @State() tooltipVisible: boolean = false;
  @Prop() header: string = '';
  @Prop() text: string = '';
  @Prop() position: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto' = 'auto';
  @State() internalPosition: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto' = 'auto';
  @Prop() ariaLabel: string | null;
  @Prop() variant: 'compact' | 'dismissible' | 'extended' = 'compact';
  @Prop() icon: string;

  @Prop() appendToBody: boolean = false;
  private tooltipContainer: HTMLElement;

  tooltipEl: HTMLElement;
  referenceEl: HTMLElement;
  popperInstance: any = null;

  componentWillLoad() {
    if (this.variant.toLowerCase().trim() === '') {
      this.variant = 'compact';
    }
  }

  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent('ifx-tooltip', await framework);
    }
    const slotElement = this.el.shadowRoot.querySelector('.tooltip__container').firstChild;

    if (this.variant.toLowerCase() === 'compact' || this.variant.toLowerCase() === 'extended') {
      slotElement.addEventListener('mouseenter', this.onMouseEnter);
      slotElement.addEventListener('mouseleave', this.onMouseLeave);
    } else {
      slotElement.addEventListener('click', this.onClick);
    }
  }

	initializePopper() {
		if (this.popperInstance) return;

    this.referenceEl = this.el;

    let originalTooltipEl: HTMLElement;
    if (this.variant.toLowerCase() === 'compact') {
      originalTooltipEl = this.el.shadowRoot.querySelector('.tooltip-compact');
    } else if (this.variant.toLowerCase() === 'dismissible') {
      originalTooltipEl = this.el.shadowRoot.querySelector('.tooltip-dismissible');
    } else {
      originalTooltipEl = this.el.shadowRoot.querySelector('.tooltip-extended');
    }

    if (this.appendToBody && originalTooltipEl && !this.tooltipContainer) {
      this.tooltipContainer = originalTooltipEl.cloneNode(true) as HTMLElement;
      const computedStyle = window.getComputedStyle(originalTooltipEl);
      Array.from(computedStyle).forEach(key => {
        this.tooltipContainer.style.setProperty(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key));
      });

      document.body.appendChild(this.tooltipContainer);

      originalTooltipEl.style.visibility = 'hidden';

      this.tooltipEl = this.tooltipContainer;
    } else if (this.appendToBody && this.tooltipContainer) {
      this.tooltipEl = this.tooltipContainer;
    } else {
      this.tooltipEl = originalTooltipEl;
    }

    let effectivePosition: any;
    if (this.position === 'auto') {
      effectivePosition = this.determineBestPosition();
    } else {
      effectivePosition = this.position;
    }

    this.internalPosition = effectivePosition;

    if (this.tooltipEl && this.referenceEl) {
      this.popperInstance = createPopper(this.referenceEl, this.tooltipEl, {
        placement: this.internalPosition,
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'clippingParents',
              altBoundary: false,
              rootBoundary: 'viewport',
            },
          },
          {
            name: 'flip',
            enabled: this.position === 'auto',
            options: {
              fallbackPlacements: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
              flipVariations: false,
            },
          },
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: false,
              adaptive: true,
            },
          },
        ],
      });
    }

    if (this.tooltipEl) {
      this.tooltipEl.setAttribute('data-placement', this.internalPosition);
    }
  }

  determineBestPosition() {
    const rect = this.referenceEl.getBoundingClientRect();
    const yOffset = window.scrollY;
    const xOffset = window.scrollX;
    const verticalHalfwayPoint = rect.top + yOffset + rect.height / 2;
    const horizontalHalfwayPoint = rect.left + xOffset + rect.width / 2;

    if (verticalHalfwayPoint > window.innerHeight / 2) {
      if (horizontalHalfwayPoint > window.innerWidth / 2) {
        return 'top-end';
      } else {
        return 'top-start';
      }
    } else {
      if (horizontalHalfwayPoint > window.innerWidth / 2) {
        return 'bottom-end';
      } else {
        return 'bottom-start';
      }
    }
  }

  @Watch('position')
  positionChanged(newVal: any) {
    this.internalPosition = newVal;
    this.popperInstance?.destroy();
    this.popperInstance = null; // Force re-initialization on next mouse enter
  }

  onMouseEnter = () => {
    this.initializePopper();
    this.tooltipVisible = true;

    if (this.tooltipEl) {
      this.tooltipEl.style.display = 'block';
    }

    this.popperInstance?.update();
  };

  onMouseLeave = () => {
    this.tooltipVisible = false;

    if (this.tooltipEl) {
      this.tooltipEl.style.display = 'none';
    }
  };

  disconnectedCallback() {
    const slotElement = this.el.shadowRoot?.querySelector('.tooltip__container')?.firstChild;
    if (slotElement) {
      slotElement.removeEventListener('mouseenter', this.onMouseEnter);
      slotElement.removeEventListener('mouseleave', this.onMouseLeave);
      slotElement.removeEventListener('click', this.onClick);
    }
    this.popperInstance?.destroy();
    if (this.tooltipContainer && this.tooltipContainer.parentNode) {
      document.body.removeChild(this.tooltipContainer);
    }
  }

  onClick = () => {
    if (this.variant.toLowerCase() === 'dismissible') {
      this.initializePopper();
      this.tooltipVisible = !this.tooltipVisible;
      this.tooltipEl.style.display = this.tooltipVisible ? 'block' : 'none';
      this.popperInstance?.update();
    }
  };

  onDismissClick = () => {
    this.tooltipVisible = false;
    this.tooltipEl.style.display = 'none';
  };

	render() {
		const tooltipDismissible = {
			"tooltip-dismissible": true,
			visible: this.tooltipVisible,
		};

		const tooltipCompact = {
			"tooltip-compact": true,
			visible: this.tooltipVisible,
		};

		const tooltipExtended = {
			"tooltip-extended": true,
			visible: this.tooltipVisible,
		};

    return (
      <div aria-label={this.ariaLabel} aria-value={this.header} class="tooltip__container">
        <slot></slot>

        {this.variant.toLowerCase() === 'dismissible' && (
          <div class={tooltipDismissible}>
            <button aria-label="Close Tooltip" class="close-button" onClick={this.onDismissClick}>
              <ifx-icon icon="cross16"></ifx-icon>
            </button>
            <div class="tooltip-dismissible-content">
              {this.header && <div class="tooltip-dismissible-header">{this.header}</div>}
              <div class="tooltip-dismissible-body">{this.text}</div>
            </div>
            <svg class="tooltip-arrow-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
            </svg>
          </div>
        )}
        {this.variant.toLowerCase() === 'compact' && (
          <div class={tooltipCompact}>
            {this.text}
            <svg class="tooltip-arrow-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
            </svg>
          </div>
        )}
        {this.variant.toLowerCase() === 'extended' && (
          <div class={tooltipExtended}>
            <slot name="icon">
              {this.icon ? (
                <div class="extended_icon">
                  <ifx-icon icon={this.icon}></ifx-icon>
                </div>
              ) : (
                <svg class="extended_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z" />
                  <path stroke="#fff" d="M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z" />
                  <path fill="#fff" d="M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
              )}
            </slot>
            <div class="tooltip-extended-content">
              {this.header && <div class="tooltip-extended-header">{this.header}</div>}
              <div class="tooltip-extended-body">{this.text}</div>
            </div>
            <svg class="tooltip-arrow-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Indicator" d="M6 0L12 8L0 8L6 0Z" fill="#1D1D1D" />
            </svg>
          </div>
        )}
      </div>
    );
  }
}
