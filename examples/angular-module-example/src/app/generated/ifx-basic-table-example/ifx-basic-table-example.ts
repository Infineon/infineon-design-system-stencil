import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-basic-table-example',
  templateUrl: './ifx-basic-table-example.html',
  styleUrl: './ifx-basic-table-example.scss',
  standalone: false
})
export class IfxBasicTableExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-basic-table-example&#039;,
  templateUrl: &#039;./ifx-basic-table-example.html&#039;,
  styleUrl: &#039;./ifx-basic-table-example.scss&#039;,
  standalone: false
})
export class IfxBasicTableExample {}`;
  protected readonly htmlCode = `  &lt;ifx-basic-table
    table-height=&quot;auto&quot;
    row-height=&quot;default&quot;
    variant=&quot;default&quot;&gt;&lt;/ifx-basic-table&gt;`;
}
