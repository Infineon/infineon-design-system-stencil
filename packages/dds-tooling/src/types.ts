/**
 * Shared types for story parsing
 */

export interface ComponentStructure {
	tag: string;
	attributes: Record<string, string>;
	textContent: string;
	children: ComponentStructure[];
}

export interface ComponentEvent {
	name: string;
	description: string;
	patterns?: string;
	sourceComponent: string | null;
}

export interface ComponentInfo {
	component: string;
	title?: string;
	storyName: string;
	structure: ComponentStructure;
	events: ComponentEvent[];
	defaultArgs: Record<string, unknown>;
	propTypes: Record<string, Record<string, string>>;
	argTypes?: Record<string, unknown>;
}

export interface StoryMetadata {
	title?: string;
	component?: string;
	args?: Record<string, unknown>;
	argTypes?: Record<string, unknown>;
}

export interface StoryExport {
	(args: Record<string, unknown>): unknown;
	args?: Record<string, unknown>;
	render?: (args: Record<string, unknown>) => unknown;
}

export interface ParsedStory {
	name: string;
	html: string;
}
