import type { Components, JSX } from "../dist/types/components";

interface IfxCardText extends Components.IfxCardText, HTMLElement {}
export const IfxCardText: {
  prototype: IfxCardText;
  new (): IfxCardText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
