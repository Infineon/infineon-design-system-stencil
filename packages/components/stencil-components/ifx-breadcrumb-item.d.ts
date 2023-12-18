import type { Components, JSX } from "../dist/types/components";

interface IfxBreadcrumbItem extends Components.IfxBreadcrumbItem, HTMLElement {}
export const IfxBreadcrumbItem: {
  prototype: IfxBreadcrumbItem;
  new (): IfxBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
