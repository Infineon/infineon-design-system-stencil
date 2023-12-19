import type { Components, JSX } from "../dist/types/components";

interface IfxNavbarMenuItem extends Components.IfxNavbarMenuItem, HTMLElement {}
export const IfxNavbarMenuItem: {
  prototype: IfxNavbarMenuItem;
  new (): IfxNavbarMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
