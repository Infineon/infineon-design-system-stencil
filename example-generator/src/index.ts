import { AngularExampleGenerator } from "./generators/angular-generator.js";
import { AngularModuleExampleGenerator } from "./generators/angular-module-generator.js";
import { HTMLExampleGenerator } from "./generators/html-generator.js";
import { ReactExampleGenerator } from "./generators/react-generator.js";
import { VueExampleGenerator } from "./generators/vue-generator.js";
import { extractComponentInfo } from "./parser.js";

console.log("🚀 Example Generator");
console.log("═".repeat(50));
console.log("Extracting component information...\n");

// Extract info from multiple components
const componentStories = [
	{
		path: "../../packages/components/src/components/accordion/accordion.stories.ts",
		name: "Accordion",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/action-list/action-list.stories.ts",
		name: "Action List",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/alert/alert.stories.ts",
		name: "Alert",
		stories: ["Default"],
	},
	// { path: '../../packages/components/src/components/breadcrumb/breadcrumb.stories.ts', name: 'Breadcrumb', stories: ['Default'] }, // Story has invalid structure (href + dropdown on same item)
	{
		path: "../../packages/components/src/components/button/button.stories.ts",
		name: "Button",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/card/card.stories.ts",
		name: "Card",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/checkbox/checkbox.stories.ts",
		name: "Checkbox",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/checkbox-group/checkbox-group.stories.ts",
		name: "Checkbox Group",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/chip/chip.stories.ts",
		name: "Chip",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/content-switcher/content-switcher.stories.ts",
		name: "Content Switcher",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/date-picker/date-picker.stories.ts",
		name: "Date Picker",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/dropdown/dropdown.stories.ts",
		name: "Dropdown",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/footer/footer.stories.ts",
		name: "Footer",
		stories: ["Medium"],
	},
	{
		path: "../../packages/components/src/components/icon-button/icon-button.stories.ts",
		name: "Icon Button",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/indicator/indicator.stories.ts",
		name: "Indicator",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/link/link.stories.ts",
		name: "Link",
		stories: ["Default"],
	},
	// { path: '../../packages/components/src/components/modal/modal.stories.ts', name: 'Modal', stories: ['Default'] }, // Requires manual JavaScript to wire up button click
	{
		path: "../../packages/components/src/components/navigation/navbar/navbar.stories.ts",
		name: "Navbar",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/navigation/sidebar/sidebar.stories.ts",
		name: "Sidebar",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/notification/notification.stories.ts",
		name: "Notification",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/pagination/pagination.stories.ts",
		name: "Pagination",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/progress-bar/progress-bar.stories.ts",
		name: "Progress Bar",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/radio-button/radio-button.stories.ts",
		name: "Radio Button",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/radio-button-group/radio-button-group.stories.ts",
		name: "Radio Button Group",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/search-bar/search-bar.stories.ts",
		name: "Search Bar",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/search-field/search-field.stories.ts",
		name: "Search Field",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/segmented-control/segmented-control.stories.ts",
		name: "Segmented Control",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/select/single-select/select.stories.ts",
		name: "Select",
		stories: ["Default"],
	},
	// { path: '../../packages/components/src/components/select/multi-select/multiselect.stories.ts', name: 'Multi Select', stories: ['Default'] }, // Has DOM access code
	{
		path: "../../packages/components/src/components/spinner/spinner.stories.ts",
		name: "Spinner",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/status/status.stories.ts",
		name: "Status",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/stepper/stepper.stories.ts",
		name: "Stepper",
		stories: ["Default", "Compact"],
	},
	{
		path: "../../packages/components/src/components/switch/switch.stories.ts",
		name: "Switch",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/table-basic-version/table.stories.ts",
		name: "Table Basic",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/table-advanced-version/table.stories.ts",
		name: "Table Advanced",
		stories: ["DefaultState"],
	},
	{
		path: "../../packages/components/src/components/tabs/tabs.stories.ts",
		name: "Tabs",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/text-field/text-field.stories.ts",
		name: "Text Field",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/textarea/textarea.stories.ts",
		name: "Textarea",
		stories: ["Default"],
	},
	{
		path: "../../packages/components/src/components/tooltip/tooltip.stories.ts",
		name: "Tooltip",
		stories: ["Default"],
	},
];

// Configure examples to generate
const examples = [
	{
		generator: new HTMLExampleGenerator(),
		config: { outputDir: "../examples/html-cdn-example" },
	},
	{
		generator: new HTMLExampleGenerator(),
		config: {
			outputDir: "../examples/html-vite-example",
			filePath: "src/index.html",
		},
	},
	{
		generator: new ReactExampleGenerator(),
		config: { outputDir: "../examples/react-example" },
	},
	{
		generator: new VueExampleGenerator(),
		config: { outputDir: "../examples/vue-example" },
	},
	{
		generator: new AngularExampleGenerator(),
		config: { outputDir: "../examples/angular-standalone-example" },
	},
	{
		generator: new AngularModuleExampleGenerator(),
		config: { outputDir: "../examples/angular-module-example" },
	},
];

const components = [];
for (const story of componentStories) {
	try {
		const infos = await extractComponentInfo(story.path, story.stories);
		components.push(...infos); // Spread to add all variants
		console.log(
			`✅ Extracted: ${story.name}${infos.length > 1 ? ` (${infos.length} variants)` : ""}`,
		);
	} catch (error) {
		console.error(`❌ Failed to extract: ${story.name}`);
		console.error(
			`   Error: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
}

console.log(`\n${"─".repeat(50)}`);

// Generate examples using each generator
for (const example of examples) {
	const iconMap: Record<string, string> = {
		"HTML/Web Components": "🔨",
		React: "⚛️",
		Vue: "💚",
		"Angular Standalone": "🅰️",
	};
	const icon = iconMap[example.generator.getName()] || "📦";
	console.log(
		`\n${icon}  Generating ${example.generator.getName()} examples...`,
	);

	const result = example.generator.generate(components, example.config);

	if (result.success) {
		if (result.filesGenerated.length > 0) {
			console.log(`   📝 Generated ${result.filesGenerated.length} file(s)`);
		}
		if (result.filesUpdated.length > 0) {
			console.log(`   ✏️  Updated ${result.filesUpdated.length} file(s)`);
		}
	} else {
		console.error(`   ❌ Generation failed:`);
		result.errors?.forEach((err) => {
			console.error(`      ${err}`);
		});
	}
}

console.log(`\n${"═".repeat(50)}`);
console.log("✨ Generation complete!\n");
