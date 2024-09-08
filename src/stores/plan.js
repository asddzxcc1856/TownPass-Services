import { ref } from 'vue';
import { defineStore } from 'pinia';
import Plan from '@/components/Plan.vue';

export const usePlanStore = defineStore('plan', () => {
  const plans = ref([]);
  const totalPlan = ref(0);
  // const newScheduleId = ref(0);
  const addPlan = (keyid, name, introduction) => {
    plans.value.push({
      akey: keyid,
      id: totalPlan.value,
      name: name,
      introduction: introduction,
      component: Plan
    });
    totalPlan.value++;
  };
  const removePlan = (keyid) => {
    plans.value = plans.value.filter((plan) => plan.id !== keyid);
  }

  return { plans, totalPlan, addPlan, removePlan };
});
