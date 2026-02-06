const fs = require("node:fs");
const path = require("node:path");

const version = process.env.PACKAGE_VERSION;
if (!version) {
	console.error("PACKAGE_VERSION environment variable is required");
	process.exit(1);
}

console.log(`Updating CDN links to version: ${version}`);

const htmlFile = "index.html";

if (!fs.existsSync(htmlFile)) {
	console.error(`${htmlFile} not found`);
	process.exit(1);
}

let content = fs.readFileSync(htmlFile, "utf8");

// Remove dev-only section
content = content.replace(
	/<!-- local-dev-only -->[\s\S]*?<!-- \/local-dev-only -->/g,
	"",
);

// Uncomment production-only section and update version
content = content.replace(
	/<!-- production-only([\s\S]*?)\/production-only -->/g,
	(_match, p1) => {
		return p1.replace(
			/https:\/\/cdn\.jsdelivr\.net\/npm\/@infineon\/infineon-design-system-stencil(?:@[^/\s"]+)?/g,
			`https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}`,
		);
	},
);

fs.writeFileSync(htmlFile, content);
console.log(
	`Successfully updated ${htmlFile} with CDN links for version ${version}`,
);

const packageJsonFile = path.join(__dirname, "..", "package.json");

// Remove dependency from package.json to remove the dependency
if (!fs.existsSync(packageJsonFile)) {
	console.error(`${packageJsonFile} not found`);
	process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, "utf8"));

if (packageJson.dependencies?.["@infineon/infineon-design-system-stencil"]) {
	delete packageJson.dependencies["@infineon/infineon-design-system-stencil"];
	console.log(
		"Removed @infineon/infineon-design-system-stencil from dependencies",
	);

	if (Object.keys(packageJson.dependencies).length === 0) {
		delete packageJson.dependencies;
		console.log("Removed empty dependencies object");
	}
}

if (packageJson["//"]) {
	delete packageJson["//"];
	console.log("Removed development comment");
}

fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2));
console.log(
	`Successfully updated ${packageJsonFile} - removed local development dependency`,
);
