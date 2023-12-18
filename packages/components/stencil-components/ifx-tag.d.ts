import type { Components, JSX } from "../dist/types/components";

interface IfxTag extends Components.IfxTag, HTMLElement {}
export const IfxTag: {
  prototype: IfxTag;
  new (): IfxTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
