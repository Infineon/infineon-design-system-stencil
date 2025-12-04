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
    error=&quot;false&quot;
    disabled=&quot;false&quot;
    size=&quot;s&quot;
    success=&quot;false&quot;
    value=&quot;true&quot;
    max=&quot;true&quot;
    min=&quot;true&quot;
    label=&quot;Label Text&quot;
    caption=&quot;Caption text, description, error notification.&quot;
    aria-label=&quot;Date Picker&quot;
    required=&quot;false&quot;
    autocomplete=&quot;on&quot;
    type=&quot;date&quot;
    (ifxDate)=&quot;handleDate(\$any(\$event))&quot;&gt;&lt;/ifx-date-picker&gt;`;

  protected handleDate(event: CustomEvent) {
    console.log('ifxDate:', event);
    // Add your handler logic here
  }
}
