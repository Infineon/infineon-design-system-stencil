import { IfxSwitch } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-switch-example',
  imports: [ IfxSwitch ],
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxSwitchExample {
  protected readonly tsCode = `import { IfxSwitch } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-switch-example&#039;,
  imports: [ IfxSwitch ],
  templateUrl: &#039;./ifx-switch-example.html&#039;,
  styleUrl: &#039;./ifx-switch-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxSwitchExample {
  protected handleChange(event: any) {
    console.log(&#039;ifxChange:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-switch
    checked=&quot;false&quot;
    name=&quot;switch&quot;
    value=&quot;switch&quot;
    disabled=&quot;false&quot;
    (ifxChange)=&quot;handleChange(\$event)&quot;&gt;
    Switch
  &lt;/ifx-switch&gt;`;

  protected handleChange(event: any) {
    console.log('ifxChange:', event.detail);
    // Add your handler logic here
  }
}
