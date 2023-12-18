import type { Components, JSX } from "../dist/types/components";

interface IfxChip extends Components.IfxChip, HTMLElement {}
export const IfxChip: {
  prototype: IfxChip;
  new (): IfxChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
