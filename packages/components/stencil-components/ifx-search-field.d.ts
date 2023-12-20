import type { Components, JSX } from "../dist/types/components";

interface IfxSearchField extends Components.IfxSearchField, HTMLElement {}
export const IfxSearchField: {
  prototype: IfxSearchField;
  new (): IfxSearchField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
