const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const ncp = promisify(require('ncp').ncp);

(async function() {
  try {
    const src = path.join(__dirname, '../node_modules/@infineon/design-system-tokens/dist/fonts');
    const dest = path.join(__dirname, '../www/build/fonts');
    console.log('Copying fonts from', src, 'to', dest);
    
    if (fs.existsSync(src)) {
      await ncp(src, dest);
      console.log('Fonts copied successfully');
    } else {
      console.warn('Font directory not found, skipping copy');
      fs.mkdirSync(dest, {recursive:true});
    }
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();