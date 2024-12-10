import { action } from "@storybook/addon-actions/*";
import { act } from "react";

//default
const columnDefs = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' }
];



const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, age: 10 },
  { make: 'Ford', model: 'Mondeo', price: 32000, age: 12 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
  { make: 'Bmw', model: 'x', price: 72000 },
  { make: 'Mercedes', model: 'y', price: 72000 },
  { make: 'Ferrari', model: 'z', price: 72000 },
  { make: 'Chrysler', model: 'a', price: 72000 },
  { make: 'Range rover', model: 'b', price: 72000 },
  { make: 'Tesla', model: 'x', price: 72000 },
  { make: 'Audi', model: '3', price: 72000 },
  { make: 'Landrover', model: 'x', price: 72000 },
];

//table with button col
const columnDefsWithButtonCol = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' },
  { headerName: '', field: 'button' }
];

const rowDataWithButtonCol = [
  {
    make: 'Toyota', model: 'Celica', price: 35000, age: 10, button: 'something about Toyota'
  },
  { make: 'Ford', model: 'Mondeo', price: 32000, age: 12, button: 'something about Ford' },
  {
    make: 'Porsche', model: 'Boxster', price: 72000, button: {
      disabled: false,
      variant: "secondary",
      size: "s",
      target: "_blank",
      color: "secondary",
      text: "Button"
      // ... you can extend this as per the properties of `ifx-button`
    }
  }
];



//other example
// const columnDefsDragAndDrop = [
//   { valueGetter: '"Drag"', dndSource: true },
//   { field: 'id' },
//   { field: 'color' },
//   { field: 'value1' },
//   { field: 'value2' },
// ];

// var rowIdSequence = 100;
// function getRowDataDragAndDrop() {
//   var rowDataDragAndDrop = [];
//   [
//     'Red',
//     'Green',
//     'Blue',
//     'Red',
//     'Green',
//     'Blue',
//     'Red',
//     'Green',
//     'Blue',
//   ].forEach(function (color) {
//     var newDataItem = {
//       id: rowIdSequence++,
//       color: color,
//       value1: Math.floor(Math.random() * 100),
//       value2: Math.floor(Math.random() * 100),
//     };
//     rowDataDragAndDrop.push(newDataItem);
//   });
//   return rowDataDragAndDrop;
// }


export default {
  title: 'Components/Table (advanced)',
  // tags: ['autodocs'],
  args: {
    tableHeight: 'auto',
    pagination: false,
    paginationPageSize: 10,
    rowHeight: 40,
    showLoading: false,
    maxVisibleItemsOfList: 6,
    filterNameOfFilterSearch: 'Search',

  },

  argTypes: {
    tableHeight: {
      description: 'Set the height of the table. Example for fixed height: "400px".',
      table: {
        defaultValue: { summary: 'auto' },
        category: 'ifx-table props',
        type: {
          summary: 'String',
        }
      },
    },
    pagination: {
      description: 'Add pagination to the table.',
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: true },
        type: {
          summary: 'Boolean',
        }
      }
    },
    paginationPageSize: {
      description: "Set the number of results per page.",
      control: { type: 'number', min: 10, max: 30, step: 10 },
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 10 },
        type: {
          summary: 'Details',
          detail: 'Minimum: 10\nMaximum: 30',
        }
      }
    },
    showLoading: {
      description: 'Show loading spinner.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        }
      }
    },
    rowHeight: {
      description: 'Set the height of the rows.',
      options: ['compact', 'default'],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 'default' },
        type: {
          summary: 'Options',
          detail: 'Default: 40px\nCompact: 32px',
        }
      },
    },
    filterOrientation: {
      description: 'Filter position options for the table.',
      options: ['sidebar', 'topbar', 'none'],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 'sidebar' },
        type: {
          summary: 'Options',
          detail: 'Sidebar: filter on the left side\nTopbar: filter on the top\nNone: no filter',
        },
      }
    },
    columnDefs: {
      description: 'Column header options.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Options',
          detail: 'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"',
        },
      },
    },
    rowData: {
      description: 'Row data options.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Options',
          detail: 'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
        },
      },
    },
    filterGroupName: {
      description: 'Set the filter group name.',
      control: { type: 'text' },
      table: {
        category: 'ifx-filter-accordion props',
        type: {
          summary: 'String',
        }
      }
    },
    filterNameOfFilterSearch: {
      name: 'filterName',
      description: 'Set the filter name.',
      control: { type: 'text' },
      table: {
        category: 'ifx-filter-search props',
        type: {
          summary: 'String',
        }
      }
    },
    filterLabel: {
      description: 'Set the filter label.',
      control: { type: 'text' },
      table: {
        category: 'ifx-set-filter props',
        type: {
          summary: 'String',
        }
      }
    },
    filterName: {
      description: 'Set the filter name.',
      control: { type: 'text' },
      table: {
        category: 'ifx-set-filter props',
        type: {
          summary: 'String',
        }
      }
    },
    type: {
      description: 'Set the type of filter.',
      options: ['text', 'single-select', 'multi-select'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'text' },
        category: 'ifx-set-filter props',
        type: {
          summary: 'text | single-select | multi-select',
        }
      }
    },
    maxShownFilters: {
      description: 'Set the maximum number of shown filters.',
      control: { type: 'number' },
      table: {
        defaultValue: {
          summary: 4
        },
        category: 'ifx-filter-bar props',
        type: {
          summary: 'Number',
        }
      }
    },
    typeOfList: {
      name: 'type',
      description: 'Set the type of list.',
      control: { type: 'radio' },
      table: {
        category: 'ifx-list props',
        defaultValue: { summary: 'checkbox' },
        type: {
          summary: 'String',
        },
      }
    },
    maxVisibleItemsOfList: {
      name: 'maxVisibleItems',
      description: 'Set the maximum number of visible items in the list.',
      control: { type: 'number' },
      table: {
        defaultValue: {
          summary: 6
        },
        category: 'ifx-list props',
        type: {
          summary: 'Number',
        }
      }
    },
    labelOfListEntry: {
      name: 'label',
      description: 'Set the label of the list entry.',
      control: { type: 'text' },
      table: {
        category: 'ifx-list-entry props',
        type: {
          summary: 'String',
        }
      }
    },
    valueOfListEntry: {
      name: 'value',
      description: 'Set the value of the list entry.',
      control: { type: 'boolean' },
      table: {
        category: 'ifx-list-entry props',
        type: {
          summary: 'Boolean',
        }
      }
    },
    ifxSidebarFilterChange: {
      description: 'Custom event emitted when the filter is changed in the sidebar.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
          React: onIfxSidebarFilterChange={handleChange}
          Vue: @ifxSidebarFilterChange="handleChange"
          Angular: (ifxSidebarFilterChange)="handleChange()"
          VanillaJs: .addEventListener("ifxSidebarFilterChange", (event) => {/*handle change*/});`
        }
      }
    },
    ifxFilterSearchChange: {
      description: 'Custom event emitted when the filter search is changed.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
          React: onIfxFilterSearchChange={handleChange}
          Vue: @ifxFilterSearchChange="handleChange"
          Angular: (ifxFilterSearchChange)="handleChange()"
          VanillaJs: .addEventListener("ifxFilterSearchChange", (event) => {/*handle change*/});`
        }
      }
    },
    ifxFilterSelect: {
      description: 'Custom event emitted when the filter is selected.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
          React: onIfxFilterSelect={handleSelect}
          Vue: @ifxFilterSelect="handleSelect"
          Angular: (ifxFilterSelect)="handleSelect()"
          VanillaJs: .addEventListener("ifxFilterSelect", (event) => {/*handle select*/});`
        }
      }
    },
    ifxFilterAccordionChange: {
      description: 'Custom event emitted when the filter accordion is changed.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
          React: onIfxFilterAccordionChange={handleChange}
          Vue: @ifxFilterAccordionChange="handleChange"
          Angular: (ifxFilterAccordionChange)="handleChange()"
          VanillaJs: .addEventListener("ifxFilterAccordionChange", (event) => {/*handle change*/});`
        }
      }
    },
  }
};

