import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-table-example-pagination',
  templateUrl: './ifx-table-example-pagination.html',
  styleUrl: './ifx-table-example-pagination.scss',
  standalone: false
})
export class IfxTablePaginationExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-table-example-pagination&#039;,
  templateUrl: &#039;./ifx-table-example-pagination.html&#039;,
  styleUrl: &#039;./ifx-table-example-pagination.scss&#039;,
  standalone: false
})
export class IfxTablePaginationExample {
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
    row-height=&quot;default&quot;
    table-height=&quot;auto&quot;
    pagination=&quot;true&quot;
    filter-orientation=&quot;none&quot;
    variant=&quot;default&quot;
    (ifxSelectionChange)=&quot;handleSelectionChange(\$any(\$event))&quot;
    (ifxSortChange)=&quot;handleSortChange(\$any(\$event))&quot;&gt;&lt;/ifx-table&gt;`;

  protected handleSelectionChange(event: CustomEvent) {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  }

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }
}
