import { IfxTable } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-table-example-defaultstate',
  imports: [ IfxTable ],
  templateUrl: './ifx-table-example-defaultstate.html',
	styleUrl: './ifx-table-example-defaultstate.scss'
})
export class IfxTableDefaultStateExample {
  protected readonly tsCode = `import { IfxButton, IfxTable } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-table-example-defaultstate&#039;,
  imports: [ IfxTable ],
  templateUrl: &#039;./ifx-table-example-defaultstate.html&#039;,
	styleUrl: &#039;./ifx-table-example-defaultstate.scss&#039;
})
export class IfxTableDefaultStateExample {
  protected handleSortChange(event: CustomEvent) {
    console.log(&#039;ifxSortChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-table
    row-height=&quot;default&quot;
    table-height=&quot;auto&quot;
    pagination-items-per-page=&#039;[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;all&quot;,&quot;selected&quot;:false}]&#039;
    filter-orientation=&quot;none&quot;
    variant=&quot;default&quot;
    fit-column=&quot;false&quot;
    column-min-width=&quot;200&quot;
    column-width=&quot;100&quot;
    headline=&quot;Matching results&quot;
    headline-number=&quot;0&quot;
    [pagination]=&quot;false&quot;
    [serverSidePagination]=&quot;false&quot;
    [showLoading]=&quot;false&quot;
    [enableSelection]=&quot;false&quot;
    [fitColumns]=&quot;false&quot;
    (ifxSortChange)=&quot;handleSortChange(\$any(\$event))&quot;&gt;&lt;/ifx-table&gt;`;

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }
}
