import { useState } from 'react';
import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  const [overline, setOverline] = useState("Overline");
  const [headline, setHeadline] = useState("Headline");
  const [description, setDescription] = useState("Some quick example text to build on the card title and make up the bulk of the card's content.");
  const buttonOptions = ["button","link","none"];
  const [buttonIndex, setButtonIndex] = useState(0);
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

  const toggleOverline = (value: string) => setOverline(value);
  const toggleHeadline = (value: string) => setHeadline(value);
  const toggleDescription = (value: string) => setDescription(value);
  const toggleButton = () => setButtonIndex((i) => (i + 1) % buttonOptions.length);
  const toggleDirection = () => setDirectionIndex((i) => (i + 1) % directionOptions.length);
  const toggleAriaLabelText = (value: string) => setAriaLabelText(value);
  const togglePosition = () => setPositionIndex((i) => (i + 1) % positionOptions.length);
  const toggleHref = (value: string) => setHref(value);
  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const toggleSrc = (value: string) => setSrc(value);
  const toggleAlt = (value: string) => setAlt(value);

  const controlledProps = {
    "overline": overline,
    "headline": headline,
    "description": description,
    "button": buttonOptions[buttonIndex],
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
    ["overline", controlledProps["overline"]],
    ["headline", controlledProps["headline"]],
    ["description", controlledProps["description"]],
    ["button", controlledProps["button"]],
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
        <IfxButton variant="secondary" onClick={toggleButton}>Toggle Button</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDirection}>Toggle Direction</IfxButton>
        <IfxButton variant="secondary" onClick={togglePosition}>Toggle Position</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="overline" type="text" value={String(overline)} onInput={(event) => toggleOverline(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="headline" type="text" value={String(headline)} onInput={(event) => toggleHeadline(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="description" type="text" value={String(description)} onInput={(event) => toggleDescription(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => toggleAriaLabelText(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => toggleHref(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="src" type="text" value={String(src)} onInput={(event) => toggleSrc(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="alt" type="text" value={String(alt)} onInput={(event) => toggleAlt(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>overline:</b> {String(overline)}</div>
          <div><b>headline:</b> {String(headline)}</div>
          <div><b>description:</b> {String(description)}</div>
          <div><b>button:</b> {String(buttonOptions[buttonIndex])}</div>
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

