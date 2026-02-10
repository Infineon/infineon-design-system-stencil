import { useState } from 'react';
import { IfxDropdown, IfxDropdownMenu, IfxDropdownItem, IfxDropdownTriggerButton, IfxButton } from '@infineon/infineon-design-system-react';

function Dropdown() {
  const [disabled, setDisabled] = useState(false);
  const [noCloseOnMenuClick, setNoCloseOnMenuClick] = useState(false);
  const [noCloseOnOutsideClick, setNoCloseOnOutsideClick] = useState(false);

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ["m", "s"];

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["primary", "secondary", "tertiary"];

  const [placementIndex, setPlacementIndex] = useState(0);
  const placements = ["bottom-start", "auto", "auto-start", "auto-end", "top-start", "top", "top-end", "bottom", "bottom-end", "right-start", "right", "right-end", "left-start", "left", "left-end"];

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleNoCloseOnOutsideClick = () => {
    setNoCloseOnOutsideClick(prevNoCloseOnOutsideClick => !prevNoCloseOnOutsideClick);
  }

  const toggleNoCloseOnMenuClick = () => {
    setNoCloseOnMenuClick(prevNoCloseOnMenuClick => !prevNoCloseOnMenuClick);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  const togglePlacement = () => {
    setPlacementIndex((index) => (index + 1) % placements.length);
  }

  return (
    <div className="component">
      <h2>Dropdown</h2>
      <IfxDropdown placement={placements[placementIndex]} disabled={disabled} default-open="false" no-close-on-outside-click={noCloseOnOutsideClick} no-close-on-menu-click={noCloseOnMenuClick} no-append-to-body="false">
        <IfxDropdownTriggerButton variant={variants[variantIndex]}>
          Dropdown
        </IfxDropdownTriggerButton>

        <IfxDropdownMenu size={sizes[sizeIndex]}>
          <IfxDropdownItem icon="c-info-16" target="_self" href="">Menu Item</IfxDropdownItem>
          <IfxDropdownItem icon="c-info-16" target="_self" href="">Menu Item</IfxDropdownItem>
          <IfxDropdownItem icon="c-info-16" target="_self" href="">Menu Item</IfxDropdownItem>
          <IfxDropdownItem icon="c-info-16" target="_self" href="">Menu Item</IfxDropdownItem>
          <IfxDropdownItem icon="c-info-16" target="_self" href="">Menu Item</IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size of Dropdown Items</IfxButton>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={togglePlacement}>Toggle Placement</IfxButton>
      <IfxButton variant="secondary" onClick={toggleNoCloseOnOutsideClick}>Toggle No Close on Outside Click</IfxButton>
      <IfxButton variant="secondary" onClick={toggleNoCloseOnMenuClick}>Toggle No Close on Menu Click</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Variant:</b> {variants[variantIndex]}</span><br />
      <span><b>Size of dropdown items:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Placement:</b> {placements[placementIndex]}</span><br />
      <span><b>No Close on Outside Click:</b> {String(noCloseOnOutsideClick)}</span><br />
      <span><b>No Close on Menu Click:</b> {String(noCloseOnMenuClick)}</span><br />
    </div>
  );
}

export default Dropdown;