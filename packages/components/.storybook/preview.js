
import {
  defineCustomElements,
  applyPolyfills,
} from '../loader';


applyPolyfills().then(() => {
  defineCustomElements(window);
});
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: "docs",
  docs: {
    source: {
      state: 'open',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
  },

  options: {
    storySort: {
      order: [
        'About',
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
        'Contact'
      ]
    }
  }
}
