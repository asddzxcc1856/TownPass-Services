<!-- Navbar.vue -->
<script setup>
// import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useShowStore } from '@/stores/show';

const showStore = useShowStore();
</script>

<template>
  <section class="flex flex-col bg-[rgb(7,7,7)]">
    <!-- Main section for displaying the homepage content. -->

    <div class="mx-3.5 mt-3 mb-[9px] flex justify-center gap-x-2.5">
      <!-- Flexbox container for aligning child elements in a row. -->

      <div class="flex w-[152px] min-w-0 flex-col items-center gap-y-2">
        <!-- Flexbox container for aligning child elements in a column. -->
        <RouterLink
          to="/"
          class="font-PingFangTCRegular w-full text-center text-[16px] font-bold leading-[1.37] text-[rgb(71,82,89)] hover:text-[rgb(90,180,197)]"
        >
          <!-- Title of the homepage displayed prominently. -->
          首頁
        </RouterLink>
        <hr
          v-if="showStore.isActiveLink('/')"
          class="block h-[4px] w-full rounded-[2px] bg-[rgb(90,180,197)]" 
        />
      </div>
      <div class="flex w-[152px] min-w-0 flex-col items-center gap-y-2">
        <RouterLink
          to="/schedules"
          class="font-PingFangTCRegula w-full text-center text-[16px] font-bold leading-[1.37] text-[rgb(71,82,89)] hover:text-[rgb(90,180,197)]"
        >
          <!-- Title for the schedule section. -->
          行程表
        </RouterLink>
        <hr
          v-if="showStore.isActiveLink('/schedules')"
          class="block h-[4px] w-full rounded-[2px] bg-[rgb(90,180,197)]"
        />
      </div>
    </div>
  </section>
</template>
