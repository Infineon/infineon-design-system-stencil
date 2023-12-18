import type { Components, JSX } from "../dist/types/components";

interface IfxSwitch extends Components.IfxSwitch, HTMLElement {}
export const IfxSwitch: {
  prototype: IfxSwitch;
  new (): IfxSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
