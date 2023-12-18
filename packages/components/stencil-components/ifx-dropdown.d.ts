import type { Components, JSX } from "../dist/types/components";

interface IfxDropdown extends Components.IfxDropdown, HTMLElement {}
export const IfxDropdown: {
  prototype: IfxDropdown;
  new (): IfxDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
