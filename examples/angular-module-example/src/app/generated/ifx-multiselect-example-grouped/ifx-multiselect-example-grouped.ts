import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-multiselect-example-grouped',
  templateUrl: './ifx-multiselect-example-grouped.html',
  styleUrl: './ifx-multiselect-example-grouped.scss',
  standalone: false
})
export class IfxMultiselectGroupedExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-multiselect-example-grouped&#039;,
  templateUrl: &#039;./ifx-multiselect-example-grouped.html&#039;,
  styleUrl: &#039;./ifx-multiselect-example-grouped.scss&#039;,
  standalone: false
})
export class IfxMultiselectGroupedExample {
  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
    // Add your handler logic here
  }

  protected handleSelect(event: CustomEvent) {
    console.log(&#039;ifxSelect:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-multiselect
    label=&quot;KPIs&quot;
    placeholder=&quot;Select KPIs...&quot;
    name=&quot;multiselect&quot;
    [disabled]=&quot;false&quot;
    [readOnly]=&quot;false&quot;
    [required]=&quot;true&quot;
    [showSearch]=&quot;true&quot;
    [showSelectAll]=&quot;true&quot;
    [showExpandCollapse]=&quot;true&quot;
    [error]=&quot;false&quot;
    caption=&quot;&quot;
    [showClearButton]=&quot;true&quot;
    no-results-message=&quot;No results found.&quot;
    [showNoResultsMessage]=&quot;true&quot;
    search-placeholder=&quot;Search&quot;
    select-all-label=&quot;Select all&quot;
    expand-label=&quot;Expand&quot;
    collapse-label=&quot;Collapse&quot;
    aria-multi-select-label=&quot;Multi-select dropdown&quot;
    aria-multi-select-labelled-by=&quot;&quot;
    aria-multi-select-described-by=&quot;&quot;
    aria-search-label=&quot;Search options&quot;
    aria-clear-label=&quot;Clear all selections&quot;
    aria-toggle-label=&quot;Toggle dropdown&quot;
    aria-select-all-label=&quot;Select all options&quot;
    aria-expand-all-label=&quot;Expand all categories&quot;
    aria-collapse-all-label=&quot;Collapse all categories&quot;
    (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
    (ifxSelect)=&quot;handleSelect(\$any(\$event))&quot;&gt;
    &lt;ifx-multiselect-group label=&quot;Revenue&quot;&gt;
      &lt;ifx-multiselect-option value=&quot;revenue-total&quot;&gt;Total revenue&lt;/ifx-multiselect-option&gt;
      &lt;ifx-multiselect-option value=&quot;revenue-region&quot;&gt;Revenue by region&lt;/ifx-multiselect-option&gt;
    &lt;/ifx-multiselect-group&gt;
    &lt;ifx-multiselect-group label=&quot;Costs&quot;&gt;
      &lt;ifx-multiselect-option value=&quot;costs-total&quot;&gt;Total costs&lt;/ifx-multiselect-option&gt;
      &lt;ifx-multiselect-option value=&quot;costs-category&quot;&gt;Costs by category&lt;/ifx-multiselect-option&gt;
    &lt;/ifx-multiselect-group&gt;
  &lt;/ifx-multiselect&gt;`;

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }
}
