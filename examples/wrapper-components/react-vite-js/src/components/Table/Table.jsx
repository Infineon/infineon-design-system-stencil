import { useState } from 'react';
import { IfxTable, IfxFilterTypeGroup, IfxFilterAccordion, IfxFilterSearch, IfxList, IfxListEntry, IfxButton, IfxFilterBar, IfxSetFilter } from '@infineon/infineon-design-system-react';

function Table() {
  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["default", "zebra"];

  const [pagination, setPagination] = useState(false);

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  const togglePagination = () => {
    setPagination(prevPagination => !prevPagination);
  }

  return (
    <div className="component">
      <IfxTable
        row-height="default"
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
        rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
        enable-selection="true"
        table-height="auto"
        pagination={pagination}
        server-side-pagination="false"
        pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
        filter-orientation="none"
        variant={variants[variantIndex]}
        fit-column='false'
        column-min-width='100'
        column-width='100'>
      </IfxTable>
      <br />
      <br />

      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={togglePagination}>Toggle Pagination</IfxButton>
      <br />
      <br />
      <span><b>Variant:</b> {variants[variantIndex]}</span><br />
      <span><b>Pagination:</b> {String(pagination)}</span><br />
      <br />
      <br />


      <h2>Including custom components</h2>
      <IfxTable
        row-height="default"
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"},{"headerName":"","field":"button"}]'
        rows='[{"id":1,"item":"Item 1","price":356,"date":"2025-06-25","button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Button"}},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26","button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Button"}},{"id":3,"item":"Item 3","price":24,"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Button"}}]'
        table-height="auto"
        pagination="false"
        filter-orientation="none">
      </IfxTable>
      <br />
      <br />

      <h2>Sidebar Filter</h2>
      <IfxTable headline="Matching results" row-height="default"
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
        rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
        table-height="auto" pagination="false" filter-orientation="sidebar">
        <IfxFilterTypeGroup slot="sidebar-filter">
          <div slot="filter-search">
            <IfxFilterSearch filter-orientation="sidebar" filter-name="search"></IfxFilterSearch>
          </div>

          <IfxFilterAccordion slot="filter-accordion" filter-group-name="id">
            <IfxList slot="list" type="checkbox" name="id" max-visible-items="6">
              <IfxListEntry slot="slot0" label="1" value="false"></IfxListEntry><IfxListEntry slot="slot1" label="2"
                value="false"></IfxListEntry><IfxListEntry slot="slot2" label="3"
                  value="false"></IfxListEntry><IfxListEntry slot="slot3" label="4"
                    value="false"></IfxListEntry><IfxListEntry slot="slot4" label="5"
                      value="false"></IfxListEntry><IfxListEntry slot="slot5" label="6"
                        value="false"></IfxListEntry><IfxListEntry slot="slot6" label="7"
                          value="false"></IfxListEntry><IfxListEntry slot="slot7" label="8"
                            value="false"></IfxListEntry><IfxListEntry slot="slot8" label="9"
                              value="false"></IfxListEntry><IfxListEntry slot="slot9" label="10"
                                value="false"></IfxListEntry><IfxListEntry slot="slot10" label="11" value="false"></IfxListEntry>
            </IfxList>
          </IfxFilterAccordion>

          <IfxFilterAccordion slot="filter-accordion" filter-group-name="item">
            <IfxList slot="list" type="checkbox" name="item" max-visible-items="6">
              <IfxListEntry slot="slot0" label="Item 1" value="false"></IfxListEntry><IfxListEntry slot="slot1"
                label="Item 2" value="false"></IfxListEntry><IfxListEntry slot="slot2" label="Item 3"
                  value="false"></IfxListEntry><IfxListEntry slot="slot3" label="x"
                    value="false"></IfxListEntry><IfxListEntry slot="slot4" label="Item 7"
                      value="false"></IfxListEntry><IfxListEntry slot="slot5" label="Item 8"
                        value="false"></IfxListEntry><IfxListEntry slot="slot6" label="Item 10" value="false"></IfxListEntry>
            </IfxList>
          </IfxFilterAccordion>

          <IfxFilterAccordion slot="filter-accordion" filter-group-name="price">
            <IfxList slot="list" type="checkbox" name="price" max-visible-items="6">
              <IfxListEntry slot="slot0" label="356" value="false"></IfxListEntry><IfxListEntry slot="slot1" label="55"
                value="false"></IfxListEntry><IfxListEntry slot="slot2" label="24"
                  value="false"></IfxListEntry><IfxListEntry slot="slot3" label="874"
                    value="false"></IfxListEntry><IfxListEntry slot="slot4" label="689"
                      value="false"></IfxListEntry><IfxListEntry slot="slot5" label="46"
                        value="false"></IfxListEntry><IfxListEntry slot="slot6" label="421"
                          value="false"></IfxListEntry><IfxListEntry slot="slot7" label="17"
                            value="false"></IfxListEntry><IfxListEntry slot="slot8" label="752"
                              value="false"></IfxListEntry><IfxListEntry slot="slot9" label="73"
                                value="false"></IfxListEntry><IfxListEntry slot="slot10" label="94" value="false"></IfxListEntry>
            </IfxList>
          </IfxFilterAccordion>

          <IfxFilterAccordion slot="filter-accordion" filter-group-name="date">
            <IfxList slot="list" type="checkbox" name="date" max-visible-items="6">
              <IfxListEntry slot="slot0" label="2025-06-25" value="false"></IfxListEntry><IfxListEntry slot="slot1"
                label="2025-03-26" value="false"></IfxListEntry><IfxListEntry slot="slot2" label="undefined"
                  value="false"></IfxListEntry>
            </IfxList>
          </IfxFilterAccordion>

        </IfxFilterTypeGroup>
      </IfxTable>
      <br />
      <br />

      <h2>Topbar Filter</h2>
      <IfxTable headline="Matching results" row-height="default"
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
        rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
        table-height="auto" pagination="false" filter-orientation="topbar">
        <IfxFilterBar slot="topbar-filter" max-shown-filters="3">
          <IfxFilterSearch slot="filter-search" filter-orientation="topbar"></IfxFilterSearch>

          <IfxSetFilter slot="filter-component-1"
            options='[{"value":"1","label":"1","selected":false},{"value":"2","label":"2","selected":false},{"value":"3","label":"3","selected":false},{"value":"4","label":"4","selected":false},{"value":"5","label":"5","selected":false},{"value":"6","label":"6","selected":false},{"value":"7","label":"7","selected":false},{"value":"8","label":"8","selected":false},{"value":"9","label":"9","selected":false},{"value":"10","label":"10","selected":false},{"value":"11","label":"11","selected":false}]'
            filter-label='ID' filter-name='id' type='multi-select' placeholder='Select ID'>
          </IfxSetFilter>


          <IfxSetFilter slot="filter-component-2"
            options='[{"value":"Item 1","label":"Item 1","selected":false},{"value":"Item 2","label":"Item 2","selected":false},{"value":"Item 3","label":"Item 3","selected":false},{"value":"x","label":"x","selected":false},{"value":"Item 7","label":"Item 7","selected":false},{"value":"Item 8","label":"Item 8","selected":false},{"value":"Item 10","label":"Item 10","selected":false}]'
            filter-label='Item' filter-name='item' type='multi-select' placeholder='Select Item'>
          </IfxSetFilter>


          <IfxSetFilter slot="filter-component-3"
            options='[{"value":356,"label":356,"selected":false},{"value":55,"label":55,"selected":false},{"value":24,"label":24,"selected":false},{"value":874,"label":874,"selected":false},{"value":689,"label":689,"selected":false},{"value":46,"label":46,"selected":false},{"value":421,"label":421,"selected":false},{"value":17,"label":17,"selected":false},{"value":752,"label":752,"selected":false},{"value":73,"label":73,"selected":false},{"value":94,"label":94,"selected":false}]'
            filter-label='Price' filter-name='price' type='multi-select' placeholder='Select Price'>
          </IfxSetFilter>


          <IfxSetFilter slot="filter-component-4"
            options='[{"value":"2025-06-25","label":"2025-06-25","selected":false},{"value":"2025-03-26","label":"2025-03-26","selected":false}]'
            filter-label='Date' filter-name='date' type='multi-select' placeholder='Select Date'>
          </IfxSetFilter>

        </IfxFilterBar>
      </IfxTable>
    </div >
  );
}

export default Table;

