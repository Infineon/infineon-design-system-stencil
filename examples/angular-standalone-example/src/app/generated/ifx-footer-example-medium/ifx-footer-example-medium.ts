import { IfxFooter, IfxIcon, IfxLink, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-footer-example-medium',
  imports: [ IfxFooter, IfxIcon, IfxLink, IfxTextField ],
  templateUrl: './ifx-footer-example-medium.html',
  styleUrl: './ifx-footer-example-medium.scss'
})
export class IfxFooterMediumExample {
  protected readonly tsCode = `import { IfxFooter, IfxIcon, IfxLink, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-footer-example-medium',
  imports: [ IfxFooter, IfxIcon, IfxLink, IfxTextField ],
  templateUrl: './ifx-footer-example-medium.html',
  styleUrl: './ifx-footer-example-medium.scss'
})
export class IfxFooterMediumExample {

  protected copyrightText = "© 1999 - 2026 Infineon Technologies AG";

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
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
  protected readonly htmlCode = `  &lt;ifx-footer [copyrightText]=&quot;copyrightText&quot;&gt;
    &lt;div slot=&quot;socials&quot;&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://facebook.com/infineon&quot;
        aria-label=&quot;Follow us on Facebook&quot;&gt;
        &lt;ifx-icon icon=&quot;facebook&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://youtube.com/infineon&quot;
        aria-label=&quot;Follow us on Youtube&quot;&gt;
        &lt;ifx-icon icon=&quot;youtube&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://instagram.com/infineon&quot;
        aria-label=&quot;Follow us on Instagram&quot;&gt;
        &lt;ifx-icon icon=&quot;instagram&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://linkedin.com/infineon&quot;
        aria-label=&quot;Follow us on LinkedIn&quot;&gt;
        &lt;ifx-icon icon=&quot;linkedin&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://xing.com/infineon&quot;
        aria-label=&quot;Follow us on Xing&quot;&gt;
        &lt;ifx-icon icon=&quot;xing&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;info&quot;&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/terms&quot;
        target=&quot;_blank&quot;&gt;Terms&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/imprint&quot;
        target=&quot;_blank&quot;&gt;Imprint&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/privacy-policy&quot;
        target=&quot;_blank&quot;&gt;Privacy policy&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/glossary&quot;
        target=&quot;_blank&quot;&gt;Glossary&lt;/ifx-link&gt;
    &lt;/div&gt;
  &lt;/ifx-footer&gt;`;

  protected copyrightText = "© 1999 - 2026 Infineon Technologies AG";

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
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