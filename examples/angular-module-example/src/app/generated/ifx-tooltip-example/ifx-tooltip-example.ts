import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-tooltip-example',
  templateUrl: './ifx-tooltip-example.html',
  styleUrl: './ifx-tooltip-example.scss',
  standalone: false
})
export class IfxTooltipExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-tooltip-example&#039;,
  templateUrl: &#039;./ifx-tooltip-example.html&#039;,
  styleUrl: &#039;./ifx-tooltip-example.scss&#039;,
  standalone: false
})
export class IfxTooltipExample {}`;
  protected readonly htmlCode = `  &lt;ifx-tooltip
    text=&quot;Hi, I&#039;m a tooltip&quot;
    aria-label=&quot;Tooltip with important information&quot;
    header=&quot;Tooltip headline&quot;
    icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;
    position=&quot;{{ controlledProps[&#039;position&#039;] }}&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;&gt;I&#039;m the tooltip reference element - Please hover me&lt;/ifx-tooltip&gt;`;
}
