import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-footer-example-medium',
  templateUrl: './ifx-footer-example-medium.html',
  styleUrl: './ifx-footer-example-medium.scss',
  standalone: false
})
export class IfxFooterMediumExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-footer-example-medium&#039;,
  templateUrl: &#039;./ifx-footer-example-medium.html&#039;,
  styleUrl: &#039;./ifx-footer-example-medium.scss&#039;,
  standalone: false
})
export class IfxFooterMediumExample {}`;
  protected readonly htmlCode = `  &lt;ifx-footer copyright-text=&quot;© 1999 - 2026 Infineon Technologies AG&quot;&gt;
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
}
