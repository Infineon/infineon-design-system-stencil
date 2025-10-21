import { newSpecPage } from '@stencil/core/testing';
import { MinimalComponent } from '../minimal-component';

describe('minimal-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MinimalComponent],
      html: `<minimal-component></minimal-component>`,
    });
    expect(page.root).toEqualHtml(`
      <minimal-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </minimal-component>
    `);
  });
});
