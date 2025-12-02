import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-content-switcher-example',
  imports: [ IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon ],
  templateUrl: './ifx-content-switcher-example.html',
  styleUrl: './ifx-content-switcher-example.scss'
})
export class IfxContentSwitcherExample {
  protected readonly tsCode = `import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-content-switcher-example&#039;,
  imports: [ IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon ],
  templateUrl: &#039;./ifx-content-switcher-example.html&#039;,
  styleUrl: &#039;./ifx-content-switcher-example.scss&#039;
})
export class IfxContentSwitcherExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-content-switcher&gt;
    &lt;ifx-content-switcher-item
      value=&quot;item 1&quot;
      (ifxChange)=&quot;handleChange(\$any(\$event))&quot;&gt;
      &lt;ifx-icon icon=&quot;applications-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
    &lt;ifx-content-switcher-item value=&quot;item 2&quot;&gt;
      &lt;ifx-icon icon=&quot;applications-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
    &lt;ifx-content-switcher-item value=&quot;item 3&quot;&gt;
      &lt;ifx-icon icon=&quot;applications-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
    &lt;ifx-content-switcher-item value=&quot;item 4&quot;&gt;
      &lt;ifx-icon icon=&quot;applications-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
  &lt;/ifx-content-switcher&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
