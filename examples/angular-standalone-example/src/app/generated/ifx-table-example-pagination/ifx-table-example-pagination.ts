import { IfxTable } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-table-example-pagination',
  imports: [ IfxTable ],
  templateUrl: './ifx-table-example-pagination.html',
  styleUrl: './ifx-table-example-pagination.scss'
})
export class IfxTablePaginationExample {
  protected readonly tsCode = `import { IfxTable } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-table-example-pagination&#039;,
  imports: [ IfxTable ],
  templateUrl: &#039;./ifx-table-example-pagination.html&#039;,
  styleUrl: &#039;./ifx-table-example-pagination.scss&#039;
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
    .cols=&#039;[{&quot;headerName&quot;:&quot;ID&quot;,&quot;field&quot;:&quot;id&quot;,&quot;sortable&quot;:true,&quot;sort&quot;:&quot;desc&quot;,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Item&quot;,&quot;field&quot;:&quot;item&quot;,&quot;sortable&quot;:true,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Price&quot;,&quot;field&quot;:&quot;price&quot;},{&quot;headerName&quot;:&quot;Date&quot;,&quot;field&quot;:&quot;date&quot;}]&#039;
    .rows=&#039;[{&quot;id&quot;:&quot;1&quot;,&quot;item&quot;:&quot;Item 1&quot;,&quot;price&quot;:356,&quot;date&quot;:&quot;2025-06-25&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;item&quot;:&quot;Item 2&quot;,&quot;price&quot;:55,&quot;date&quot;:&quot;2025-03-26&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;item&quot;:&quot;Item 3&quot;,&quot;price&quot;:24},{&quot;id&quot;:&quot;4&quot;,&quot;item&quot;:&quot;x&quot;,&quot;price&quot;:874},{&quot;id&quot;:&quot;5&quot;,&quot;item&quot;:&quot;x&quot;,&quot;price&quot;:689},{&quot;id&quot;:&quot;6&quot;,&quot;item&quot;:&quot;x&quot;,&quot;price&quot;:46},{&quot;id&quot;:&quot;7&quot;,&quot;item&quot;:&quot;Item 7&quot;,&quot;price&quot;:421},{&quot;id&quot;:&quot;8&quot;,&quot;item&quot;:&quot;Item 8&quot;,&quot;price&quot;:17},{&quot;id&quot;:&quot;9&quot;,&quot;item&quot;:&quot;x&quot;,&quot;price&quot;:752},{&quot;id&quot;:&quot;10&quot;,&quot;item&quot;:&quot;Item 10&quot;,&quot;price&quot;:73},{&quot;id&quot;:&quot;11&quot;,&quot;item&quot;:&quot;x&quot;,&quot;price&quot;:94}]&#039;
    ?enable-selection=&quot;false&quot;
    table-height=&quot;auto&quot;
    ?pagination=&quot;true&quot;
    ?server-side-pagination=&quot;false&quot;
    .pagination-items-per-page=&#039;[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}]&#039;
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
