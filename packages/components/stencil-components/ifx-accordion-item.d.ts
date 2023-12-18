import type { Components, JSX } from "../dist/types/components";

interface IfxAccordionItem extends Components.IfxAccordionItem, HTMLElement {}
export const IfxAccordionItem: {
  prototype: IfxAccordionItem;
  new (): IfxAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
