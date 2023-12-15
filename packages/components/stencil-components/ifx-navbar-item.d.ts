import type { Components, JSX } from "../dist/types/components";

interface IfxNavbarItem extends Components.IfxNavbarItem, HTMLElement {}
export const IfxNavbarItem: {
  prototype: IfxNavbarItem;
  new (): IfxNavbarItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
