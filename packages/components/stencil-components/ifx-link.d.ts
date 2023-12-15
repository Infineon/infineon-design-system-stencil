import type { Components, JSX } from "../dist/types/components";

interface IfxLink extends Components.IfxLink, HTMLElement {}
export const IfxLink: {
  prototype: IfxLink;
  new (): IfxLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
