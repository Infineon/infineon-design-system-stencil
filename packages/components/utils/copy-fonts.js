const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Use synchronous operations for CI reliability
try {
  const src = path.join(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');
  const dest = path.join(__dirname, '../www/build/fonts');
  console.log('Copying fonts from', src, 'to', dest);
  
  if (fs.existsSync(src)) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    // Use cp -r for reliability in CI environments
    execSync(`cp -r ${src}/* ${dest}/`, { stdio: 'inherit' });
    console.log('Fonts copied successfully');
  } else {
    console.warn('Font directory not found, creating empty directory');
    fs.mkdirSync(dest, { recursive: true });
  }
} catch (err) {
  console.error('Error:', err);
  // Still exit with 0 to not fail builds
  process.exit(0);
}