// import '../src/plugins/infineonIcons';
import '../src/global/global-theme.scss'
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
