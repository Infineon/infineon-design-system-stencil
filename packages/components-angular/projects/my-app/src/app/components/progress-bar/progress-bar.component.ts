import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  progressValue = 10;

  updateProgressOnClick() {
    this.progressValue < 100 ? this.progressValue += 10 : this.progressValue = 10;
  }
}
