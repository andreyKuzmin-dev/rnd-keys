import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../views/main-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: mainPage
  },
  {
    path: '/mydistributions',
    name: 'my-distributions',
    component: mainPage
  },
  {
    path: '/mywaitings',
    name: 'my-waitings',
    component: mainPage
  },
  {
    path: '/messages',
    name: 'messages',
    component: mainPage
  },
  {
    path: '/gifts',
    name: 'main-page',
    component: mainPage
  },
  {
    path: '/distribution/create',
    name: 'distribution-create',
    component: mainPage
  },
  {
    path: '/distribution/info',
    name: 'distribution-info',
    component: mainPage
  },
  {
    path: '/',
    name: 'main-page',
    component: mainPage
  },
  {
    path: '/admin',
    name: 'admin-chat',
    component: mainPage
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
