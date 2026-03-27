/**
 * Cleans up Lit-specific syntax from rendered HTML
 * Removes Lit SSR markers and converts Lit-specific attributes to standard HTML
 */
export function cleanLitHTML(html: string): string {
  return html
    // Remove lit-part and lit-node comments
    .replace(/<!--lit-part[^>]*?-->|<!--lit-node[^>]*?-->|<!--\/lit-part-->/g, "")
    // Clean up Lit-specific attribute prefixes:
    // - Remove ?attr="false" entirely
    .replace(/\s+\?[\w-]+="false"/g, "")
    // - Convert ?attr="true" to just attr (boolean attributes)
    .replace(/\s+\?(\w+(?:-\w+)*)="true"/g, " $1")
    // - Remove ? from other boolean attrs (keep the attr)
    .replace(/\s+\?(\w+(?:-\w+)*)=/g, " $1=")
    // - Remove . prefix from property bindings
    .replace(/\s+\.(\w+(?:-\w+)*)=/g, " $1=")
    // - Convert @event to onevent
    .replace(/\s+@(\w+(?:-\w+)*)=/g, " on$1=")
    // Clean up multiple spaces
    .replace(/\s+/g, " ")
    // Clean up space before closing tags
    .replace(/\s+>/g, ">")
    // Clean up space after opening tags
    .replace(/>\s+</g, "><")
    // Restore newlines for readability
    .replace(/></g, ">\n<")
    .trim();
}

/**
 * Unwraps wrapper divs to extract the core ifx-* component
 */
export function unwrapComponent(element: Element): Element {
  if (
    !element ||
    element.tagName.toLowerCase() !== "div" ||
    element.children.length === 0
  ) {
    return element;
  }

  // Check if this is a wrapper div (no meaningful attributes except event listeners)
  const hasOnlyEventAttributes = Array.from(element.attributes).every((attr) =>
    attr.name.startsWith("on")
  );
  const firstChild = element.children[0];
  const isIfxComponent = firstChild?.tagName.toLowerCase().startsWith("ifx-");

  // If it's a wrapper div with an ifx-* component inside, unwrap it
  if (
    (element.attributes.length === 0 || hasOnlyEventAttributes) &&
    isIfxComponent
  ) {
    // Move event listeners from wrapper to the component if needed
    if (hasOnlyEventAttributes) {
      Array.from(element.attributes).forEach((attr) => {
        if (!firstChild.hasAttribute(attr.name)) {
          firstChild.setAttribute(attr.name, attr.value);
        }
      });
    }
    return firstChild;
  }

  return element;
}
