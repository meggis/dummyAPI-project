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
    path: '/User',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/Post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/Comment',
    name: 'Comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/Tag',
    name: 'Tag',
    component: () => import ('../views/Tag.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
