import { Component, ViewChild } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';
import { IfxTabs } from '@infineon/infineon-design-system-angular';

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

  @ViewChild('ifxTabs') ifxTabs: IfxTabs | undefined;

  ngOnInit() {
    this.setTab();
    setInterval(() => this.setTab(), 20000);
  }

  setTab() {
    const next = Math.floor(Math.random() * (3));
    console.log("set next active tab: ", next)
    if (this.ifxTabs) {
      this.activeTabIndex = next;;
    }
  }
}
