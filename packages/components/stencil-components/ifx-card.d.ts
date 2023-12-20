import type { Components, JSX } from "../dist/types/components";

interface IfxCard extends Components.IfxCard, HTMLElement {}
export const IfxCard: {
  prototype: IfxCard;
  new (): IfxCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
