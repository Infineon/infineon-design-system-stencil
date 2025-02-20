import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './segmented-control.component.html',
  styleUrl: './segmented-control.component.scss'
})
export class SegmentedControlComponent {

}
