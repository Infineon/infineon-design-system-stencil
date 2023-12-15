import type { Components, JSX } from "../dist/types/components";

interface IfxSlider extends Components.IfxSlider, HTMLElement {}
export const IfxSlider: {
  prototype: IfxSlider;
  new (): IfxSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
