const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '/index.html');
const isMaster = process.env.GITHUB_REF === 'refs/heads/master';

console.log("is local", process.env.GITHUB_REF === undefined)

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const scriptRegex = /<\s*script[^>]+src\s*=\s*['"]\s?(https:\/\/www\.googletagservices\.com\/tag\/js\/gpt\.js)*([^'" ]+)\s*["'][^>]*><\/script>/gis
// const stylesheetRegex = /<\s*link[^>]+href\s*=\s*['"]\s?(https:\/\/www\.googletagservices\.com\/tag\/js\/gpt\.js)*([^'" ]+)\s*["'][^>]*>/gis

const version = require('../../../packages/components/package.json').version;

const cdnLinkLatest = '<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script><script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@25.15.1--canary.1561.1c1eb8e300b13c71569ad58d2397e7bc06c66329.0/dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>';
const cdnLinkCanary = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>  <script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@25.15.1--canary.1561.1c1eb8e300b13c71569ad58d2397e7bc06c66329.0/dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>
`;

// const cdnStylesheetLatest = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>`;
// const cdnStylesheetCanary = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.css"></script>`;

const localLink = '<script type="module" src="./dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
// const localStylesheet = '<link rel="stylesheet" href="dist/infineon-design-system-stencil/infineon-design-system-stencil.css">';

let newScriptSrc;
// let newStylesheet

console.log("current branch: ", process.env.GITHUB_REF, " - package version: ", require('../../../packages/components/package.json').version);

if (process.env.GITHUB_REF === undefined) {
  newScriptSrc = localLink;
  // newStylesheet = localStylesheet;
} else {
  newScriptSrc = isMaster ? cdnLinkLatest : cdnLinkCanary;
  // newStylesheet = isMaster ? cdnStylesheetLatest : cdnStylesheetCanary;

}
const updatedScriptSrc = htmlContent.replace(scriptRegex, newScriptSrc);
// const updatedScriptSrcAndStylesheet = updatedScriptSrc.replace(stylesheetRegex, newStylesheet);

fs.writeFileSync(indexHtmlPath, updatedScriptSrc, 'utf-8');

console.log("updated: ", newScriptSrc);
