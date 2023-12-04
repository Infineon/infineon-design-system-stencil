

<template>
  <div>
    <h2>Tabs</h2>
    <ifx-tabs @ifxTabChange="handleChange" ref="tabsElement" orientation="horizontal">
      <ifx-tab header="a" :disabled="false">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab header="b" :disabled="true">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab header="c" :disabled="false">
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

const tabsElement = ref(null);

onMounted(() => {
  setTab();
  setInterval(setTab, 20000);
})

function handleChange(event) {
  console.log("emitting active tab index: ", event.detail)
};

function setTab() {
  const next = Math.floor(Math.random() * (3));
  console.log("set next active tab: ", next)
  if (tabsElement.value) {
    tabsElement.value.setActiveTab(next);
  }

}


</script>

 
 