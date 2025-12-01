import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	type ElementRef,
	ViewChild,
} from "@angular/core";
import {
	IfxButton,
	IfxModal,
} from "@infineon/infineon-design-system-angular/standalone";

@Component({
	selector: "app-modal-example",
	imports: [IfxButton, IfxModal],
	templateUrl: "./modal-example.html",
	styleUrl: "./modal-example.scss",
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalExample {
	@ViewChild("modal") modalRef!: ElementRef;

	protected readonly tsCode =
		`import { IfxButton, IfxModal } from '@infineon/infineon-design-system-angular/standalone';
import { Component, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  imports: [ IfxButton, IfxModal ],
  templateUrl: './modal-example.html',
  styleUrl: './modal-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalExample {
  @ViewChild('modal') modalRef!: ElementRef;

  openModal() {
    if (this.modalRef?.nativeElement) {
      this.modalRef.nativeElement.opened = true;
    }
  }

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
  }
}`;

	protected readonly htmlCode = `  &lt;ifx-modal
    #modal
    caption=&quot;Modal Title&quot;
    caption-aria-label=&quot;Additional information for caption&quot;
    close-button-aria-label=&quot;Close modal&quot;
    variant=&quot;default&quot;
    [close-on-overlay-click]=&quot;false&quot;
    [show-close-button]=&quot;true&quot;
    size=&quot;s&quot;
    (ifxOpen)=&quot;handleOpen($event)&quot;
    (ifxClose)=&quot;handleClose($event)&quot;&gt;
    &lt;div slot=&quot;content&quot;&gt;
      &lt;span&gt;Modal content&lt;/span&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;buttons&quot;&gt;
      &lt;ifx-button variant=&quot;secondary&quot;&gt;Cancel&lt;/ifx-button&gt;
      &lt;ifx-button&gt;OK&lt;/ifx-button&gt;
    &lt;/div&gt;
  &lt;/ifx-modal&gt;
  &lt;ifx-button (click)=&quot;openModal()&quot;&gt;Open Modal&lt;/ifx-button&gt;`;

	openModal() {
		if (this.modalRef?.nativeElement) {
			this.modalRef.nativeElement.opened = true;
		}
	}

	protected handleOpen(event: CustomEvent) {
		console.log("ifxOpen:", event.detail);
	}

	protected handleClose(event: CustomEvent) {
		console.log("ifxClose:", event.detail);
	}
}
