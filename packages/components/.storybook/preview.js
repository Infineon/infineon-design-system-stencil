
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
  options: {
    storySort: {
      order: [
        // 'About',
        'Setup & installation',
        [
          'Getting started',
          'Framework integration',
          [
            'Wrapper Components',
            'React + Stencil',
            'Vue + Stencil'
          ]
        ],
        'Components',
        'Documentation',
        // 'Contact'
      ]
    }
  }
}