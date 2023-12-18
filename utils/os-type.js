function getOperatingSystem() {
	console.log(process.platform)
	return process.platform;
}

function createSymlinks() {
	const { execSync } = require('child_process');
	const os = getOperatingSystem();

	try {
		execSync(`cd ../../../packages/components-vue`);
		if (os === 'win32') {
			console.log("executing on windows: removing node_modules and creating symlink")
			execSync(`npm run link-win`);
		} else {
			console.log("executing on linux: removing node_modules and creating symlink")
			execSync(`npm run link-unix`);
		}
		console.log("adding symlink to example application")
		execSync(`npm run link-example`);
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

createSymlinks();