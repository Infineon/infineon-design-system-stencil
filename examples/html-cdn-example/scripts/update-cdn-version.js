const fs = require('fs');
const path = require('path');

const version = process.env.PACKAGE_VERSION;
if (!version) {
  console.error('PACKAGE_VERSION environment variable is required');
  process.exit(1);
}

console.log(`Updating CDN links to version: ${version}`);

const htmlFile = 'index.html';

if (!fs.existsSync(htmlFile)) {
  console.error(`${htmlFile} not found`);
  process.exit(1);
}

let content = fs.readFileSync(htmlFile, 'utf8');

// Comment out local development links
content = content.replace(
  /^(\s*)<script type="module" src="\.\.\/node_modules\/@infineon\/infineon-design-system-stencil\/.*$/gm,
  '$1<!-- <script type="module" src="../node_modules/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script> -->'
);

content = content.replace(
  /^(\s*)<link rel="stylesheet".*href="\.\.\/node_modules\/@infineon\/infineon-design-system-stencil\/.*$/gm,
  '$1<!-- <link rel="stylesheet" type="text/css" href="../node_modules/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css" media="all"> -->'
);

// Uncomment and update production CDN links with specific version
content = content.replace(
  /^\s*<!-- (<script type="module" src="https:\/\/unpkg\.com\/@infineon\/infineon-design-system-stencil).*> -->/gm,
  `    <script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil@${version}"></script>`
);

content = content.replace(
  /^\s*<!-- (<link rel="stylesheet".*href="https:\/\/unpkg\.com\/@infineon\/infineon-design-system-stencil).*"> -->/gm,
  `    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.css" media="all">`
);

fs.writeFileSync(htmlFile, content);
console.log(`Successfully updated ${htmlFile} with CDN links for version ${version}`);