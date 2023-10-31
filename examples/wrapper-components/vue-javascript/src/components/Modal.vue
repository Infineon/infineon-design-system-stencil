

<template>
  <div>
    <h2>Modal</h2>
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
      <ifx-button @keyup.enter="handleOpenModal" @click="handleOpenModal()">Open Modal</ifx-button>
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


</script>


 