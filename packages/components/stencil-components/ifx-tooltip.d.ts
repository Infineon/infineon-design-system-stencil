import type { Components, JSX } from "../dist/types/components";

interface IfxTooltip extends Components.IfxTooltip, HTMLElement {}
export const IfxTooltip: {
  prototype: IfxTooltip;
  new (): IfxTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
