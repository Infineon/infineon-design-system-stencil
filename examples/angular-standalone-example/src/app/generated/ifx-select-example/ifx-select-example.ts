import { IfxSelect } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-select-example',
  imports: [ IfxSelect ],
  templateUrl: './ifx-select-example.html',
  styleUrl: './ifx-select-example.scss'
})
export class IfxSelectExample {
  protected readonly tsCode = `import { IfxSelect } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-select-example&#039;,
  imports: [ IfxSelect ],
  templateUrl: &#039;./ifx-select-example.html&#039;,
  styleUrl: &#039;./ifx-select-example.scss&#039;
})
export class IfxSelectExample {
  protected handleSelect(event: CustomEvent) {
    console.log(&#039;ifxSelect:&#039;, event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-select
    size=&quot;m&quot;
    placeholder=&quot;true&quot;
    show-clear-button=&quot;true&quot;
    show-search=&quot;true&quot;
    search-placeholder-value=&quot;Search...&quot;
    required=&quot;true&quot;
    label=&quot;true&quot;
    caption=&quot;true&quot;
    placeholder-value=&quot;Placeholder&quot;
    options=&#039;[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]&#039;
    (ifxSelect)=&quot;handleSelect(\$any(\$event))&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;&gt;&lt;/ifx-select&gt;`;

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }
}
