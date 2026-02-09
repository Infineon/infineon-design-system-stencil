import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})

export class TextareaComponent {
  disabled = false;
  error = false;
  readOnly = false;
  textareaFullWidth = false;
  required = true;

  resizeIndex = 0;
  resizes = ['both', 'vertical', 'horizontal', 'none'];
  resize = this.resizes[this.resizeIndex];

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleError() {
    this.error = !this.error;
  }

  toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  toggleFullWidth() {
    this.textareaFullWidth = !this.textareaFullWidth;
  }

  toggleRequired() {
    this.required = !this.required;
  }

  toggleResize() {
    this.resizeIndex =
      (this.resizeIndex + 1) % this.resizes.length;
    this.resize = this.resizes[this.resizeIndex];
  }
}