import { Component, Prop, Element, State, Method, Event, Host, EventEmitter, h, Watch } from '@stencil/core';
import { queryShadowRoot, isHidden, isFocusable } from '../../global/utils/focus-trap';
type CloseEventTrigger = 'CLOSE_BUTTON' | 'ESCAPE_KEY' | 'BACKDROP';

export interface BeforeCloseEventDetail {
  trigger: CloseEventTrigger;
}
@Component({
  tag: 'ifx-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class IfxModal {
  @Prop({ reflect: true, mutable: true }) opened?: boolean = false;
  @State() showModal: boolean = this.opened || false;

  @Prop() caption: string = 'Modal Title';
  @Prop() closeOnOverlayClick: boolean = true;

  @Event() ifxModalOpen: EventEmitter;
  @Event() ifxModalClose: EventEmitter;
  @Event() ifxCloseButtonClick: EventEmitter;
  @Event() ifxBeforeClose: EventEmitter<any>;

  @Prop() variant: 'default' | 'alert-brand' | 'alert-danger' = 'default';

  @Prop() alertIcon: string = '';
  @Prop() okButtonLabel: string = 'OK';
  @Prop() cancelButtonLabel: string = 'Cancel';
  @Element() hostElement: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private closeButton: HTMLButtonElement | HTMLIfxButtonElement;

  componentDidLoad() {
    // Query all focusable elements and store them in `focusableElements`.
    // Needed for the "focus trap" functionality.
    this.focusableElements = queryShadowRoot(
      this.hostElement.shadowRoot,
      (el) => isHidden(el) || el.matches('[data-focus-trap-edge]'),
      isFocusable
    );
  }

  getFirstFocusableElement(): HTMLElement | null {
    console.log("foc")
    return this.focusableElements[0];
  }

  getLastFocusableElement(): HTMLElement | null {
    return this.focusableElements[this.focusableElements.length - 1];
  }

  handleTopFocus = () => {
    this.attemptFocus(this.getLastFocusableElement());
  };

  handleBottomFocus = () => {
    this.attemptFocus(this.getFirstFocusableElement());
  };


  attemptFocus(element: HTMLElement | null) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }


  @Method()
  async open() {
    this.showModal = true;

    try {
      this.attemptFocus(this.getFirstFocusableElement());
      this.ifxModalOpen.emit();
      this.hostElement.addEventListener('keydown', this.handleKeypress);
    } catch (err) {
      this.ifxModalOpen.emit();
    }
  }

  @Method()
  async close() {
    this.showModal = false;
    try {
      this.ifxModalClose.emit();
      this.handleCloseButtonClick();
      this.hostElement.removeEventListener('keydown', this.handleKeypress);
    } catch (err) {
      this.ifxModalClose.emit();
      this.handleCloseButtonClick();
    }
  }

  handleKeypress = (event: KeyboardEvent) => {
    console.log("keyboard event detected")
    if (!this.showModal) {
      return;
    }
    if (event.key === 'Escape') {
      this.emitBeforeClose('ESCAPE_KEY');
    }
  };


  emitBeforeClose(trigger: CloseEventTrigger) {
    const emittedEvents = [];
    emittedEvents.push(this.ifxBeforeClose.emit(trigger));
    const prevented = emittedEvents.some((event) => event.defaultPrevented);
    console.log("emitted ", emittedEvents, " - prevented ", prevented)
    if (!prevented) {
      this.opened = false;
    }
  }



  @Watch('opened')
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
    } else {
      this.close()
    }
  }

  handleCloseButtonClick() {
    this.ifxCloseButtonClick.emit();
  }


  handleOverlayClick() {
    if (this.closeOnOverlayClick) {
      this.emitBeforeClose('BACKDROP')
      // this.close();
    }
  }



  render() {
    const isAlertVariant = this.variant !== 'default';
    return (
      <Host>
        <div
          class={`modal-container ${this.showModal ? 'open' : ''}`}>
          {/* <div class="modal-overlay" onClick={() => this.handleOverlayClick()}></div> */}
          <div
            class="modal-overlay"
            onClick={() => this.handleOverlayClick()}
          ></div>
          <div
            data-focus-trap-edge
            onFocus={this.handleTopFocus}
            tabindex="0"
          ></div>
          <div class={`modal-content-container`}
            role="dialog"
            aria-modal="true"
            aria-label={this.caption}>
            {isAlertVariant ? (
              <div class={`modal-icon-container ${this.variant === 'alert-brand' ? '' : 'danger'}`}>
                {this.alertIcon ? <ifx-icon icon={this.alertIcon} /> : null}
              </div>
            ) : null}
            <div class="modal-content">
              <div class="modal-header">
                <h2>{this.caption}</h2>
                <ifx-icon-button icon="cross-24" variant="tertiary" onClick={() => this.emitBeforeClose('CLOSE_BUTTON')}
                ></ifx-icon-button>
              </div>
              <div class="modal-body">
                <slot name="content" /*onSlotchange={() => console.log('slots children modified')}*/ />
              </div>
              <div class="modal-footer">
                <slot name="buttons">
                  <ifx-button aria-label={this.okButtonLabel}>{this.okButtonLabel}</ifx-button>
                  <ifx-button ref={(el) => (this.closeButton = el)} variant='secondary' aria-label={this.cancelButtonLabel}>{this.cancelButtonLabel}</ifx-button>
                </slot>
              </div>
            </div>
          </div>
          <div
            data-focus-trap-edge
            onFocus={this.handleBottomFocus}
            tabindex="0"
          ></div>
        </div>
      </Host>

    );
  }
}
