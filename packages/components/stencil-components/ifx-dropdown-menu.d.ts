import type { Components, JSX } from "../dist/types/components";

interface IfxDropdownMenu extends Components.IfxDropdownMenu, HTMLElement {}
export const IfxDropdownMenu: {
  prototype: IfxDropdownMenu;
  new (): IfxDropdownMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
