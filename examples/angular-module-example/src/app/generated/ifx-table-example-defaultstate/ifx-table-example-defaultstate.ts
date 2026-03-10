import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-table-example-defaultstate',
  templateUrl: './ifx-table-example-defaultstate.html',
  styleUrl: './ifx-table-example-defaultstate.scss',
  standalone: false
})
export class IfxTableDefaultStateExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-table-example-defaultstate&#039;,
  templateUrl: &#039;./ifx-table-example-defaultstate.html&#039;,
  styleUrl: &#039;./ifx-table-example-defaultstate.scss&#039;,
  standalone: false
})
export class IfxTableDefaultStateExample {
  protected handleSelectionChange(event: CustomEvent) {
    console.log(&#039;ifxSelectionChange:&#039;, event);
    // Add your handler logic here
  }

  protected handleSortChange(event: CustomEvent) {
    console.log(&#039;ifxSortChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-table
    table-height=&quot;auto&quot;
    fit-column=&quot;false&quot;
    column-min-width=&quot;200&quot;
    column-width=&quot;100&quot;
    headline=&quot;Matching results&quot;
    headline-number=&quot;0&quot;
    (ifxSelectionChange)=&quot;handleSelectionChange(\$any(\$event))&quot;
    (ifxSortChange)=&quot;handleSortChange(\$any(\$event))&quot;
    rowHeight=&quot;{{ controlledProps[&#039;rowHeight&#039;] }}&quot;
    filterOrientation=&quot;{{ controlledProps[&#039;filterOrientation&#039;] }}&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;&gt;&lt;/ifx-table&gt;`;

  protected handleSelectionChange(event: CustomEvent) {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  }

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }
}
