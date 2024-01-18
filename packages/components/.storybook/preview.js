
import { defineCustomElements } from '../loader';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

//since font is defined via a CSS custom property that can be changed by the user, and storybook cant read those properties when defined via the :root selector, it needs to be set here
export const decorators = [(Story) => `<div style="--ifx-font-family: 'Source Sans 3';">${Story().outerHTML || Story()}</div>`];

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