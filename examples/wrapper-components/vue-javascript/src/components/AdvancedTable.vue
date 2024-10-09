<template>
  <div>
    <h2>Table (Advanced)</h2>
    <ifx-table
    row-height="default"
    cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
    rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Bmw","model":"x","price":72000},{"make":"Mercedes","model":"y","price":72000},{"make":"Ferrari","model":"z","price":72000},{"make":"Chrysler","model":"a","price":72000},{"make":"Range rover","model":"b","price":72000},{"make":"Tesla","model":"x","price":72000},{"make":"Audi","model":"3","price":72000},{"make":"Landrover","model":"x","price":72000}]'
    table-height="auto"
    pagination="false"
    pagination-page-size="10"
    filter-orientation="sidebar">
    <ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="make">
        <ifx-list slot="list" type="checkbox" name="make" max-visible-items="6">
          <ifx-list-entry slot="slot0" label="Toyota" value="false"></ifx-list-entry><ifx-list-entry slot="slot1" label="Ford" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="Porsche" value="false"></ifx-list-entry><ifx-list-entry slot="slot3" label="Bmw" value="false"></ifx-list-entry><ifx-list-entry slot="slot4" label="Mercedes" value="false"></ifx-list-entry><ifx-list-entry slot="slot5" label="Ferrari" value="false"></ifx-list-entry><ifx-list-entry slot="slot6" label="Chrysler" value="false"></ifx-list-entry><ifx-list-entry slot="slot7" label="Range rover" value="false"></ifx-list-entry><ifx-list-entry slot="slot8" label="Tesla" value="false"></ifx-list-entry><ifx-list-entry slot="slot9" label="Audi" value="false"></ifx-list-entry><ifx-list-entry slot="slot10" label="Landrover" value="false"></ifx-list-entry>
        </ifx-list>
      </ifx-filter-accordion>
    
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="model">
        <ifx-list slot="list" type="checkbox" name="model" max-visible-items="6">
          <ifx-list-entry slot="slot0" label="Celica" value="false"></ifx-list-entry><ifx-list-entry slot="slot1" label="Mondeo" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="Boxster" value="false"></ifx-list-entry><ifx-list-entry slot="slot3" label="x" value="false"></ifx-list-entry><ifx-list-entry slot="slot4" label="y" value="false"></ifx-list-entry><ifx-list-entry slot="slot5" label="z" value="false"></ifx-list-entry><ifx-list-entry slot="slot6" label="a" value="false"></ifx-list-entry><ifx-list-entry slot="slot7" label="b" value="false"></ifx-list-entry><ifx-list-entry slot="slot8" label="3" value="false"></ifx-list-entry>
        </ifx-list>
      </ifx-filter-accordion>
    
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="price">
        <ifx-list slot="list" type="checkbox" name="price" max-visible-items="6">
          <ifx-list-entry slot="slot0" label="35000" value="false"></ifx-list-entry><ifx-list-entry slot="slot1" label="32000" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="72000" value="false"></ifx-list-entry>
        </ifx-list>
      </ifx-filter-accordion>
    
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="age">
        <ifx-list slot="list" type="checkbox" name="age" max-visible-items="6">
          <ifx-list-entry slot="slot0" label="10" value="false"></ifx-list-entry><ifx-list-entry slot="slot1" label="12" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="undefined" value="false"></ifx-list-entry>
        </ifx-list>
      </ifx-filter-accordion>
    
    </ifx-filter-type-group>
</ifx-table>
  </div>
</template>

<script setup>



</script>