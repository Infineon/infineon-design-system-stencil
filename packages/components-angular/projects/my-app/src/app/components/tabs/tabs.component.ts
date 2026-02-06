import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  tabsOrientation = "horizontal";
  tabsOrientations = ["horizontal", "vertical"];
  tabsOrientationIndex = 0;

  fullWidth = false;
  disabledTabTwo = true;

  toggleOrientation() {
    this.tabsOrientationIndex = (this.tabsOrientationIndex + 1) % this.tabsOrientations.length;
    this.tabsOrientation = this.tabsOrientations[this.tabsOrientationIndex];
  }

  toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  toggleDisabled() {
    this.disabledTabTwo = !this.disabledTabTwo;
  }
}
