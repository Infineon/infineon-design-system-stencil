import { IfxAccordion, IfxAccordionItem, IfxButton, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-accordion-example',
  imports: [ IfxAccordion, IfxAccordionItem, IfxButton, IfxTextField ],
  templateUrl: './ifx-accordion-example.html',
  styleUrl: './ifx-accordion-example.scss'
})
export class IfxAccordionExample {
  protected readonly tsCode = `import { IfxAccordion, IfxAccordionItem, IfxButton, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-accordion-example',
  imports: [ IfxAccordion, IfxAccordionItem, IfxButton, IfxTextField ],
  templateUrl: './ifx-accordion-example.html',
  styleUrl: './ifx-accordion-example.scss'
})
export class IfxAccordionExample {

  protected ariaLevelNumber = 3;
  protected autoCollapse = false;

  protected updateAriaLevelNumber(value: string) {
    this.ariaLevelNumber = Number(value);
  }

  protected handleAutoCollapseChange() {
    this.autoCollapse = !this.autoCollapse;
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

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-accordion [autoCollapse]=&quot;autoCollapse&quot;&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;true&quot;
      icon=&quot;&quot;
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;&gt;Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;false&quot;
      icon=&quot;&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;&gt;Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;false&quot;
      icon=&quot;&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;&gt;Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
  &lt;/ifx-accordion&gt;`;

  protected ariaLevelNumber = 3;
  protected autoCollapse = false;

  protected updateAriaLevelNumber(value: string) {
    this.ariaLevelNumber = Number(value);
  }

  protected handleAutoCollapseChange() {
    this.autoCollapse = !this.autoCollapse;
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

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}