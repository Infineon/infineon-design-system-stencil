<template>
  <div>
    <h2>List</h2>
    <ifx-list name="checkbox-list" max-visible-items="5" type="checkbox"
      @ifxListUpdate="handleListUpdate"><ifx-list-entry type="checkbox" label="Checkbox 1" value="false"
        slot="slot1">Checkbox 1</ifx-list-entry><ifx-list-entry type="checkbox" label="Checkbox 2" value="false"
        slot="slot2">Checkbox 2</ifx-list-entry><ifx-list-entry type="checkbox" label="Checkbox 3" value="false"
        slot="slot3">Checkbox 3</ifx-list-entry><ifx-list-entry type="checkbox" label="Checkbox 4" value="false"
        slot="slot4">Checkbox 4</ifx-list-entry><ifx-list-entry type="checkbox" label="Checkbox 5" value="false"
        slot="slot5">Checkbox 5</ifx-list-entry><ifx-list-entry type="checkbox" label="Checkbox 6" value="false"
        slot="slot6">Checkbox 6</ifx-list-entry><ifx-list-entry type="checkbox" label="Checkbox 7" value="false"
        slot="slot7">Checkbox 7</ifx-list-entry></ifx-list>
  </div>
</template>

<script setup>



const handleListUpdate = (event) => {
  console.log("list update ", event.detail)
};

</script>