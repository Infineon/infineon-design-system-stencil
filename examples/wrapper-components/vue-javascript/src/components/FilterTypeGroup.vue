

<template>
    <div>
      <h2>Filter Type Group</h2>
      <div><ifx-filter-type-group>
  <div slot="filter-search">
    <ifx-filter-search filter-name="Your filter name"></ifx-filter-search>
  </div>
  <div slot="filter-accordion">
    <ifx-filter-accordion filter-group-name="Filter group 1">
      <ifx-list slot="list" type="checkbox" name="Filter group 1" max-visible-items="10">
    <ifx-list-entry slot="slot0" label="Filter 1" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot1" label="Filter 2" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot2" label="Filter 3" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot3" label="Filter 4" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot4" label="Filter 5" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot5" label="Filter 6" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot6" label="Filter 7" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot7" label="Filter 8" value="false"></ifx-list-entry>
  
      </ifx-list>
    </ifx-filter-accordion>
    <ifx-filter-accordion filter-group-name="Filter group 2">
      <ifx-list slot="list" type="radio-button" name="Filter group 2" max-visible-items="6">
    <ifx-list-entry slot="slot0" label="Filter 1" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot1" label="Filter 2" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot2" label="Filter 3" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot3" label="Filter 4" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot4" label="Filter 5" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot5" label="Filter 6" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot6" label="Filter 7" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot7" label="Filter 8" value="false"></ifx-list-entry>
  
      </ifx-list>
    </ifx-filter-accordion>
  </div>
</ifx-filter-type-group>
</div>
      <br />
      <br />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const accordionItemRef = ref();
  const content = ref('Short content')
  
  function handleItems(event) {
    console.log("An accordion item was opened. Event details:", event);
  }
  
  async function handleButtonClick() {
    const accordionItem = accordionItemRef.value;
    accordionItem.open = !accordionItem.open;
    console.log("accordion item: ", accordionItem);
  }
  
  async function updateContent() { 
    content.value = `   Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
          bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
          cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
          cursus ipsum, nec egestas odio sapien eget neque.`
  }
  
  </script>
  
   
   