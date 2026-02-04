import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './segmented-control.component.html',
  styleUrl: './segmented-control.component.scss'
})
export class SegmentedControlComponent {
  segmentedControlError = false;
  segmentedControlRequired = false;

  segmentedControlSize = "regular";
  segmentedControlSizes = ["regular", "small"];
  segmentedControlSizeIndex = 0;

  toggleSerchFieldError() {
    this.segmentedControlError = !this.segmentedControlError;
  }

  toggleSegmentedControlRequired() {
    this.segmentedControlRequired = !this.segmentedControlRequired;
  }

  toggleSegmentedControlSize() {
    this.segmentedControlSizeIndex = (this.segmentedControlSizeIndex + 1) % this.segmentedControlSizes.length;
    this.segmentedControlSize = this.segmentedControlSizes[this.segmentedControlSizeIndex];
  }
}
