import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './button.js';
import { d as defineCustomElement$3 } from './infineonIconStencil.js';
import { d as defineCustomElement$2 } from './icon-button.js';

/**
 * Copy/pasted from https://github.com/andreasbm/focus-trap
 */
/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * We need to traverse each child-depth one at a time because if an element should be skipped
 * (for example because it is hidden) we need to skip all of it's children. If we use querySelectorAll("*")
 * the information of whether the children is within a hidden parent is lost.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
  const matches = [];
  // If the depth is above the max depth, abort the searching here.
  if (depth >= maxDepth) {
    return matches;
  }
  // Traverses a slot element
  const traverseSlot = ($slot) => {
    // Only check nodes that are of the type Node.ELEMENT_NODE
    // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    const assignedNodes = $slot
      .assignedNodes()
      .filter((node) => node.nodeType === 1);
    if (assignedNodes.length > 0) {
      const $slotParent = assignedNodes[0].parentElement;
      return queryShadowRoot($slotParent, skipNode, isMatch, maxDepth, depth + 1);
    }
    return [];
  };
  // Go through each child and continue the traversing if necessary
  // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
  // Therefore we fallback to an empty array if it is undefined.
  const children = Array.from(root.children || []);
  for (const $child of children) {
    // Check if the element and its descendants should be skipped
    if (skipNode($child)) {
      // console.log('-- SKIP', $child);
      continue;
    }
    // console.log('$child', $child);
    // If the element matches we always add it
    if (isMatch($child)) {
      matches.push($child);
    }
    if ($child.shadowRoot != null) {
      // If the element has a shadow root we need to traverse it
      matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
    }
    else if ($child.tagName === 'SLOT') {
      // If the child is a slot we need to traverse each assigned node
      matches.push(...traverseSlot($child));
    }
    else {
      // Traverse the children of the element
      matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
    }
  }
  return matches;
}
/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
  return ($elem.hasAttribute('hidden') ||
    ($elem.hasAttribute('aria-hidden') &&
      $elem.getAttribute('aria-hidden') !== 'false') ||
    // A quick and dirty way to check whether the element is hidden.
    // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
    // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
    // we won't be able to catch it here. We accept it due to the huge performance benefits.
    $elem.style.display === `none` ||
    $elem.style.opacity === `0` ||
    $elem.style.visibility === `hidden` ||
    $elem.style.visibility === `collapse`);
  // If offsetParent is null we can assume that the element is hidden
  // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
  // || $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
  return ($elem.hasAttribute('disabled') ||
    ($elem.hasAttribute('aria-disabled') &&
      $elem.getAttribute('aria-disabled') !== 'false'));
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
  // Discard elements that are removed from the tab order.
  if ($elem.getAttribute('tabindex') === '-1' ||
    isHidden($elem) ||
    isDisabled($elem)) {
    return false;
  }
  return (
  // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
  $elem.hasAttribute('tabindex') ||
    // Anchor tags or area tags with a href set
    (($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) &&
      $elem.hasAttribute('href')) ||
    // Form elements which are not disabled
    $elem instanceof HTMLButtonElement ||
    $elem instanceof HTMLInputElement ||
    $elem instanceof HTMLTextAreaElement ||
    $elem instanceof HTMLSelectElement ||
    // IFrames
    $elem instanceof HTMLIFrameElement);
}

function animationTo(element, keyframes, options) {
  const animated = element.animate(keyframes, Object.assign(Object.assign({}, options), { fill: 'both' }));
  animated.addEventListener('finish', () => {
    // @ts-ignore
    animated.commitStyles();
    animated.cancel();
  });
  return animated;
}
const keyframeDefaults = {
  easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};
const KEYFRAMES = {
  fadeIn: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1 }),
  ],
  fadeOut: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 0 }),
  ],
};

const modalCss = "*{font-family:\"Source Sans 3\"}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;overflow-y:auto}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:\"Source Sans 3\"}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;max-height:70vh;overflow-y:auto}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}";

