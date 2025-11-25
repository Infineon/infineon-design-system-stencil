
const fs = require('fs');

const keep = ['pr-2116', 'pr-2105', 'pr-2100', 'pr-2097', 'pr-2093', 'pr-2074', 'pr-2066', 'pr-2063', 'pr-1990', 'pr-1723', '1341'];
const prefix = 'pr-';

// Get all top-level folders
const topLevelItems = fs.readdirSync('.', { withFileTypes: true });

topLevelItems.forEach(item => {
    if (item.isDirectory()) {
        console.log("######## Checking folder: " + item.name + " ########");
        const subitems = fs.readdirSync(item.name, { withFileTypes: true });
        for (const subitem of subitems) {
            if (subitem.isDirectory()) {
                const folderName = subitem.name;
                
                if (folderName.startsWith(prefix)) {
                    const fullPath = `${item.name}/${folderName}`;
                    if (!keep.includes(folderName)) {
                        console.log(`Deleting folder: ${fullPath}`);
                        fs.rmSync(fullPath, { recursive: true, force: true });
                    } else {
                        console.log(`Keeping folder: ${fullPath} (in keep list)`);
                    }
                }
            }
        }
    }
});

console.log('Cleanup complete!');