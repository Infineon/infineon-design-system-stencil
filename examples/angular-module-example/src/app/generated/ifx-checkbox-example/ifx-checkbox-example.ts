import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-checkbox-example',
  templateUrl: './ifx-checkbox-example.html',
  styleUrl: './ifx-checkbox-example.scss',
  standalone: false
})
export class IfxCheckboxExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-checkbox-example&#039;,
  templateUrl: &#039;./ifx-checkbox-example.html&#039;,
  styleUrl: &#039;./ifx-checkbox-example.scss&#039;,
  standalone: false
})
export class IfxCheckboxExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log(&#039;ifxError:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-checkbox
    name=&quot;checkbox&quot;
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    (ifxError)=&quot;handleError(\$any(\$event))&quot;
    error=&quot;{{ controlledProps[&#039;error&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    checked=&quot;{{ controlledProps[&#039;checked&#039;] }}&quot;
    indeterminate=&quot;{{ controlledProps[&#039;indeterminate&#039;] }}&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;&gt;Text&lt;/ifx-checkbox&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }
}
