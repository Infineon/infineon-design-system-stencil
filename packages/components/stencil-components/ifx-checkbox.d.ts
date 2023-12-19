import type { Components, JSX } from "../dist/types/components";

interface IfxCheckbox extends Components.IfxCheckbox, HTMLElement {}
export const IfxCheckbox: {
  prototype: IfxCheckbox;
  new (): IfxCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
