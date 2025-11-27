import { IfxAccordion, IfxAccordionItem } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-accordion-example',
  imports: [ IfxAccordion, IfxAccordionItem ],
  templateUrl: './ifx-accordion-example.html',
  styleUrl: './ifx-accordion-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxAccordionExample {
  protected readonly tsCode = `import { IfxAccordion, IfxAccordionItem } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-accordion-example&#039;,
  imports: [ IfxAccordion, IfxAccordionItem ],
  templateUrl: &#039;./ifx-accordion-example.html&#039;,
  styleUrl: &#039;./ifx-accordion-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxAccordionExample {
  protected handleOpen(event: any) {
    console.log(&#039;ifxOpen:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleClose(event: any) {
    console.log(&#039;ifxClose:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-accordion auto-collapse=&quot;false&quot;&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      open=&quot;true&quot;
      aria-level=&quot;3&quot;
      mutable=&quot;true&quot;
      (ifxOpen)=&quot;handleOpen(\$event)&quot;
      (ifxClose)=&quot;handleClose(\$event)&quot;&gt;
      Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    &lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      open=&quot;false&quot;
      aria-level=&quot;3&quot;
      mutable=&quot;true&quot;&gt;
      Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    &lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      open=&quot;false&quot;
      aria-level=&quot;3&quot;
      mutable=&quot;true&quot;&gt;
      Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    &lt;/ifx-accordion-item&gt;
  &lt;/ifx-accordion&gt;`;

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
    // Add your handler logic here
  }
}
