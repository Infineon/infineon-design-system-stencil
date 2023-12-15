import type { Components, JSX } from "../dist/types/components";

interface IfxTextField extends Components.IfxTextField, HTMLElement {}
export const IfxTextField: {
  prototype: IfxTextField;
  new (): IfxTextField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
