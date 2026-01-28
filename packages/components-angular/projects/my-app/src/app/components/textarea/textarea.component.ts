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
  textareaDisabled = false;
  textareaError = false;
  textareaReadOnly = false;
  textareaFullWidth = false;
  textareaRequired = true;

  textareaResizeIndex = 0;
  textareaResizes = ['both', 'vertical', 'horizontal', 'none'];
  textareaResize = this.textareaResizes[this.textareaResizeIndex];

  toggleTextareaDisabled() {
    this.textareaDisabled = !this.textareaDisabled;
  }

  toggleTextareaError() {
    this.textareaError = !this.textareaError;
  }

  toggleTextareaReadOnly() {
    this.textareaReadOnly = !this.textareaReadOnly;
  }

  toggleTextareaFullWidth() {
    this.textareaFullWidth = !this.textareaFullWidth;
  }

  toggleTextareaRequired() {
    this.textareaRequired = !this.textareaRequired;
  }

  toggleTextareaResize() {
    this.textareaResizeIndex =
      (this.textareaResizeIndex + 1) % this.textareaResizes.length;
    this.textareaResize = this.textareaResizes[this.textareaResizeIndex];
  }
}