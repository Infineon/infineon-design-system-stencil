import type { Components, JSX } from "../dist/types/components";

interface IfxBadge extends Components.IfxBadge, HTMLElement {}
export const IfxBadge: {
  prototype: IfxBadge;
  new (): IfxBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
