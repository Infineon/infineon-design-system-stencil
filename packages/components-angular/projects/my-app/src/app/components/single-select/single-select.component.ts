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
  selectDisabled = false;
  selectRequired = true;
  selectError = false;
  selectShowSearch = true;
  selectShowClearButton = false;

  selectSizes = ['s', 'm'];
  selectSizeIndex = 1;
  selectSize = this.selectSizes[this.selectSizeIndex];

  toggleDisabled() {
    this.selectDisabled = !this.selectDisabled;
  }

  toggleRequired() {
    this.selectRequired = !this.selectRequired;
  }

  toggleError() {
    this.selectError = !this.selectError;
  }

  toggleShowSearch() {
    this.selectShowSearch = !this.selectShowSearch;
  }

  toggleShowClearButton() {
    this.selectShowClearButton = !this.selectShowClearButton;
  }

  toggleSize() {
    this.selectSizeIndex = (this.selectSizeIndex + 1) % this.selectSizes.length;
    this.selectSize = this.selectSizes[this.selectSizeIndex];
  }
}