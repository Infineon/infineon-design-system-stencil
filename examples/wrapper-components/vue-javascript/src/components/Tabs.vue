

<template>
  <div>
    <h2>Tabs</h2>
    <ifx-tabs @ifxTabChange="handleChange" orientation="horizontal" :active-tab-index="activeTabIndex">
      <ifx-tab header="tab header a" disabled="false">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab header="tab header b" disabled="false">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab header="tab header c" disabled="false">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
    </ifx-tabs>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const activeTabIndex = ref(0);

onMounted(() => {
  setTab();
  setInterval(setTab, 20000);
})

function handleChange(event) {
  console.log("emitting active tab index: ", event.detail)
};

function setTab() {
  const next = Math.floor(Math.random() * (3));
  console.log("setting next active tab: ", next)
  activeTabIndex.value = next;;
}


</script>

 
 