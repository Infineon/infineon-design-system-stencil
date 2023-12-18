import type { Components, JSX } from "../dist/types/components";

interface IfxModal extends Components.IfxModal, HTMLElement {}
export const IfxModal: {
  prototype: IfxModal;
  new (): IfxModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
