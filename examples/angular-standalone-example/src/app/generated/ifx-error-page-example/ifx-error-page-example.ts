import { IfxButton, IfxErrorPage, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-error-page-example',
  imports: [ IfxButton, IfxErrorPage, IfxTextField ],
  templateUrl: './ifx-error-page-example.html',
  styleUrl: './ifx-error-page-example.scss'
})
export class IfxErrorPageExample {
  protected readonly tsCode = `import { IfxButton, IfxErrorPage, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-error-page-example',
  imports: [ IfxButton, IfxErrorPage, IfxTextField ],
  templateUrl: './ifx-error-page-example.html',
  styleUrl: './ifx-error-page-example.scss'
})
export class IfxErrorPageExample {

  protected readonly typeOptions = ["403","404","503","maintenance"];
  protected typeIndex = 0;
  protected illustrationUrl = "";
  protected imgAlt = "";
  protected headline = "";
  protected description = "";

  protected toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected updateIllustrationUrl(value: string) {
    this.illustrationUrl = value;
  }

  protected updateImgAlt(value: string) {
    this.imgAlt = value;
  }

  protected updateHeadline(value: string) {
    this.headline = value;
  }

  protected updateDescription(value: string) {
    this.description = value;
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

}`;
  protected readonly htmlCode = `  &lt;ifx-error-page
    [imgAlt]=&quot;imgAlt&quot;
    [type]=&quot;typeOptions[typeIndex]&quot;
    [headline]=&quot;headline&quot;
    [description]=&quot;description&quot;
    [illustrationUrl]=&quot;illustrationUrl&quot;&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        variant=&quot;primary&quot;
        [fullWidth]=&quot;true&quot;&gt;Go to homepage&lt;/ifx-button&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        variant=&quot;secondary&quot;
        [fullWidth]=&quot;true&quot;&gt;Get support&lt;/ifx-button&gt;
    &lt;/div&gt;
  &lt;/ifx-error-page&gt;`;

  protected readonly typeOptions = ["403","404","503","maintenance"];
  protected typeIndex = 0;
  protected illustrationUrl = "";
  protected imgAlt = "";
  protected headline = "";
  protected description = "";

  protected toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected updateIllustrationUrl(value: string) {
    this.illustrationUrl = value;
  }

  protected updateImgAlt(value: string) {
    this.imgAlt = value;
  }

  protected updateHeadline(value: string) {
    this.headline = value;
  }

  protected updateDescription(value: string) {
    this.description = value;
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

}