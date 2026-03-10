import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-date-picker-example',
  templateUrl: './ifx-date-picker-example.html',
  styleUrl: './ifx-date-picker-example.scss',
  standalone: false
})
export class IfxDatePickerExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-date-picker-example&#039;,
  templateUrl: &#039;./ifx-date-picker-example.html&#039;,
  styleUrl: &#039;./ifx-date-picker-example.scss&#039;,
  standalone: false
})
export class IfxDatePickerExample {
  protected handleDate(event: CustomEvent) {
    console.log(&#039;ifxDate:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-date-picker
    name=&quot;date-picker&quot;
    value=&quot;true&quot;
    max=&quot;true&quot;
    min=&quot;true&quot;
    label=&quot;Label Text&quot;
    caption=&quot;Caption text, description, error notification.&quot;
    aria-label-text=&quot;Date Picker&quot;
    autocomplete=&quot;on&quot;
    (ifxDate)=&quot;handleDate(\$any(\$event))&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    success=&quot;{{ controlledProps[&#039;success&#039;] }}&quot;
    error=&quot;{{ controlledProps[&#039;error&#039;] }}&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    required=&quot;{{ controlledProps[&#039;required&#039;] }}&quot;
    type=&quot;{{ controlledProps[&#039;type&#039;] }}&quot;&gt;&lt;/ifx-date-picker&gt;`;

  protected handleDate(event: CustomEvent) {
    console.log('ifxDate:', event);
    // Add your handler logic here
  }
}
