export interface ComponentAttribute {
	[key: string]: string;
}

export interface ComponentStructure {
	tag: string;
	attributes: ComponentAttribute;
	textContent: string;
	children: ComponentStructure[];
}

export interface ComponentEvent {
	name: string;
	description: string;
	patterns?: string;
	sourceComponent?: string | null;
}

export interface ComponentInfo {
	component: string;
	title?: string;
	storyName?: string;
	structure: ComponentStructure;
	events: ComponentEvent[];
	defaultArgs: Record<string, unknown>;
	argTypes: Record<string, unknown>;
}

export interface StoryMetadata {
	title?: string;
	component?: string;
	args?: Record<string, unknown>;
	argTypes?: Record<string, unknown>;
	[key: string]: unknown;
}

/**
 * Represents a Storybook story export
 * CSF2: Function that takes args and returns HTML or Elements
 * CSF3: Object with render function and optional args
 */
export type StoryExport =
	| (((args?: Record<string, unknown>) => string | Element) & {
			args?: Record<string, unknown>;
	  })
	| {
			render: (args?: Record<string, unknown>) => string | Element | unknown;
			args?: Record<string, unknown>;
	  };
