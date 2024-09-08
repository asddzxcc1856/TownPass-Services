<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { usePlanStore } from '../stores/plan';
import Plan from './Plan.vue';
import { ref } from 'vue';

const planStore = usePlanStore();

const isAdd = ref(false);

const isAddState = () => {
  isAdd.value = true;
};

const route = useRoute();
</script>

<template>
  <div
    class="mt-[55px] mb-0.5 flex flex-col bg-[rgb(16,22,79)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
  >
    <div class="mx-8 mt-[51px] mb-[514px] flex flex-col gap-y-1">
      <Plan
        v-if="isAdd == false && route.query.attractionId"
        :id="0"
        :name="route.query.attractionId"
        :introduction="route.query.introduction"
        @isAddState="isAddState"
        :isAdd="isAdd"
      />
      <div
        v-for="plan in planStore.plans.filter((item) => {
          // Ensure both values are strings for comparison
          console.log(parseInt(item.akey));
          console.log(route.params.id);
          return String(parseInt(item.akey)) === String(route.params.id);
        })"
        :key="plan.id"
      >
        <component
          :is="plan.component"
          :id="isAdd == false && !route.query.attractionId ? plan.id + 1 : plan.id + 1"
          :name="plan.name"
          :introduction="plan.introduction"
          :state="route.query.attractionId == null"
          @isAddState="isAddState"
          :isAdd="isAdd"
        />
      </div>
    </div>
    <RouterLink
      to="/schedules"
      class="font-Notofont flex justify-center text-stone-400 text-xl bg-gray-600 mx-20 rounded-md"
    >
      查看行程
    </RouterLink>
  </div>
</template>
