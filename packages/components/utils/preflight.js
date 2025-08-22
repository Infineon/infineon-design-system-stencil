const fs = require('fs');
const path = require('path');

// Check if fonts directory exists
const fontsDir = path.join(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');

if (!fs.existsSync(fontsDir)) {
  console.error('❌ Fonts missing! Check design tokens package.');
  process.exit(1);
} else {
  console.log('✅ Fonts directory found at:', fontsDir);
}