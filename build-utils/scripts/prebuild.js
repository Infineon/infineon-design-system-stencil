// Licensed under the MIT License.
'use strict';
const { EOL } = require('os');
const fs = require('fs-extra');
const path = require('path');
const constants = require('../constants');

function updateJSDomTypeDefinition() {
  var relativePath = path.join('node_modules', '@types', 'jsdom', 'base.d.ts');
  var filePath = path.join(constants.ExtensionRootDir, relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn("JSdom base.d.ts not found '" + filePath + "' (Jupyter Extension post install script)");
    return;
  }
  var fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });
  var replacedContents = fileContents.replace(
    /\s*globalThis: DOMWindow;\s*readonly \["Infinity"]: number;\s*readonly \["NaN"]: number;/g,
    [
      'globalThis: DOMWindow;',
      '// @ts-ignore',
      'readonly ["Infinity"]: number;',
      '// @ts-ignore',
      'readonly ["NaN"]: number;'
    ].join(`${EOL}        `)
  );
  if (replacedContents === fileContents) {
    console.warn('JSdom base.d.ts not updated');
    return;
  }

  fs.writeFileSync(filePath, replacedContents);
  console.log("prebuild script successfully executed");

}

updateJSDomTypeDefinition();