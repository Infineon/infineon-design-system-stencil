import { IfxButton, IfxTab, IfxTabs } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-tabs-example',
  imports: [ IfxButton, IfxTab, IfxTabs ],
  templateUrl: './ifx-tabs-example.html',
	styleUrl: './ifx-tabs-example.scss'
})
export class IfxTabsExample {
  protected readonly tsCode = `import { IfxButton, IfxTab, IfxTabs } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-tabs-example&#039;,
  imports: [ IfxButton, IfxTab, IfxTabs ],
  templateUrl: &#039;./ifx-tabs-example.html&#039;,
	styleUrl: &#039;./ifx-tabs-example.scss&#039;
})
export class IfxTabsExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["orientation", this.controlledProps["orientation"]],
      ["fullWidth", this.controlledProps["fullWidth"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-tabs
    active-tab-index=&quot;0&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-tab
      header=&quot;Tab 1&quot;
      icon=&quot;true&quot;
      icon-position=&quot;left&quot;&gt;Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      header=&quot;Tab 2&quot;
      [disabled]=&quot;false&quot;
      icon=&quot;true&quot;
      icon-position=&quot;left&quot;&gt;Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      header=&quot;Tab 3&quot;
      icon=&quot;true&quot;
      icon-position=&quot;left&quot;&gt;Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
  &lt;/ifx-tabs&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly orientationOptions = ["horizontal","vertical"];
  protected orientationIndex = 0;
  protected fullWidth = false;

  protected toggleOrientation() { this.orientationIndex = (this.orientationIndex + 1) % this.orientationOptions.length; }
  protected toggleFullWidth() { this.fullWidth = !this.fullWidth; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "orientation": this.orientationOptions[this.orientationIndex],
      "fullWidth": this.fullWidth,
    };
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
