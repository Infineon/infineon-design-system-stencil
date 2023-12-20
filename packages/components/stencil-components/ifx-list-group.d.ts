import type { Components, JSX } from "../dist/types/components";

interface IfxListGroup extends Components.IfxListGroup, HTMLElement {}
export const IfxListGroup: {
  prototype: IfxListGroup;
  new (): IfxListGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
