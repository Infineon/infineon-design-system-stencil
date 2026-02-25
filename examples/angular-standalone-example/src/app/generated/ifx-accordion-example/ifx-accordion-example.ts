import { IfxAccordion, IfxAccordionItem } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-accordion-example',
  imports: [ IfxAccordion, IfxAccordionItem ],
  templateUrl: './ifx-accordion-example.html',
  styleUrl: './ifx-accordion-example.scss'
})
export class IfxAccordionExample {
  protected readonly tsCode = `import { IfxAccordion, IfxAccordionItem } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-accordion-example&#039;,
  imports: [ IfxAccordion, IfxAccordionItem ],
  templateUrl: &#039;./ifx-accordion-example.html&#039;,
  styleUrl: &#039;./ifx-accordion-example.scss&#039;
})
export class IfxAccordionExample {
  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
    // Add your handler logic here
  }

  protected handleClose(event: CustomEvent) {
    console.log(&#039;ifxClose:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-accordion auto-collapse=&quot;false&quot;&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      open=&quot;true&quot;
      aria-level=&quot;3&quot;
      mutable=&quot;true&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;&gt;Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      open=&quot;false&quot;
      aria-level=&quot;3&quot;
      mutable=&quot;true&quot;&gt;Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      open=&quot;false&quot;
      aria-level=&quot;3&quot;
      mutable=&quot;true&quot;&gt;Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
  &lt;/ifx-accordion&gt;`;

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }
}
