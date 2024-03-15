import { Component, Prop, Element, State, Event, Host, EventEmitter, h, Watch } from '@stencil/core';
import { queryShadowRoot, isHidden, isFocusable } from '../../global/utils/focus-trap';
import { animationTo, KEYFRAMES } from '../../global/utils/animation';

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

  @Prop() variant: 'default' | 'alert-brand' | 'alert-danger' = 'default';

  @Prop() alertIcon: string = '';
  @Prop() okButtonLabel: string = 'OK';
  @Prop() cancelButtonLabel: string = 'Cancel';
  @Element() hostElement: HTMLElement;

  @State() slotButtonsPresent: boolean = false;

  @Prop() showCloseButton: boolean = true;

  private modalContainer: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private closeButton: HTMLButtonElement | HTMLIfxIconButtonElement;

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
      setTimeout(() => { //wait until DOM is fully loaded
        this.closeButton.focus();
      },);
      return;
    }

    setTimeout(() => { //wait until DOM is fully loaded
      element.focus();
    }, 0);
  }


  open() {
    this.showModal = true;
    try {
      const anim = animationTo(this.modalContainer, KEYFRAMES.fadeIn, {
        duration: 200,
      });
      anim.addEventListener('finish', () => {
        this.attemptFocus(this.getFirstFocusableElement());
        this.ifxModalOpen.emit();
      });
      // this.attemptFocus(this.getFirstFocusableElement());
      // this.ifxModalOpen.emit();

      this.hostElement.addEventListener('keydown', this.handleKeypress);
    } catch (err) {
      this.ifxModalOpen.emit();

    }


  }

  close() {
    try {
      const anim = animationTo(this.modalContainer, KEYFRAMES.fadeOut, {
        duration: 200,
      });
      anim.addEventListener('finish', () => {
        this.showModal = false;
        this.ifxModalClose.emit();
      });
      this.hostElement.removeEventListener('keydown', this.handleKeypress);
    } catch (err) {
      this.showModal = false;
      this.ifxModalClose.emit();
    }
  }

  handleKeypress = (event: KeyboardEvent) => {
    if (!this.showModal) {
      return;
    }
    if (event.key === 'Escape') {
      this.doBeforeClose('ESCAPE_KEY');
    }
  };


  doBeforeClose(trigger: CloseEventTrigger) {
    const triggers = [];
    triggers.push(trigger);
    const prevented = triggers.some((event) => event.defaultPrevented);
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


  handleOverlayClick() {
    if (this.closeOnOverlayClick) {
      this.doBeforeClose('BACKDROP')
    }
  }


  handleButtonsSlotChange(e) {
    if(e.currentTarget.assignedElements()[0]?.childElementCount > 0) {
      this.slotButtonsPresent = true;
    }else{
      this.slotButtonsPresent = false;
    }
  }


  render() {
    const isAlertVariant = this.variant !== 'default';
    return (
      <Host>
        <div
          ref={(el) => (this.modalContainer = el)}
          class={`modal-container ${this.showModal ? 'open' : ''}`}
        >
          <div
            class="modal-overlay"
            onClick={() => this.handleOverlayClick()}
          ></div>
          <div
            data-focus-trap-edge
            onFocus={this.handleTopFocus}
            tabindex="0"
          ></div>
          <div
            class={`modal-content-container`}
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
                { 
                  this.showCloseButton && 
                  <ifx-icon-button class = 'modal-close-button' ref={(el) => (this.closeButton = el)} icon="cross-24" variant="tertiary" onClick={() => this.doBeforeClose('CLOSE_BUTTON') }>
                  </ifx-icon-button>
                }
              </div>
              <div class="modal-body">
                <slot name="content" /*onSlotchange={() => console.log('slots children modified')}*/ />
              </div>
              <div class={`modal-footer ${this.slotButtonsPresent ? 'buttons-present' : ''}`}>
                <slot name="buttons" onSlotchange={(e)=>this.handleButtonsSlotChange(e)}>
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