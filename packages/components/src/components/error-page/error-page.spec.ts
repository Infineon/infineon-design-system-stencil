import { newSpecPage } from '@stencil/core/testing';
import { ErrorPage } from './error-page';

describe('ifx-error', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page></ifx-error-page>`,
    });
    expect(page.root).toEqualHtml(`
      <ifx-error-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ifx-error-page>
    `);
  });
});
