export interface Option {
	value: string;
	selected?: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	children?: Option[];
	checkboxRef?: HTMLIfxCheckboxElement;
}
