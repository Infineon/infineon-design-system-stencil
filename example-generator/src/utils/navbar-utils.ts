export interface NavbarEntry {
	exampleId: string;
	title: string;
}

export const ALL_COMPONENTS_ID = "all-components";

export function buildExampleId(component: string, storyName?: string): string {
	const storyNameSuffix =
		storyName && storyName !== "Default"
			? `-${storyName.toLowerCase().replace(/\s+/g, "-")}`
			: "";

	return `${component}-example${storyNameSuffix}`;
}

interface NavbarGroup {
	label: string;
	start: string;
	end: string;
}

const navbarGroups: NavbarGroup[] = [
	{ label: "Components A-E", start: "A", end: "E" },
	{ label: "Components F-R", start: "F", end: "R" },
	{ label: "Components S-Z", start: "S", end: "Z" },
];

function getNormalizedFirstLetter(title: string): string {
	const match = title.trim().match(/[A-Za-z]/);
	return match ? match[0].toUpperCase() : "Z";
}

export function buildAlphabeticalNavbarGroups(
	entries: NavbarEntry[],
	renderGroup: (label: string, items: NavbarEntry[]) => string,
): string {
	const sortedEntries = [...entries].sort((first, second) =>
		first.title.localeCompare(second.title),
	);

	return navbarGroups
		.map((group) => {
			const items = sortedEntries.filter((entry) => {
				const firstLetter = getNormalizedFirstLetter(entry.title);
				return firstLetter >= group.start && firstLetter <= group.end;
			});

			return items.length > 0 ? renderGroup(group.label, items) : "";
		})
		.filter(Boolean)
		.join("\n");
}