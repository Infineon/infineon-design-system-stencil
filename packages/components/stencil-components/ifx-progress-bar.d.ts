import type { Components, JSX } from "../dist/types/components";

interface IfxProgressBar extends Components.IfxProgressBar, HTMLElement {}
export const IfxProgressBar: {
  prototype: IfxProgressBar;
  new (): IfxProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
