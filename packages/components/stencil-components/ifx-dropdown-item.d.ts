import type { Components, JSX } from "../dist/types/components";

interface IfxDropdownItem extends Components.IfxDropdownItem, HTMLElement {}
export const IfxDropdownItem: {
  prototype: IfxDropdownItem;
  new (): IfxDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
