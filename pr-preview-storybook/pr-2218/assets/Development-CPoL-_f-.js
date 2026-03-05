import{j as e,M as l,C as t,a as s}from"./blocks-CERx25n9.js";import{useMDXComponents as i}from"./index-HlHJfxpl.js";import{T as r,D as d,P as c,S as u,I as h,a as p,b as f,c as b}from"./table.stories-CTrjcdxm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2pKNNw0.js";function o(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(t,{of:d,sourceState:"shown"}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"including-client-side-pagination",children:"Including client-side pagination"}),`
`,e.jsx(t,{of:c,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"including-server-side-pagination",children:"Including server-side pagination"}),`
`,e.jsx(t,{of:u,sourceState:"shown"}),`
`,e.jsx(n.p,{children:`Server-side pagination is implemented by exposing the serverPageChangeHandler property. The property takes a function. The function doesn't contain the data - it FETCHES the data when called.
Your function is called fresh each time - it doesn't store data, it fetches it. The component handles when to call it, you handle what data to return.`}),`
`,e.jsx(n.p,{children:"Example of a function you would pass to the serverPageChangeHandler prop:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`table.serverPageChangeHandler = async ({ page, pageSize }) => {
  const response = await fetch(\`/api/cars?page=\${page}&size=\${pageSize}\`);
  const data = await response.json();
  
  return {
    rows: data.cars,
    total: data.totalCount
  };
};
`})}),`
`,e.jsx(n.h3,{id:"including-custom-components",children:"Including custom components"}),`
`,e.jsx(n.h4,{id:"example-including-a-button-column",children:"Example: Including a button column"}),`
`,e.jsx(t,{of:h,sourceState:"shown"}),`
`,e.jsx("b",{children:"Adding the button event handler in Angular:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// in the component.ts file:
 buttonRendererOptions = {
   onButtonClick: (params: any, event: Event) => {
     console.log("button clicked", params.data);
   }
 };
// in the component.html file:
 <h3>Table with button</h3>
 <ifx-table
   row-height="default"
   cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"},{"headerName":"","field":"button"}]'
   rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10,"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Toyota Button"}},{"make":"Ford","model":"Mondeo","price":32000,"age":12,"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Ford Button"}},{"make":"Porsche","model":"Boxster","price":72000,"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Porsche Button"}}]'
   [buttonRendererOptions]="buttonRendererOptions"
   table-height="auto"
   pagination="false"
   filter-orientation="none">
</ifx-table>
`})}),`
`,e.jsx("b",{children:"Adding the button event handler in React:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function App() {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.buttonRendererOptions = {
        onButtonClick: (params, event) => console.log('Button clicked:', params.data)
      };
    }
  }, []);

  return (
    <ifx-table
      cols={[{headerName: "Make", field: "make"}, ...]}
      rows={[{make: "Toyota", ...}]}
      ref={tableRef}
      row-height="default"
      table-height="auto"
      pagination="false"
      filter-orientation="none"
    ></ifx-table>
  );
}
`})}),`
`,e.jsx("b",{children:"Adding the button event handler in Vanilla/PlainJs:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document.addEventListener('DOMContentLoaded', () => {
    const tableWithBtn = document.querySelector('#table-with-btn');

    tableWithBtn.buttonRendererOptions = {
      onButtonClick: (params, event) => {
        console.log("button clicked", params.data);
      }
    };
});
`})}),`
`,e.jsx("b",{children:"Adding the button event handler in Vue:"}),`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"v-if"})," to ensure all data is set before rendering the table. There are other ways to guarantee data readiness, but this is the solution we have tested and used in our example applications."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//template
    <ifx-table
      v-if="ready"
      :cols="tableColumnsWithBtn"
      :rows="tableRowsWithBtn"
      :buttonRendererOptions="buttonRendererOptions"
      row-height="default"
      table-height="auto"
      pagination="false"
      filter-orientation="none">
    </ifx-table>

//script
<script>
export default {
  data() {
    return {
       tableColumnsWithBtn: [
        { headerName: "Make", field: "make", sortable: true, sort: "desc", unSortIcon: true },
        { headerName: "Model", field: "model", sortable: true, unSortIcon: true },
        { headerName: "Price", field: "price" },
        { headerName: "Age", field: "age" },
        { headerName: "", field: "button" }
      ],
      // Define your rows
      tableRowsWithBtn: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000,
          age: 10,
          button: {
            disabled: false,
            variant: "secondary",
            size: "s",
            target: "_blank",
            href: "https://www.w3schools.com/",
            theme: "default",
            type: "button",
            fullWidth: true,
            text: "Toyota Button"
          }
        },
       ],
       buttonRendererOptions: {
        onButtonClick: (params, event) => {
          console.log('Button clicked:', params.data);
         }
      },
       ready: false
    };
  },
  mounted() {
     // Ensure all data is set before rendering the table
    this.ready = true;
  }
};
<\/script>
`})}),`
`,e.jsx("b",{children:"Nesting the tooltip component"}),`
`,e.jsxs(n.p,{children:["For simplicity purposes, the ",e.jsx(n.code,{children:"variant"})," and ",e.jsx(n.code,{children:"icon"})," properties have been removed from the tooltip integration into the table."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`  "tooltipInfo": {
    "value": "Table cell text",
    "text": "tooltip text",
    "position": "top"
  }
`})}),`
`,e.jsx(n.h4,{id:"currently-supported-nestable-components",children:"Currently supported nestable components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ifx-button"}),`
`,e.jsx(n.li,{children:"ifx-status"}),`
`,e.jsx(n.li,{children:"ifx-icon-button"}),`
`,e.jsx(n.li,{children:"ifx-link"}),`
`,e.jsx(n.li,{children:"ifx-tooltip"}),`
`]}),`
`,e.jsx(n.h4,{id:"example-including-inner-buttons",children:"Example: Including inner buttons"}),`
`,e.jsx(t,{of:p,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"sidebar-filter",children:"Sidebar filter"}),`
`,e.jsx(t,{of:f,sourceState:"shown"}),`
`,e.jsx(n.p,{children:`Advanced filtering can be done including our set-filter component via a named slot within the table.
The set filter can be of type 'text', 'single-select', or 'multi-select'. An additional type to offer filtering using chips will be available in the future.
Filtering using our select components requires an input array in the following format:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const options = [{
  value: "a",
  label: "option a",
  selected: false
},
{
  value: "b",
  label: "option b",
  selected: false
},
{
  value: "c",
  label: "option c",
  selected: false
}];
`})}),`
`,e.jsx(n.h3,{id:"topbar-filter",children:"Topbar filter"}),`
`,e.jsx(t,{of:b,sourceState:"shown"}),`
`,e.jsx(n.p,{children:`Advanced filtering can be done including our set-filter component via a named slot within the table.
The set filter can be of type 'text', 'single-select', or 'multi-select'. An additional type to offer filtering using chips will be available in the future.
Filtering using our select components requires an input array in the following format:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const options = [{
  value: "a",
  label: "option a",
  selected: false
},
{
  value: "b",
  label: "option b",
  selected: false
},
{
  value: "c",
  label: "option c",
  selected: false
}];
`})})]})}function y(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{y as default};
