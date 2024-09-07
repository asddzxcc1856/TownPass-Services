<script setup lang="ts">
import { onMounted } from 'vue/dist/vue.js';
import { useToast } from 'vue-toastification';
import HomeView from '@/views/HomeView.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  <HomeView />
</template>
