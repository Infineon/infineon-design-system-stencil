import { IfxButton, IfxStatus } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-status-example',
  imports: [ IfxButton, IfxStatus ],
  templateUrl: './ifx-status-example.html',
	styleUrl: './ifx-status-example.scss'
})
export class IfxStatusExample {
  protected readonly tsCode = `import { IfxButton, IfxStatus } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-status-example&#039;,
  imports: [ IfxButton, IfxStatus ],
  templateUrl: &#039;./ifx-status-example.html&#039;,
	styleUrl: &#039;./ifx-status-example.scss&#039;
})
export class IfxStatusExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["border", this.controlledProps["border"]],
      ["color", this.controlledProps["color"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-status
    label=&quot;text&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-status&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected border = true;
  protected readonly colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
  protected colorIndex = 16;

  protected toggleBorder() { this.border = !this.border; }
  protected toggleColor() { this.colorIndex = (this.colorIndex + 1) % this.colorOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "border": this.border,
      "color": this.colorOptions[this.colorIndex],
    };
  }
}
