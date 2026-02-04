import { IfxTooltip } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-tooltip-example',
  imports: [ IfxTooltip ],
  templateUrl: './ifx-tooltip-example.html',
  styleUrl: './ifx-tooltip-example.scss'
})
export class IfxTooltipExample {
  protected readonly tsCode = `import { IfxTooltip } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-tooltip-example&#039;,
  imports: [ IfxTooltip ],
  templateUrl: &#039;./ifx-tooltip-example.html&#039;,
  styleUrl: &#039;./ifx-tooltip-example.scss&#039;
})
export class IfxTooltipExample {}`;
  protected readonly htmlCode = `  &lt;ifx-tooltip
    text=&quot;Hi, I&#039;m a tooltip&quot;
    variant=&quot;compact&quot;
    position=&quot;auto&quot;
    icon=&quot;c-info-16&quot;
    aria-label=&quot;Tooltip with important information&quot;&gt;I&#039;m the tooltip reference element - Please hover me&lt;/ifx-tooltip&gt;`;
}
