<script setup lang="ts">
import { ref } from 'vue';
import { useAttractionStore } from '@/stores/attraction';
import { useRoute } from 'vue-router';

const attractionStore = useAttractionStore();
const route = useRoute();
const id = route.params.id;

attractionStore.recommand();

</script>

<template>
    
</template>
