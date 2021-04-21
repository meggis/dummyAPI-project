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
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/comment/:id',
    name: 'Comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/tag',
    name: 'Tag',
    component: () => import ('../views/Tag.vue')
  },
  {
    path: '/profile/:id',
    name: 'UserProfile',
    component: () => import ('../views/Profile.vue')
  },
  {
    path: '/user-posts/:id',
    name: 'UserPosts',
    component: () => import ('../views/UserPosts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
