// This file generates the icons.figma.ts file for Code Connect 
// registering all icons available in the Figma design system.

import { client } from '@figma/code-connect'
import fs from 'fs'

async function generateIcons() {
    // fetch components from a figma file. If the `node-id` query parameter is used,
    // only components within those frames will be included. This is useful if your
    // file is very large, as this will speed up the query by a lot
    let components = await client.getComponents("https://www.figma.com/design/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-UI-icon-library?node-id=13284-1289",
    )

    console.log(`Found ${components.length} icons in Figma file.`)



    //   map each icon to a figma.connect call that looks like this:
    //   figma.connect('https://figma.com/file/ABc123IjkLmnOPq?node-id=41-41', {
    //     example: () => "icon-list"
    //   })
    fs.writeFileSync(
        'icon.figma.ts',
        `import figma, { html } from '@figma/code-connect/html'
        ${components.map(
            (c) => getIconTextDefinition(c),
        ).join('\n\n')}
        `,
    )

    console.log(`Generated icon.figma.ts with ${components.length} icons.`);
}

function getIconComponentDefinition(component) {
    return `
figma.connect('${component.figmaUrl}', {
    example: () => html\`<ifx-icon icon="${component.name}"></ifx-icon>\`
})`;
}

function getIconTextDefinition(component) {
    return `
figma.connect('${component.figmaUrl}', {
    example: () => "${component.name}"
})`;
}

generateIcons()