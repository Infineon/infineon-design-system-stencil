import figma, { html } from "@figma/code-connect/html"


// Figma models the table as separate building blocks instead of a single component.
// Use the header as the anchor node and provide representative code examples for both table implementations.

// Component: Table Header
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16651%3A11682",
  {
    props: {
      columns: figma.enum("Columns", {
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
      }),
      size: figma.enum("Size", {
        Default: "default",
      }),
    },
    example: () => html`
      <!-- Minimal baseline example for the basic table component. -->
      <ifx-basic-table
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item"}]'
        rows='[{"id":1,"item":"Item 1"},{"id":2,"item":"Item 2"},{"id":3,"item":"Item 3"}]'
        table-height="auto"
        row-height="default"
        variant="default"
      ></ifx-basic-table>

      <!-- Richer example for the advanced table with topbar filters, pagination, status badges, and row actions. -->
      <ifx-table
        row-height="default"
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Status","field":"status"},{"headerName":"","field":"button"}]'
        rows='[{"id":"A-102","item":"Control board","statusText":"Available","status":{"label":"Available","color":"green-500","border":true},"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.infineon.com/","theme":"default","type":"button","fullWidth":false,"text":"View"}},{"id":"A-287","item":"Sensor module","statusText":"Backorder","status":{"label":"Backorder","color":"orange-500","border":true},"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.infineon.com/","theme":"default","type":"button","fullWidth":false,"text":"View"}},{"id":"A-331","item":"Power stage","statusText":"Available","status":{"label":"Available","color":"green-500","border":true},"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.infineon.com/","theme":"default","type":"button","fullWidth":false,"text":"View"}},{"id":"A-412","item":"Driver kit","statusText":"Discontinued","status":{"label":"Discontinued","color":"red-500","border":true},"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.infineon.com/","theme":"default","type":"button","fullWidth":false,"text":"View"}},{"id":"A-518","item":"Evaluation board","statusText":"Available","status":{"label":"Available","color":"green-500","border":true},"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.infineon.com/","theme":"default","type":"button","fullWidth":false,"text":"View"}}]'
        table-height="auto"
        pagination="true"
        pagination-items-per-page='[{"value":"5","selected":true},{"value":"10","selected":false},{"value":"all","selected":false}]'
        filter-orientation="topbar"
        variant="default"
        fit-column="false"
        column-min-width="180"
        column-width="120"
        headline="Matching results"
      >
        <ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
          <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>

          <ifx-set-filter
            slot="filter-component-1"
            options='[{"value":"Available","label":"Available","selected":false},{"value":"Backorder","label":"Backorder","selected":false},{"value":"Discontinued","label":"Discontinued","selected":false}]'
            filter-label="Status"
            filter-name="statusText"
            type="multi-select"
            placeholder="Select Status"
          ></ifx-set-filter>

          <ifx-set-filter
            slot="filter-component-2"
            options='[{"value":"Control board","label":"Control board","selected":false},{"value":"Sensor module","label":"Sensor module","selected":false},{"value":"Power stage","label":"Power stage","selected":false},{"value":"Driver kit","label":"Driver kit","selected":false},{"value":"Evaluation board","label":"Evaluation board","selected":false},{"value":"Adapter cable","label":"Adapter cable","selected":false}]'
            filter-label="Item"
            filter-name="item"
            type="multi-select"
            placeholder="Select Item"
          ></ifx-set-filter>
        </ifx-filter-bar>
      </ifx-table>
      
    `,
  },
)
