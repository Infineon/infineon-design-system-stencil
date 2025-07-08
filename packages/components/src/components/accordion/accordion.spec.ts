// src/components/accordion/accordion.spec.ts
import { newSpecPage } from 'jest-stencil-runner';
import { Accordion } from './accordion';

describe('ifx-accordion', () => {
  it('renders with correct structure', async () => {
    const { root } = await newSpecPage({
      components: [Accordion],
      html: `<ifx-accordion></ifx-accordion>`,
    });

    expect(root).toEqualHtml(`
      <ifx-accordion>
        <template shadowrootmode="open">
          <div class="accordion-wrapper">
            <slot></slot>
          </div>
        </template>
      </ifx-accordion>
    `);

    const wrapper = root.shadowRoot.querySelector('.accordion-wrapper');
    expect(wrapper).toBeDefined();
  });
});