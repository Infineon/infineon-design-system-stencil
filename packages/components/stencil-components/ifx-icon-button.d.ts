import type { Components, JSX } from "../dist/types/components";

interface IfxIconButton extends Components.IfxIconButton, HTMLElement {}
export const IfxIconButton: {
  prototype: IfxIconButton;
  new (): IfxIconButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
