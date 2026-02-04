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
    variant=&quot;compact&quot;
    position=&quot;auto&quot;
    icon=&quot;c-info-16&quot;
    aria-label=&quot;Tooltip with important information&quot;&gt;I&#039;m the tooltip reference element - Please hover me&lt;/ifx-tooltip&gt;`;
}
