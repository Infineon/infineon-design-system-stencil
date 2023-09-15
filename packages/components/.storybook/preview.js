
import { defineCustomElements } from '../loader';


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
    }
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