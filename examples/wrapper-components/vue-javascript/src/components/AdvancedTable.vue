

<template>
  <div>
    <h2>Table (Advanced)</h2>
    <ifx-table id="my-table" row-height="default"
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"}{"headerName":"Age","field":"age"}]'
      rows='[
    {
        "make": "Toyota",
        "model": "Celica",
        "price": 35000,
        "age": 10,
        "button": "something about Toyota"
    },
    {
        "make": "Ford",
        "model": "Mondeo",
        "price": 32000,
        "age": 12,
        "button": "something about Ford"
    },
    {
        "make": "Porsche",
        "model": "Boxster",
        "price": 72000,    
    }
]' table-height="auto" pagination="true" pagination-page-size="10"></ifx-table>
    <br />
  </div>
</template>

<script setup>



</script>

 
 