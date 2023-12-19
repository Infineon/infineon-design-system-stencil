import type { Components, JSX } from "../dist/types/components";

interface IfxSearchBar extends Components.IfxSearchBar, HTMLElement {}
export const IfxSearchBar: {
  prototype: IfxSearchBar;
  new (): IfxSearchBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
