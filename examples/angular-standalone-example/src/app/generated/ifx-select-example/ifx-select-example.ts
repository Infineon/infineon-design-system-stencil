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
export class IfxSelectExample {}`;
  protected readonly htmlCode = `  &lt;ifx-select
    size=&quot;m&quot;
    placeholder=&quot;true&quot;
    show-clear-button=&quot;&quot;
    show-search=&quot;&quot;
    search-placeholder-value=&quot;Search...&quot;
    required=&quot;&quot;
    label=&quot;&quot;
    caption=&quot;&quot;
    placeholder-value=&quot;Placeholder&quot;
    options=&#039;[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]&#039;&gt;&lt;/ifx-select&gt;`;
}
