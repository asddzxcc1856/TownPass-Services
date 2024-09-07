<template>
  <TransitionRoot as="div" class="fixed inset-0 overflow-y-auto" v-if="isOpen">
    <Dialog as="div" class="relative z-10" @close="isOpen = false">
      <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

      <div class="flex min-h-screen items-center justify-center">
        <Dialog.Panel class="bg-white p-6 rounded-lg shadow-xl">
          <Dialog.Title>{{ title }}</Dialog.Title>
          <Dialog.Description>{{ description }}</Dialog.Description>
          <img :src="imageUrl" alt="Attraction Image" class="w-48 h-48" />
          <button @click="isOpen = false">Close</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
  <script setup>
import { ref } from 'vue';
import { Dialog, TransitionRoot } from '@headlessui/vue';

const isOpen = ref(false);

const title = ref('');
const description = ref('');
const imageUrl = ref('');

export const openModal = (attraction) => {
  title.value = attraction.name;
  description.value = attraction.introduction;
  imageUrl.value = attraction.imageUrl; // Update with actual image URL
  isOpen.value = true;
};
</script>