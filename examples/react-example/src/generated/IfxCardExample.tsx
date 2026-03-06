import { useState } from 'react';
import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  const buttonOptions = ["button","link","none"];
  const [buttonIndex, setButtonIndex] = useState(0);
  const directionOptions = ["horizontal","vertical"];
  const [directionIndex, setDirectionIndex] = useState(1);
  const positionOptions = ["left","right"];
  const [positionIndex, setPositionIndex] = useState(1);
  const targetOptions = ["_blank","_self","_parent"];
  const [targetIndex, setTargetIndex] = useState(0);

  const toggleButton = () => setButtonIndex((i) => (i + 1) % buttonOptions.length);
  const toggleDirection = () => setDirectionIndex((i) => (i + 1) % directionOptions.length);
  const togglePosition = () => setPositionIndex((i) => (i + 1) % positionOptions.length);
  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);

  const controlledProps = {
    "button": buttonOptions[buttonIndex],
    "direction": directionOptions[directionIndex],
    "position": positionOptions[positionIndex],
    "target": targetOptions[targetIndex],
  } as const;
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
    ["button", controlledProps["button"]],
    ["direction", controlledProps["direction"]],
    ["position", controlledProps["position"]],
    ["target", controlledProps["target"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  return (
      <IfxCard
        href=""
        ariaLabel="Card"
        __CONTROLLED_PROPS__>
        <IfxCardImage
          position="right"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
          alt="Coffee"
          slot="img" />
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
	return (
    <>
      <IfxCard
        href=""
        ariaLabel="Card"
        {...controlledProps}>
        <IfxCardImage
          position="right"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
          alt="Coffee"
          slot="img" />
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
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleButton}>Toggle Button</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDirection}>Toggle Direction</IfxButton>
        <IfxButton variant="secondary" onClick={togglePosition}>Toggle Position</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>button:</b> {String(buttonOptions[buttonIndex])}</div>
          <div><b>direction:</b> {String(directionOptions[directionIndex])}</div>
          <div><b>position:</b> {String(positionOptions[positionIndex])}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

