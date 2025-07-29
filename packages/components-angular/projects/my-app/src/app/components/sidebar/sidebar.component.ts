import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  handleSidebarNavigationItemClick(event: any) {
    console.log('Sidebar item clicked', event.detail);
  }

}
