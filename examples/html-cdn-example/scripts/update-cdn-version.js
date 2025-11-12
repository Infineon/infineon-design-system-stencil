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

// Remove dev-only section
content = content.replace(/<!-- local-dev-only -->[\s\S]*?<!-- \/local-dev-only -->/g, '');

// Uncomment production-only section and update version
content = content.replace(
  /<!-- production-only([\s\S]*?)\/production-only -->/g, 
  (match, p1) => {
    return p1.replace(
      /https:\/\/unpkg\.com\/@infineon\/infineon-design-system-stencil(?:@[^\/\s"]+)?/g,
      `https://unpkg.com/@infineon/infineon-design-system-stencil@${version}`
    );
  }
);

fs.writeFileSync(htmlFile, content);
console.log(`Successfully updated ${htmlFile} with CDN links for version ${version}`);