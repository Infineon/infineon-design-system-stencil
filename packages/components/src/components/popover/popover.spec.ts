import { newSpecPage } from '@stencil/core/testing';
import { Popover } from './popover';

describe('ifx-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover></ifx-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <ifx-popover>
        <mock:shadow-root>
          <div class="popover__container">
            <slot></slot>
            <div class="popover" role="dialog" aria-modal="false">
              <button aria-label="Close Popover" class="popover-close">
                <ifx-icon icon="cross16"></ifx-icon>
              </button>
              <div class="popover-content">
                <slot name="content"></slot>
              </div>
              <svg class="popover-arrow-svg" fill="none" height="8" style="position: absolute;" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8L0 0L12 0L6 8Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </mock:shadow-root>
      </ifx-popover>
    `);
  });

  it('renders with title and text', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover popover-title="Test Title" text="Test content"></ifx-popover>`,
    });

    const titleElement = page.root.shadowRoot.querySelector('.popover-title');
    const textElement = page.root.shadowRoot.querySelector('.popover-text');

    expect(titleElement.textContent).toBe('Test Title');
    expect(textElement.textContent).toBe('Test content');
  });

  it('applies disabled class when disabled is true', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover disabled="true"></ifx-popover>`,
    });

    const popover = page.root.shadowRoot.querySelector('.popover');
    expect(popover).toHaveClass('popover--disabled');
  });


  it('emits ifxOpen event when show method is called', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover></ifx-popover>`,
    });

    const component = page.rootInstance;
    const openSpy = jest.fn();
    page.root.addEventListener('ifxOpen', openSpy);

    await component.show();

    expect(openSpy).toHaveBeenCalled();
    expect(component.popoverVisible).toBe(true);
  });

  it('emits ifxClose event when hide method is called', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover></ifx-popover>`,
    });

    const component = page.rootInstance;
    component.popoverVisible = true;

    const closeSpy = jest.fn();
    page.root.addEventListener('ifxClose', closeSpy);

    await component.hide();

    expect(closeSpy).toHaveBeenCalled();
    expect(component.popoverVisible).toBe(false);
  });

  it('does not show when disabled', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover disabled="true"></ifx-popover>`,
    });

    const component = page.rootInstance;
    await component.show();

    expect(component.popoverVisible).toBe(false);
  });

  it('is initially open when open prop is true', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover open></ifx-popover>`,
    });

    const component = page.rootInstance;
    expect(component.popoverVisible).toBe(true);
  });


  it('toggles visibility when toggle method is called', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover></ifx-popover>`,
    });

    const component = page.rootInstance;

    expect(component.popoverVisible).toBe(false);

    await component.toggle();
    expect(component.popoverVisible).toBe(true);

    await component.toggle();
    expect(component.popoverVisible).toBe(false);
  });

  it('renders with aria-label when provided', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover aria-label="Test aria label"></ifx-popover>`,
    });

    const container = page.root.shadowRoot.querySelector('.popover__container');
    expect(container.getAttribute('aria-label')).toBe('Test aria label');
  });

  it('has role="dialog" on popover element', async () => {
    const page = await newSpecPage({
      components: [Popover],
      html: `<ifx-popover></ifx-popover>`,
    });

    const popover = page.root.shadowRoot.querySelector('.popover');
    expect(popover.getAttribute('role')).toBe('dialog');
  });
});
