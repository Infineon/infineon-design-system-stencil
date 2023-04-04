const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '/index.html');
const isMaster = process.env.GITHUB_REF === 'refs/heads/master';
console.log("is local", process.env.GITHUB_REF === undefined)

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const linkRegex = /<\s*script[^>]+src\s*=\s*['"]\s?(https:\/\/www\.googletagservices\.com\/tag\/js\/gpt\.js)*([^'" ]+)\s*["'][^>]*><\/script>/gis

const cdnLinkLatest = '<script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil@^18.0.0/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const cdnLinkCanary = '<script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const localLink = '<script type="module" src="dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';

let newLink;

if (process.env.GITHUB_REF === undefined) {
  newLink = localLink;
} else {
  newLink = isMaster ? cdnLinkLatest : cdnLinkCanary;
}
const updatedContent = htmlContent.replace(linkRegex, newLink);

fs.writeFileSync(indexHtmlPath, updatedContent, 'utf-8');
console.log("updated link: ", newLink);
