import type { Components, JSX } from "../dist/types/components";

interface IfxBreadcrumb extends Components.IfxBreadcrumb, HTMLElement {}
export const IfxBreadcrumb: {
  prototype: IfxBreadcrumb;
  new (): IfxBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
