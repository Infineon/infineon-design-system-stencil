import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-alert-example',
  templateUrl: './ifx-alert-example.html',
  styleUrl: './ifx-alert-example.scss',
  standalone: false
})
export class IfxAlertExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-alert-example&#039;,
  templateUrl: &#039;./ifx-alert-example.html&#039;,
  styleUrl: &#039;./ifx-alert-example.scss&#039;,
  standalone: false
})
export class IfxAlertExample {
  protected handleClose(event: CustomEvent) {
    console.log(&#039;ifxClose:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-alert
    (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;
    icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;
    closable=&quot;{{ controlledProps[&#039;closable&#039;] }}&quot;
    ariaLive=&quot;{{ controlledProps[&#039;ariaLive&#039;] }}&quot;&gt;Attention! This is an alert message — check it out!&lt;/ifx-alert&gt;`;

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }
}
