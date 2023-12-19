import type { Components, JSX } from "../dist/types/components";

interface IfxFooter extends Components.IfxFooter, HTMLElement {}
export const IfxFooter: {
  prototype: IfxFooter;
  new (): IfxFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
