const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '/index.html');
const isMaster = process.env.GITHUB_REF === 'refs/heads/master';

console.log("is local", process.env.GITHUB_REF === undefined);

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const scriptRegex = /<\s*script\s+type="module"\s+src\s*=\s*['"][^'"]*infineon-design-system-stencil[^'"]*\.esm\.js['"]\s*><\/\s*script\s*>/gis;
const stylesheetRegex = /<\s*script\s+type="module"\s+src\s*=\s*['"][^'"]*infineon-design-system-stencil[^'"]*\.css['"]\s*><\/\s*script\s*>/gis;

const version = require('../../../packages/components/package.json').version;

const cdnLinkLatestJS = '<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const cdnLinkCanaryJS = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>`;

const cdnLinkLatestCSS = '<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>';
const cdnLinkCanaryCSS = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>`;

const localLinkJS = '<script type="module" src="./dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const localLinkCSS = '<script type="module" src="./dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>';

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

const updatedHtmlContent = htmlContent
  .replace(scriptRegex, newScriptSrc)
  .replace(stylesheetRegex, newStylesheetSrc);

fs.writeFileSync(indexHtmlPath, updatedHtmlContent, 'utf-8');

console.log("updated JS link: ", newScriptSrc);
console.log("updated CSS link: ", newStylesheetSrc);
