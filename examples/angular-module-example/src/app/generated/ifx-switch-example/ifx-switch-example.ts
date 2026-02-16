import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-switch-example',
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  standalone: false
})
export class IfxSwitchExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-switch-example&#039;,
  templateUrl: &#039;./ifx-switch-example.html&#039;,
  styleUrl: &#039;./ifx-switch-example.scss&#039;,
  standalone: false
})
export class IfxSwitchExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-switch
    name=&quot;switch&quot;
    value=&quot;on&quot;
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;&gt;Switch&lt;/ifx-switch&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
