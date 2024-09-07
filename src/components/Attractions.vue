<script setup lang="ts">
import { onMounted } from 'vue';
import { useAttractionStore } from '@/stores/attraction';

const attractionStroe = useAttractionStore();

onMounted(() => {
  attractionStroe.initAtrractions();
});
</script>

<template>
  <div>
    <h1>Attractions</h1>
    <ul>
      <li v-for="attraction in attractionStroe.attractions" :key="attraction.id">
        {{ attraction.name }}
      </li>
    </ul>
  </div>
</template>
