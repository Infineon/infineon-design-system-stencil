const fs = require('fs');
const path = require('path');

// Path to the index.html file
const indexHtmlPath = path.join(__dirname, '/index.html');

// Determine if the current branch is master
const isMaster = process.env.GITHUB_REF === 'refs/heads/master';

// Read the content of index.html
const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// Define regex patterns to match both local dist and CDN script tags for JS and link tags for CSS files
const scriptRegex = /<\s*script[^>]+src\s*=\s*['"]\s?(https:\/\/cdn\.jsdelivr\.net\/npm\/@infineon\/infineon-design-system-stencil[^'" ]*\.esm\.js|\.\/dist\/infineon-design-system-stencil\/infineon-design-system-stencil\.esm\.js)\s*["'][^>]*><\/script>/gis;
const stylesheetRegex = /<\s*link[^>]+href\s*=\s*['"]\s?(https:\/\/cdn\.jsdelivr\.net\/npm\/@infineon\/infineon-design-system-stencil[^'" ]*\.css|\.\/dist\/infineon-design-system-stencil\/infineon-design-system-stencil\.css)\s*["'][^>]*>/gis;

// Load the current version from the package.json file
const version = require('../../../packages/components/package.json').version;

// Define the CDN links
const cdnLinkLatestJS = '<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const cdnLinkCanaryJS = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>`;

const cdnLinkLatestCSS = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">';
const cdnLinkCanaryCSS = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">`;

// Define the local links
const localLinkJS = '<script type="module" src="./dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const localLinkCSS = '<link rel="stylesheet" href="./dist/infineon-design-system-stencil/infineon-design-system-stencil.css">';

// Determine the new source links based on the environment
let newScriptSrc;
let newStylesheetSrc;

console.log("current branch: ", process.env.GITHUB_REF, " - package version: ", version);

if (process.env.GITHUB_REF === undefined) {
  newScriptSrc = localLinkJS;
  newStylesheetSrc = localLinkCSS;
} else {
  newScriptSrc = isMaster ? cdnLinkLatestJS : cdnLinkCanaryJS;
  newStylesheetSrc = isMaster ? cdnLinkLatestCSS : cdnLinkCanaryCSS;
}

console.log("newScriptSrc: ", newScriptSrc);
console.log("newStylesheetSrc: ", newStylesheetSrc);

// Replace local dist or CDN links with the appropriate new CDN links in the HTML content
const updatedHtmlContent = htmlContent
  .replace(scriptRegex, newScriptSrc)
  .replace(stylesheetRegex, newStylesheetSrc);

// Write the updated content back to index.html
fs.writeFileSync(indexHtmlPath, updatedHtmlContent, 'utf-8');

console.log("updated JS link: ", newScriptSrc);
console.log("updated CSS link: ", newStylesheetSrc);
