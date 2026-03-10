import { IfxButton, IfxProgressBar } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-progress-bar-example',
  imports: [ IfxButton, IfxProgressBar ],
  templateUrl: './ifx-progress-bar-example.html',
	styleUrl: './ifx-progress-bar-example.scss'
})
export class IfxProgressBarExample {
  protected readonly tsCode = `import { IfxButton, IfxProgressBar } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-progress-bar-example&#039;,
  imports: [ IfxButton, IfxProgressBar ],
  templateUrl: &#039;./ifx-progress-bar-example.html&#039;,
	styleUrl: &#039;./ifx-progress-bar-example.scss&#039;
})
export class IfxProgressBarExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["showLabel", this.controlledProps["showLabel"]],
      ["size", this.controlledProps["size"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-progress-bar
    value=&quot;50&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-progress-bar&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected showLabel = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;

  protected toggleShowLabel() { this.showLabel = !this.showLabel; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "showLabel": this.showLabel,
      "size": this.sizeOptions[this.sizeIndex],
    };
  }
}
