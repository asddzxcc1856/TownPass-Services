import { shallowRef } from 'vue';
import { defineStore } from 'pinia';
import Schedule from '@/components/Schedule.vue';

export const useScheduleStore = defineStore('schedule', () => {
  const schedules = shallowRef([]);
  const totalSchedule = shallowRef(0);
  const isAdd = shallowRef(true);
  // const newScheduleId = ref(0);
  ;
  const addSchedule = () => {
    totalSchedule.value++
    isAdd.value = true;
    schedules.value.push({
      id: totalSchedule.value,
      component: Schedule
    });
    
  };

  return { schedules, totalSchedule, isAdd, addSchedule };
});
