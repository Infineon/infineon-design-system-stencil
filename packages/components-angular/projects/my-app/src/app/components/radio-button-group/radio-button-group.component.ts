import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-radio-button-group',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-button-group.component.html',
  styleUrl: './radio-button-group.component.scss'
})
export class RadioButtonGroupComponent {
  label = true;
  caption = true;
  icon = true;
  required = false;

  alignment = "vertical";
  alignments = ["vertical", "horizontal"];
  alignmentIndex = 0;

  toggleLabel() {
    this.label = !this.label;
  }
  toggleCaption() {
    this.caption = !this.caption;
  }
  toggleIcon() {
    this.icon = !this.icon;
  }

  toggleRequired() {
    this.required = !this.required;
  }

  toggleAlignment() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignments.length;
    this.alignment = this.alignments[this.alignmentIndex];
  }
}
