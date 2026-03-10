import { IfxButton, IfxPagination } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-pagination-example',
  imports: [ IfxButton, IfxPagination ],
  templateUrl: './ifx-pagination-example.html',
	styleUrl: './ifx-pagination-example.scss'
})
export class IfxPaginationExample {
  protected readonly tsCode = `import { IfxButton, IfxPagination } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-pagination-example&#039;,
  imports: [ IfxButton, IfxPagination ],
  templateUrl: &#039;./ifx-pagination-example.html&#039;,
	styleUrl: &#039;./ifx-pagination-example.scss&#039;
})
export class IfxPaginationExample {
  protected handlePageChange(event: CustomEvent) {
    console.log(&#039;ifxPageChange:&#039;, event);
    // Add your handler logic here
  }

  protected handleItemsPerPageChange(event: CustomEvent) {
    console.log(&#039;ifxItemsPerPageChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["showItemsPerPage", this.controlledProps["showItemsPerPage"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-pagination
    total=&quot;50&quot;
    current-page=&quot;1&quot;
    items-per-page=&#039;[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}]&#039;
    (ifxPageChange)=&quot;handlePageChange(\$any(\$event))&quot;
    (ifxItemsPerPageChange)=&quot;handleItemsPerPageChange(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-pagination&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected showItemsPerPage = true;

  protected toggleShowItemsPerPage() { this.showItemsPerPage = !this.showItemsPerPage; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "showItemsPerPage": this.showItemsPerPage,
    };
  }

  protected handlePageChange(event: CustomEvent) {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  }

  protected handleItemsPerPageChange(event: CustomEvent) {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  }
}
