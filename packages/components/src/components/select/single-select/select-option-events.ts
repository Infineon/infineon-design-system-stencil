export type SelectOptionChangeReason =
	| "registered"
	| "removed"
	| "selected";

export interface SelectOptionChangedDetail {
	value: string;
	selected: boolean;
	reason: SelectOptionChangeReason;
}
