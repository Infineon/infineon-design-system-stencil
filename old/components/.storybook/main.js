import { dirname, join } from "path";
import { glob } from 'glob'; 
import path from 'path'

module.exports = {
  stories: async () => {
    // Use the custom function to get the list of stories
    const stories = findAndExcludeFiles();
    return stories;
  },
    addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: getAbsolutePath("@storybook/html-webpack5"),
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Development',
  },
  staticDirs: ['../public-storybook'],
  managerHead: async (head)=>{
    const style = `
    <style>
    .sidebar-header > div > a {
        margin-bottom: 36px;
        position: relative;
    }

    .sidebar-header > div > a::after {
        display: block;
        content: 'Latest Version ${await getLatestLibraryVersion()}';
        margin: 10px 0 0 0;
        color: #0A8276;
        font-size: 18px;
        font-weight: bold;
    }

        .css-10g5mev:hover:not(.css-10g5mev[data-selected="true"]) { 
          background-color: #DFF4F3!important;
        }
    </style>
    `;
    return `${head}\n${style}`;
  },

};

async function getLatestLibraryVersion() {
  const response = await fetch('https://registry.npmjs.org/@infineon/infineon-design-system-stencil/latest')
  const result = await response.json();
  return result.version;
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

 const findAndExcludeFiles = () => {
   const allStories = [
    ...glob.sync(path.join(__dirname, '../src/**/*.stories.@(js|jsx|ts|tsx)').replaceAll('\\', '/')),
    ...glob.sync(path.join(__dirname, '../src/**/*.mdx').replaceAll('\\', '/'))
  ];


  
  // Exclude specific files or patterns
  const filteredStories = allStories.filter(story => {
    return !(story.includes('components/table-advanced-version/filter-type-group') || story.includes('components/table-advanced-version/list'));
  });



  const sortedStories = filteredStories.sort();
  return sortedStories;
};