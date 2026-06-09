import{A as w,b as c}from"./iframe-CinqYwh9.js";const t=e=>e??w;var h=Object.freeze,$=Object.defineProperty,b=(e,i)=>h($(e,"raw",{value:h(e.slice())})),y,f;const{action:s}=__STORYBOOK_MODULE_ACTIONS__,d=[{id:"short1",text:"Lorem",type:"suggestion"},{id:"short2",text:"Ipsum",type:"suggestion"},{id:"short3",text:"Dolor",type:"suggestion"},{id:"scope1",text:"Consectetur adipiscing",type:"suggestion",scope:"Elite",resultCount:567},{id:"scope2",text:"Sed do eiusmod",type:"suggestion",scope:"Tempor",resultCount:2341},{id:"misc1",text:"Alias consequatur",type:"suggestion"},{id:"misc2",text:"Aut perferendis",type:"suggestion",scope:"Doloribus asperiores",resultCount:1234}],I=["Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Sed do eiusmod tempor","Ut labore et dolore magna","Enim ad minim veniam"],m=e=>{typeof localStorage<"u"&&localStorage.setItem(e,JSON.stringify(I))},L={title:"Components/Search Field",args:{showDeleteIcon:!0,disabled:!1,size:"l",value:"",placeholder:"Search...",autocomplete:"on",showSuggestions:!1,enableHistory:!0,maxSuggestions:10,maxHistoryItems:5,historyKey:"ifx-search-history",historyHeaderText:"Recent Searches",ariaLabelText:"Search field",deleteIconAriaLabel:"Clear search",historyDeleteAriaLabel:"Remove from history",dropdownAriaLabel:"Search suggestions and history",suggestionAriaLabel:"Search suggestion",historyItemAriaLabel:"Search history item"},argTypes:{showDeleteIcon:{description:"Determines whether a delete icon is shown in the search field.",control:"boolean",table:{category:"ifx-search-field props",defaultValue:{summary:!0}}},disabled:{description:"Disables the search field, preventing user interaction.",control:"boolean",table:{category:"ifx-search-field props",defaultValue:{summary:!1}}},size:{description:"Size options: s (36px) and l (40px) - default: l.",control:"radio",options:["s","l"],table:{category:"ifx-search-field props",defaultValue:{summary:"l"}}},placeholder:{description:"Placeholder text displayed in the search field when it is empty.",control:"text",table:{category:"ifx-search-field props",defaultValue:{summary:"Search..."}}},maxlength:{description:"Specifies the maximum number of characters that can be entered into the search field.",control:"number",table:{category:"ifx-search-field props"}},value:{description:"The value of the search field. It is used for the form submission.",control:"text",table:{category:"ifx-search-field props"}},autocomplete:{description:'Sets the autocomplete attribute. "on" by default.',control:"text",table:{category:"ifx-search-field props"}},ifxInput:{action:"ifxInput",description:"A custom event triggered whenever there is input in the search field.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxInput={handleInput}
Vue:@ifxInput="handleInput"
Angular:(ifxInput)="handleInput()"
VanillaJs:.addEventListener("ifxInput", (event) => {//handle input});`}}},showSuggestions:{description:"Enables the suggestions dropdown with external suggestions.",control:"boolean",table:{category:"Search Suggestions",defaultValue:{summary:!1}}},enableHistory:{description:"Enables search history functionality with localStorage persistence.",control:"boolean",table:{category:"Search Suggestions",defaultValue:{summary:!0}}},maxSuggestions:{description:"Maximum number of suggestions to display in the dropdown.",control:"number",table:{category:"Search Suggestions",defaultValue:{summary:10}}},maxHistoryItems:{description:"Maximum number of history items to store and display.",control:"number",table:{category:"Search Suggestions",defaultValue:{summary:5}}},historyKey:{description:"LocalStorage key for persisting search history.",control:"text",table:{category:"Search Suggestions",defaultValue:{summary:"ifx-search-history"}}},historyHeaderText:{description:"Header text displayed above history entries in the dropdown.",control:"text",table:{category:"Search Suggestions",defaultValue:{summary:"Recent Searches"}}},ariaLabelText:{description:"ARIA label text for the search field component.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search field"}}},ariaLabelledBy:{description:"ID of element that labels the search field.",control:"text",table:{category:"Accessibility"}},ariaDescribedBy:{description:"ID of element that describes the search field.",control:"text",table:{category:"Accessibility"}},deleteIconAriaLabel:{description:"ARIA label for the delete/clear icon.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Clear search"}}},historyDeleteAriaLabel:{description:"ARIA label for history delete buttons.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Remove from history"}}},dropdownAriaLabel:{description:"ARIA label for the suggestions dropdown.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search suggestions and history"}}},suggestionAriaLabel:{description:"ARIA label prefix for suggestion items.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search suggestion"}}},historyItemAriaLabel:{description:"ARIA label prefix for history items.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search history item"}}},ifxSuggestionRequested:{action:"ifxSuggestionRequested",description:"Event triggered when the component requests suggestions for a query.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSuggestionRequested={handleSuggestionRequest}
Vue: @ifxSuggestionRequested="handleSuggestionRequest"
Angular: (ifxSuggestionRequested)="handleSuggestionRequest()"
VanillaJs: .addEventListener("ifxSuggestionRequested", (event) => {//handle request});`}}},ifxSuggestionSelected:{action:"ifxSuggestionSelected",description:"Event triggered when a suggestion is selected from the dropdown.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSuggestionSelected={handleSuggestionSelection}
Vue: @ifxSuggestionSelected="handleSuggestionSelection"
Angular: (ifxSuggestionSelected)="handleSuggestionSelection()"
VanillaJs: .addEventListener("ifxSuggestionSelected", (event) => {//handle selection});`}}},ifxFocus:{action:"ifxFocus",description:"Event triggered when the search field receives focus.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxFocus={handleFocus}
Vue: @ifxFocus="handleFocus"
Angular: (ifxFocus)="handleFocus()"
VanillaJs: .addEventListener("ifxFocus", (event) => {//handle focus});`}}},ifxBlur:{action:"ifxBlur",description:"Event triggered when the search field loses focus.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxBlur={handleBlur}
Vue: @ifxBlur="handleBlur"
Angular: (ifxBlur)="handleBlur()"
VanillaJs: .addEventListener("ifxBlur", (event) => {//handle blur});`}}}}},x=(e,i)=>{i.seedHistory&&e.enableHistory&&m(e.historyKey);const n=u=>{if(s("ifxSuggestionRequested")(u),!i.wireSuggestions)return;const p=u.currentTarget,g=(u?.detail??"").toLowerCase();p.suggestions=g.length===0?d:d.filter(S=>S.text.toLowerCase().includes(g))};return c`
        <ifx-search-field
            size=${e.size}
            ?disabled=${e.disabled}
            ?show-delete-icon=${e.showDeleteIcon}
            ?show-suggestions=${e.showSuggestions}
            ?enable-history=${e.enableHistory}
            max-suggestions=${e.maxSuggestions}
            max-history-items=${e.maxHistoryItems}
            history-key=${e.historyKey}
            history-header-text=${e.historyHeaderText}
            value=${e.value}
            autocomplete=${e.autocomplete}
            placeholder=${e.placeholder}
            maxlength=${t(e.maxlength)}
            aria-label-text=${t(e.ariaLabelText)}
            aria-labelledby=${t(e.ariaLabelledBy)}
            aria-describedby=${t(e.ariaDescribedBy)}
            delete-icon-aria-label=${t(e.deleteIconAriaLabel)}
            history-delete-aria-label=${t(e.historyDeleteAriaLabel)}
            dropdown-aria-label=${t(e.dropdownAriaLabel)}
            suggestion-aria-label=${t(e.suggestionAriaLabel)}
            history-item-aria-label=${t(e.historyItemAriaLabel)}
            .suggestions=${i.wireSuggestions?d:[]}
            @ifxInput=${s("ifxInput")}
            @ifxSuggestionRequested=${n}
            @ifxSuggestionSelected=${s("ifxSuggestionSelected")}
            @ifxFocus=${s("ifxFocus")}
            @ifxBlur=${s("ifxBlur")}
        ></ifx-search-field>
    `},o={args:{showSuggestions:!1,enableHistory:!1,placeholder:"Search..."},render:e=>x(e,{wireSuggestions:!1,seedHistory:!1})},a={args:{showSuggestions:!0,enableHistory:!0,historyKey:"storybook-search-with-suggestions",placeholder:"Search with suggestions..."},render:e=>{const i="search-field-with-suggestions",n=JSON.stringify(d);return e.enableHistory&&m(e.historyKey),c(y||(y=b([`
            <ifx-search-field
                id=`,`
                size=`,`
                ?disabled=`,`
                ?show-delete-icon=`,`
                ?show-suggestions=`,`
                ?enable-history=`,`
                max-suggestions=`,`
                max-history-items=`,`
                history-key=`,`
                history-header-text=`,`
                value=`,`
                autocomplete=`,`
                placeholder=`,`
                maxlength=`,`
                aria-label-text=`,`
                aria-labelledby=`,`
                aria-describedby=`,`
                delete-icon-aria-label=`,`
                history-delete-aria-label=`,`
                dropdown-aria-label=`,`
                suggestion-aria-label=`,`
                history-item-aria-label=`,`
                @ifxInput=`,`
                @ifxSuggestionRequested=`,`
                @ifxSuggestionSelected=`,`
                @ifxFocus=`,`
                @ifxBlur=`,`
            ></ifx-search-field>
            <script>
                (() => {
                    const searchField = document.getElementById("`,`");
                    if (!searchField) return;

                    const allSuggestions = `,`;
                    searchField.suggestions = allSuggestions;

                    searchField.addEventListener("ifxSuggestionRequested", (event) => {
                        const query = (event?.detail ?? "").toLowerCase();
                        searchField.suggestions =
                            query.length === 0
                                ? allSuggestions
                                : allSuggestions.filter((item) =>
                                        item.text.toLowerCase().includes(query),
                              );
                    });
                })();
            <\/script>
        `])),i,e.size,e.disabled,e.showDeleteIcon,e.showSuggestions,e.enableHistory,e.maxSuggestions,e.maxHistoryItems,e.historyKey,e.historyHeaderText,e.value,e.autocomplete,e.placeholder,t(e.maxlength),t(e.ariaLabelText),t(e.ariaLabelledBy),t(e.ariaDescribedBy),t(e.deleteIconAriaLabel),t(e.historyDeleteAriaLabel),t(e.dropdownAriaLabel),t(e.suggestionAriaLabel),t(e.historyItemAriaLabel),s("ifxInput"),s("ifxSuggestionRequested"),s("ifxSuggestionSelected"),s("ifxFocus"),s("ifxBlur"),i,n)}},r={args:{showSuggestions:!1,enableHistory:!0,historyKey:"storybook-search-history-only",placeholder:"Search with history only..."},render:e=>x(e,{wireSuggestions:!1,seedHistory:!0})},l={args:{showSuggestions:!0,enableHistory:!1,historyKey:"storybook-search-suggestions-only",placeholder:"Search with suggestions only..."},render:e=>{const i="search-field-suggestions-only",n=JSON.stringify(d);return c(f||(f=b([`
            <ifx-search-field
                id=`,`
                size=`,`
                ?disabled=`,`
                ?show-delete-icon=`,`
                ?show-suggestions=`,`
                ?enable-history=`,`
                max-suggestions=`,`
                max-history-items=`,`
                history-key=`,`
                history-header-text=`,`
                value=`,`
                autocomplete=`,`
                placeholder=`,`
                maxlength=`,`
                aria-label-text=`,`
                aria-labelledby=`,`
                aria-describedby=`,`
                delete-icon-aria-label=`,`
                history-delete-aria-label=`,`
                dropdown-aria-label=`,`
                suggestion-aria-label=`,`
                history-item-aria-label=`,`
                @ifxInput=`,`
                @ifxSuggestionRequested=`,`
                @ifxSuggestionSelected=`,`
                @ifxFocus=`,`
                @ifxBlur=`,`
            ></ifx-search-field>
            <script>
                (() => {
                    const searchField = document.getElementById("`,`");
                    if (!searchField) return;

                    const allSuggestions = `,`;
                    searchField.suggestions = allSuggestions;

                    searchField.addEventListener("ifxSuggestionRequested", (event) => {
                        const query = (event?.detail ?? "").toLowerCase();
                        searchField.suggestions =
                            query.length === 0
                                ? allSuggestions
                                : allSuggestions.filter((item) =>
                                        item.text.toLowerCase().includes(query),
                              );
                    });
                })();
            <\/script>
        `])),i,e.size,e.disabled,e.showDeleteIcon,e.showSuggestions,e.enableHistory,e.maxSuggestions,e.maxHistoryItems,e.historyKey,e.historyHeaderText,e.value,e.autocomplete,e.placeholder,t(e.maxlength),t(e.ariaLabelText),t(e.ariaLabelledBy),t(e.ariaDescribedBy),t(e.deleteIconAriaLabel),t(e.historyDeleteAriaLabel),t(e.dropdownAriaLabel),t(e.suggestionAriaLabel),t(e.historyItemAriaLabel),s("ifxInput"),s("ifxSuggestionRequested"),s("ifxSuggestionSelected"),s("ifxFocus"),s("ifxBlur"),i,n)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showSuggestions: false,
    enableHistory: false,
    placeholder: "Search..."
  },
  render: (args: Record<string, any>) => renderSearchFieldStory(args, {
    wireSuggestions: false,
    seedHistory: false
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSuggestions: true,
    enableHistory: true,
    historyKey: "storybook-search-with-suggestions",
    placeholder: "Search with suggestions..."
  },
  render: (args: Record<string, any>) => {
    const storyId = "search-field-with-suggestions";
    const suggestionPool = JSON.stringify(genericMockSuggestions);
    if (args.enableHistory) {
      resetHistoryForStorybook(args.historyKey);
    }
    return html\`
            <ifx-search-field
                id=\${storyId}
                size=\${args.size}
                ?disabled=\${args.disabled}
                ?show-delete-icon=\${args.showDeleteIcon}
                ?show-suggestions=\${args.showSuggestions}
                ?enable-history=\${args.enableHistory}
                max-suggestions=\${args.maxSuggestions}
                max-history-items=\${args.maxHistoryItems}
                history-key=\${args.historyKey}
                history-header-text=\${args.historyHeaderText}
                value=\${args.value}
                autocomplete=\${args.autocomplete}
                placeholder=\${args.placeholder}
                maxlength=\${ifDefined(args.maxlength)}
                aria-label-text=\${ifDefined(args.ariaLabelText)}
                aria-labelledby=\${ifDefined(args.ariaLabelledBy)}
                aria-describedby=\${ifDefined(args.ariaDescribedBy)}
                delete-icon-aria-label=\${ifDefined(args.deleteIconAriaLabel)}
                history-delete-aria-label=\${ifDefined(args.historyDeleteAriaLabel)}
                dropdown-aria-label=\${ifDefined(args.dropdownAriaLabel)}
                suggestion-aria-label=\${ifDefined(args.suggestionAriaLabel)}
                history-item-aria-label=\${ifDefined(args.historyItemAriaLabel)}
                @ifxInput=\${action("ifxInput")}
                @ifxSuggestionRequested=\${action("ifxSuggestionRequested")}
                @ifxSuggestionSelected=\${action("ifxSuggestionSelected")}
                @ifxFocus=\${action("ifxFocus")}
                @ifxBlur=\${action("ifxBlur")}
            ></ifx-search-field>
            <script>
                (() => {
                    const searchField = document.getElementById("\${storyId}");
                    if (!searchField) return;

                    const allSuggestions = \${suggestionPool};
                    searchField.suggestions = allSuggestions;

                    searchField.addEventListener("ifxSuggestionRequested", (event) => {
                        const query = (event?.detail ?? "").toLowerCase();
                        searchField.suggestions =
                            query.length === 0
                                ? allSuggestions
                                : allSuggestions.filter((item) =>
                                        item.text.toLowerCase().includes(query),
                              );
                    });
                })();
            <\/script>
        \`;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    showSuggestions: false,
    enableHistory: true,
    historyKey: "storybook-search-history-only",
    placeholder: "Search with history only..."
  },
  render: (args: Record<string, any>) => renderSearchFieldStory(args, {
    wireSuggestions: false,
    seedHistory: true
  })
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showSuggestions: true,
    enableHistory: false,
    historyKey: "storybook-search-suggestions-only",
    placeholder: "Search with suggestions only..."
  },
  render: (args: Record<string, any>) => {
    const storyId = "search-field-suggestions-only";
    const suggestionPool = JSON.stringify(genericMockSuggestions);
    return html\`
            <ifx-search-field
                id=\${storyId}
                size=\${args.size}
                ?disabled=\${args.disabled}
                ?show-delete-icon=\${args.showDeleteIcon}
                ?show-suggestions=\${args.showSuggestions}
                ?enable-history=\${args.enableHistory}
                max-suggestions=\${args.maxSuggestions}
                max-history-items=\${args.maxHistoryItems}
                history-key=\${args.historyKey}
                history-header-text=\${args.historyHeaderText}
                value=\${args.value}
                autocomplete=\${args.autocomplete}
                placeholder=\${args.placeholder}
                maxlength=\${ifDefined(args.maxlength)}
                aria-label-text=\${ifDefined(args.ariaLabelText)}
                aria-labelledby=\${ifDefined(args.ariaLabelledBy)}
                aria-describedby=\${ifDefined(args.ariaDescribedBy)}
                delete-icon-aria-label=\${ifDefined(args.deleteIconAriaLabel)}
                history-delete-aria-label=\${ifDefined(args.historyDeleteAriaLabel)}
                dropdown-aria-label=\${ifDefined(args.dropdownAriaLabel)}
                suggestion-aria-label=\${ifDefined(args.suggestionAriaLabel)}
                history-item-aria-label=\${ifDefined(args.historyItemAriaLabel)}
                @ifxInput=\${action("ifxInput")}
                @ifxSuggestionRequested=\${action("ifxSuggestionRequested")}
                @ifxSuggestionSelected=\${action("ifxSuggestionSelected")}
                @ifxFocus=\${action("ifxFocus")}
                @ifxBlur=\${action("ifxBlur")}
            ></ifx-search-field>
            <script>
                (() => {
                    const searchField = document.getElementById("\${storyId}");
                    if (!searchField) return;

                    const allSuggestions = \${suggestionPool};
                    searchField.suggestions = allSuggestions;

                    searchField.addEventListener("ifxSuggestionRequested", (event) => {
                        const query = (event?.detail ?? "").toLowerCase();
                        searchField.suggestions =
                            query.length === 0
                                ? allSuggestions
                                : allSuggestions.filter((item) =>
                                        item.text.toLowerCase().includes(query),
                              );
                    });
                })();
            <\/script>
        \`;
  }
}`,...l.parameters?.docs?.source}}};const A=["Default","WithSuggestions","HistoryOnly","SuggestionsOnly"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:o,HistoryOnly:r,SuggestionsOnly:l,WithSuggestions:a,__namedExportsOrder:A,default:L},Symbol.toStringTag,{value:"Module"}));export{o as D,F as S,a as W};
