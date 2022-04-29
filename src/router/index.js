import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    name: 'index',
    // redirect: '/',
    component: () => import('@/views/index')
  },
  {
    path: '/rotate1',
    name: 'rotate1',
    component: () => import('@/views/rotate1')
  },
  {
    path: '/rotate2',
    name: 'rotate2',
    component: () => import('@/views/rotate2')
  },
  {
    path: '/media',
    name: 'media',
    redirect: 'media/characters',
    component: () => import('@/views/media'),
    children: [{
      path: '/media/characters',
      name: 'characters',
      component: () => import('@/views/media'),

    }]
  }
]

const router = new VueRouter({
  routes,
});

export default router;
