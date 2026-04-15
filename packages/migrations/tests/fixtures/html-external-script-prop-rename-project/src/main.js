const element = document.querySelector("ifx-accordion");

const attributeValue = element?.getAttribute("auto-collapse");
const hasAttribute = element?.hasAttribute("auto-collapse");
element?.setAttribute("auto-collapse", "true");
element?.removeAttribute('auto-collapse');
element?.toggleAttribute("auto-collapse");
element?.autoCollapse = true;
element?.["autoCollapse"] = false;
element.autoCollapse = true;
element["autoCollapse"] = false;

console.log(attributeValue, hasAttribute, element);