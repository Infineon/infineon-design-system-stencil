import { IfxPagination } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-pagination-example',
  imports: [ IfxPagination ],
  templateUrl: './ifx-pagination-example.html',
  styleUrl: './ifx-pagination-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxPaginationExample {
  protected readonly tsCode = `import { IfxPagination } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-pagination-example&#039;,
  imports: [ IfxPagination ],
  templateUrl: &#039;./ifx-pagination-example.html&#039;,
  styleUrl: &#039;./ifx-pagination-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxPaginationExample {
  protected handlePageChange(event: any) {
    console.log(&#039;ifxPageChange:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleItemsPerPageChange(event: any) {
    console.log(&#039;ifxItemsPerPageChange:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-pagination
    total=&quot;50&quot;
    current-page=&quot;1&quot;
    show-items-per-page=&quot;true&quot;
    items-per-page=&#039;[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}]&#039;
    (ifxPageChange)=&quot;handlePageChange(\$event)&quot;
    (ifxItemsPerPageChange)=&quot;handleItemsPerPageChange(\$event)&quot;&gt;&lt;/ifx-pagination&gt;`;

  protected handlePageChange(event: any) {
    console.log('ifxPageChange:', event.detail);
    // Add your handler logic here
  }

  protected handleItemsPerPageChange(event: any) {
    console.log('ifxItemsPerPageChange:', event.detail);
    // Add your handler logic here
  }
}
