import type { Components, JSX } from "../dist/types/components";

interface IfxSidebar extends Components.IfxSidebar, HTMLElement {}
export const IfxSidebar: {
  prototype: IfxSidebar;
  new (): IfxSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
