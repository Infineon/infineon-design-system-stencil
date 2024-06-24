export interface Option {
  value: string;
  label: string;
  selected?: boolean;  // Making this optional
  indeterminate?: boolean;
  children?: Option[];  // Sub-options
  checkboxRef?: HTMLIfxCheckboxElement;
}
