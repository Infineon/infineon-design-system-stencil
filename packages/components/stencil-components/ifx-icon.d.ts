import type { Components, JSX } from "../dist/types/components";

interface IfxIcon extends Components.IfxIcon, HTMLElement {}
export const IfxIcon: {
  prototype: IfxIcon;
  new (): IfxIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
