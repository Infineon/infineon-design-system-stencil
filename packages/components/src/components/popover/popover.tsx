import { Component, Prop, h, Element, State, Watch, Event, EventEmitter, Method } from '@stencil/core';
import { trackComponent } from '../../shared/utils/tracking';
import { isNestedInIfxComponent } from '../../shared/utils/dom-utils';
import { detectFramework } from '../../shared/utils/framework-detection';

@Component({
  tag: 'ifx-popover',
  styleUrl: 'popover.scss',
  shadow: true
})
export class Popover {

  @Element() el: HTMLElement;

  @State() popoverVisible: boolean = false;
  @State() computedArrowPosition: { top?: string; left?: string; right?: string; bottom?: string; transform?: string } = {};

  /** Title text displayed in the popover header */
  @Prop() popoverTitle: string = '';

  /** Body text displayed in the popover content */
  @Prop() text: string = '';

  /** Position of the popover relative to the trigger element */
  @Prop() position: 'bottom-start' | 'top-start' | 'left' | 'bottom-end' | 'top-end' | 'right' | 'bottom' | 'top' | 'auto' = 'auto';

  /** Whether the popover is disabled */
  @Prop() disabled: boolean = false;

  /** Whether the popover is initially open */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /** Accessible label for the popover */
  @Prop() ariaLabel: string | null = null;

  /** Emitted when the popover is opened */
  @Event({ eventName: 'ifxOpen', bubbles: true, composed: true }) ifxOpen: EventEmitter<{ trigger: HTMLElement | null }>;

  @Event() ifxClose: EventEmitter;

  private static readonly GAP = 12;
  popoverEl: HTMLElement;
  triggerEl: HTMLElement;
  private lastOpenTrigger: HTMLElement | null = null;

