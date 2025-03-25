import { Component, ViewChild } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';
import { IfxAccordionItem } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    ComponentLibraryModule,
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @ViewChild('ifxAccordionItem') ifxAccordionItemRef: IfxAccordionItem | undefined;

  handleAccordionItemOpen(event: any) {
    console.log("An accordion item was opened. Event details:", event);
  };

  handleAccordionItemClose(event: any) {
    console.log("An accordion item was closed. Event details:", event);
  };

  handleAccordionButtonClick() {
    console.log("accordion item open btn click ")
    const accordionItem = document.querySelector('ifx-accordion-item') as HTMLIfxAccordionItemElement;

    if (this.ifxAccordionItemRef) {
      console.log("accordion item: ", accordionItem);
      this.ifxAccordionItemRef.open = !this.ifxAccordionItemRef.open;
    }
  }
}
