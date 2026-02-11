import { useState } from 'react';
import { IfxChip, IfxChipItem, IfxButton } from '@infineon/infineon-design-system-react';

function Chip() {
  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ["small", "medium", "large"];

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["single", "multi"];

  const [readOnly, setReadOnly] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["outlined", "filled-light", "filled-dark"];

  const [iconIndex, setIconIndex] = useState(0);
  const icons = ["", "windows16"];

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  const toggleReadOnly = () => {
    setReadOnly(prevReadOnly => !prevReadOnly);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleTheme = () => {
    setThemeIndex((index) => (index + 1) % themes.length);
  }

  const toggleIcon = () => {
    setIconIndex((index) => (index + 1) % icons.length);
  }

  return (
    <div className="component">
      <h2>Chip</h2>
      <IfxChip placeholder="Label" size={sizes[sizeIndex]} variant={variants[variantIndex]} theme={themes[themeIndex]} icon={icons[iconIndex]} read-only={readOnly} aria-label="Chip" disabled={disabled}>
        <IfxChipItem value="Item Value 1">Item Label 1</IfxChipItem>
        <IfxChipItem value="Item Value 2">Item Label 2</IfxChipItem>
        <IfxChipItem value="Item Value 3">Item Label 3</IfxChipItem>
        <IfxChipItem value="Item Value 4">Item Label 4</IfxChipItem>
      </IfxChip>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleReadOnly}>Toggle Read Only</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTheme}>Toggle Theme</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
      </div>
      <br />
      
      <div class="state">
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
        <div><b>Variant:</b> {variants[variantIndex]}</div>
        <div><b>Read Only:</b> {String(readOnly)}</div>
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Theme:</b> {themes[themeIndex]}</div>
        <div><b>Icon:</b> {icons[iconIndex]}</div>
      </div>
    </div>
  );
}

export default Chip;
