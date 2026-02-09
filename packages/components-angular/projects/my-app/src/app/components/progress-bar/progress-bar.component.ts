import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  progressValue = 10;

  size = "m";
  sizes = ["s", "m"];
  sizeIndex = 1;

  showLabel = true;

  updateProgressOnClick() {
    if (this.progressValue < 100) {
      this.progressValue += 10;
      } else {
      this.progressValue = 10;
    }
  }

    toggleShowLabel() {
    this.showLabel= !this.showLabel;
  }

    toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }
}
