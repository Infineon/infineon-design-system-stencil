import type { Components, JSX } from "../dist/types/components";

interface IfxAccordion extends Components.IfxAccordion, HTMLElement {}
export const IfxAccordion: {
  prototype: IfxAccordion;
  new (): IfxAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
