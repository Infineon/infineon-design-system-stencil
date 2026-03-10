import { IfxButton, IfxLink } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-link-example',
  imports: [ IfxButton, IfxLink ],
  templateUrl: './ifx-link-example.html',
	styleUrl: './ifx-link-example.scss'
})
export class IfxLinkExample {
  protected readonly tsCode = `import { IfxButton, IfxLink } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-link-example&#039;,
  imports: [ IfxButton, IfxLink ],
  templateUrl: &#039;./ifx-link-example.html&#039;,
	styleUrl: &#039;./ifx-link-example.scss&#039;
})
export class IfxLinkExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["target", this.controlledProps["target"]],
      ["size", this.controlledProps["size"]],
      ["variant", this.controlledProps["variant"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-link
    href=&quot;true&quot;
    aria-label=&quot;Link&quot;
    download=&quot;true&quot;
    __CONTROLLED_ATTRS__&gt;Link&lt;/ifx-link&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected readonly sizeOptions = ["s","m","l","xl"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["bold","underlined","title","menu"];
  protected variantIndex = 0;

  protected toggleTarget() { this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "target": this.targetOptions[this.targetIndex],
      "size": this.sizeOptions[this.sizeIndex],
      "variant": this.variantOptions[this.variantIndex],
    };
  }
}
