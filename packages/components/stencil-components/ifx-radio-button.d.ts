import type { Components, JSX } from "../dist/types/components";

interface IfxRadioButton extends Components.IfxRadioButton, HTMLElement {}
export const IfxRadioButton: {
  prototype: IfxRadioButton;
  new (): IfxRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
