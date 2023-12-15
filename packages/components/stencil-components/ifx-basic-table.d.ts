import type { Components, JSX } from "../dist/types/components";

interface IfxBasicTable extends Components.IfxBasicTable, HTMLElement {}
export const IfxBasicTable: {
  prototype: IfxBasicTable;
  new (): IfxBasicTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
