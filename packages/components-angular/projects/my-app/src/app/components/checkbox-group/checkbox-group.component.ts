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
  checkboxGroupError = false;
  checkboxGroupDisabled = false;
  checkboxGroupLabel = true;
  checkboxGroupCaption = true;
  checkboxGroupCaptionIcon = true;
  checkboxGroupRequired = false;

  checkboxGroupAlignment = "vertical";
  checkboxGroupAlignments = ["vertical", "horizontal"];
  checkboxGroupAlignmentIndex = 0;

  checkboxGroupSize = "m";
  checkboxGroupSizes = ["m", "s"];
  checkboxGroupSizeIndex = 0;

  toggleCheckboxGroupAlignment() {
    this.checkboxGroupAlignmentIndex = (this.checkboxGroupAlignmentIndex + 1) % this.checkboxGroupAlignments.length;
    this.checkboxGroupAlignment = this.checkboxGroupAlignments[this.checkboxGroupAlignmentIndex];
  }

  toggleCheckboxGroupDisabled() {
    this.checkboxGroupDisabled = !this.checkboxGroupDisabled;
  }

  toggleCheckboxGroupError() {
    this.checkboxGroupError = !this.checkboxGroupError;
  }

  toggleCheckboxGroupLabel() {
    this.checkboxGroupLabel = !this.checkboxGroupLabel;
  }

  toggleCheckboxGroupCaption() {
    this.checkboxGroupCaption = !this.checkboxGroupCaption;
  }

  toggleCheckboxGroupCaptionIcon() {
    this.checkboxGroupCaptionIcon = !this.checkboxGroupCaptionIcon;
  }

  toggleCheckboxGroupRequired() {
    this.checkboxGroupRequired = !this.checkboxGroupRequired;
  }

  toggleCheckboxGroupSize() {
    this.checkboxGroupSizeIndex = (this.checkboxGroupSizeIndex + 1) % this.checkboxGroupSizes.length;
    this.checkboxGroupSize = this.checkboxGroupSizes[this.checkboxGroupSizeIndex];
  }
}
