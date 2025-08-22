const fs = require('fs');
const path = require('path');

const tokensDir = path.join(__dirname, '../node_modules/@infineon/design-system-tokens/dist');
console.log('Checking design tokens at:', tokensDir);
console.log('Directory exists:', fs.existsSync(tokensDir));
console.log('Contents:', fs.existsSync(tokensDir) ? fs.readdirSync(tokensDir) : 'N/A');