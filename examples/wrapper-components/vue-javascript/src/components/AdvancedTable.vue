<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["default", "zebra"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const pagination = ref(false);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function togglePagination() {
  pagination.value = !pagination.value;
}

</script>

<template>
  <div class="component">
    <h2>Table (Advanced)</h2>
    <h2>Default</h2>
    <ifx-table row-height="default"
      cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      enable-selection="false" table-height="auto" :pagination="pagination" server-side-pagination="false"
      pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      filter-orientation="none" :variant='variant' fit-column='false' column-min-width='100' column-width='100'>
    </ifx-table>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="togglePagination">Toggle Pagination</ifx-button>
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>

    </div>
    <br>

    <div class="state">
      <div><b>Pagination:</b> {{ pagination }} </div>
      <div><b>Variant:</b> {{ variant }} </div>
    </div>
    <br>
    <br>

    <h2>Including custom components</h2>
    <ifx-table row-height="default"
      cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"},{"headerName":"","field":"button"}]'
      rows='[{"id":1,"item":"Item 1","price":356,"date":"2025-06-25","button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Button"}},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26","button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Button"}},{"id":3,"item":"Item 3","price":24,"button":{"disabled":false,"variant":"secondary","size":"s","target":"_blank","href":"https://www.w3schools.com/","theme":"default","type":"button","fullWidth":true,"text":"Button"}}]'
      table-height="auto" pagination="false" filter-orientation="none">
    </ifx-table>
    <br>
    <br>

    <h2>Sidebar Filter</h2>
    <ifx-table headline="Matching results" row-height="default"
      cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      table-height="auto" pagination="false" filter-orientation="sidebar">
      <ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>

        <ifx-filter-accordion slot="filter-accordion" filter-group-name="id">
          <ifx-list slot="list" type="checkbox" name="id" max-visible-items="6">
            <ifx-list-entry slot="slot0" label="1" value="false"></ifx-list-entry><ifx-list-entry slot="slot1" label="2"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="3"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot3" label="4"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot4" label="5"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot5" label="6"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot6" label="7"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot7" label="8"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot8" label="9"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot9" label="10"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot10" label="11" value="false"></ifx-list-entry>
          </ifx-list>
        </ifx-filter-accordion>

        <ifx-filter-accordion slot="filter-accordion" filter-group-name="item">
          <ifx-list slot="list" type="checkbox" name="item" max-visible-items="6">
            <ifx-list-entry slot="slot0" label="Item 1" value="false"></ifx-list-entry><ifx-list-entry slot="slot1"
              label="Item 2" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="Item 3"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot3" label="x"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot4" label="Item 7"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot5" label="Item 8"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot6" label="Item 10"
              value="false"></ifx-list-entry>
          </ifx-list>
        </ifx-filter-accordion>

        <ifx-filter-accordion slot="filter-accordion" filter-group-name="price">
          <ifx-list slot="list" type="checkbox" name="price" max-visible-items="6">
            <ifx-list-entry slot="slot0" label="356" value="false"></ifx-list-entry><ifx-list-entry slot="slot1"
              label="55" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="24"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot3" label="874"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot4" label="689"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot5" label="46"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot6" label="421"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot7" label="17"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot8" label="752"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot9" label="73"
              value="false"></ifx-list-entry><ifx-list-entry slot="slot10" label="94" value="false"></ifx-list-entry>
          </ifx-list>
        </ifx-filter-accordion>

        <ifx-filter-accordion slot="filter-accordion" filter-group-name="date">
          <ifx-list slot="list" type="checkbox" name="date" max-visible-items="6">
            <ifx-list-entry slot="slot0" label="2025-06-25" value="false"></ifx-list-entry><ifx-list-entry slot="slot1"
              label="2025-03-26" value="false"></ifx-list-entry><ifx-list-entry slot="slot2" label="undefined"
              value="false"></ifx-list-entry>
          </ifx-list>
        </ifx-filter-accordion>

      </ifx-filter-type-group>
    </ifx-table>
    <br>
    <br>

    <h2>Topbar Filter</h2>
    <ifx-table headline="Matching results" row-height="default"
      cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      table-height="auto" pagination="false" filter-orientation="topbar">
      <ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>

        <ifx-set-filter slot="filter-component-1"
          options='[{"value":"1","label":"1","selected":false},{"value":"2","label":"2","selected":false},{"value":"3","label":"3","selected":false},{"value":"4","label":"4","selected":false},{"value":"5","label":"5","selected":false},{"value":"6","label":"6","selected":false},{"value":"7","label":"7","selected":false},{"value":"8","label":"8","selected":false},{"value":"9","label":"9","selected":false},{"value":"10","label":"10","selected":false},{"value":"11","label":"11","selected":false}]'
          filter-label='ID' filter-name='id' type='multi-select' placeholder='Select ID'>
        </ifx-set-filter>


        <ifx-set-filter slot="filter-component-2"
          options='[{"value":"Item 1","label":"Item 1","selected":false},{"value":"Item 2","label":"Item 2","selected":false},{"value":"Item 3","label":"Item 3","selected":false},{"value":"x","label":"x","selected":false},{"value":"Item 7","label":"Item 7","selected":false},{"value":"Item 8","label":"Item 8","selected":false},{"value":"Item 10","label":"Item 10","selected":false}]'
          filter-label='Item' filter-name='item' type='multi-select' placeholder='Select Item'>
        </ifx-set-filter>


        <ifx-set-filter slot="filter-component-3"
          options='[{"value":356,"label":356,"selected":false},{"value":55,"label":55,"selected":false},{"value":24,"label":24,"selected":false},{"value":874,"label":874,"selected":false},{"value":689,"label":689,"selected":false},{"value":46,"label":46,"selected":false},{"value":421,"label":421,"selected":false},{"value":17,"label":17,"selected":false},{"value":752,"label":752,"selected":false},{"value":73,"label":73,"selected":false},{"value":94,"label":94,"selected":false}]'
          filter-label='Price' filter-name='price' type='multi-select' placeholder='Select Price'>
        </ifx-set-filter>


        <ifx-set-filter slot="filter-component-4"
          options='[{"value":"2025-06-25","label":"2025-06-25","selected":false},{"value":"2025-03-26","label":"2025-03-26","selected":false}]'
          filter-label='Date' filter-name='date' type='multi-select' placeholder='Select Date'>
        </ifx-set-filter>

      </ifx-filter-bar>
    </ifx-table>
  </div>
</template>