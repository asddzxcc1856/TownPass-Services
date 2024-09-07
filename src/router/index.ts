import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DistrictOptions from '@/components/DistrictOptions.vue';
import CardsListing from '@/components/CardsListing.vue';
import Map from '@/components/Map.vue';
import Services from '@/components/Services.vue';
import Schedules from '@/components/Schedules.vue';
import Schedule from '@/components/Plan.vue';
import Plans from '@/components/Plans.vue';
import ScheduleListing from '@/components/ScheduleListing.vue';
import Suggest from '@/components/Suggest.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        // {
        //   path: '/test',
        //   name: 'test',
        //   component: test
        // },
        {
          path: '',
          name: 'district-options',
          component: DistrictOptions
        },
        {
          path: '/cards',
          name: 'cards-listing',
          component: CardsListing
        },
        {
          path: '/map',
          name: 'map',
          component: Map
        },
        {
          path: '/services',
          name: 'services',
          component: Services
        },
        {
          path: '/schedules',
          name: 'schedules',
          component: Schedules,
          children: [
            {
              path: '',
              name: 'ScheduleListing',
              component: ScheduleListing
            },
            {
              path: ':id',
              name: 'schedule-details',
              component: Plans
            },
            {
              path: '/schedules/suggest',
              name: 'suggest',
              component: Suggest
            }
          ]
        }
      ]
    }
  ]
});

export default router;
