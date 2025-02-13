import { Component, ViewChild } from '@angular/core';
import { IfxTabs } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  activeTabIndex = 0;

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
