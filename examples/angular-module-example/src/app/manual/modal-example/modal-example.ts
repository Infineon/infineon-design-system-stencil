import { Component } from '@angular/core';

/**
 * Modal Example - NgModule Component
 * 
 * This example demonstrates:
 * - Classic Angular NgModule pattern with primitive values
 * - Two-way binding with [(ngModel)] via custom IfxModalValueAccessor
 * 
 * For a modern standalone component approach with signals, see the standalone example.
 */
@Component({
	selector: 'app-modal-example',
	standalone: false,
	templateUrl: './modal-example.html',
	styleUrl: './modal-example.scss',
})
export class ModalExample {
	opened = false;

	protected readonly tsCode =
		`import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  standalone: false,
  templateUrl: './modal-example.html',
  styleUrl: './modal-example.scss'
})
export class ModalExample {
  opened = false;

  openModal() {
    this.opened = true;
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
    caption="Modal Title"
    [captionAriaLabel]="'Additional information for caption'"
    [closeButtonAriaLabel]="'Close modal'"
    variant="default"
    [closeOnOverlayClick]="false"
    [showCloseButton]="true"
    size="s"
    [(ngModel)]="opened"
    (ifxOpen)="handleOpen($event)"
    (ifxClose)="handleClose($event)">
    <div slot="content">
      <span>Modal content</span>
    </div>
    <div slot="buttons">
      <ifx-button variant="secondary">Cancel</ifx-button>
      <ifx-button>OK</ifx-button>
    </div>
  </ifx-modal>

  <ifx-button (click)="openModal()">Open Modal</ifx-button>`;

	openModal() {
		this.opened = true;
	}

	protected handleOpen(event: CustomEvent) {
		console.log('ifxOpen:', event.detail);
	}

	protected handleClose(event: CustomEvent) {
		console.log('ifxClose:', event.detail);
	}
}
