<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { usePlanStore } from '../stores/plan';
import BaseDialog from './atoms/BaseDialog.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  id: {
    type: Number,
    default: 1
  },
  name: {
    type: String,
    default: null
  },
  introduction: {
    type: String,
    default: null
  },
  isAdd: {
    type: Boolean,
    default: false
  },
  state: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['isAddState']);

const isMapDialogOpen = ref(false);

const planStore = usePlanStore();

const handleConfirm = () => {
  if (props.id && props.name && props.introduction && !props.isAdd && props.state == false) {
    isMapDialogOpen.value = true;
  }
};

const onPositiveClick = () => {
  if (props.id && props.name && props.introduction) {
    planStore.addPlan(route.params.id, props.name, props.introduction);
    emit('isAddState');
  }
  isMapDialogOpen.value = false;
};

const onNegativeClick = () => {
  isMapDialogOpen.value = false;
};
console.log(props.state);
</script>

<template>
  <button
    @click="handleConfirm"
    class="flex w-full items-center justify-between gap-x-2.5 rounded-3xl bg-[rgb(241,243,244)] pt-[13px] pr-1.5 pb-[13px] pl-4"
  >
    <p
      class="font-Roboto mb-0.5 flex min-w-0 items-center text-[16px] font-normal leading-[1.37] text-[rgb(71,82,89)]"
    >
      {{ props.id - 1 }} {{ props.name }}
    </p>
    <img
      v-show="props.id == 1 && props.state == false && !props.isAdd"
      class="w-12 min-w-0"
      src="/src/assets/images/plus-icon.svg"
      alt="alt text"
    />
  </button>
  <BaseDialog
    v-model="isMapDialogOpen"
    title="是否要新增此景點至行程表"
    content=""
    :isAlert="true"
    positiveText="確認"
    negativeText="取消"
    @onPositiveClick="onPositiveClick"
    @onNegativeClick="onNegativeClick"
  />
</template>
