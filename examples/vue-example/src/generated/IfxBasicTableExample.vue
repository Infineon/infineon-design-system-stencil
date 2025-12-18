<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const codeString = `<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-basic-table
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
      rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]'
      table-height="auto"
      row-height="default"
      variant="default" />
  </div>
</' + 'template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <ifx-basic-table
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
      rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]'
      table-height="auto"
      row-height="default"
      variant="default" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
