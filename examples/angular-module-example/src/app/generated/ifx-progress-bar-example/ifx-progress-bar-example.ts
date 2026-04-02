import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-progress-bar-example',
  templateUrl: './ifx-progress-bar-example.html',
  styleUrl: './ifx-progress-bar-example.scss',
  standalone: false
})
export class IfxProgressBarExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-progress-bar-example&#039;,
  templateUrl: &#039;./ifx-progress-bar-example.html&#039;,
  styleUrl: &#039;./ifx-progress-bar-example.scss&#039;,
  standalone: false
})
export class IfxProgressBarExample {}`;
  protected readonly htmlCode = `  &lt;ifx-progress-bar
    value=&quot;50&quot;
    size=&quot;m&quot;
    show-label=&quot;false&quot;&gt;&lt;/ifx-progress-bar&gt;`;
}
