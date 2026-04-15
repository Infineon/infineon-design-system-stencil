const element = document.querySelector("ifx-accordion") as HTMLElement | null;

const attributeValue = element?.getAttribute("auto-collapse");
const hasAttribute = element?.hasAttribute("auto-collapse");
element?.setAttribute("auto-collapse", "true");
element?.removeAttribute("auto-collapse");
element?.toggleAttribute("auto-collapse");
element?.autoCollapse = true;
element?.["autoCollapse"] = false;

console.log(attributeValue, hasAttribute, element);