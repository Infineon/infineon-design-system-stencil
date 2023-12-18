import type { Components, JSX } from "../dist/types/components";

interface IfxSidebarItem extends Components.IfxSidebarItem, HTMLElement {}
export const IfxSidebarItem: {
  prototype: IfxSidebarItem;
  new (): IfxSidebarItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
