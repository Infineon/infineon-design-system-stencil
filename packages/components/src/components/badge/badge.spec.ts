// src/components/badge/badge.spec.ts
import { newSpecPage } from 'jest-stencil-runner';
import { Badge } from './badge';

describe('ifx-badge', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: `<ifx-badge></ifx-badge>`,
    });

    expect(root).toEqualHtml(`
      <ifx-badge>
        <template shadowrootmode="open">
          <div class="badge__container">
            <slot></slot>
          </div>
        </template>
      </ifx-badge>
    `);
  });

  it('should display slotted content', async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: `<ifx-badge>Test content</ifx-badge>`,
    });

    const slotElement = root.shadowRoot.querySelector('slot');
    const badgeContent = slotElement.assignedNodes()[0].textContent;
    expect(badgeContent).toBe('Test content');
  });
});