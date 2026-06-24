import {
	Component,
	signal,
} from "@angular/core";
import {
	IfxButton,
	IfxModal,
} from "@infineon/infineon-design-system-angular/standalone";

/**
 * Modal Example - Standalone Component with Signals
 * 
 * This example demonstrates:
 * - Modern Angular standalone components with signals for reactive state
 * - Explicit one-way binding + event handling for modal open state
 * 
 * For a classic NgModule approach without signals, see the module example.
 */
@Component({
	selector: "app-modal-example",
	imports: [IfxButton, IfxModal],
	templateUrl: "./modal-example.html",
	styleUrl: "./modal-example.scss",
})
export class ModalExample {
	protected readonly opened = signal(false);

	protected readonly tsCode =
		`import { IfxButton, IfxModal } from '@infineon/infineon-design-system-angular/standalone';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  imports: [ IfxButton, IfxModal ],
  templateUrl: './modal-example.html',
  styleUrl: './modal-example.scss'
})
export class ModalExample {
  protected readonly opened = signal(false);

  openModal() {
    this.opened.set(true);
  }

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
    this.opened.set(false);
  }
}`;

	protected readonly htmlCode = `
  &lt;ifx-modal
    caption=&quot;Modal Title&quot;
    [captionAriaLabel]=&quot;'Additional information for caption'&quot;
    [closeButtonAriaLabel]=&quot;'Close modal'&quot;
    variant=&quot;default&quot;
    [closeOnOverlayClick]=&quot;false&quot;
    [showCloseButton]=&quot;true&quot;
    size=&quot;s&quot;
    [opened]=&quot;opened()&quot;
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
    this.opened.set(true);
	}

	protected handleOpen(event: CustomEvent) {
		console.log("ifxOpen:", event.detail);
	}

	protected handleClose(event: CustomEvent) {
		console.log("ifxClose:", event.detail);
    this.opened.set(false);
	}
}
