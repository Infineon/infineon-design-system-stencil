import { IfxSegment, IfxSegmentedControl } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-segmented-control-example',
  imports: [ IfxSegment, IfxSegmentedControl ],
  templateUrl: './ifx-segmented-control-example.html',
  styleUrl: './ifx-segmented-control-example.scss'
})
export class IfxSegmentedControlExample {
  protected readonly tsCode = `import { IfxSegment, IfxSegmentedControl } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-segmented-control-example&#039;,
  imports: [ IfxSegment, IfxSegmentedControl ],
  templateUrl: &#039;./ifx-segmented-control-example.html&#039;,
  styleUrl: &#039;./ifx-segmented-control-example.scss&#039;
})
export class IfxSegmentedControlExample {}`;
  protected readonly htmlCode = `  &lt;ifx-segmented-control
    caption=&quot;Caption text to describe the controls&quot;
    label=&quot;Group Label&quot;
    size=&quot;regular&quot;
    error=&quot;false&quot;
    required=&quot;false&quot;&gt;
    &lt;ifx-segment
      value=&quot;Value1&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value2&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value3&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value4&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value5&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
  &lt;/ifx-segmented-control&gt;`;
}
