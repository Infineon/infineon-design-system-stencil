const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const ncp = promisify(require('ncp').ncp);

// Use absolute paths for maximum reliability
const src = path.resolve(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');
const dest = path.resolve(__dirname, '../www/build/fonts');

console.log(`Copying fonts from ${src} to ${dest}`);

// Create destination directory if it doesn't exist
if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
}

// Copy files
ncp(src, dest)
  .then(() => {
    console.log('Fonts copied successfully');
    process.exit(0); // Explicitly exit with success code
  })
  .catch((err) => {
    console.warn('Font copy warning:', err);
    // Create empty directory if source doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    process.exit(0); // Still exit with 0 to not fail builds
  });