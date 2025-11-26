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
  dropdownDisabled = false;
  dropdownNoCloseOnOutsideClick = false;
  dropdownNoCloseOnMenuClick = false;

  dropdownSize = "m";
  dropdownSizes = ["m", "s"];
  dropdownSizeIndex = 0;

  dropdownVariant= "primary";
  dropdownVariants = ["primary", "secondary", "tertiary"];
  dropdownVariantIndex = 0;

  dropdownPlacement= "bottom-start";
  dropdownPlacements = ["bottom-start", "auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"];
  dropdownPlacementIndex = 0;

  toggleDropdownSize() {
    this.dropdownSizeIndex = (this.dropdownSizeIndex + 1) % this.dropdownSizes.length;
    this.dropdownSize = this.dropdownSizes[this.dropdownSizeIndex];
  }

  toggleDropdownVariant() {
    this.dropdownVariantIndex = (this.dropdownVariantIndex + 1) % this.dropdownVariants.length;
    this.dropdownVariant = this.dropdownVariants[this.dropdownVariantIndex];
  }

  toggleDropdownPlacement() {
    this.dropdownPlacementIndex = (this.dropdownPlacementIndex + 1) % this.dropdownPlacements.length;
    this.dropdownPlacement = this.dropdownPlacements[this.dropdownPlacementIndex];
  }

  toggleDropdownDisabled() {
    this.dropdownDisabled = !this.dropdownDisabled;
  }

  toggleDropdownNoCloseOnOutsideClick() {
    this.dropdownNoCloseOnOutsideClick = !this.dropdownNoCloseOnOutsideClick;
  }

  toggleDropdownNoCloseOnMenuClick() {
    this.dropdownNoCloseOnMenuClick = !this.dropdownNoCloseOnMenuClick;
  }

}