const DefaultTemplate = (args) => {
  if (args.filterOrientation === 'none') {
    const table = `<ifx-table
    row-height="${args.rowHeight}"
    cols='${JSON.stringify(args.columnDefs)}'
    rows='${JSON.stringify(args.rowData)}'
    table-height="${args.tableHeight}"
    pagination="${args.pagination}"
    pagination-page-size="${args.paginationPageSize}"
    filter-orientation="${args.filterOrientation}">
</ifx-table>`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return `<ifx-list-entry slot="slot${index}" label="${option}" value="${args.valueOfListEntry}"></ifx-list-entry>`;
      }).join('');

      return `
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">
        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="${args.maxVisibleItemsOfList}">
          ${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    `;
    }).join('');

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));

      // Directly use JSON.stringify without replacing quotes
      const optionsString = JSON.stringify(options);

      return `
        <ifx-set-filter slot="filter-component-${index + 1}"
            options='${optionsString}' 
            filter-label='${column.headerName}'
            filter-name='${column.field}'
            type='multi-select'
            search-enabled='true'>
          </ifx-set-filter>
          `;
    }).join('\n');



    const filterTypeGroupComponent = args.filterOrientation === 'sidebar'
      ? `<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        ${filterAccordions}
    </ifx-filter-type-group>`
      :
      `<ifx-filter-bar slot="topbar-filter" max-shown-filters="${args.maxShownFilters}">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        ${filterComponents}
   </ifx-filter-bar>`;

    const table = `<ifx-table
    row-height="${args.rowHeight}"
    cols='${JSON.stringify(args.columnDefs)}'
    rows='${JSON.stringify(args.rowData)}'
    table-height="${args.tableHeight}"
    pagination="${args.pagination}"
    pagination-page-size="${args.paginationPageSize}"
    filter-orientation="${args.filterOrientation}">
    
    ${filterTypeGroupComponent}
</ifx-table>`;

    return table;
  }
};



export const Pagination = DefaultTemplate.bind({});
Pagination.args = {
  pagination: true,
  paginationPageSize: 10,
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'none'

};


export const IncludesButtons = DefaultTemplate.bind({});
IncludesButtons.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithButtonCol,
  rowData: rowDataWithButtonCol,
  filterOrientation: 'none'

};


export const SidebarFilter = DefaultTemplate.bind({});
SidebarFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'sidebar',
};


export const TopbarFilter = DefaultTemplate.bind({});
TopbarFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'topbar'
};

// export const DragAndDrop = DefaultTemplate.bind({});
// DragAndDrop.args = {
//   columnDefs: columnDefsDragAndDrop,
//   rowData: getRowDataDragAndDrop(),
// };