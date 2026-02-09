import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/all',
  },
  {
    path: '/all',
    component: () => import('pages/AllTasks.vue'),
  },
  {
    path: '/completed',
    component: () => import('pages/CompletedTasks.vue'),
  },
  {
    path: '/pending',
    component: () => import('pages/PendingTasks.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
