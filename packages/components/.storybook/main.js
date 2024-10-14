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

};

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