import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  disabled = false;
  dropdownNoCloseOnOutsideClick = false;
  dropdownNoCloseOnMenuClick = false;

  dropdownSize = "m";
  dropdownSizes = ["m", "s"];
  dropdownSizeIndex = 0;

  variant = "primary";
  variants = ["primary", "secondary", "tertiary"];
  variantIndex = 0;

  placement = "bottom-start";
  placements = ["bottom-start", "auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"];
  placementIndex = 0;

  toggleSize() {
    this.dropdownSizeIndex = (this.dropdownSizeIndex + 1) % this.dropdownSizes.length;
    this.dropdownSize = this.dropdownSizes[this.dropdownSizeIndex];
  }

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  togglePlacement() {
    this.placementIndex = (this.placementIndex + 1) % this.placements.length;
    this.placement = this.placements[this.placementIndex];
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleNoCloseOnOutsideClick() {
    this.dropdownNoCloseOnOutsideClick = !this.dropdownNoCloseOnOutsideClick;
  }

  toggleNoCloseOnMenuClick() {
    this.dropdownNoCloseOnMenuClick = !this.dropdownNoCloseOnMenuClick;
  }

}
