import { JSDOM } from "jsdom";

let isDomSetup = false;

/**
 * Sets up a minimal jsdom environment for parsing stories
 * This only needs to be called once
 */
export function setupDOM(): void {
  if (isDomSetup) return;

  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
    url: "http://localhost",
    pretendToBeVisual: true,
  });

  global.document = dom.window.document as unknown as Document;
  global.window = dom.window as unknown as Window & typeof globalThis;
  global.HTMLElement = dom.window.HTMLElement as unknown as typeof HTMLElement;
  global.Element = dom.window.Element as unknown as typeof Element;

  // Mock querySelector/querySelectorAll to return safe objects
  const originalQuerySelector = dom.window.document.querySelector.bind(
    dom.window.document
  );
  const originalQuerySelectorAll = dom.window.document.querySelectorAll.bind(
    dom.window.document
  );

  const mockElement = {
    addEventListener: () => {},
    removeEventListener: () => {},
    querySelector: () => mockElement,
    querySelectorAll: () => [],
  };

  dom.window.document.querySelector = (selector: string) => {
    const element = originalQuerySelector(selector);
    return (element || mockElement) as any;
  };

  dom.window.document.querySelectorAll = (selector: string) => {
    const elements = originalQuerySelectorAll(selector);
    return elements.length > 0 ? elements : ([] as any);
  };

  // Stub out setTimeout to prevent async event listener attachments during SSR
  global.setTimeout = (() => 0) as unknown as typeof setTimeout;

  isDomSetup = true;
}
