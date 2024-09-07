<script setup>
import { defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const router = useRouter();

const props = defineProps({
  btn: {
    type: String,
    required: true
  }
});

const handleClick = () => {
  router.push({
    name: 'cards-listing',
    query: {
      region: props.btn
    }
  });
};
</script>

<template>
  <div class="flex flex-col">
    <button
      @click="handleClick"
      class="btn w-full flex items-center justify-center rounded-[24.5px] bg-[rgb(217,217,217)] pt-[10.5px] pb-[10.5px] text-center text-[24px] leading-[1.2] text-black"
    >
      <!-- TODO -->
      {{ btn }}
    </button>
  </div>
</template>

