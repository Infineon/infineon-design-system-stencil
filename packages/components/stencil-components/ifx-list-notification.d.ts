import type { Components, JSX } from "../dist/types/components";

interface IfxListNotification extends Components.IfxListNotification, HTMLElement {}
export const IfxListNotification: {
  prototype: IfxListNotification;
  new (): IfxListNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
