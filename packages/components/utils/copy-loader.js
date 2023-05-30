const os = require('os');
const { spawnSync } = require('child_process');

if (os.platform() === 'win32') {
  const vueOutput = spawnSync('xcopy', ['loader', '..\\components-vue\\loader', '/s', '/y', '/I'], {
    shell: true
  });
  if (vueOutput.error) {
    console.error(vueOutput.error);
  }
  const reactOutput = spawnSync('xcopy', ['loader', '..\\components-react\\loader', '/s', '/y', '/I'], {
    shell: true
  });
  if (reactOutput.error) {
    console.error(reactOutput.error);
  }
} else {
  const vueOutput = spawnSync('rsync', ['-av', 'loader/', '../components-vue/loader'], {
    shell: true
  });

  if (vueOutput.error) {
    console.error(vueOutput.error);
  }
  const reactOutput = spawnSync('rsync', ['-av', 'loader/', '../components-react/loader'], {
    shell: true
  });

  if (reactOutput.error) {
    console.error(reactOutput.error);
  }
}
