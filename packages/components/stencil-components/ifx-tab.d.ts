import type { Components, JSX } from "../dist/types/components";

interface IfxTab extends Components.IfxTab, HTMLElement {}
export const IfxTab: {
  prototype: IfxTab;
  new (): IfxTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
