const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '/index.html');
const isMaster = process.env.GITHUB_REF === 'refs/heads/master';

console.log("is local", process.env.GITHUB_REF === undefined)

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const linkRegex = /<\s*script[^>]+src\s*=\s*['"]\s?(https:\/\/www\.googletagservices\.com\/tag\/js\/gpt\.js)*([^'" ]+)\s*["'][^>]*><\/script>/gis

const version = require('../../package.json').version;
const cdnLinkLatest = '<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const cdnLinkCanary = `<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${version}/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>`;
const localLink = '<script type="module" src="dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';

let newLink;

console.log("current branch: ", process.env.GITHUB_REF, " - package version: ", require('../../package.json').version);

if (process.env.GITHUB_REF === undefined) {
  newLink = localLink;
} else {
  newLink = isMaster ? cdnLinkLatest : cdnLinkCanary;
}
const updatedContent = htmlContent.replace(linkRegex, newLink);

fs.writeFileSync(indexHtmlPath, updatedContent, 'utf-8');
console.log("updated link: ", newLink);
