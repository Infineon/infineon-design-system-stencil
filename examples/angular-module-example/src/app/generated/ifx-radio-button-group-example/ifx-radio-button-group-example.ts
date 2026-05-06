import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-radio-button-group-example',
  templateUrl: './ifx-radio-button-group-example.html',
  styleUrl: './ifx-radio-button-group-example.scss',
  standalone: false
})
export class IfxRadioButtonGroupExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-radio-button-group-example',
  templateUrl: './ifx-radio-button-group-example.html',
  styleUrl: './ifx-radio-button-group-example.scss',
  standalone: false
})
export class IfxRadioButtonGroupExample {

  protected readonly alignmentOptions = ["vertical","horizontal"];
  protected alignmentIndex = 0;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected showGroupLabel = false;
  protected groupLabelText = "Group Label";
  protected showCaption = false;
  protected captionText = "Caption text, description, error notification";
  protected showCaptionIcon = false;
  protected required = false;

  protected handleAlignmentChange() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleShowGroupLabelChange() {
    this.showGroupLabel = !this.showGroupLabel;
  }

  protected updateGroupLabelText(value: string) {
    this.groupLabelText = value;
  }

  protected handleShowCaptionChange() {
    this.showCaption = !this.showCaption;
  }

  protected updateCaptionText(value: string) {
    this.captionText = value;
  }

  protected handleShowCaptionIconChange() {
    this.showCaptionIcon = !this.showCaptionIcon;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
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

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-radio-button-group
    [alignment]=&quot;alignmentOptions[alignmentIndex]&quot;
    [groupLabelText]=&quot;groupLabelText&quot;
    [captionText]=&quot;captionText&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [showGroupLabel]=&quot;showGroupLabel&quot;
    [showCaption]=&quot;showCaption&quot;
    [showCaptionIcon]=&quot;showCaptionIcon&quot;
    [required]=&quot;required&quot;&gt;
    &lt;ifx-radio-button
      value=&quot;0&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 0&lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;1&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 1&lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;2&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 2&lt;/ifx-radio-button&gt;
  &lt;/ifx-radio-button-group&gt;`;

  protected readonly alignmentOptions = ["vertical","horizontal"];
  protected alignmentIndex = 0;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected showGroupLabel = false;
  protected groupLabelText = "Group Label";
  protected showCaption = false;
  protected captionText = "Caption text, description, error notification";
  protected showCaptionIcon = false;
  protected required = false;

  protected handleAlignmentChange() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleShowGroupLabelChange() {
    this.showGroupLabel = !this.showGroupLabel;
  }

  protected updateGroupLabelText(value: string) {
    this.groupLabelText = value;
  }

  protected handleShowCaptionChange() {
    this.showCaption = !this.showCaption;
  }

  protected updateCaptionText(value: string) {
    this.captionText = value;
  }

  protected handleShowCaptionIconChange() {
    this.showCaptionIcon = !this.showCaptionIcon;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
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

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}