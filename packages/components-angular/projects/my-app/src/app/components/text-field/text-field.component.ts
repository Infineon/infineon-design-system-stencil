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
  textFieldError = false;
  textFieldDisabled = false;
  textFieldSuccess = false;
  textFieldReadOnly = false;
  textFieldRequired = false;
  textFieldDeleteIcon = false;

  textFieldSize = "m";
  textFieldSizes = ["s", "m"];
  textFieldSizeIndex = 1;

  textFieldIcon = "";
  textFieldIcons = ["", "arrowDown16"];
  textFieldIconIndex = 0;

  toggleTextFieldError() {
    this.textFieldError = !this.textFieldError;
  }

  toggleTextFieldDisabled() {
    this.textFieldDisabled = !this.textFieldDisabled;
  }

  toggleTextFieldSuccess() {
    this.textFieldSuccess = !this.textFieldSuccess;
  }

  toggleTextFieldReadOnly() {
    this.textFieldReadOnly = !this.textFieldReadOnly;
  }

  toggleTextFieldRequired() {
    this.textFieldRequired = !this.textFieldRequired;
  }

  toggleTextFieldDeleteIcon() {
    this.textFieldDeleteIcon = !this.textFieldDeleteIcon;
  }

  toggleTextFieldSize() {
    this.textFieldSizeIndex = (this.textFieldSizeIndex + 1) % this.textFieldSizes.length;
    this.textFieldSize = this.textFieldSizes[this.textFieldSizeIndex];
  }

  toggleTextFieldIcon() {
    this.textFieldIconIndex = (this.textFieldIconIndex + 1) % this.textFieldIcons.length;
    this.textFieldIcon = this.textFieldIcons[this.textFieldIconIndex];
  }
}
