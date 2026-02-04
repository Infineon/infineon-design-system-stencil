import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-chip-example',
  imports: [ IfxChip, IfxChipItem ],
  templateUrl: './ifx-chip-example.html',
  styleUrl: './ifx-chip-example.scss'
})
export class IfxChipExample {
  protected readonly tsCode = `import { IfxChip, IfxChipItem } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-chip-example&#039;,
  imports: [ IfxChip, IfxChipItem ],
  templateUrl: &#039;./ifx-chip-example.html&#039;,
  styleUrl: &#039;./ifx-chip-example.scss&#039;
})
export class IfxChipExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-chip
    placeholder=&quot;Label&quot;
    size=&quot;medium&quot;
    variant=&quot;single&quot;
    theme=&quot;outlined&quot;
    icon=&quot;true&quot;
    read-only=&quot;false&quot;
    aria-label=&quot;Chip&quot;
    disabled=&quot;false&quot;&gt;
    &lt;ifx-chip-item
      value=&quot;Item Value 1&quot;
      (ifxChange)=&quot;handleChange(\$any(\$event))&quot;&gt;Item Label 1&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item value=&quot;Item Value 2&quot;&gt;Item Label 2&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item value=&quot;Item Value 3&quot;&gt;Item Label 3&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item value=&quot;Item Value 4&quot;&gt;Item Label 4&lt;/ifx-chip-item&gt;
  &lt;/ifx-chip&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