const IfxModal$1 = /*@__PURE__*/ proxyCustomElement(class IfxModal extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxModalOpen = createEvent(this, "ifxModalOpen", 7);
    this.ifxModalClose = createEvent(this, "ifxModalClose", 7);
    this.focusableElements = [];
    this.handleTopFocus = () => {
      this.attemptFocus(this.getLastFocusableElement());
    };
    this.handleBottomFocus = () => {
      this.attemptFocus(this.getFirstFocusableElement());
    };
    this.handleKeypress = (event) => {
      if (!this.showModal) {
        return;
      }
      if (event.key === 'Escape') {
        this.doBeforeClose('ESCAPE_KEY');
      }
    };
    this.opened = false;
    this.showModal = this.opened || false;
    this.caption = 'Modal Title';
    this.closeOnOverlayClick = true;
    this.variant = 'default';
    this.alertIcon = '';
    this.okButtonLabel = 'OK';
    this.cancelButtonLabel = 'Cancel';
  }
  componentDidLoad() {
    // Query all focusable elements and store them in `focusableElements`.
    // Needed for the "focus trap" functionality.
    this.focusableElements = queryShadowRoot(this.hostElement.shadowRoot, (el) => isHidden(el) || el.matches('[data-focus-trap-edge]'), isFocusable);
  }
  getFirstFocusableElement() {
    return this.focusableElements[0];
  }
  getLastFocusableElement() {
    return this.focusableElements[this.focusableElements.length - 1];
  }
  attemptFocus(element) {
    if (element == null) {
      setTimeout(() => {
        this.closeButton.focus();
      });
      return;
    }
    setTimeout(() => {
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
    }
    catch (err) {
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
    }
    catch (err) {
      this.showModal = false;
      this.ifxModalClose.emit();
    }
  }
  doBeforeClose(trigger) {
    const triggers = [];
    triggers.push(trigger);
    const prevented = triggers.some((event) => event.defaultPrevented);
    if (!prevented) {
      this.opened = false;
    }
  }
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
    }
    else {
      this.close();
    }
  }
  handleOverlayClick() {
    if (this.closeOnOverlayClick) {
      this.doBeforeClose('BACKDROP');
    }
  }
  render() {
    const isAlertVariant = this.variant !== 'default';
    return (h(Host, null, h("div", { ref: (el) => (this.modalContainer = el), class: `modal-container ${this.showModal ? 'open' : ''}` }, h("div", { class: "modal-overlay", onClick: () => this.handleOverlayClick() }), h("div", { "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }), h("div", { class: `modal-content-container`, role: "dialog", "aria-modal": "true", "aria-label": this.caption }, isAlertVariant ? (h("div", { class: `modal-icon-container ${this.variant === 'alert-brand' ? '' : 'danger'}` }, this.alertIcon ? h("ifx-icon", { icon: this.alertIcon }) : null)) : null, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h2", null, this.caption), h("ifx-icon-button", { ref: (el) => (this.closeButton = el), icon: "cross-24", variant: "tertiary", onClick: () => this.doBeforeClose('CLOSE_BUTTON') })), h("div", { class: "modal-body" }, h("slot", { name: "content" /*onSlotchange={() => console.log('slots children modified')}*/ })), h("div", { class: "modal-footer" }, h("slot", { name: "buttons" }, h("ifx-button", { "aria-label": this.okButtonLabel }, this.okButtonLabel), h("ifx-button", { variant: 'secondary', "aria-label": this.cancelButtonLabel }, this.cancelButtonLabel))))), h("div", { "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" }))));
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "opened": ["openedChanged"]
  }; }
  static get style() { return modalCss; }
}, [1, "ifx-modal", {
    "opened": [1540],
    "caption": [1],
    "closeOnOverlayClick": [4, "close-on-overlay-click"],
    "variant": [1],
    "alertIcon": [1, "alert-icon"],
    "okButtonLabel": [1, "ok-button-label"],
    "cancelButtonLabel": [1, "cancel-button-label"],
    "showModal": [32]
  }, undefined, {
    "opened": ["openedChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-modal", "ifx-button", "ifx-icon", "ifx-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IfxModal$1);
      }
      break;
    case "ifx-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ifx-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxModal = IfxModal$1;
const defineCustomElement = defineCustomElement$1;

export { IfxModal, defineCustomElement };

//# sourceMappingURL=ifx-modal.js.map