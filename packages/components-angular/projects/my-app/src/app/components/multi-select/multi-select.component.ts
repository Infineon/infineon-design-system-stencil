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

  disabled = false;
  required = true;
  error = false;
  showSearch = true;
  showSelectAll = true;
  showExpandCollapse = true;
  showClearButton = true;
  showNoResultsMessage = true;

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

  toggleShowSelectAll() {
    this.showSelectAll = !this.showSelectAll;
  }

  toggleShowExpandCollapse() {
    this.showExpandCollapse = !this.showExpandCollapse;
  }

  toggleShowClearButton() {
    this.showClearButton = !this.showClearButton;
  }

  toggleShowNoResultsMessage() {
    this.showNoResultsMessage = !this.showNoResultsMessage;
  }
}