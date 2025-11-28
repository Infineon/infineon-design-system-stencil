import { IfxSpinner } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-spinner-example',
  imports: [ IfxSpinner ],
  templateUrl: './ifx-spinner-example.html',
  styleUrl: './ifx-spinner-example.scss'
})
export class IfxSpinnerExample {
  protected readonly tsCode = `import { IfxSpinner } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-spinner-example&#039;,
  imports: [ IfxSpinner ],
  templateUrl: &#039;./ifx-spinner-example.html&#039;,
  styleUrl: &#039;./ifx-spinner-example.scss&#039;
})
export class IfxSpinnerExample {}`;
  protected readonly htmlCode = `  &lt;ifx-spinner
    aria-label=&quot;true&quot;
    variant=&quot;default&quot;
    size=&quot;m&quot;
    inverted=&quot;false&quot;&gt;&lt;/ifx-spinner&gt;`;
}
