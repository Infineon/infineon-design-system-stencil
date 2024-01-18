

<template>
  <div>
    <h2>Accordion</h2>
    <ifx-accordion @ifxItemOpen="handleItems" auto-collapse="true">
      <ifx-accordion-item ref="accordionItemRef" initial-collapse="false" open="false" caption="Label">
        <div>{{ content }}</div>
      </ifx-accordion-item><ifx-accordion-item caption="Label">
        Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item><ifx-accordion-item caption="Label">
        Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item></ifx-accordion>
    <br />
    <ifx-button @click="handleButtonClick">Open/Close the first accordion item</ifx-button>
    <ifx-button @click="updateContent">Change Content dynamically</ifx-button>
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

 
 