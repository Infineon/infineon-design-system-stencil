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

  progressBarSize = "m";
  progressBarSizes = ["s", "m"];
  progressBarSizeIndex = 1;

  progressBarShowLabel = true;

  updateProgressOnClick() {
    if (this.progressValue < 100) {
      this.progressValue += 10;
      } else {
      this.progressValue = 10;
    }
  }

    toggleProgressBarShowLabel() {
    this.progressBarShowLabel= !this.progressBarShowLabel;
  }

    toggleProgressBarSize() {
    this.progressBarSizeIndex = (this.progressBarSizeIndex + 1) % this.progressBarSizes.length;
    this.progressBarSize = this.progressBarSizes[this.progressBarSizeIndex];
  }
}
