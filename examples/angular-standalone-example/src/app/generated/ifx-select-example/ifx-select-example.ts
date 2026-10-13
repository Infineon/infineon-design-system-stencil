import { IfxSelect, IfxSelectOption } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-select-example',
  imports: [ IfxSelect, IfxSelectOption ],
  templateUrl: './ifx-select-example.html',
	styleUrl: './ifx-select-example.scss'
})
export class IfxSelectExample {
  protected readonly tsCode = `import { IfxSelect, IfxSelectOption } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-select-example&#039;,
  imports: [ IfxSelect, IfxSelectOption ],
  templateUrl: &#039;./ifx-select-example.html&#039;,
	styleUrl: &#039;./ifx-select-example.scss&#039;
})
export class IfxSelectExample {
  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
    // Add your handler logic here
  }

  protected handleSelect(event: CustomEvent) {
    console.log(&#039;ifxSelect:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-select
    size=&quot;m&quot;
    [placeholder]=&quot;true&quot;
    [showClearButton]=&quot;true&quot;
    [showSearch]=&quot;true&quot;
    search-placeholder-value=&quot;Search...&quot;
    label=&quot;&quot;
    caption=&quot;&quot;
    placeholder-value=&quot;Placeholder&quot;
    aria-select-label=&quot;Select&quot;
    aria-search-label=&quot;Search options&quot;
    aria-clear-label=&quot;Clear selection&quot;
    aria-select-labelled-by=&quot;&quot;
    aria-select-described-by=&quot;&quot;
    [error]=&quot;false&quot;
    [disabled]=&quot;false&quot;
    [readOnly]=&quot;false&quot;
    [required]=&quot;false&quot;&gt;
    &lt;ifx-select-option
      value=&quot;a&quot;
      (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxSelect)=&quot;handleSelect(\$any(\$event))&quot;&gt;Option A&lt;/ifx-select-option&gt;
    &lt;ifx-select-option value=&quot;b&quot;&gt;Option B&lt;/ifx-select-option&gt;
    &lt;ifx-select-option value=&quot;c&quot;&gt;Option C&lt;/ifx-select-option&gt;
    &lt;ifx-select-option
      value=&quot;d&quot;
      [disabled]=&quot;true&quot;&gt;Option D (disabled)&lt;/ifx-select-option&gt;
  &lt;/ifx-select&gt;`;

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }
}
