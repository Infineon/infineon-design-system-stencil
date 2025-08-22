const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src = path.resolve(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');
const dest = path.resolve(__dirname, '../www/build/fonts');

try {
  console.log(`Copying fonts from ${src} to ${dest}`);
  
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  // Use synchronous shell command for maximum GitHub Actions compatibility
  if (fs.existsSync(src)) {
    execSync(`cp -r "${src}"/* "${dest}"/`, { stdio: 'inherit' });
    console.log('Fonts copied successfully');
  } else {
    console.warn('Font directory not found, creating empty destination');
  }
  
  // No explicit process.exit needed - script will end naturally
} catch (err) {
  console.error('Error copying fonts:', err);
  process.exit(1);
}