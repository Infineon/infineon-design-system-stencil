<template>
  <div class="app">
    <ifx-sidebar application-name="Application Name" id="sidebar">
      <ifx-sidebar-item>
        Header Section
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item icon="image-16" active="true">
            Menu Item 1
          </ifx-sidebar-item>
          <ifx-sidebar-item is-action-item="true" @click="handleOpenModal" target="_blank" icon="image-16">
            Open modal
          </ifx-sidebar-item>
          <ifx-sidebar-item target="_blank" icon="image-16" @click="handleItemClick">
            Handle item click
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
      </ifx-sidebar-item>

      <ifx-sidebar-item>
        Header Section
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
      </ifx-sidebar-item>

      <ifx-sidebar-item>
        Header Section
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item target="_blank" icon="image-16">
            Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar>
    <div>
      <ifx-modal ref="modalRef" caption=" Modal Title" variant="default" close-on-overlay-click="false">
        <div slot="content">
          <span>Hello. Welcome. What a pleasure it is to have you.</span>
        </div>
        <div slot="buttons">
          <ifx-button variant="secondary" @click="handleModalBtnClick()">Console output</ifx-button>
          <ifx-button @click="handleCloseModal()">Close</ifx-button>
        </div>
      </ifx-modal>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const modalRef = ref();

const modal = computed(() => {
  return modalRef.value;
});

const handleModalBtnClick = () => {
  console.log("modal button clicked")
};

const handleCloseModal = () => {
  if (modal) {
    modal.value.opened = false;
  }
};

const handleOpenModal = () => {
  if (modal) {
    modal.value.opened = true;
  }
};

// Define the handleItemClick function in the Vue component
const handleItemClick = (item) => {
  console.log("Sidebar item clicked", item.currentTarget);
};



</script>


<style scoped></style>
