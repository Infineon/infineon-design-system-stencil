import type { Components, JSX } from "../dist/types/components";

interface IfxPagination extends Components.IfxPagination, HTMLElement {}
export const IfxPagination: {
  prototype: IfxPagination;
  new (): IfxPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
