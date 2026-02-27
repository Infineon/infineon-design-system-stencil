import { IfxTab, IfxTabs } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-tabs-example',
  imports: [ IfxTab, IfxTabs ],
  templateUrl: './ifx-tabs-example.html',
  styleUrl: './ifx-tabs-example.scss'
})
export class IfxTabsExample {
  protected readonly tsCode = `import { IfxTab, IfxTabs } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-tabs-example&#039;,
  imports: [ IfxTab, IfxTabs ],
  templateUrl: &#039;./ifx-tabs-example.html&#039;,
  styleUrl: &#039;./ifx-tabs-example.scss&#039;
})
export class IfxTabsExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-tabs
    orientation=&quot;horizontal&quot;
    active-tab-index=&quot;0&quot;
    full-width=&quot;false&quot;
    variant=&quot;default&quot;
    sticky=&quot;false&quot;&gt;
    &lt;ifx-tab
      header=&quot;Tab 1&quot;
      icon=&quot;true&quot;
      icon-position=&quot;left&quot;
      subline=&quot;This could be a small text&quot;
      label=&quot;Label&quot;
      number=&quot;1&quot;&gt;Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      header=&quot;Tab 2&quot;
      disabled=&quot;false&quot;
      icon=&quot;true&quot;
      icon-position=&quot;left&quot;
      subline=&quot;This could be a small text&quot;
      label=&quot;Label&quot;
      number=&quot;1&quot;&gt;Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      header=&quot;Tab 3&quot;
      icon=&quot;true&quot;
      icon-position=&quot;left&quot;
      subline=&quot;This could be a small text&quot;
      label=&quot;Label&quot;
      number=&quot;1&quot;&gt;Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
  &lt;/ifx-tabs&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
