import { IfxButton, IfxTable } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-table-example-defaultstate',
  imports: [ IfxButton, IfxTable ],
  templateUrl: './ifx-table-example-defaultstate.html',
	styleUrl: './ifx-table-example-defaultstate.scss'
})
export class IfxTableDefaultStateExample {
  protected readonly tsCode = `import { IfxButton, IfxTable } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-table-example-defaultstate&#039;,
  imports: [ IfxButton, IfxTable ],
  templateUrl: &#039;./ifx-table-example-defaultstate.html&#039;,
	styleUrl: &#039;./ifx-table-example-defaultstate.scss&#039;
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
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["rowHeight", this.controlledProps["rowHeight"]],
      ["filterOrientation", this.controlledProps["filterOrientation"]],
      ["variant", this.controlledProps["variant"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-table
    table-height=&quot;auto&quot;
    fit-column=&quot;false&quot;
    column-min-width=&quot;200&quot;
    column-width=&quot;100&quot;
    headline=&quot;Matching results&quot;
    headline-number=&quot;0&quot;
    (ifxSelectionChange)=&quot;handleSelectionChange(\$any(\$event))&quot;
    (ifxSortChange)=&quot;handleSortChange(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-table&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected readonly filterOrientationOptions = ["sidebar","topbar","none"];
  protected filterOrientationIndex = 2;
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;

  protected toggleRowHeight() { this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length; }
  protected toggleFilterOrientation() { this.filterOrientationIndex = (this.filterOrientationIndex + 1) % this.filterOrientationOptions.length; }
  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "rowHeight": this.rowHeightOptions[this.rowHeightIndex],
      "filterOrientation": this.filterOrientationOptions[this.filterOrientationIndex],
      "variant": this.variantOptions[this.variantIndex],
    };
  }

  protected handleSelectionChange(event: CustomEvent) {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  }

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }
}
