import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-chip-example',
  templateUrl: './ifx-chip-example.html',
  styleUrl: './ifx-chip-example.scss',
  standalone: false
})
export class IfxChipExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-chip-example&#039;,
  templateUrl: &#039;./ifx-chip-example.html&#039;,
  styleUrl: &#039;./ifx-chip-example.scss&#039;,
  standalone: false
})
export class IfxChipExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-chip
    placeholder=&quot;Label&quot;
    aria-label=&quot;Chip&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;
    theme=&quot;{{ controlledProps[&#039;theme&#039;] }}&quot;
    readOnly=&quot;{{ controlledProps[&#039;readOnly&#039;] }}&quot;
    icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;&gt;
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
