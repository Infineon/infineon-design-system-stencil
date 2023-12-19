import type { Components, JSX } from "../dist/types/components";

interface IfxSpinner extends Components.IfxSpinner, HTMLElement {}
export const IfxSpinner: {
  prototype: IfxSpinner;
  new (): IfxSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
