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
    cols=&#039;[{&quot;headerName&quot;:&quot;ID&quot;,&quot;field&quot;:&quot;id&quot;,&quot;sortable&quot;:true,&quot;sort&quot;:&quot;desc&quot;,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Item&quot;,&quot;field&quot;:&quot;item&quot;,&quot;sortable&quot;:true,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Price&quot;,&quot;field&quot;:&quot;price&quot;},{&quot;headerName&quot;:&quot;Date&quot;,&quot;field&quot;:&quot;date&quot;}]&#039;
    rows=&#039;[{&quot;id&quot;:1,&quot;item&quot;:&quot;Item 1&quot;,&quot;price&quot;:356,&quot;date&quot;:&quot;2025-05-11&quot;},{&quot;id&quot;:2,&quot;item&quot;:&quot;Item 2&quot;,&quot;price&quot;:55,&quot;date&quot;:&quot;2025-03-26&quot;},{&quot;id&quot;:3,&quot;item&quot;:&quot;Item 3&quot;,&quot;price&quot;:24},{&quot;id&quot;:4,&quot;item&quot;:&quot;Item 4&quot;,&quot;price&quot;:874,&quot;date&quot;:&quot;2025-04-30&quot;},{&quot;id&quot;:5,&quot;item&quot;:&quot;Item 5&quot;,&quot;price&quot;:689,&quot;date&quot;:&quot;2025-09-14&quot;},{&quot;id&quot;:6,&quot;item&quot;:&quot;Item 6&quot;,&quot;price&quot;:46},{&quot;id&quot;:7,&quot;item&quot;:&quot;Item 7&quot;,&quot;price&quot;:421,&quot;date&quot;:&quot;2026-07-25&quot;},{&quot;id&quot;:8,&quot;item&quot;:&quot;Item 8&quot;,&quot;price&quot;:17,&quot;date&quot;:&quot;2026-06-28&quot;},{&quot;id&quot;:9,&quot;item&quot;:&quot;Item 9&quot;,&quot;price&quot;:752},{&quot;id&quot;:10,&quot;item&quot;:&quot;Item 10&quot;,&quot;price&quot;:73,&quot;date&quot;:&quot;2026-01-27&quot;},{&quot;id&quot;:11,&quot;item&quot;:&quot;Item 11&quot;,&quot;price&quot;:94,&quot;date&quot;:&quot;2026-10-31&quot;},{&quot;id&quot;:12,&quot;item&quot;:&quot;Item 12&quot;,&quot;price&quot;:846}]&#039;
    table-height=&quot;auto&quot;
    row-height=&quot;default&quot;
    variant=&quot;default&quot;&gt;&lt;/ifx-basic-table&gt;`;
}
