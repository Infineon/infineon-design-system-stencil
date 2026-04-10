import { IfxSwitch } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-switch-example',
  imports: [ IfxSwitch ],
  templateUrl: './ifx-switch-example.html',
	styleUrl: './ifx-switch-example.scss'
})
export class IfxSwitchExample {
  protected readonly tsCode = `import { IfxSwitch } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-switch-example&#039;,
  imports: [ IfxSwitch ],
  templateUrl: &#039;./ifx-switch-example.html&#039;,
	styleUrl: &#039;./ifx-switch-example.scss&#039;
})
export class IfxSwitchExample {}`;
  protected readonly htmlCode = `  &lt;ifx-switch
    name=&quot;switch&quot;
    value=&quot;on&quot;&gt;Switch&lt;/ifx-switch&gt;`;
}
