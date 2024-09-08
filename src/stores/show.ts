import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { defineStore } from 'pinia';

// 連接Navbar
export const useShowStore = defineStore('show', () => {
  const isActiveLink = (routePath) => {
    const currentRoute = useRoute();
    return routePath === currentRoute.path;
  };
  return { isActiveLink };
});
