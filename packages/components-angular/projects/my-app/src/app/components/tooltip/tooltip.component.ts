import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';


@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {

}
