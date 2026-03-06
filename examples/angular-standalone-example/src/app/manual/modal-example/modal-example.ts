import {
	Component,
	signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IfxModalValueAccessor,
	IfxButton,
	IfxModal,
} from "@infineon/infineon-design-system-angular/standalone";

/**
 * Modal Example - Standalone Component with Signals
 * 
 * This example demonstrates:
 * - Modern Angular standalone components with signals for reactive state
 * - Two-way binding with [(ngModel)] via custom IfxModalValueAccessor
 * 
 * For a classic NgModule approach without signals, see the module example.
 */
@Component({
	selector: "app-modal-example",
	imports: [IfxModalValueAccessor, IfxButton, IfxModal, FormsModule],
	templateUrl: "./modal-example.html",
	styleUrl: "./modal-example.scss",
})
export class ModalExample {

	private _opened = signal(false);

	get opened() {
		return this._opened();
	}

	set opened(value: boolean) {
		this._opened.set(value);
	}

	protected readonly tsCode =
		`import { IfxModalValueAccessor, IfxButton, IfxModal } from '@infineon/infineon-design-system-angular/standalone';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-example',
  imports: [ IfxModalValueAccessor, IfxButton, IfxModal, FormsModule ],
  templateUrl: './modal-example.html',
  styleUrl: './modal-example.scss'
})
export class ModalExample {
  private _opened = signal(false);

  get opened() {
    return this._opened();
  }

  set opened(value: boolean) {
    this._opened.set(value);
  }

  openModal() {
    this._opened.set(true);
  }

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
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
    [(ngModel)]=&quot;opened&quot;
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
		this._opened.set(true);
	}

	protected handleOpen(event: CustomEvent) {
		console.log("ifxOpen:", event.detail);
	}

	protected handleClose(event: CustomEvent) {
		console.log("ifxClose:", event.detail);
	}
}
