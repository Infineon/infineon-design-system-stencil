import { IfxBasicTable, IfxButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-basic-table-example',
  imports: [ IfxBasicTable, IfxButton ],
  templateUrl: './ifx-basic-table-example.html',
	styleUrl: './ifx-basic-table-example.scss'
})
export class IfxBasicTableExample {
  protected readonly tsCode = `import { IfxBasicTable, IfxButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-basic-table-example&#039;,
  imports: [ IfxBasicTable, IfxButton ],
  templateUrl: &#039;./ifx-basic-table-example.html&#039;,
	styleUrl: &#039;./ifx-basic-table-example.scss&#039;
})
export class IfxBasicTableExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["rowHeight", this.controlledProps["rowHeight"]],
      ["variant", this.controlledProps["variant"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-basic-table
    table-height=&quot;auto&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-basic-table&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;

  protected toggleRowHeight() { this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length; }
  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "rowHeight": this.rowHeightOptions[this.rowHeightIndex],
      "variant": this.variantOptions[this.variantIndex],
    };
  }
}
