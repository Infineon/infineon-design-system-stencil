
import { defineCustomElements } from '../loader';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    canvas: {
      sourceState: "shown"
    },
    transformSource: input =>
      prettier.format(input, {
        parser: 'babel',
        plugins: [prettierBabel],
      }),
  },
  options: {
    storySort: {
      order: [
        'Setup & installation',
        [
          'About',
          'Getting started',
          'Framework integration',
          [
            'Wrapper Components',
            'React + Stencil',
            'Vue + Stencil'
          ],
          'FAQ',
        ],
        'Components',
        // 'Contact'
      ]
    }
  }
}