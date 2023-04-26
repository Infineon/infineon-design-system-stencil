const os = require('os');
const { spawnSync } = require('child_process');

if (os.platform() === 'win32') {
  const result = spawnSync('xcopy', ['..\\..\\packages\\components\\dist', '.\\dist', '/s', '/y', '/I'], {
    shell: true
  });
  if (result.error) {
    console.error(result.error);
  }
} else {
  const result = spawnSync('rsync', ['-av', '../../packages/components/dist/', './dist/'], {
    shell: true
  });
  if (result.error) {
    console.error(result.error);
  }
}
