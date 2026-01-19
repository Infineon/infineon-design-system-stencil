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
  radioBtnGroupLabel = true;
  radioBtnGroupCaption = true;
  radioBtnGroupIcon = true;
  radioBtnGroupRequired = false;

  radioBtnGroupAlignment = "vertical";
  radioBtnGroupAlignments = ["vertical", "horizontal"];
  radioBtnGroupAlignmentIndex = 0;

  toggleRadioBtnGroupLabel() {
    this.radioBtnGroupLabel = !this.radioBtnGroupLabel;
  }
  toggleRadioBtnGroupCaption() {
    this.radioBtnGroupCaption = !this.radioBtnGroupCaption;
  }
  toggleRadioBtnGroupIcon() {
    this.radioBtnGroupIcon = !this.radioBtnGroupIcon;
  }

  toggleRadioBtnGroupRequired() {
    this.radioBtnGroupRequired = !this.radioBtnGroupRequired;
  }

  toggleRadioBtnGroupAlignment() {
    this.radioBtnGroupAlignmentIndex = (this.radioBtnGroupAlignmentIndex + 1) % this.radioBtnGroupAlignments.length;
    this.radioBtnGroupAlignment = this.radioBtnGroupAlignments[this.radioBtnGroupAlignmentIndex];
  }
}
