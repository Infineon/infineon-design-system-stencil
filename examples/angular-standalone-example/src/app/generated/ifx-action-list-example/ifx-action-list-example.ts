import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-action-list-example',
  imports: [ IfxActionList, IfxActionListItem, IfxIcon ],
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss'
})
export class IfxActionListExample {
  protected readonly tsCode = `import { IfxActionList, IfxActionListItem, IfxIcon } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-action-list-example&#039;,
  imports: [ IfxActionList, IfxActionListItem, IfxIcon ],
  templateUrl: &#039;./ifx-action-list-example.html&#039;,
  styleUrl: &#039;./ifx-action-list-example.scss&#039;
})
export class IfxActionListExample {
  protected handleActionListItemClick(event: CustomEvent) {
    console.log(&#039;ifxActionListItemClick:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-action-list list-aria-label=&quot;Navigation menu&quot;&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Dashboard&quot;
      description=&quot;View your main dashboard&quot;
      value=&quot;dashboard&quot;
      item-aria-label=&quot;Navigation item&quot;
      (ifxActionListItemClick)=&quot;handleActionListItemClick(\$any(\$event))&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Settings&quot;
      value=&quot;settings&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Profile&quot;
      description=&quot;Manage your profile information&quot;
      value=&quot;profile&quot;
      disabled=&quot;true&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Advanced Analytics and Reporting Dashboard with Extended Functionality&quot;
      description=&quot;This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics.&quot;
      value=&quot;analytics&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
  &lt;/ifx-action-list&gt;`;

  protected handleActionListItemClick(event: CustomEvent) {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  }
}
