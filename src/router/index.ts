import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/superhero',
    name: 'superhero',
    component: () => import(/* webpackChunkName: "superhero" */ '../views/SuperHeroView.vue'),
  },
  {
    path: '/404',
    name: 'PageNotExist',
    component: () => import('../views/NotFoundComponent.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
