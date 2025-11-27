import { IfxBasicTable } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-basic-table-example',
  imports: [ IfxBasicTable ],
  templateUrl: './ifx-basic-table-example.html',
  styleUrl: './ifx-basic-table-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxBasicTableExample {
  protected readonly tsCode = `import { IfxBasicTable } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-basic-table-example&#039;,
  imports: [ IfxBasicTable ],
  templateUrl: &#039;./ifx-basic-table-example.html&#039;,
  styleUrl: &#039;./ifx-basic-table-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxBasicTableExample {}`;
  protected readonly htmlCode = `  &lt;ifx-basic-table
    cols=&#039;[{&quot;headerName&quot;:&quot;Make&quot;,&quot;field&quot;:&quot;make&quot;,&quot;sortable&quot;:true,&quot;sort&quot;:&quot;desc&quot;,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Model&quot;,&quot;field&quot;:&quot;model&quot;,&quot;sortable&quot;:true,&quot;unSortIcon&quot;:true},{&quot;headerName&quot;:&quot;Price&quot;,&quot;field&quot;:&quot;price&quot;},{&quot;headerName&quot;:&quot;Age&quot;,&quot;field&quot;:&quot;age&quot;}]&#039;
    rows=&#039;[{&quot;make&quot;:&quot;Toyota&quot;,&quot;model&quot;:&quot;Celica&quot;,&quot;price&quot;:35000,&quot;age&quot;:10},{&quot;make&quot;:&quot;Ford&quot;,&quot;model&quot;:&quot;Mondeo&quot;,&quot;price&quot;:32000,&quot;age&quot;:12},{&quot;make&quot;:&quot;Porsche&quot;,&quot;model&quot;:&quot;Boxster&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Toyota&quot;,&quot;model&quot;:&quot;Celica&quot;,&quot;price&quot;:37000,&quot;age&quot;:8},{&quot;make&quot;:&quot;Ford&quot;,&quot;model&quot;:&quot;Mondeo&quot;,&quot;price&quot;:34000,&quot;age&quot;:10},{&quot;make&quot;:&quot;Porsche&quot;,&quot;model&quot;:&quot;Boxster&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Toyota&quot;,&quot;model&quot;:&quot;Celica&quot;,&quot;price&quot;:38000,&quot;age&quot;:7},{&quot;make&quot;:&quot;Ford&quot;,&quot;model&quot;:&quot;Mondeo&quot;,&quot;price&quot;:36000,&quot;age&quot;:8},{&quot;make&quot;:&quot;Porsche&quot;,&quot;model&quot;:&quot;Boxster&quot;,&quot;price&quot;:72000},{&quot;make&quot;:&quot;Toyota&quot;,&quot;model&quot;:&quot;Celica&quot;,&quot;price&quot;:39000,&quot;age&quot;:2},{&quot;make&quot;:&quot;Ford&quot;,&quot;model&quot;:&quot;Mondeo&quot;,&quot;price&quot;:38000,&quot;age&quot;:6},{&quot;make&quot;:&quot;Porsche&quot;,&quot;model&quot;:&quot;Boxster&quot;,&quot;price&quot;:72000}]&#039;
    table-height=&quot;auto&quot;
    row-height=&quot;default&quot;
    variant=&quot;default&quot;&gt;&lt;/ifx-basic-table&gt;`;
}
