import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-switch-example',
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  standalone: false
})
export class IfxSwitchExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-switch-example&#039;,
  templateUrl: &#039;./ifx-switch-example.html&#039;,
  styleUrl: &#039;./ifx-switch-example.scss&#039;,
  standalone: false
})
export class IfxSwitchExample {}`;
  protected readonly htmlCode = `  &lt;ifx-switch
    name=&quot;switch&quot;
    value=&quot;on&quot;&gt;Switch&lt;/ifx-switch&gt;`;
}
