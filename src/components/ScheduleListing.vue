<script setup>
// 行程列表
import { useRouter, useRoute } from 'vue-router';
import Schedule from './Schedule.vue';
import { useScheduleStore } from '@/stores/schedule';
import { ref } from 'vue';
/*  schedules: 行程列表, [行程一, 行程二, ...]
    totalSchedule: 行程總數, int
    isAdd: 是否被加入行程, 
    addSchedule: 加入行程*/
const scheduleStore = useScheduleStore();

const isAddSchedule = ref(false);

const isAddScheduleState = () => {
  isAddSchedule.value = true;
};

const route = useRoute();
const router = useRouter();
const content = ref('您尚未規劃任何行程，請先至首頁選擇行程');
</script>

<template>
  <div
    class="mt-[55px] mb-0.5 flex flex-col bg-[rgb(16,22,79)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
  >
    <div class="text-center justify-center text-purple-500 text-4xl font-semibold my-4">
      {{ scheduleStore.schedules.length === 0 ? content : '' }}
    </div>
    <div class="mx-8 mt-[51px] mb-[514px] flex flex-col gap-y-1">
      <Schedule
        v-if="isAddSchedule == false && route.query.attractionId"
        @isAddScheduleState="isAddScheduleState"
        btn_text="新增行程"
        :isAddSchedule="isAddSchedule"
        :akey="scheduleStore.totalSchedule + 1"
      />
      <div v-for="schedule in scheduleStore.schedules" :key="schedule.id">
        <component
          :is="schedule.component"
          @isAddScheduleState="isAddScheduleState"
          :btn_text="'行程 ' + schedule.id"
          :isAddSchedule="isAddSchedule"
          :akey="schedule.id"
        />
      </div>
    </div>
  </div>
</template>
