const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const ncp = promisify(require('ncp').ncp);

(async function() {
  try {
    const src = path.join(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');
    const dest = path.join(__dirname, '../public-storybook/fonts');
    console.log('Copying storybook fonts from', src, 'to', dest);
    
    if (fs.existsSync(src)) {
      await ncp(src, dest);
      console.log('Storybook fonts copied successfully');
    } else {
      console.warn('Storybook font directory not found, skipping copy');
      fs.mkdirSync(dest, {recursive:true});
    }
  } catch (err) {
    console.error('Warning: Storybook font copy failed:', err);
    // Exit with 0 to not break builds even when there are warnings
    process.exit(0);
  }
})();