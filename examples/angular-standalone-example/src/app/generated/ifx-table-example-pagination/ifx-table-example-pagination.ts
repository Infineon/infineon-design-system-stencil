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
export class IfxTablePaginationExample {}`;
  protected readonly htmlCode = `  &lt;ifx-table
    row-height=&quot;default&quot;
    cols=&#039;[{&quot;headerName&quot;:&quot;Make&quot;,&quot;field&quot;:&quot;make&quot;,&quot;sortable&quot;:true,&quot;sort&quot;:&quot;desc&quot;,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Model&quot;,&quot;field&quot;:&quot;model&quot;,&quot;sortable&quot;:true,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Price&quot;,&quot;field&quot;:&quot;price&quot;},{&quot;headerName&quot;:&quot;Age&quot;,&quot;field&quot;:&quot;age&quot;}]&#039;
    rows=&#039;[{&quot;make&quot;:&quot;Toyota&quot;,&quot;model&quot;:&quot;Celica&quot;,&quot;price&quot;:35000,&quot;age&quot;:10},{&quot;make&quot;:&quot;Ford&quot;,&quot;model&quot;:&quot;Mondeo&quot;,&quot;price&quot;:32000,&quot;age&quot;:12},{&quot;make&quot;:&quot;Porsche&quot;,&quot;model&quot;:&quot;Boxster&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Bmw&quot;,&quot;model&quot;:&quot;x&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Mercedes&quot;,&quot;model&quot;:&quot;y&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Ferrari&quot;,&quot;model&quot;:&quot;z&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Chrysler&quot;,&quot;model&quot;:&quot;a&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Range rover&quot;,&quot;model&quot;:&quot;b&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Tesla&quot;,&quot;model&quot;:&quot;x&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Audi&quot;,&quot;model&quot;:&quot;3&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Landrover&quot;,&quot;model&quot;:&quot;x&quot;,&quot;price&quot;:72000}]&#039;
    table-height=&quot;auto&quot;
    pagination=&quot;true&quot;
    server-side-pagination=&quot;false&quot;
    pagination-items-per-page=&#039;[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}]&#039;
    filter-orientation=&quot;none&quot;
    variant=&quot;default&quot;&gt;&lt;/ifx-table&gt;`;
}
