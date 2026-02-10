import { useState } from 'react';
import { IfxButton, IfxIcon } from '@infineon/infineon-design-system-react';

function Button() {

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["primary", "secondary", "tertiary"];

  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["default", "danger", "inverse"];

  const [sizeIndex, setSizeIndex] = useState(2);
  const sizes = ["xs", "s", "m", "l"];

  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [iconIndex, setIconIndex] = useState(0);
  const icons = ["", "fileMpg16"];

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  const toggleTheme = () => {
    setThemeIndex((index) => (index + 1) % themes.length);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleFullWidth = () => {
    setFullWidth(prevFullWidth => !prevFullWidth);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleIcon = () => {
    setIconIndex((index) => (index + 1) % icons.length);
  }

  return (
    <div className="component">
      <h2>Button</h2>
      <IfxButton type="button" aria-label="Button" disabled={disabled} variant={variants[variantIndex]} size={sizes[sizeIndex]} target="_blank" theme={themes[themeIndex]} full-width={fullWidth}>
        <IfxIcon icon={icons[iconIndex]}></IfxIcon> Button
      </IfxButton>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={toggleTheme}>Toggle Theme</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <IfxButton variant="secondary" onClick={toggleFullWidth}>Toggle Full Width</IfxButton>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
      <br />
      <br />
      <span><b>Variant:</b> {variants[variantIndex]}</span><br />
      <span><b>Theme:</b> {themes[themeIndex]}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Full Width:</b> {String(fullWidth)}</span><br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Icon:</b> {icons[iconIndex]}</span><br />
    </div>
  )
}

export default Button;