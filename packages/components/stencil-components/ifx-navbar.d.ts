import type { Components, JSX } from "../dist/types/components";

interface IfxNavbar extends Components.IfxNavbar, HTMLElement {}
export const IfxNavbar: {
  prototype: IfxNavbar;
  new (): IfxNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
