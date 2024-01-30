//compiles _fonts.scss to .css and copies the entire /fonts directory to the desired locations (used to be done via copy task in the stencil.config.ts)
const sass = require('node-sass');
const fs = require('fs-extra');
const path = require('path');

// Define the source file and destination directories
const srcDir = '../../node_modules/@infineon/design-system-tokens/dist/fonts';
const destDirs = ['dist/fonts', 'public-storybook/fonts', 'www/build/fonts'];

// Copy the entire directory to each destination
destDirs.forEach(destDir => {
  fs.copySync(srcDir, destDir);
});

// Render the SCSS to CSS
sass.render({ file: path.join(srcDir, '_fonts.scss') }, (err, result) => {
  if (err) throw err;

  // Write the CSS to each destination directory
  destDirs.forEach(destDir => {
    const destPath = path.join(destDir, '_fonts.css');
    fs.writeFile(destPath, result.css, err => {
      if (err) throw err;
    });
  });
});
