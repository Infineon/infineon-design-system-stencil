import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() selectComponent = new EventEmitter<string>();

  onSelect(component: string): void {
    this.selectComponent.emit(component);
  }
}
