import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  error = false;
  disabled = false;
  success = false;
  readOnly = false;
  required = false;
  deleteIcon = false;

  size = "m";
  sizes = ["s", "m"];
  sizeIndex = 1;

  icon = "";
  icons = ["", "arrowDown16"];
  iconIndex = 0;

  toggleError() {
    this.error = !this.error;
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleSuccess() {
    this.success = !this.success;
  }

  toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  toggleRequired() {
    this.required = !this.required;
  }

  toggleDeleteIcon() {
    this.deleteIcon = !this.deleteIcon;
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }

  toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.icons.length;
    this.icon = this.icons[this.iconIndex];
  }
}
