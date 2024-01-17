function getOperatingSystem() {
	console.log(process.platform)
	return process.platform;
}

function createSymlinks() {
	const { execSync } = require('child_process');
	const os = getOperatingSystem();

	try {
		if (os === 'win32') {
			console.log("executing on windows: removing node_modules and creating symlink")
			execSync(`npm run link-clean-win`);
		} else {
			console.log("executing on linux: removing node_modules and creating symlink")
			execSync(`npm run link-clean-unix`);
		}
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

createSymlinks();