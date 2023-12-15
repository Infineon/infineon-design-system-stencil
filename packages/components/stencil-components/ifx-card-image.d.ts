import type { Components, JSX } from "../dist/types/components";

interface IfxCardImage extends Components.IfxCardImage, HTMLElement {}
export const IfxCardImage: {
  prototype: IfxCardImage;
  new (): IfxCardImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
