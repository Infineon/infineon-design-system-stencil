import type { Components, JSX } from "../dist/types/components";

interface IfxTabs extends Components.IfxTabs, HTMLElement {}
export const IfxTabs: {
  prototype: IfxTabs;
  new (): IfxTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
