const{action:t}=__STORYBOOK_MODULE_ACTIONS__,S=[{id:"short1",text:"Lorem",type:"suggestion"},{id:"short2",text:"Ipsum",type:"suggestion"},{id:"short3",text:"Dolor",type:"suggestion"},{id:"short4",text:"Sit",type:"suggestion"},{id:"short5",text:"Amet",type:"suggestion"},{id:"medium1",text:"Lorem ipsum",type:"suggestion",scope:"Consectetur",resultCount:1247},{id:"medium2",text:"Dolor sit",type:"suggestion",scope:"Adipiscing",resultCount:892},{id:"medium3",text:"Consectetur adipiscing",type:"suggestion",scope:"Elite",resultCount:567},{id:"medium4",text:"Sed do eiusmod",type:"suggestion",scope:"Tempor",resultCount:2341},{id:"medium5",text:"Ut labore",type:"suggestion",scope:"Dolore",resultCount:1098},{id:"medium6",text:"Magna aliqua",type:"suggestion"},{id:"medium7",text:"Enim ad minim",type:"suggestion"},{id:"medium8",text:"Veniam quis",type:"suggestion"},{id:"medium9",text:"Nostrud exercitation",type:"suggestion"},{id:"medium10",text:"Ullamco laboris",type:"suggestion"},{id:"long1",text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",type:"suggestion",scope:"Fugiat nulla pariatur",resultCount:156},{id:"long2",text:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",type:"suggestion",scope:"Deserunt mollit anim",resultCount:789},{id:"long3",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",type:"suggestion",scope:"Doloremque laudantium",resultCount:234},{id:"long4",text:"Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt",type:"suggestion"},{id:"long5",text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores",type:"suggestion"},{id:"scope1",text:"Neque porro quisquam",type:"suggestion",scope:"Adipisci velit"},{id:"scope2",text:"Ut enim ad minima",type:"suggestion",scope:"Veniam quis nostrum"},{id:"scope3",text:"Quis autem vel eum",type:"suggestion",scope:"Iure reprehenderit"},{id:"longscope1",text:"Temporibus autem",type:"suggestion",scope:"Quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",resultCount:445},{id:"longscope2",text:"Et harum quidem",type:"suggestion",scope:"Rerum facilis est et expedita distinctio nam libero tempore",resultCount:1876},{id:"extreme1",text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",type:"suggestion",scope:"Similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga",resultCount:999},{id:"misc1",text:"Itaque earum rerum",type:"suggestion",scope:"Hic tenetur",resultCount:1567},{id:"misc2",text:"Sapiente delectus",type:"suggestion"},{id:"misc3",text:"Aut reiciendis",type:"suggestion",scope:"Voluptatibus maiores",resultCount:823},{id:"misc4",text:"Alias consequatur",type:"suggestion"},{id:"misc5",text:"Aut perferendis",type:"suggestion",scope:"Doloribus asperiores",resultCount:1234}],V=["Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Sed do eiusmod tempor","Ut labore et dolore magna","Enim ad minim veniam"],H=s=>{typeof localStorage<"u"&&localStorage.setItem(s,JSON.stringify(V))},B={title:"Components/Search Field",args:{showDeleteIcon:!0,disabled:!1,size:"m",value:"",placeholder:"Search...",autocomplete:"on",showSuggestions:!1,enableHistory:!0,maxSuggestions:10,maxHistoryItems:5,historyKey:"ifx-search-history",historyHeaderText:"Recent Searches",ariaLabel:"Search field",deleteIconAriaLabel:"Clear search",historyDeleteAriaLabel:"Remove from history",dropdownAriaLabel:"Search suggestions and history",suggestionAriaLabel:"Search suggestion",historyItemAriaLabel:"Search history item"},argTypes:{showDeleteIcon:{description:"Determines whether a delete icon is shown in the search field.",control:"boolean",table:{category:"ifx-search-field props",defaultValue:{summary:!0}}},disabled:{description:"Disables the search field, preventing user interaction.",control:"boolean",table:{category:"ifx-search-field props",defaultValue:{summary:!1}}},size:{description:"Size options: s (36px) and m (40px) - default: m.",control:"radio",options:["s","m"],table:{category:"ifx-search-field props",defaultValue:{summary:"m"}}},placeholder:{description:"Placeholder text displayed in the search field when it is empty.",control:"text",table:{category:"ifx-search-field props",defaultValue:{summary:"Search..."}}},maxlength:{description:"Specifies the maximum number of characters that can be entered into the search field.",control:"number",table:{category:"ifx-search-field props"}},value:{description:"The value of the search field. It is used for the form submission.",control:"text",table:{category:"ifx-search-field props"}},autocomplete:{description:'Sets the autocomplete attribute. "on" by default.',control:"text",table:{category:"ifx-search-field props"}},ifxInput:{action:"ifxInput",description:"A custom event triggered whenever there is input in the search field.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxInput={handleInput}
Vue:@ifxInput="handleInput"
Angular:(ifxInput)="handleInput()"
VanillaJs:.addEventListener("ifxInput", (event) => {//handle input});`}}},showSuggestions:{description:"Enables the suggestions dropdown with external suggestions.",control:"boolean",table:{category:"Search Suggestions",defaultValue:{summary:!1}}},enableHistory:{description:"Enables search history functionality with localStorage persistence.",control:"boolean",table:{category:"Search Suggestions",defaultValue:{summary:!0}}},maxSuggestions:{description:"Maximum number of suggestions to display in the dropdown.",control:"number",table:{category:"Search Suggestions",defaultValue:{summary:10}}},maxHistoryItems:{description:"Maximum number of history items to store and display.",control:"number",table:{category:"Search Suggestions",defaultValue:{summary:5}}},historyKey:{description:"LocalStorage key for persisting search history.",control:"text",table:{category:"Search Suggestions",defaultValue:{summary:"ifx-search-history"}}},historyHeaderText:{description:"Header text displayed above history entries in the dropdown.",control:"text",table:{category:"Search Suggestions",defaultValue:{summary:"Recent Searches"}}},ariaLabel:{description:"ARIA label for the search field component.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search field"}}},ariaLabelledBy:{description:"ID of element that labels the search field.",control:"text",table:{category:"Accessibility"}},ariaDescribedBy:{description:"ID of element that describes the search field.",control:"text",table:{category:"Accessibility"}},ariaControls:{description:"Identifies the ID of the dropdown element that this input controls.",control:"text",table:{category:"Accessibility"}},ariaExpanded:{description:"Indicates whether the dropdown is currently open (true) or closed (false).",control:"text",table:{category:"Accessibility"}},deleteIconAriaLabel:{description:"ARIA label for the delete/clear icon.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Clear search"}}},historyDeleteAriaLabel:{description:"ARIA label for history delete buttons.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Remove from history"}}},dropdownAriaLabel:{description:"ARIA label for the suggestions dropdown.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search suggestions and history"}}},suggestionAriaLabel:{description:"ARIA label prefix for suggestion items.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search suggestion"}}},historyItemAriaLabel:{description:"ARIA label prefix for history items.",control:"text",table:{category:"Accessibility",defaultValue:{summary:"Search history item"}}},ifxSuggestionRequested:{action:"ifxSuggestionRequested",description:"Event triggered when the component requests suggestions for a query.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSuggestionRequested={handleSuggestionRequest}
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
VanillaJs: .addEventListener("ifxBlur", (event) => {//handle blur});`}}}}},k=({disabled:s,size:v,showDeleteIcon:L,placeholder:n,maxlength:o,value:w,autocomplete:I,showSuggestions:a,enableHistory:r,maxSuggestions:q,maxHistoryItems:E,historyKey:l,historyHeaderText:R,ariaLabel:u,ariaLabelledBy:d,ariaDescribedBy:c,ariaExpanded:g,ariaControls:m,deleteIconAriaLabel:b,historyDeleteAriaLabel:f,dropdownAriaLabel:h,suggestionAriaLabel:p,historyItemAriaLabel:y})=>{const e=document.createElement("ifx-search-field");return e.setAttribute("size",v),e.setAttribute("disabled",s),e.setAttribute("show-delete-icon",L),e.setAttribute("show-suggestions",a),e.setAttribute("enable-history",r),e.setAttribute("max-suggestions",q),e.setAttribute("max-history-items",E),e.setAttribute("history-key",l),e.setAttribute("history-header-text",R),e.setAttribute("value",w),e.setAttribute("autocomplete",I),n!=null&&e.setAttribute("placeholder",n),o!=null&&e.setAttribute("maxlength",o),u!=null&&e.setAttribute("aria-label",u),d!=null&&e.setAttribute("aria-labelledby",d),c!=null&&e.setAttribute("aria-describedby",c),g!=null&&e.setAttribute("aria-expanded",g),m!=null&&e.setAttribute("aria-controls",m),b!=null&&e.setAttribute("delete-icon-aria-label",b),f!=null&&e.setAttribute("history-delete-aria-label",f),h!=null&&e.setAttribute("dropdown-aria-label",h),p!=null&&e.setAttribute("suggestion-aria-label",p),y!=null&&e.setAttribute("history-item-aria-label",y),setTimeout(()=>{a&&(e.suggestions=S),r&&typeof localStorage<"u"&&H(l)},100),e.addEventListener("ifxInput",t("ifxInput")),e.addEventListener("ifxSuggestionRequested",t("ifxSuggestionRequested")),e.addEventListener("ifxSuggestionSelected",t("ifxSuggestionSelected")),e.addEventListener("ifxFocus",t("ifxFocus")),e.addEventListener("ifxBlur",t("ifxBlur")),e.addEventListener("ifxSuggestionRequested",D=>{const x=D.detail;if(x&&a){const C=S.filter(F=>F.text.toLowerCase().includes(x.toLowerCase()));e.suggestions=C}}),e},A=k.bind({}),T=({disabled:s,size:v,showDeleteIcon:L,placeholder:n,maxlength:o,value:w,autocomplete:I,showSuggestions:a,enableHistory:r,maxSuggestions:q,maxHistoryItems:E,historyKey:l,historyHeaderText:R,ariaLabel:u,ariaLabelledBy:d,ariaDescribedBy:c,ariaExpanded:g,ariaControls:m,deleteIconAriaLabel:b,historyDeleteAriaLabel:f,dropdownAriaLabel:h,suggestionAriaLabel:p,historyItemAriaLabel:y})=>{const e=document.createElement("ifx-search-field");return e.setAttribute("size",v),e.setAttribute("disabled",s),e.setAttribute("show-delete-icon",L),e.setAttribute("show-suggestions",a),e.setAttribute("enable-history",r),e.setAttribute("max-suggestions",q),e.setAttribute("max-history-items",E),e.setAttribute("history-key",l),e.setAttribute("history-header-text",R),e.setAttribute("value",w),e.setAttribute("autocomplete",I),n!=null&&e.setAttribute("placeholder",n),o!=null&&e.setAttribute("maxlength",o),u!=null&&e.setAttribute("aria-label",u),d!=null&&e.setAttribute("aria-labelledby",d),c!=null&&e.setAttribute("aria-describedby",c),m!=null&&e.setAttribute("aria-controls",m),g!=null&&e.setAttribute("aria-expanded",g),b!=null&&e.setAttribute("delete-icon-aria-label",b),f!=null&&e.setAttribute("history-delete-aria-label",f),h!=null&&e.setAttribute("dropdown-aria-label",h),p!=null&&e.setAttribute("suggestion-aria-label",p),y!=null&&e.setAttribute("history-item-aria-label",y),setTimeout(()=>{e.suggestions=S,r&&typeof localStorage<"u"&&H(l)},100),e.addEventListener("ifxInput",t("ifxInput")),e.addEventListener("ifxSuggestionRequested",t("ifxSuggestionRequested")),e.addEventListener("ifxSuggestionSelected",t("ifxSuggestionSelected")),e.addEventListener("ifxFocus",t("ifxFocus")),e.addEventListener("ifxBlur",t("ifxBlur")),e.addEventListener("ifxSuggestionRequested",D=>{const x=D.detail;if(x){const C=S.filter(F=>F.text.toLowerCase().includes(x.toLowerCase()));e.suggestions=C}}),e},i=T.bind({});i.args={showDeleteIcon:!0,disabled:!1,size:"m",value:"",placeholder:"Search with suggestions...",autocomplete:"off",showSuggestions:!0,enableHistory:!0,maxSuggestions:10,maxHistoryItems:5,historyKey:"storybook-search-history",historyHeaderText:"Recent Searches",ariaLabel:"Search field",deleteIconAriaLabel:"Clear search",historyDeleteAriaLabel:"Remove from history",dropdownAriaLabel:"Search suggestions and history",suggestionAriaLabel:"Search suggestion",historyItemAriaLabel:"Search history item"};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`({
  disabled,
  size,
  showDeleteIcon,
  placeholder,
  maxlength,
  value,
  autocomplete,
  showSuggestions,
  enableHistory,
  maxSuggestions,
  maxHistoryItems,
  historyKey,
  historyHeaderText,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaExpanded,
  ariaControls,
  deleteIconAriaLabel,
  historyDeleteAriaLabel,
  dropdownAriaLabel,
  suggestionAriaLabel,
  historyItemAriaLabel
}) => {
  const element = document.createElement("ifx-search-field");
  element.setAttribute("size", size);
  element.setAttribute("disabled", disabled);
  element.setAttribute("show-delete-icon", showDeleteIcon);
  element.setAttribute("show-suggestions", showSuggestions);
  element.setAttribute("enable-history", enableHistory);
  element.setAttribute("max-suggestions", maxSuggestions);
  element.setAttribute("max-history-items", maxHistoryItems);
  element.setAttribute("history-key", historyKey);
  element.setAttribute("history-header-text", historyHeaderText);
  element.setAttribute("value", value);
  element.setAttribute("autocomplete", autocomplete);
  if (placeholder != undefined) element.setAttribute("placeholder", placeholder);
  if (maxlength != undefined) element.setAttribute("maxlength", maxlength);
  if (ariaLabel != undefined) element.setAttribute("aria-label", ariaLabel);
  if (ariaLabelledBy != undefined) element.setAttribute("aria-labelledby", ariaLabelledBy);
  if (ariaDescribedBy != undefined) element.setAttribute("aria-describedby", ariaDescribedBy);
  if (ariaExpanded != undefined) element.setAttribute("aria-expanded", ariaExpanded);
  if (ariaControls != undefined) element.setAttribute("aria-controls", ariaControls);
  if (deleteIconAriaLabel != undefined) element.setAttribute("delete-icon-aria-label", deleteIconAriaLabel);
  if (historyDeleteAriaLabel != undefined) element.setAttribute("history-delete-aria-label", historyDeleteAriaLabel);
  if (dropdownAriaLabel != undefined) element.setAttribute("dropdown-aria-label", dropdownAriaLabel);
  if (suggestionAriaLabel != undefined) element.setAttribute("suggestion-aria-label", suggestionAriaLabel);
  if (historyItemAriaLabel != undefined) element.setAttribute("history-item-aria-label", historyItemAriaLabel);

  // Set initial suggestions if showSuggestions is enabled
  setTimeout(() => {
    if (showSuggestions) {
      element.suggestions = genericMockSuggestions;
    }

    // Set up initial history if enabled - always reset for consistent demo
    if (enableHistory && typeof localStorage !== "undefined") {
      resetHistoryForStorybook(historyKey);
      // History will be loaded automatically when the component initializes
    }
  }, 100);

  // Event listeners
  element.addEventListener("ifxInput", action("ifxInput"));
  element.addEventListener("ifxSuggestionRequested", action("ifxSuggestionRequested"));
  element.addEventListener("ifxSuggestionSelected", action("ifxSuggestionSelected"));
  element.addEventListener("ifxFocus", action("ifxFocus"));
  element.addEventListener("ifxBlur", action("ifxBlur"));

  // Handle suggestion requests for Default story
  element.addEventListener("ifxSuggestionRequested", event => {
    const query = event.detail;
    if (query && showSuggestions) {
      // Filter suggestions based on query
      const filteredSuggestions = genericMockSuggestions.filter(s => s.text.toLowerCase().includes(query.toLowerCase()));
      element.suggestions = filteredSuggestions;
    }
  });
  return element;
}`,...A.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  disabled,
  size,
  showDeleteIcon,
  placeholder,
  maxlength,
  value,
  autocomplete,
  showSuggestions,
  enableHistory,
  maxSuggestions,
  maxHistoryItems,
  historyKey,
  historyHeaderText,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaExpanded,
  ariaControls,
  deleteIconAriaLabel,
  historyDeleteAriaLabel,
  dropdownAriaLabel,
  suggestionAriaLabel,
  historyItemAriaLabel
}) => {
  const element = document.createElement("ifx-search-field");
  element.setAttribute("size", size);
  element.setAttribute("disabled", disabled);
  element.setAttribute("show-delete-icon", showDeleteIcon);
  element.setAttribute("show-suggestions", showSuggestions);
  element.setAttribute("enable-history", enableHistory);
  element.setAttribute("max-suggestions", maxSuggestions);
  element.setAttribute("max-history-items", maxHistoryItems);
  element.setAttribute("history-key", historyKey);
  element.setAttribute("history-header-text", historyHeaderText);
  element.setAttribute("value", value);
  element.setAttribute("autocomplete", autocomplete);
  if (placeholder != undefined) element.setAttribute("placeholder", placeholder);
  if (maxlength != undefined) element.setAttribute("maxlength", maxlength);
  if (ariaLabel != undefined) element.setAttribute("aria-label", ariaLabel);
  if (ariaLabelledBy != undefined) element.setAttribute("aria-labelledby", ariaLabelledBy);
  if (ariaDescribedBy != undefined) element.setAttribute("aria-describedby", ariaDescribedBy);
  if (ariaControls != undefined) element.setAttribute("aria-controls", ariaControls);
  if (ariaExpanded != undefined) element.setAttribute("aria-expanded", ariaExpanded);
  if (deleteIconAriaLabel != undefined) element.setAttribute("delete-icon-aria-label", deleteIconAriaLabel);
  if (historyDeleteAriaLabel != undefined) element.setAttribute("history-delete-aria-label", historyDeleteAriaLabel);
  if (dropdownAriaLabel != undefined) element.setAttribute("dropdown-aria-label", dropdownAriaLabel);
  if (suggestionAriaLabel != undefined) element.setAttribute("suggestion-aria-label", suggestionAriaLabel);
  if (historyItemAriaLabel != undefined) element.setAttribute("history-item-aria-label", historyItemAriaLabel);

  // Initialize with mock data
  setTimeout(() => {
    // Set suggestions - use the same generic mockup as Default story
    element.suggestions = genericMockSuggestions;

    // Set up initial history if enabled - always reset for consistent demo
    if (enableHistory && typeof localStorage !== "undefined") {
      resetHistoryForStorybook(historyKey);
      // History will be loaded automatically when the component initializes
    }
  }, 100);

  // Event listeners
  element.addEventListener("ifxInput", action("ifxInput"));
  element.addEventListener("ifxSuggestionRequested", action("ifxSuggestionRequested"));
  element.addEventListener("ifxSuggestionSelected", action("ifxSuggestionSelected"));
  element.addEventListener("ifxFocus", action("ifxFocus"));
  element.addEventListener("ifxBlur", action("ifxBlur"));

  // Handle suggestion requests
  element.addEventListener("ifxSuggestionRequested", event => {
    const query = event.detail;
    if (query) {
      // Filter suggestions based on query - use the same generic mockup
      const filteredSuggestions = genericMockSuggestions.filter(s => s.text.toLowerCase().includes(query.toLowerCase()));
      element.suggestions = filteredSuggestions;
    }
  });
  return element;
}`,...i.parameters?.docs?.source}}};const z=["Default","SearchSuggestions"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:A,SearchSuggestions:i,__namedExportsOrder:z,default:B},Symbol.toStringTag,{value:"Module"}));export{A as D,_ as S};
