import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  searchFieldDisabled = false;
  searchFieldDeleteIcon = true;

  searchFieldSize = "m";
  searchFieldSizes = ["s", "m"];
  searchFieldSizeIndex = 1;

  toggleSerchFieldDisabled() {
    this.searchFieldDisabled = !this.searchFieldDisabled;
  }

  toggleSearchFieldDeleteIcon() {
    this.searchFieldDeleteIcon = !this.searchFieldDeleteIcon;
  }

  toggleSearchFieldSize() {
    this.searchFieldSizeIndex = (this.searchFieldSizeIndex + 1) % this.searchFieldSizes.length;
    this.searchFieldSize = this.searchFieldSizes[this.searchFieldSizeIndex];
  }
}
