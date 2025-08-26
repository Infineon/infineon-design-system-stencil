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

  dropdownSize = "m";
  dropdownSizes = ["m", "s"];
  dropdownSizeIndex = 0;

  dropdownVariant= "primary";
  dropdownVariants = ["primary", "secondary", "tertiary"];
  dropdownVariantIndex = 0;

  toggleDropdownSize() {
    this.dropdownSizeIndex = (this.dropdownSizeIndex + 1) % this.dropdownSizes.length;
    this.dropdownSize = this.dropdownSizes[this.dropdownSizeIndex];
  }

  toggleDropdownVariant() {
    this.dropdownVariantIndex = (this.dropdownVariantIndex + 1) % this.dropdownVariants.length;
    this.dropdownVariant = this.dropdownVariants[this.dropdownVariantIndex];
  }

  toggleDropdownDisabled() {
    this.dropdownDisabled = !this.dropdownDisabled;
  }

}
