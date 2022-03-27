import { createRouter, createWebHistory } from 'vue-router';
import ActiveView from '@/views/ActiveView.vue';

const routes = [
  {
    path: '/',
    name: 'Active',
    component: ActiveView
  },
  {
    path: '/completed',
    name: 'Completed',
    component: () => import('@/views/CompletedView.vue')
  },
  {
    path: '/removed',
    name: 'Removed',
    component: () => import('@/views/RemovedView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/SettingsView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
