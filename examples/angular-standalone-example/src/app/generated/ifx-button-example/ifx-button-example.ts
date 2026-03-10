import { IfxButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-button-example',
  imports: [ IfxButton ],
  templateUrl: './ifx-button-example.html',
	styleUrl: './ifx-button-example.scss'
})
export class IfxButtonExample {
  protected readonly tsCode = `import { IfxButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-button-example&#039;,
  imports: [ IfxButton ],
  templateUrl: &#039;./ifx-button-example.html&#039;,
	styleUrl: &#039;./ifx-button-example.scss&#039;
})
export class IfxButtonExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["variant", this.controlledProps["variant"]],
      ["theme", this.controlledProps["theme"]],
      ["type", this.controlledProps["type"]],
      ["size", this.controlledProps["size"]],
      ["fullWidth", this.controlledProps["fullWidth"]],
      ["disabled", this.controlledProps["disabled"]],
      ["href", this.controlledProps["href"]],
      ["target", this.controlledProps["target"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-button
    aria-label=&quot;Button&quot;
    __CONTROLLED_ATTRS__&gt;Button&lt;/ifx-button&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected readonly themeOptions = ["default","danger","inverse"];
  protected themeIndex = 0;
  protected readonly typeOptions = ["button","submit","reset"];
  protected typeIndex = 0;
  protected readonly sizeOptions = ["xs","s","m","l"];
  protected sizeIndex = 2;
  protected fullWidth = false;
  protected disabled = false;
  protected href = false;
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }
  protected toggleTheme() { this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length; }
  protected toggleType() { this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleFullWidth() { this.fullWidth = !this.fullWidth; }
  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleHref() { this.href = !this.href; }
  protected toggleTarget() { this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "variant": this.variantOptions[this.variantIndex],
      "theme": this.themeOptions[this.themeIndex],
      "type": this.typeOptions[this.typeIndex],
      "size": this.sizeOptions[this.sizeIndex],
      "fullWidth": this.fullWidth,
      "disabled": this.disabled,
      "href": this.href,
      "target": this.targetOptions[this.targetIndex],
    };
  }
}
