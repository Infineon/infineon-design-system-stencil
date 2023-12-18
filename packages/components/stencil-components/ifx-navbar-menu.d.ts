import type { Components, JSX } from "../dist/types/components";

interface IfxNavbarMenu extends Components.IfxNavbarMenu, HTMLElement {}
export const IfxNavbarMenu: {
  prototype: IfxNavbarMenu;
  new (): IfxNavbarMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
