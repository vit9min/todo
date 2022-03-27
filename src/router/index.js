import { createRouter, createWebHistory } from 'vue-router';
import ActiveView from '@/views/ActiveView.vue';

const routes = [
  {
    path: '/',
    name: 'Active',
    component: ActiveView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
