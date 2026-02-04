import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent {

  multiDisabled = false;
  multiRequired = true;
  multiError = false;
  multiShowSearch = true;
  multiShowSelectAll = true;
  multiShowExpandCollapse = true;
  multiShowClearButton = true;
  multiShowNoResultsMessage = true;

  toggleDisabled() {
    this.multiDisabled = !this.multiDisabled;
  }

  toggleRequired() {
    this.multiRequired = !this.multiRequired;
  }

  toggleError() {
    this.multiError = !this.multiError;
  }

  toggleShowSearch() {
    this.multiShowSearch = !this.multiShowSearch;
  }

  toggleShowSelectAll() {
    this.multiShowSelectAll = !this.multiShowSelectAll;
  }

  toggleShowExpandCollapse() {
    this.multiShowExpandCollapse = !this.multiShowExpandCollapse;
  }

  toggleShowClearButton() {
    this.multiShowClearButton = !this.multiShowClearButton;
  }

  toggleShowNoResultsMessage() {
    this.multiShowNoResultsMessage = !this.multiShowNoResultsMessage;
  }
}