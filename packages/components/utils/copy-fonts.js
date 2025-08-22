const ncp = require('ncp').ncp;
const path = require('path');
const fs = require('fs');

const src = path.resolve(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');
const dest = path.resolve(__dirname, '../www/build/fonts');

// Ensure destination directory exists
if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
}

ncp(src, dest, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log('Fonts copied successfully');
    process.exit(0);
  }
});