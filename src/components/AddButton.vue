<script setup>
import { defineProps } from 'vue';
import { useScheduleStore } from '../stores/schedule';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const route = useRoute();

const scheduleStore = useScheduleStore();

const props = defineProps({
  btn_text: {
    type: String,
    required: true
  }
});

const path = `/schedules/${scheduleStore.totalSchedule + 1}`;
</script>

<template>
  <button
    @click="
      scheduleStore.addSchedule();
      router.push({
        path: path,
        query: {
          attractionId: route.query.attractionId,
          introduction: route.query.introduction
        }
      });
    "
    class="flex items-center justify-between gap-x-2.5 rounded-3xl bg-[rgb(241,243,244)] pt-[13px] pr-1.5 pb-[13px] pl-4"
  >
    <!-- TODO -->

    <p
      class="font-Roboto mb-0.5 flex min-w-0 items-center text-[16px] font-normal leading-[1.37] text-[rgb(71,82,89)]"
    >
      {{ props.btn_text }}
    </p>
    <img class="w-12 min-w-0" src="/src/assets/images/plus-icon.svg" alt="alt text" />
  </button>
</template>