  @Watch('open')
  openChanged(newValue: boolean) {
    this.popoverVisible = newValue;
    if (!this.popoverEl) return;

    if (newValue) {
      this.popoverEl.style.visibility = 'hidden';
      this.popoverEl.style.display = 'flex';
      this.positionPopover();
      this.popoverEl.style.visibility = 'visible';
    } else {
      this.popoverEl.style.display = 'none';
      this.popoverEl.style.visibility = '';
    }
  }

  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent('ifx-popover', await framework);
    }

    this.popoverEl = this.el.shadowRoot.querySelector('.popover');
    this.setupTriggerElement();

    this.popoverVisible = this.open;
    if (this.open) {
      this.popoverEl.style.visibility = 'hidden';
      this.popoverEl.style.display = 'flex';
      this.positionPopover();
      this.popoverEl.style.visibility = 'visible';
      this.ifxOpen.emit({ trigger: this.lastOpenTrigger });
    }

    // Outside click closing disabled by design
  }

  setupTriggerElement() {
    this.cleanupTriggerListeners();

    const slotElements = Array.from(this.el.children);
    this.triggerEl = slotElements[0] as HTMLElement || this.el;

    this.triggerEl.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    this.cleanupTriggerListeners();
  }

  cleanupTriggerListeners() {
    if (!this.triggerEl) return;

    this.triggerEl.removeEventListener('click', this.onClick);
  }

  getViewportSpace(triggerRect: DOMRect) {
    return {
      above: triggerRect.top,
      below: window.innerHeight - triggerRect.bottom,
      left: triggerRect.left,
      right: window.innerWidth - triggerRect.right
    };
  }

  resetPositioningStyles() {
    if (!this.popoverEl) return;

    this.popoverEl.style.top = '';
    this.popoverEl.style.bottom = '';
    this.popoverEl.style.left = '';
    this.popoverEl.style.right = '';
    this.popoverEl.style.transform = '';
    this.popoverEl.style.visibility = '';
  }

  positionPopover() {
    if (!this.popoverEl || !this.triggerEl) return;

    const triggerRect = this.triggerEl.getBoundingClientRect();
    const popoverRect = this.popoverEl.getBoundingClientRect();
    const space = this.getViewportSpace(triggerRect);

    let position = this.position;
    if (position === 'auto') {
      position = this.getBestPosition(popoverRect, space);
    } else {
      position = this.validateAndAdjustPosition(position, popoverRect, space);
    }

    this.resetPositioningStyles();

    const { popoverStyle, arrowStyle } = this.calculatePosition(triggerRect, popoverRect, position);

    Object.assign(this.popoverEl.style, popoverStyle);
    this.computedArrowPosition = arrowStyle;

    this.popoverEl.setAttribute('data-placement', position);
  }

  getBestPosition(popoverRect: DOMRect, space: any): 'top' | 'bottom' | 'left' | 'right' {
    const gap = Popover.GAP;

    if (space.above >= popoverRect.height + gap) {
      return 'top';
    } else if (space.below >= popoverRect.height + gap) {
      return 'bottom';
    } else if (space.right >= popoverRect.width + gap) {
      return 'right';
    } else if (space.left >= popoverRect.width + gap) {
      return 'left';
    }

    return 'bottom';
  }

  validateAndAdjustPosition(desiredPosition: string, popoverRect: DOMRect, space: any): 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' {
    const gap = Popover.GAP;

    switch (desiredPosition) {
      case 'top':
      case 'top-start':
      case 'top-end':
        if (space.above >= popoverRect.height + gap) return desiredPosition as any;
        if (space.below >= popoverRect.height + gap) return 'bottom';
        if (space.left >= popoverRect.width + gap) return 'left';
        if (space.right >= popoverRect.width + gap) return 'right';
        return 'bottom';

      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        if (space.below >= popoverRect.height + gap) return desiredPosition as any;
        if (space.above >= popoverRect.height + gap) return 'top';
        if (space.left >= popoverRect.width + gap) return 'left';
        if (space.right >= popoverRect.width + gap) return 'right';
        return 'top';

      case 'left':
        if (space.left >= popoverRect.width + gap) return 'left';
        if (space.right >= popoverRect.width + gap) return 'right';
        if (space.below >= popoverRect.height + gap) return 'bottom';
        if (space.above >= popoverRect.height + gap) return 'top';
        return 'right';

      case 'right':
        if (space.right >= popoverRect.width + gap) return 'right';
        if (space.left >= popoverRect.width + gap) return 'left';
        if (space.below >= popoverRect.height + gap) return 'bottom';
        if (space.above >= popoverRect.height + gap) return 'top';
        return 'left';

      default:
        return 'bottom';
    }
  }

  calculatePosition(triggerRect: DOMRect, popoverRect: DOMRect, position: string) {
    const gap = Popover.GAP;

    let popoverStyle: any = {
      position: 'absolute',
      zIndex: '1000'
    };

    let arrowStyle: any = {};

    switch (position) {
      case 'top-start':
        popoverStyle.left = `0px`;
        popoverStyle.bottom = `${triggerRect.height + gap}px`;
        arrowStyle = {
          top: `100%`,
          left: '12px'
        };
        break;

      case 'top-end':
        popoverStyle.right = `0px`;
        popoverStyle.bottom = `${triggerRect.height + gap}px`;
        arrowStyle = {
          top: `100%`,
          right: '12px'
        };
        break;

      case 'top':
        popoverStyle.left = `${(triggerRect.width / 2) - (popoverRect.width / 2)}px`;
        popoverStyle.bottom = `${triggerRect.height + gap}px`;
        arrowStyle = {
          top: `100%`,
          left: '50%',
          transform: 'translateX(-50%)'
        };
        break;

      case 'bottom-start':
        popoverStyle.left = `0px`;
        popoverStyle.top = `${triggerRect.height + gap}px`;
        arrowStyle = {
          bottom: `100%`,
          left: '12px',
          transform: 'rotate(180deg)'
        };
        break;

      case 'bottom-end':
        popoverStyle.right = `0px`;
        popoverStyle.top = `${triggerRect.height + gap}px`;
        arrowStyle = {
          bottom: `100%`,
          right: '12px',
          transform: 'rotate(180deg)'
        };
        break;

      case 'bottom':
        popoverStyle.left = `${(triggerRect.width / 2) - (popoverRect.width / 2)}px`;
        popoverStyle.top = `${triggerRect.height + gap}px`;
        arrowStyle = {
          bottom: `100%`,
          left: '50%',
          transform: 'translateX(-50%) rotate(180deg)'
        };
        break;

      case 'left':
        popoverStyle.right = `${triggerRect.width + gap}px`;
        popoverStyle.top = `${(triggerRect.height / 2) - (popoverRect.height / 2)}px`;
        arrowStyle = {
          top: '50%',
          right: '-10px',
          transform: 'translateY(-50%) rotate(-90deg)'
        };
        break;

      case 'right':
        popoverStyle.left = `${triggerRect.width + gap}px`;
        popoverStyle.top = `${(triggerRect.height / 2) - (popoverRect.height / 2)}px`;
        arrowStyle = {
          top: '50%',
          left: '-10px',
          transform: 'translateY(-50%) rotate(90deg)'
        };
        break;
    }

    return { popoverStyle, arrowStyle };
  }

  @Watch('position')
  positionChanged() {
    if (this.popoverVisible) {
      setTimeout(() => this.positionPopover(), 0);
    }
  }

  /** Programmatically show the popover */
  @Method()
  async show() {
    if (this.disabled) return;

    this.open = true;

    this.popoverEl.style.visibility = 'hidden';
    this.popoverEl.style.display = 'flex';

    this.positionPopover();

    this.popoverEl.style.visibility = 'visible';
    this.popoverVisible = true;

    this.lastOpenTrigger = this.triggerEl || null;
    this.ifxOpen.emit({ trigger: this.lastOpenTrigger });
  }

  /** Programmatically hide the popover */
  @Method()
  async hide() {
    this.open = false;
    this.popoverVisible = false;
    if (this.popoverEl) {
      this.popoverEl.style.display = 'none';
      this.popoverEl.style.visibility = '';
    }
    this.ifxClose.emit();
  }

  /** Programmatically toggle the popover visibility */
  @Method()
  async toggle() {
    if (this.popoverVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  onClick = (event: Event) => {
    event.stopPropagation();
    this.lastOpenTrigger = this.triggerEl || (event.currentTarget as HTMLElement) || null;
    this.toggle();
  }

  onCloseClick = (event: Event) => {
    event.stopPropagation();
    this.hide();
  }


  render() {
    const popoverClass = {
      'popover': true,
      'visible': this.popoverVisible,
      'popover--disabled': this.disabled
    };

    const arrowStyles = {
      position: 'absolute',
      ...this.computedArrowPosition
    };

    return (
      <div class="popover__container" aria-label={this.ariaLabel}>
        <slot></slot>

        <div class={popoverClass} role="dialog" aria-modal="false">
          <button
            aria-label="Close Popover"
            class="popover-close"
            onClick={this.onCloseClick}
          >
            <ifx-icon icon="cross16"></ifx-icon>
          </button>

          <div class="popover-content">
            {this.popoverTitle && <div class="popover-title">{this.popoverTitle}</div>}
            {this.text && <div class="popover-text">{this.text}</div>}
            <slot name="content"></slot>
          </div>

          <svg class="popover-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" style={arrowStyles}>
            <path d="M6 8L0 0L12 0L6 8Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    );
  }
}
