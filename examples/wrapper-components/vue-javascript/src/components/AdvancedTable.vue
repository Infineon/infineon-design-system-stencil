<template>
  <div>
    <h2>Table (Advanced)</h2>
    <ifx-table row-height="default"
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
      rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000}]'
      table-height="auto" pagination="true" pagination-page-size="10" enable-filtering="true"
      filter-orientation="topBar"><ifx-set-filter slot="set-filter" filter-name="make"
        filter-label="single-select filter for: make" placeholder="Placeholder" type="single-select"
        options="[{&quot;label&quot;:&quot;Toyota&quot;,&quot;value&quot;:&quot;Toyota&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Ford&quot;,&quot;value&quot;:&quot;Ford&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Porsche&quot;,&quot;value&quot;:&quot;Porsche&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Bmw&quot;,&quot;value&quot;:&quot;Bmw&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Mercedes&quot;,&quot;value&quot;:&quot;Mercedes&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Ferrari&quot;,&quot;value&quot;:&quot;Ferrari&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Chrysler&quot;,&quot;value&quot;:&quot;Chrysler&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Range rover&quot;,&quot;value&quot;:&quot;Range rover&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Tesla&quot;,&quot;value&quot;:&quot;Tesla&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Audi&quot;,&quot;value&quot;:&quot;Audi&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Landrover&quot;,&quot;value&quot;:&quot;Landrover&quot;,&quot;selected&quot;:false}]"></ifx-set-filter><ifx-set-filter
        slot="set-filter" filter-name="model" filter-label="multi-select filter for: model" placeholder="Placeholder"
        type="multi-select"
        options="[{&quot;label&quot;:&quot;Celica&quot;,&quot;value&quot;:&quot;Celica&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Mondeo&quot;,&quot;value&quot;:&quot;Mondeo&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;Boxster&quot;,&quot;value&quot;:&quot;Boxster&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;x&quot;,&quot;value&quot;:&quot;x&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;y&quot;,&quot;value&quot;:&quot;y&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;z&quot;,&quot;value&quot;:&quot;z&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;a&quot;,&quot;value&quot;:&quot;a&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;b&quot;,&quot;value&quot;:&quot;b&quot;,&quot;selected&quot;:false},{&quot;label&quot;:&quot;3&quot;,&quot;value&quot;:&quot;3&quot;,&quot;selected&quot;:false}]"></ifx-set-filter><ifx-set-filter
        slot="set-filter" filter-name="price" filter-label="text filter for: price" placeholder="Placeholder"
        type="text"></ifx-set-filter><ifx-set-filter slot="set-filter" filter-name="age"
        filter-label="text filter for: age" placeholder="Placeholder" type="text"></ifx-set-filter></ifx-table>
  </div>
</template>

<script setup>



</script>