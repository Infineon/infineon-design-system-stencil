import { IfxButton, IfxSwitch } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-switch-example',
  imports: [ IfxButton, IfxSwitch ],
  templateUrl: './ifx-switch-example.html',
	styleUrl: './ifx-switch-example.scss'
})
export class IfxSwitchExample {
  protected readonly tsCode = `import { IfxButton, IfxSwitch } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-switch-example&#039;,
  imports: [ IfxButton, IfxSwitch ],
  templateUrl: &#039;./ifx-switch-example.html&#039;,
	styleUrl: &#039;./ifx-switch-example.scss&#039;
})
export class IfxSwitchExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["checked", this.controlledProps["checked"]],
      ["disabled", this.controlledProps["disabled"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-switch
    name=&quot;switch&quot;
    value=&quot;on&quot;
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;Switch&lt;/ifx-switch&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected checked = false;
  protected disabled = false;

  protected toggleChecked() { this.checked = !this.checked; }
  protected toggleDisabled() { this.disabled = !this.disabled; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "checked": this.checked,
      "disabled": this.disabled,
    };
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
