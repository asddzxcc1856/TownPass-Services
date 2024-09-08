<script setup>
import { defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const router = useRouter();

const props = defineProps({
  attractionImage: {
    type: String,
    required: true
  },
  attractionButton: {
    type: String,
    required: true
  }
});

const handleClick = () => {
  router.push({
    name: 'services',
    query: {
      region: route.query.region,
      category: props.attractionButton
    }
  });
};
const getImageUrl = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};

const attraction = getImageUrl(props.attractionImage);
</script>

<template>
  <div class="flex flex-col rounded-[13px] bg-[rgb(217,217,217)]">
    <!-- A single attraction item containing content and buttons. -->

    <div class="flex flex-col rounded-[13px] bg-[rgb(217,217,217)]">
      <div class="mt-[13px] mr-[7px] mb-1.5 ml-2 flex flex-col items-center gap-y-1">
        <img
          class="h-[107px] w-[123px] min-w-0 rounded-[10px] object-contain m-6"
          :src="attraction"
          :alt="props.attractionButton"
        />
        <button
          @click="handleClick"
          class="mr-2 ml-1.5 flex w-[109px] max-w-full justify-center rounded-lg bg-[rgb(198,109,109)] hover:bg-[rgb(100,50,50)] hover:bg-origin-border bg-left-bottom pt-[1.5px] pr-[22px] pb-[1.5px] pl-[22px] text-center font-Inter text-[16px] font-normal leading-[1.37] text-white"
        >
          <!-- Button to view more about the attraction. -->
          {{ props.attractionButton }}
        </button>
      </div>
    </div>
  </div>
</template>
