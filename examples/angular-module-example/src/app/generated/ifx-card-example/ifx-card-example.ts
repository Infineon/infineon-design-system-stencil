import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-card-example',
  templateUrl: './ifx-card-example.html',
  styleUrl: './ifx-card-example.scss',
  standalone: false
})
export class IfxCardExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-card-example',
  templateUrl: './ifx-card-example.html',
  styleUrl: './ifx-card-example.scss',
  standalone: false
})
export class IfxCardExample {

  protected readonly directionOptions = ["horizontal","vertical"];
  protected directionIndex = 1;
  protected ariaLabelText = "Card";
  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected handleDirectionChange() {
    this.directionIndex = (this.directionIndex + 1) % this.directionOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleImgPosition(event: CustomEvent) {
    console.log('imgPosition:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-card
    aria-label=&quot;&quot;
    [direction]=&quot;directionOptions[directionIndex]&quot;
    [href]=&quot;href&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;&gt;
    &lt;ifx-card-image
      position=&quot;right&quot;
      src=&quot;https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg&quot;
      alt=&quot;Coffee&quot;
      slot=&quot;img&quot;
      (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;&lt;/ifx-card-image&gt;
    &lt;ifx-card-overline (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;Overline&lt;/ifx-card-overline&gt;
    &lt;ifx-card-headline (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;Headline&lt;/ifx-card-headline&gt;
    &lt;ifx-card-text (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card&#039;s content.&lt;/ifx-card-text&gt;
    &lt;ifx-card-links
      slot=&quot;buttons&quot;
      (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;
      &lt;ifx-button variant=&quot;primary&quot;&gt;Button&lt;/ifx-button&gt;
      &lt;ifx-button variant=&quot;secondary&quot;&gt;Button&lt;/ifx-button&gt;
    &lt;/ifx-card-links&gt;
  &lt;/ifx-card&gt;`;

  protected readonly directionOptions = ["horizontal","vertical"];
  protected directionIndex = 1;
  protected ariaLabelText = "Card";
  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected handleDirectionChange() {
    this.directionIndex = (this.directionIndex + 1) % this.directionOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleImgPosition(event: CustomEvent) {
    console.log('imgPosition:', event);
    // Add your handler logic here
  }

}