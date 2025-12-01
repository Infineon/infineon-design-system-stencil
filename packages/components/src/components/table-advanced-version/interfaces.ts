export interface ButtonInterface {
	disabled?: boolean;
	variant?: string;
	size?: string;
	target?: string;
	href?: string;
	theme?: string;
	type?: string;
	fullWidth?: boolean;
	icon?: string;
	iconPosition?: string;
	text: string;
}

export interface IconButtonInterface {
	disabled?: boolean;
	variant?: string;
	size?: string;
	target?: string;
	href?: string;
	shape?: string;
	icon?: string;
}

export interface LinkInterface {
	disabled?: boolean;
	variant?: string;
	size?: string;
	target?: string;
	href?: string;
	download?: string;
	text: string;
}

export interface StatusInterface {
	color?: string;
	label?: string;
	border?: boolean;
}

export const ButtonKeys: Array<keyof ButtonInterface> = [
	"disabled",
	"variant",
	"size",
	"target",
	"href",
	"theme",
	"type",
	"fullWidth",
	"text",
];

export const IconButtonKeys: Array<keyof IconButtonInterface> = [
	"disabled",
	"variant",
	"size",
	"target",
	"href",
	"shape",
	"icon",
];

export const StatusKeys: Array<keyof StatusInterface> = [
	"color",
	"label",
	"border",
];
