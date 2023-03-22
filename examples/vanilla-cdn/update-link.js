const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '/index.html');
const isMaster = process.env.GITHUB_REF === 'refs/heads/master';

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const linkRegex = /<\s*script[^>]+src\s*=\s*['"]\s?(https:\/\/www\.googletagservices\.com\/tag\/js\/gpt\.js)*([^'" ]+)\s*["'][^>]*><\/script>/gis

const cdnLink = '<script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';
const localLink = '<script type="module" src="dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>';


const newLink = isMaster ? cdnLink : localLink;
const updatedContent = htmlContent.replace(linkRegex, newLink);

console.log("update link", updatedContent)

fs.writeFileSync(indexHtmlPath, updatedContent, 'utf-8');
