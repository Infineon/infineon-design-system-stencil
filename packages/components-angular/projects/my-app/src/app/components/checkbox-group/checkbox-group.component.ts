import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.scss'
})
export class CheckboxGroupComponent {
  error = false;
  disabled = false;
  label = true;
  caption = true;
  captionIcon = true;
  required = false;

  alignment = "vertical";
  alignments = ["vertical", "horizontal"];
  alignmentIndex = 0;

  size = "m";
  sizes = ["m", "s"];
  sizeIndex = 0;

  toggleAlignment() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignments.length;
    this.alignment = this.alignments[this.alignmentIndex];
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleError() {
    this.error = !this.error;
  }

  toggleLabel() {
    this.label = !this.label;
  }

  toggleCaption() {
    this.caption = !this.caption;
  }

  toggleCaptionIcon() {
    this.captionIcon = !this.captionIcon;
  }

  toggleRequired() {
    this.required = !this.required;
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }
}
