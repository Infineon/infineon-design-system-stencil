// Re-export types from shared dds-tooling package
export type {
	ComponentEvent,
	ComponentInfo,
	ComponentStructure,
	StoryExport,
	StoryMetadata,
} from "@infineon/dds-tooling";

// Legacy type alias for backwards compatibility
export type ComponentAttribute = Record<string, string>;

