import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-toast-example',
  templateUrl: './ifx-toast-example.html',
  styleUrl: './ifx-toast-example.scss',
  standalone: false
})
export class IfxToastExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-toast-example&#039;,
  templateUrl: &#039;./ifx-toast-example.html&#039;,
  styleUrl: &#039;./ifx-toast-example.scss&#039;,
  standalone: false
})
export class IfxToastExample {
  protected handleToastAction(event: CustomEvent) {
    console.log(&#039;ifxToastAction:&#039;, event);
    // Add your handler logic here
  }

  protected handleToastClose(event: CustomEvent) {
    console.log(&#039;ifxToastClose:&#039;, event);
    // Add your handler logic here
  }

  protected handleToastOpen(event: CustomEvent) {
    console.log(&#039;ifxToastOpen:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-toast
    toast-id=&quot;&quot;
    status=&quot;success&quot;
    message=&quot;Insert information text here&quot;
    action-text=&quot;Dismiss&quot;
    duration=&quot;0&quot;
    (ifxToastAction)=&quot;handleToastAction(\$any(\$event))&quot;
    (ifxToastClose)=&quot;handleToastClose(\$any(\$event))&quot;
    (ifxToastOpen)=&quot;handleToastOpen(\$any(\$event))&quot;&gt;&lt;/ifx-toast&gt;`;

  protected handleToastAction(event: CustomEvent) {
    console.log('ifxToastAction:', event);
    // Add your handler logic here
  }

  protected handleToastClose(event: CustomEvent) {
    console.log('ifxToastClose:', event);
    // Add your handler logic here
  }

  protected handleToastOpen(event: CustomEvent) {
    console.log('ifxToastOpen:', event);
    // Add your handler logic here
  }
}
