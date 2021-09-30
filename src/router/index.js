import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/post',
    name: 'PostsView',
    component: () => import('../views/PostsView.vue')
  },
  {
    path: '/tag',
    name: 'TagList',
    component: () => import ('../views/Tag.vue')
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: () => import ('../views/Profile.vue')
  },
  {
    path: '/user/:id/post',
    name: 'UserPosts',
    component: () => import ('../views/UserPosts.vue')
  },
  {
    path: '/tag/:id/post',
    name: 'TagsOfPosts',
    component: () => import ('../views/TagPosts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
