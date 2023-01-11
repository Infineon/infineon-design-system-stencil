/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const glob = require('fast-glob');
const template = require('./resources/templates/Markdown.story.mdx');

const parseEmojis = (value) => {
  const emojisArray = toArray(value);

  // toArray outputs React elements for emojis and strings for other
  const newValue = emojisArray.reduce((previous, current) => {
    if (typeof current === 'string') {
      return previous + current;
    }
    return previous + current.props.children;
  }, '');

  return newValue;
};

const templateStory = (name, mdContent) => {
  const options = {
    title: `Docs/${name}`,
    content: mdContent
      .toString()
      // add linebreak between `<a>`-tag and headline
      .replace(/<\/a>(\r\n|\r|\n)#\s/g, '</a>\n\n# ')
  };

  return fs.outputFile(`tmp/${name}.story.mdx`, template(options));
};

const createStories = async () => {
  const filePaths = await glob(`**/*.md`, {
    cwd: './',
    absolute: true,
    ignore: ['node_modules', 'docs'],
  });

  filePaths.forEach(async (filePath) => {
    const [, name] = filePath.match(
      /\w+\/(?:.*\/)*(\w+)\.md$/
    );

    const content = await fs.readFile(filePath);
    await templateStory(name, content);
  });
};

createStories();