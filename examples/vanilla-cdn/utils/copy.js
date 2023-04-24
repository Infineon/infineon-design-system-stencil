const os = require('os');
const { spawnSync } = require('child_process');

if (os.platform() === 'win32') {
  const result = spawnSync('xcopy', ['..\\..\\dist', '.\\dist', '/s', '/y', '/I'], {
    shell: true
  });
  if (result.error) {
    console.error(result.error);
  }
} else {
  const result = spawnSync('rsync', ['-av', '../../dist/', './dist/'], {
    shell: true
  });
  if (result.error) {
    console.error(result.error);
  }
}
