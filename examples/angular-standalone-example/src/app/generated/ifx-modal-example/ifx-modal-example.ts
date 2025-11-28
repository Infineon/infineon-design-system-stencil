import { IfxButton, IfxModal } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-modal-example',
  imports: [ IfxButton, IfxModal ],
  templateUrl: './ifx-modal-example.html',
  styleUrl: './ifx-modal-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxModalExample {
  protected readonly tsCode = `import { IfxButton, IfxModal } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-modal-example&#039;,
  imports: [ IfxButton, IfxModal ],
  templateUrl: &#039;./ifx-modal-example.html&#039;,
  styleUrl: &#039;./ifx-modal-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxModalExample {
  protected handleOpen(event: any) {
    console.log(&#039;ifxOpen:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleClose(event: any) {
    console.log(&#039;ifxClose:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;div
    (ifxOpen)=&quot;handleOpen(\$event)&quot;
    (ifxClose)=&quot;handleClose(\$event)&quot;&gt;
    &lt;ifx-modal
      caption=&quot;Modal Title&quot;
      caption-aria-label=&quot;Additional information for caption&quot;
      close-button-aria-label=&quot;Close modal&quot;
      variant=&quot;default&quot;
      [close-on-overlay-click]=&quot;false&quot;
      [show-close-button]=&quot;true&quot;
      size=&quot;s&quot;&gt;
      &lt;div slot=&quot;content&quot;&gt;
        &lt;span&gt;
          Modal content
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div slot=&quot;buttons&quot;&gt;
        &lt;ifx-button variant=&quot;secondary&quot;&gt;
          Cancel
        &lt;/ifx-button&gt;
        &lt;ifx-button&gt;
          OK
        &lt;/ifx-button&gt;
      &lt;/div&gt;
    &lt;/ifx-modal&gt;
    &lt;ifx-button id=&quot;open&quot;&gt;
      Open Modal
    &lt;/ifx-button&gt;
  &lt;/div&gt;`;

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
    // Add your handler logic here
  }
}
