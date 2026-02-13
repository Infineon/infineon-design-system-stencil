<script setup lang="ts">
import { computed, ref } from "vue";

const disabledTabTwo = ref(false);
const fullWidth = ref(false);
const orientations = ["horizontal", "vertical"];
const tabsKey = computed(() => `${orientation.value}-${disabledTabTwo.value}`)

const orientation = ref(orientations[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleOrientation = () => (orientation.value = next(orientation.value, orientations));

function toggleFullWidth() {
  fullWidth.value = !fullWidth.value;
}

function toggleDisabled() {
  disabledTabTwo.value = !disabledTabTwo.value;
}

</script>

<template>
  <div class="component">
    <h2>Button</h2>
    <ifx-tabs :orientation="orientation" active-tab-index="0" :fullWidth="fullWidth" :key="tabsKey">
      <ifx-tab header="Tab 1" icon="" icon-position="left">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu
        aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci
        nisl
        cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci
        nisl
        cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab header="Tab 2" :disabled="disabledTabTwo" icon="" icon-position="left">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu
        aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci
        nisl
        cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci
        nisl
        cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab header="Tab 3" icon="" icon-position="left">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu
        aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci
        nisl
        cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci
        nisl
        cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
    </ifx-tabs>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleOrientation">Toggle Orientation</ifx-button>
      <ifx-button variant="secondary" @click="toggleFullWidth">Toggle Full Width</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled Tab 2</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Orientation:</b> {{ orientation }} </div>
      <div><b>Full Width:</b> {{ fullWidth }} </div>
      <div><b>Disabled Tab 2:</b> {{ disabledTabTwo }} </div>
    </div>
  </div>
</template>