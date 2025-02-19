import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  activeTabIndex = 0;

  handleChange(event: any) {
    console.log("emitting active tab index: ", event.detail);
  };
}
