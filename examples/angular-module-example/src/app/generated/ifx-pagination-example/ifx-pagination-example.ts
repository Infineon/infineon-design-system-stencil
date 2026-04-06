import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-pagination-example',
  templateUrl: './ifx-pagination-example.html',
  styleUrl: './ifx-pagination-example.scss',
  standalone: false
})
export class IfxPaginationExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-pagination-example&#039;,
  templateUrl: &#039;./ifx-pagination-example.html&#039;,
  styleUrl: &#039;./ifx-pagination-example.scss&#039;,
  standalone: false
})
export class IfxPaginationExample {
  protected handleItemsPerPageChange(event: CustomEvent) {
    console.log(&#039;ifxItemsPerPageChange:&#039;, event);
    // Add your handler logic here
  }

  protected handlePageChange(event: CustomEvent) {
    console.log(&#039;ifxPageChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-pagination
    total=&quot;50&quot;
    current-page=&quot;1&quot;
    [showItemsPerPage]=&quot;true&quot;
    items-per-page=&#039;[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;all&quot;,&quot;selected&quot;:false}]&#039;
    items-per-page-label=&quot;Result per Pages&quot;
    (ifxItemsPerPageChange)=&quot;handleItemsPerPageChange(\$any(\$event))&quot;
    (ifxPageChange)=&quot;handlePageChange(\$any(\$event))&quot;&gt;&lt;/ifx-pagination&gt;`;

  protected handleItemsPerPageChange(event: CustomEvent) {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  }

  protected handlePageChange(event: CustomEvent) {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  }
}
