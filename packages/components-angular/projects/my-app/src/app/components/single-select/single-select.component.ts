import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-single-select',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss'
})
export class SingleSelectComponent {
  disabled = false;
  required = true;
  error = false;
  showSearch = true;
  showClearButton = false;

  sizes = ['s', 'm'];
  sizeIndex = 1;
  size = this.sizes[this.sizeIndex];

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleRequired() {
    this.required = !this.required;
  }

  toggleError() {
    this.error = !this.error;
  }

  toggleShowSearch() {
    this.showSearch = !this.showSearch;
  }

  toggleShowClearButton() {
    this.showClearButton = !this.showClearButton;
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }
}