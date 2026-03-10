import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-select-example',
  templateUrl: './ifx-select-example.html',
  styleUrl: './ifx-select-example.scss',
  standalone: false
})
export class IfxSelectExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-select-example&#039;,
  templateUrl: &#039;./ifx-select-example.html&#039;,
  styleUrl: &#039;./ifx-select-example.scss&#039;,
  standalone: false
})
export class IfxSelectExample {
  protected handleSelect(event: CustomEvent) {
    console.log(&#039;ifxSelect:&#039;, event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-select
    search-placeholder-value=&quot;Search...&quot;
    label=&quot;true&quot;
    caption=&quot;true&quot;
    placeholder-value=&quot;Placeholder&quot;
    options=&#039;[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]&#039;
    (ifxSelect)=&quot;handleSelect(\$any(\$event))&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    placeholder=&quot;{{ controlledProps[&#039;placeholder&#039;] }}&quot;
    error=&quot;{{ controlledProps[&#039;error&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    required=&quot;{{ controlledProps[&#039;required&#039;] }}&quot;
    showSearch=&quot;{{ controlledProps[&#039;showSearch&#039;] }}&quot;
    showClearButton=&quot;{{ controlledProps[&#039;showClearButton&#039;] }}&quot;&gt;&lt;/ifx-select&gt;`;

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }
}
