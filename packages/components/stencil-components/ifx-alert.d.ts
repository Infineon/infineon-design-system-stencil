import type { Components, JSX } from "../dist/types/components";

interface IfxAlert extends Components.IfxAlert, HTMLElement {}
export const IfxAlert: {
  prototype: IfxAlert;
  new (): IfxAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
