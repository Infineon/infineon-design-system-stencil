import type { Components, JSX } from "../dist/types/components";

interface IfxListItem extends Components.IfxListItem, HTMLElement {}
export const IfxListItem: {
  prototype: IfxListItem;
  new (): IfxListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
