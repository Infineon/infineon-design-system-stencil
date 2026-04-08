import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { z } from "zod";
import { handleCli } from "./cli/index.js";
import {
	buildComponentIndex,
	getComponentDoc,
	getDdsVersion,
	getSource,
} from "./runtime/dds.js";
import { normalizeComponentName } from "./views/frameworkNotes.js";

const FrameworkSchema = z.enum(["html", "react", "vue", "angular"]);
const IncludeSchema = z.enum([
	"properties",
	"events",
	"slots",
	"css",
	"examples",
]);

const ListComponentsInputSchema = z
	.object({
		framework: FrameworkSchema.default("react").describe(
			"Target framework (defaults to React if unspecified)",
		),
	})
	.strict();

const GetComponentInputSchema = z
	.object({
		component: z
			.string()
			.min(1)
			.describe(
				'Component name (e.g. "ifx-button", "ifx-text-field"). If unsure, use infineon_list_components first.',
			),
		framework: FrameworkSchema.default("react").describe(
			"Framework (defaults to React)",
		),
		include: z
			.array(IncludeSchema)
			.optional()
			.describe("Optional: Limit response sections (default: all)"),
	})
	.strict();

const GetFoundationInputSchema = z
	.object({
		story: z
			.string()
			.min(1)
			.describe(
				'Story slug, e.g. "foundations/color", "setup/gettingstarted", or "setup/framework-integration/react"',
			),
	})
	.strict();

export async function startServer() {
	const server = new McpServer({
		name: "infineon-design-system",
		version: "1.0.0",
		description:
			"Infineon Design System (DDS) - Official component library and design foundations. Use these tools whenever implementing UI components (buttons, forms, inputs, cards, layouts) or styling in Infineon projects. Provides React, Vue, Angular, and HTML components with design tokens, spacing, colors, and typography guidelines.",
	});

	server.registerTool(
		"infineon_list_components",
		{
			description:
				'List all available Infineon Design System (DDS) components for a framework. **Use this when:**\n- User asks "what components are available?"\n- Starting a new feature and need to browse options\n- User doesn\'t know the exact component name\n- Need to show component catalog\n\nReturns: Markdown table with component names and descriptions',
			inputSchema: ListComponentsInputSchema,
		},
		async ({ framework }) => {
			const version = await getDdsVersion();
			const md = await buildComponentIndex({
				version,
				framework,
			});

			return { content: [{ type: "text", text: md }] };
		},
	);

	server.registerTool(
		"infineon_get_component_docs",
		{
			description:
				"Get comprehensive Infineon DDS component documentation including props, events, slots, styling, and code examples. **Primary tool for component implementation.**\n\n**Always use when:**\n- User wants to add ANY UI element (button, input, dropdown, card, etc.)\n- Questions about component properties or events\n- Need usage examples or code snippets\n- Styling/theming questions\n\n**This is the DEFAULT tool for component-related questions.**",
			inputSchema: GetComponentInputSchema,
		},
		async ({ component, framework, include }) => {
			const version = await getDdsVersion();
			const md = await getComponentDoc({
				version,
				component: normalizeComponentName(component),
				framework,
				include: include ?? [
					"properties",
					"events",
					"slots",
					"css",
					"examples",
				],
			});

			return { content: [{ type: "text", text: md }] };
		},
	);

	server.registerTool(
		"infineon_list_foundations",
		{
			description:
				"List Infineon Design System foundations (colors, typography, spacing, icons, etc.) and setup guides. **Use when:**\n- User asks about design tokens, colors, spacing\n- Questions about setup/installation\n- Need design system guidelines\n- Typography or theming questions",
			inputSchema: z.object({}),
		},
		async () => {
			const source = await getSource();
			const foundations = source.foundations || new Map();

			const categories = new Map<string, string[]>();
			for (const [slug, story] of foundations) {
				if (!categories.has(story.category)) {
					categories.set(story.category, []);
				}
				const categoryArray = categories.get(story.category);
				if (categoryArray) {
					categoryArray.push(`- **${slug}**: ${story.title}`);
				}
			}

			const lines: string[] = ["# DDS Foundation Stories & Guides", ""];
			for (const [category, stories] of categories) {
				lines.push(`## ${category}`, "", ...stories, "");
			}

			return { content: [{ type: "text", text: lines.join("\n") }] };
		},
	);

	server.registerTool(
		"infineon_get_foundation_docs",
		{
			description:
				"Get detailed documentation for design foundations (color palettes, spacing scale, typography) or setup guides. **Use for:**\n- Color/spacing token questions\n- Typography scale and font usage\n- Getting started guides\n- Framework-specific setup guides for React, Angular, Vue, and HTML\n- Design principles and accessibility\n\nInput: story slug from infineon_list_foundations (e.g. 'foundations/color' or 'setup/framework-integration/react')",
			inputSchema: GetFoundationInputSchema,
		},
		async ({ story }) => {
			const source = await getSource();
			const foundations = source.foundations || new Map();
			const foundationStory = foundations.get(story.toLowerCase());

			if (!foundationStory) {
				return {
					content: [
						{
							type: "text",
							text: `Foundation story "${story}" not found. Use infineon_list_foundations to see available stories.`,
						},
					],
				};
			}

			const md = [
				`# ${foundationStory.title}`,
				"",
				`*Category: ${foundationStory.category}*`,
				"",
				foundationStory.content,
			].join("\n");

			return { content: [{ type: "text", text: md }] };
		},
	);

	const transport = new StdioServerTransport();
	await server.connect(transport);
}

// Handle CLI commands or start the server
async function main() {
	const args = process.argv.slice(2);
	const result = await handleCli(args);

	if (result === "continue") {
		await startServer();
	}
}

main().catch((error) => {
	console.error("Error:", error);
	process.exit(1);
});
