// import '../src/plugins/infineonIcons';
import '../src/global/global.scss'
import {defineCustomElements} from '../loader';

defineCustomElements();

 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
