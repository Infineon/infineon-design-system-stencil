// import '../src/plugins/infineonIcons';
import '../src/global/global.scss'
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
        'Setup & Info',
        [
          'Getting started',
        ],
        'Components',
        'Contact'
      ]
    }
  }
}
