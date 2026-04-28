import { useState } from 'react';
import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  const directionOptions = ["horizontal","vertical"];
  const [directionIndex, setDirectionIndex] = useState(1);
  const [ariaLabelText, setAriaLabelText] = useState("Card");
  const positionOptions = ["left","right"];
  const [positionIndex, setPositionIndex] = useState(1);
  const [href, setHref] = useState("");
  const targetOptions = ["_blank","_self","_parent"];
  const [targetIndex, setTargetIndex] = useState(0);
  const [src, setSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg");
  const [alt, setAlt] = useState("Coffee");

  const toggleDirection = () => setDirectionIndex((i) => (i + 1) % directionOptions.length);
  const toggleAriaLabelText = (value: string) => setAriaLabelText(value);
  const togglePosition = () => setPositionIndex((i) => (i + 1) % positionOptions.length);
  const toggleHref = (value: string) => setHref(value);
  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const toggleSrc = (value: string) => setSrc(value);
  const toggleAlt = (value: string) => setAlt(value);

  const controlledProps = {
    "direction": directionOptions[directionIndex],
    "ariaLabelText": ariaLabelText,
    "position": positionOptions[positionIndex],
    "href": href,
    "target": targetOptions[targetIndex],
    "src": src,
    "alt": alt,
  } as Record<string, unknown>;
  const handleImgPosition = (event: CustomEvent) => {
    console.log('imgPosition:', event);
    // Add your handler logic here
  };

  const formatPropValueForCode = (value: unknown): string => {
		if (typeof value === "boolean") return `{${value}}`;
		if (typeof value === "number") return `{${value}}`;
		if (value === null) return "{null}";
		if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
			return `{${JSON.stringify(value)}}`;
		}
		const escaped = String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
		return `"${escaped}"`;
	};

	const controlledPropsCode = [
    ["direction", controlledProps["direction"]],
    ["ariaLabelText", controlledProps["ariaLabelText"]],
    ["position", controlledProps["position"]],
    ["href", controlledProps["href"]],
    ["target", controlledProps["target"]],
    ["src", controlledProps["src"]],
    ["alt", controlledProps["alt"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  const handleImgPosition = (event: CustomEvent) => {
    console.log('imgPosition:', event);
    // Add your handler logic here
  };

  return (
      <IfxCard
        ariaLabel=""
        __CONTROLLED_PROPS__>
        <IfxCardImage
          position="right"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
          alt="Coffee"
          slot="img"
          onImgPosition={handleImgPosition} />
        <IfxCardOverline>
          Overline
        </IfxCardOverline>
        <IfxCardHeadline>
          Headline
        </IfxCardHeadline>
        <IfxCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </IfxCardText>
        <IfxCardLinks slot="buttons">
          <IfxButton variant="primary">
            Button
          </IfxButton>
          <IfxButton variant="secondary">
            Button
          </IfxButton>
        </IfxCardLinks>
      </IfxCard>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxCard
        ariaLabel=""
        {...(controlledProps as any)}>
        <IfxCardImage
          position="right"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
          alt="Coffee"
          slot="img"
          onImgPosition={handleImgPosition} />
        <IfxCardOverline>
          Overline
        </IfxCardOverline>
        <IfxCardHeadline>
          Headline
        </IfxCardHeadline>
        <IfxCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </IfxCardText>
        <IfxCardLinks slot="buttons">
          <IfxButton variant="primary">
            Button
          </IfxButton>
          <IfxButton variant="secondary">
            Button
          </IfxButton>
        </IfxCardLinks>
      </IfxCard>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleDirection}>Toggle Direction</IfxButton>
        <IfxButton variant="secondary" onClick={togglePosition}>Toggle Position</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => toggleAriaLabelText(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => toggleHref(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="src" type="text" value={String(src)} onInput={(event) => toggleSrc(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="alt" type="text" value={String(alt)} onInput={(event) => toggleAlt(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>direction:</b> {String(directionOptions[directionIndex])}</div>
          <div><b>ariaLabelText:</b> {String(ariaLabelText)}</div>
          <div><b>position:</b> {String(positionOptions[positionIndex])}</div>
          <div><b>href:</b> {String(href)}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
          <div><b>src:</b> {String(src)}</div>
          <div><b>alt:</b> {String(alt)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

