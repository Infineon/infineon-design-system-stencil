import { IfxProgressBar } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-progress-bar-example',
  imports: [ IfxProgressBar ],
  templateUrl: './ifx-progress-bar-example.html',
  styleUrl: './ifx-progress-bar-example.scss'
})
export class IfxProgressBarExample {
  protected readonly tsCode = `import { IfxProgressBar } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-progress-bar-example&#039;,
  imports: [ IfxProgressBar ],
  templateUrl: &#039;./ifx-progress-bar-example.html&#039;,
  styleUrl: &#039;./ifx-progress-bar-example.scss&#039;
})
export class IfxProgressBarExample {}`;
  protected readonly htmlCode = `  &lt;ifx-progress-bar
    value=&quot;50&quot;
    size=&quot;m&quot;
    show-label=&quot;false&quot;&gt;&lt;/ifx-progress-bar&gt;`;
}
