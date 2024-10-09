import { IfxTable, IfxFilterTypeGroup, IfxFilterAccordion, IfxFilterSearch, IfxList, IfxListEntry } from '@infineon/infineon-design-system-react';

function Table() {

    return (
        <IfxTable
            row-height="default"
            cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
            rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Bmw","model":"x","price":72000},{"make":"Mercedes","model":"y","price":72000},{"make":"Ferrari","model":"z","price":72000},{"make":"Chrysler","model":"a","price":72000},{"make":"Range rover","model":"b","price":72000},{"make":"Tesla","model":"x","price":72000},{"make":"Audi","model":"3","price":72000},{"make":"Landrover","model":"x","price":72000}]'
            table-height="auto"
            pagination="false"
            pagination-page-size="10"
            filter-orientation="sidebar">
            <IfxFilterTypeGroup slot="sidebar-filter">
                <div slot="filter-search">
                    <IfxFilterSearch filter-orientation="sidebar" filter-name="search"></IfxFilterSearch>
                </div>

                <IfxFilterAccordion slot="filter-accordion" filter-group-name="make">
                    <IfxList slot="list" type="checkbox" name="make" max-visible-items="6">
                        <IfxListEntry slot="slot0" label="Toyota" value="false"></IfxListEntry><IfxListEntry slot="slot1" label="Ford" value="false"></IfxListEntry><IfxListEntry slot="slot2" label="Porsche" value="false"></IfxListEntry><IfxListEntry slot="slot3" label="Bmw" value="false"></IfxListEntry><IfxListEntry slot="slot4" label="Mercedes" value="false"></IfxListEntry><IfxListEntry slot="slot5" label="Ferrari" value="false"></IfxListEntry><IfxListEntry slot="slot6" label="Chrysler" value="false"></IfxListEntry><IfxListEntry slot="slot7" label="Range rover" value="false"></IfxListEntry><IfxListEntry slot="slot8" label="Tesla" value="false"></IfxListEntry><IfxListEntry slot="slot9" label="Audi" value="false"></IfxListEntry><IfxListEntry slot="slot10" label="Landrover" value="false"></IfxListEntry>
                    </IfxList>
                </IfxFilterAccordion>

                <IfxFilterAccordion slot="filter-accordion" filter-group-name="model">
                    <IfxList slot="list" type="checkbox" name="model" max-visible-items="6">
                        <IfxListEntry slot="slot0" label="Celica" value="false"></IfxListEntry><IfxListEntry slot="slot1" label="Mondeo" value="false"></IfxListEntry><IfxListEntry slot="slot2" label="Boxster" value="false"></IfxListEntry><IfxListEntry slot="slot3" label="x" value="false"></IfxListEntry><IfxListEntry slot="slot4" label="y" value="false"></IfxListEntry><IfxListEntry slot="slot5" label="z" value="false"></IfxListEntry><IfxListEntry slot="slot6" label="a" value="false"></IfxListEntry><IfxListEntry slot="slot7" label="b" value="false"></IfxListEntry><IfxListEntry slot="slot8" label="3" value="false"></IfxListEntry>
                    </IfxList>
                </IfxFilterAccordion>

                <IfxFilterAccordion slot="filter-accordion" filter-group-name="price">
                    <IfxList slot="list" type="checkbox" name="price" max-visible-items="6">
                        <IfxListEntry slot="slot0" label="35000" value="false"></IfxListEntry><IfxListEntry slot="slot1" label="32000" value="false"></IfxListEntry><IfxListEntry slot="slot2" label="72000" value="false"></IfxListEntry>
                    </IfxList>
                </IfxFilterAccordion>

                <IfxFilterAccordion slot="filter-accordion" filter-group-name="age">
                    <IfxList slot="list" type="checkbox" name="age" max-visible-items="6">
                        <IfxListEntry slot="slot0" label="10" value="false"></IfxListEntry><IfxListEntry slot="slot1" label="12" value="false"></IfxListEntry><IfxListEntry slot="slot2" label="undefined" value="false"></IfxListEntry>
                    </IfxList>
                </IfxFilterAccordion>

            </IfxFilterTypeGroup>
        </IfxTable>

    );
}

export default Table;
