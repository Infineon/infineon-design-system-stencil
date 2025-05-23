
import { defineCustomElements } from '../loader';
import ifxTheme from './ifxTheme';
import tokens from './exported-sass-array.json';
import "../public-storybook/fonts/ifx-fonts.css";

//since font is defined via a CSS custom property that can be changed by the user, and storybook cant read those properties when defined via the :root selector, it needs to be set here
function applyStyles() {
  const style = document.documentElement.style;
  const fontFamilyToken = tokens.find(token => token.name === '$ifxFontFamilyBody');
  // Extract the value if the token exists
  const fontFamilyValue = fontFamilyToken ? `"${fontFamilyToken.value}"` : sans - serif;
  // console.log(fontFamilyValue)
  style.setProperty('--ifx-font-family', fontFamilyValue);
}
export const decorators = [
  (Story) => {
    applyStyles();
    return Story();
  }
];

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
    theme: ifxTheme,
    canvas: {
      sourceState: "shown"
    },
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
        'Foundations',
        'Components',
        // 'Contact'
      ]
    }
  }
}